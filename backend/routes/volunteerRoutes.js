const express = require('express');
const bcrypt = require('bcrypt');
const Volunteer = require('../models/Volunteer');

const router = express.Router();

// ✅ Volunteer Signup Route
router.post('/signup', async (req, res) => {
  try {
    const { name, email, password, age, gender, address, interests, skills, availability } = req.body;

    // Check if the volunteer already exists
    const existingVolunteer = await Volunteer.findOne({ email });
    if (existingVolunteer) {
      return res.status(400).json({ message: 'Volunteer already exists' });
    }

    // Hash Password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create new Volunteer
    const volunteer = new Volunteer({
      name,
      email,
      password: hashedPassword,
      age,
      gender,
      address,
      interests,
      skills,
      availability,
    });

    await volunteer.save();
    res.status(201).json({ message: 'Volunteer registered successfully!', userId: volunteer._id });
  } catch (err) {
    console.error("Signup Error:", err);
    res.status(500).json({ error: 'Error registering volunteer', details: err.message });
  }
});

// ✅ Register Volunteer Route (Optional Alternative)
router.post('/register', async (req, res) => {
  try {
    const { name, age, gender, address, interests, skills, availability } = req.body;

    const volunteer = new Volunteer({ name, age, gender, address, interests, skills, availability });
    await volunteer.save();

    res.status(201).json({ message: 'Volunteer registered successfully!', volunteer });
  } catch (err) {
    console.error("Register Error:", err);
    res.status(400).json({ error: 'Error registering volunteer', details: err.message });
  }
});

module.exports = router;
