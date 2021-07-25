const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const gravatar = require("gravatar");
const jwtToken = "somethingrandom";
// const jwtToken = process.env.JSON_SECRET_TOKEN;
const { check, validationResult } = require("express-validator");

const User = require("../../models/User");

//@route POST api/users

//@desc register new User

//@access Public
router.post(
  "/",
  [
    check("username", "Username is required").not().isEmpty(),
    check("email", "Invalid email").isEmail(),
    check("password", "Too short, minimum 6 characters required").isLength({
      min: 6,
    }),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { username, email, password } = req.body;


    try {

      let user = await User.findOne({ email });
        console.log(user);
        console.log(jwtToken);
      if (user) {
        return res.status(400).json({ errors: [{msg: "User already exists"}] });
      }

      
      //get gravatar

      const avatar = gravatar.url(email, { s: "200", r: "pg", d: "mm" });
      user = new User({ username, email, password, avatar });

      const salt = await bcrypt.genSalt(10);

      user.password = await bcrypt.hash(password, salt);

      await user.save();

      const payload = {
        user: {
          id: user.id,
        },
      };

      jwt.sign(payload, jwtToken, { expiresIn: 360000 }, (err, token) => {
        if (err) throw err;
        res.json({ token });
      });
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server error");
    }
  }
);

//@desc find all users
// @acess Public

router.get("/", async (req, res) => {
  let users = await User.find();
  if (users.length === 0) {
    res.status(500).send("No user exists");
  }
  res.status(200).json(users);
});

module.exports = router;
