import { User } from "../models/user.model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import getDataUri from "../utils/datauri.js";
import cloudinary from "../utils/cloud.js";
import { log } from "console";

// This code is for signUp register user

export const register = async (req, res) => {
  try {
    const { fullname, email, phoneNumber, password, role } = req.body;
    //console.log(fullname, email, phoneNumber, password, role);

    if (!fullname || !email || !phoneNumber || !password || !role) {
      return res.status(400).json({
        message: "Missing required fields!",
        success: false,
      });
    }

    // now checking user come with same emailId ??

    const user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({
        message: "Email already exists",
        success: false,
      });
    }
    // pofile photo to cloudinary

    const file = req.file;
    if (!file) {
      return res.status(400).json({
        message: "Profile image is required",
        success: false,
      });
    }

    const fileUri = getDataUri(file);
    const cloudResponse = await cloudinary.uploader.upload(fileUri.content);

    // convert password to hash
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create new User

    const newUser = new User({
      fullname,
      email,
      phoneNumber,
      password: hashedPassword,
      role,
      profile: {
        profilePhoto: cloudResponse.secure_url,
      },
    });
    await newUser.save();
    return res.status(201).json({
      message: `Account created successfully ${fullname}`,
      success: true,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Server Error registing user",
      success: false,
    });
  }
};

// SignUp code end here

// Login code start here

export const login = async (req, res) => {
  try {
    const { email, password, role } = req.body;
    // console.log(email, password, role);

    if (!email || !password || !role) {
      return res.status(404).json({
        message: "Missing required fields",
        success: false,
      });
    }
    // check the email  exist or not

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({
        message: "Incorrect email or password",
        success: false,
      });
    }
    // now checking the password is correct or not

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(404).json({
        message: "Incorrect email or password",
        success: false,
      });
    }
    // Check  role of the user
    if (user.role !== role) {
      return res.status(403).json({
        message: "You do not have the necessary role to access this resource",
        success: false,
      });
    }
    // generate token
    const tokenData = {
      userId: user._id,
    };
    const token = jwt.sign(tokenData, process.env.JWT_SECRET, {
      expiresIn: "1d",
    });

    const sanitizedUser = {
      _id: user._id,
      fullname: user.fullname,
      email: user.email,
      phoneNumber: user.phoneNumber,
      role: user.role,
      profile: user.profile,
    };

    return res
      .status(200)
      .cookie("token", token, {
        maxAge: 1 * 24 * 60 * 60 * 1000,
        httpOnly: true,
        sameSite: "Strict",
      })
      .json({
        message: `Welcome back ${user.fullname}`,
        user: sanitizedUser,
        success: true,
      });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Server Error log-in failed",
      success: false,
    });
  }
};

// login code end here !!!

// Logout code start here

export const logout = async (req, res) => {
  try {
    return res.status(200).cookie("token", "", { maxAge: 0 }).json({
      message: "Logged out successfully",
      success: true,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Server Error log-out",
      success: false,
    });
  }
};

// logout code end here

// Update profile code start here

export const updateProfile = async (req, res) => {
  try {
    const { fullname, email, phoneNumber, bio, skills } = req.body;
    const file = req.file;

    // cloudinary upload

    const fileUri = getDataUri(file);
    const clodinaryResponse = await cloudinary.uploader.upload(fileUri.content);

    const userId = req.id; // middleware authentication
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({
        message: "User not found",
        success: false,
      });
    }
    // update database profile

    if (fullname) user.fullname = fullname;
    if (email) user.email = email;
    if (phoneNumber) user.phoneNumber = phoneNumber;
    if (bio) user.profile.bio = bio;
    if (skills) user.profile.skills = skills.split(",");

    // resume
    if (clodinaryResponse) {
      user.profile.resume = clodinaryResponse.secure_url;
      user.profile.resumeOriginalName = file.originalname;
    }

    //Save updated user
    await user.save();

    const updatedUser = {
      _id: user._id,
      fullname: user.fullname,
      email: user.email,
      phoneNumber: user.phoneNumber,
      role: user.role,
      profile: user.profile,
    };
    return res.status(200).json({
      message: "Profile updated successfully",
      user: updatedUser,
      success: true,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Server error updating profile",
      success: false,
    });
  }
};
