const router = require('express').Router();
const { Post,Comment,User } = require('../models');
const withAuth = require('../utils/auth');




// Prevent non logged in users from viewing the homepage
router.get('/', withAuth, async (req, res) => {
  try {
    const userData = await User.findAll({
      attributes: { exclude: ['password'] },
      order: [['name', 'ASC']],
    });
    
    const postData = await Post.findAll();

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




// Login route
router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }
  res.render('login');
});

module.exports = router;
