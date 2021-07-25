const express = require("express");
const router = express.Router();
const bcrypt = require('bcryptjs');
const auth = require('../../middleware/auth.js');
const {check, validationResult} = require('express-validator');

const User = require("../../models/User");

// @route GET api/auth
// @desc Get user by token

// @access Public

router.get("/", auth, async (req,res) => {
    try {
        const user = await User.findById(req.user.id).select("-password");
        if(!user){
            res.status(400).send("Invalid user");
        }
        res.json(user);
    } catch {
        console.error(err.message);
        res.status(500).send("Server Error");
    }
});

// @desc Signin
router.post(
  "/",
  check("email", "Invalid email").isEmail(),
  check("password", "Invalid password").exists(),
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: error.array() });
    }

    const { username, email, password } = req.body;

    try {
      let user = await User.findOne({ email });
      if (!user) {
        return res
          .status(400)
          .json({ errors: [{ msg: "Invalid credentials" }] });
      }
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return res
          .status(400)
          .json({ errors: [{ msg: "Invalid credentials" }] });
      }

      const payload = {
        user: {
          id: user.id,
        },
      };
      jwt.sign(
        payload,
        config.get("jwtSecret"),
        { expiresIn: "5 days" },
        (err, token) => {
          if (err) throw err;
          res.json({ token });
        }
      );
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server error");
    }
  }
);

module.exports = router;
