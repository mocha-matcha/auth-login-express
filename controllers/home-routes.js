const router = require('express').Router();
const { Post, Comment, User } = require('../models');
const withAuth = require('../utils/auth');




// Prevent non logged in users from viewing the homepage
router.get('/', withAuth, async (req, res) => {
  try {
    const userData = await User.findAll({
      attributes: { exclude: ['password'] },
      order: [['name', 'ASC']],
    });

    const postData = await Post.findAll({ include: [{ all: true, nested: true }] });

    const users = userData.map((project) => project.get({ plain: true }));
    const posts = postData.map((project) => project.get({ plain: true }));
    const comments = postData.map((project) => project.get({ plain: true }));

    res.render('homepage', {
      posts,
      // Pass the logged in flag to the template
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/posts/:id', async (req, res) => {
  try {
    const postData = await Post.findByPk(req.params.id, { include: [{ all: true, nested: true }] });

    const post = postData.get({ plain: true });

    res.render('post', {
      ...post,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Login route
router.get('/newpost',withAuth, async (req, res) => {

  try {

    res.render('newpost');
  } catch (err) {
    res.status(500).json(err);
  }

  if (req.session.loggedIn) {
   res.render('newpost')
    return;
  }
  res.render('login');
});



// Login route
router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }
  res.render('login');
});

// Logout
router.post('/logout', (req, res) => {
  if (req.session.loggedIn) {
    res.render('login');

  } else {
    res.status(404).end();
  }
});

module.exports = router;
