const router = require('express').Router();
const { User, Post,Comment } = require('../../models');

router.get('/',async(req,res) =>{
    try {
        const postData = await Comment.findAll({include:[{model:User},{model:Post}]});
        res.status(200).json(postData);
      } catch (err) {
        res.status(500).json(err);
      }

});

// CREATE new user
router.post('/', async (req, res) => {
  try {
    const dbPostData = await Post.create({
      comment: req.body.comment,
      user_id: req.body.user_id,
      post_id: req.body.post_id,
    });

    req.session.save(() => {
      res.status(200).json(dbUserData);
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});





module.exports = router;