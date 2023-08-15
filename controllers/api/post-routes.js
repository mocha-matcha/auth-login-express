const router = require('express').Router();
const { User, Post,Comment } = require('../../models');

router.get('/',async(req,res) =>{
    try {
        const postData = await Product.findAll({include:[{model:User},{model:Comment}]});
        res.status(200).json(postData);
      } catch (err) {
        res.status(500).json(err);
      }

});

// CREATE new user
router.post('/', async (req, res) => {
  try {
    const dbPostData = await Post.create({
      title: req.body.title,
      content: req.body.content,
      user_id: req.body.user_id,
    });

    req.session.save(() => {
      res.status(200).json(dbUserData);
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});



// Logout
router.post('/logout', (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;