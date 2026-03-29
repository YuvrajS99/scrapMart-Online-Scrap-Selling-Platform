const express = require("express");
const router = express.Router();
const { createMessage, getAllMessages } = require("../controllers/supportController");
const authMiddleware = require("../middleware/authMiddleware");
const roleMiddleware = require("../middleware/roleMiddleware");

// @route   POST /api/support/contact
// @desc    Submit a new support message
// @access  Public
router.post("/contact", createMessage);

// @route   GET /api/support
// @desc    Get all support messages (Admin only)
// @access  Private
router.get("/", authMiddleware, roleMiddleware(["admin"]), getAllMessages);

module.exports = router;
