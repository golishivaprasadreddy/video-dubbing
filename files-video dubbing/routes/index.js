var express = require('express');
var router = express.Router();
const userModel = require('./users');
const postModel = require('./posts');
const passport = require('passport');
const localStrategy = require('passport-local');
const upload = require('./multer');


passport.use(new localStrategy(userModel.authenticate()));


router.get('/', function (req, res) {
  res.render('index');
});

router.get('/register', function (req, res) {
  res.render('register');
});

router.post('/register', (req, res) => {
  const userData = new userModel({
    username: req.body.username,
    name: req.body.name,
    email: req.body.email,
  });

  userModel.register(userData, req.body.password)
    .then(() => {
      passport.authenticate('local')(req, res, function () {
        res.redirect('/home');
      })
    })
})

router.post('/', passport.authenticate('local', {
  successRedirect: '/home',
  failureRedirect: '/',
}), function (req, res) {
});

router.get('/logout', (req, res, next) => {
  req.logout(function (err) {
    if (err) { return next(err); }
    res.redirect('/');
  });
})

router.get('/home', async (req, res) => {
  try {
    // Fetch the post data from the database (assuming you want the latest post)
    const latestPost = await postModel.findOne().sort({ _id: -1 });
    // Render the 'home' view and pass the post data
    res.render('home', { post: latestPost });
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});


router.post('/upload', upload.single('video') ,async (req, res) => {
  const postData = await postModel.create({
    video: req.file.filename
  });

  await postData.save();
  res.redirect("/home");
  
  console.log('file Uploaded')
})


function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) return next();
  res.redirect('/');
}

module.exports = router;
