const SupportMessage = require("../models/SupportMessage");

// @desc    Submit a new support message
// @route   POST /api/support/contact
// @access  Public
const createMessage = async (req, res) => {
  try {
    const { firstName, lastName, email, message } = req.body;

    if (!firstName || !email || !message) {
      return res.status(400).json({ message: "Please provide all required fields." });
    }

    const newMessage = await SupportMessage.create({
      firstName,
      lastName: lastName || "",
      email,
      message,
    });

    res.status(201).json({
      message: "Message sent successfully",
      data: newMessage,
    });
  } catch (error) {
    console.error("Error creating support message:", error);
    res.status(500).json({ message: "Failed to send message", error: error.message });
  }
};

// @desc    Get all support messages
// @route   GET /api/support
// @access  Private/Admin
const getAllMessages = async (req, res) => {
  try {
    // Assuming authMiddleware populates req.user and verifies role.
    // Wait, let's just fetch them safely. The admin route protection is handled in supportRoutes.
    
    const messages = await SupportMessage.find({}).sort({ createdAt: -1 });
    
    res.status(200).json(messages);
  } catch (error) {
    console.error("Error fetching support messages:", error);
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};

module.exports = {
  createMessage,
  getAllMessages,
};
