const express = require("express");
const passport = require('passport');
const router = express.Router();
const User = require("../models/User");

// Bcrypt to encrypt passwords
const bcrypt = require("bcrypt");
const bcryptSalt = 10;


router.get("/login", (req, res, next) => {
  res.render("auth/login", { "message": req.flash("error") });
});

router.post("/login", (req, res, next) => {
  passport.authenticate('local', (err, theUser, info) => {
    if(err) {
      res.status(500).json({message: err})
      return
    }
    if(!theUser) {
      res.status(401).json(info)
      return
    }

    req.login(theUser, err => {
      if (err) {
        res.status(500).json({message: err})
        return
      }
      res.status(200).json(theUser);
    })


  })(req, res, next)
});


router.get("/signup", (req, res, next) => {
  res.render("auth/signup");
});

router.post("/signup", (req, res, next) => {
  const username = req.body.username;
  const password = req.body.password;
  if (username === "" || password === "") {
    
    res.status(400).json({message: "Username or password can't be empty"})
    return;
  }

  User.findOne({ username }, "username", (err, user) => {
    if (user !== null) {
      res.status(400).json({message: "The username already exists"})
      return;
    }

    const salt = bcrypt.genSaltSync(bcryptSalt);
    const hashPass = bcrypt.hashSync(password, salt);

    const newUser = new User({
      username,
      password: hashPass
    });

    newUser.save()
    .then(() => {
      res.status(200).json(newUser);
      //res.redirect("/");
    })
    .catch(err => {
      res.status(500).json({ message: "Something went wrong" })
      //res.render("auth/signup", { message: "Something went wrong" });
    })
  });
});

router.get("/logout", (req, res) => {
  req.logout();
  res.status(200).json({message: "User logged out successfully"})
});

router.get("/currentuser", (req, res, next) => {
  if(req.isAuthenticated()) {
    res.status(200).json(req.user);
    return
  }
  res.status(403).json({message: "unauthorized"})
})

module.exports = router;