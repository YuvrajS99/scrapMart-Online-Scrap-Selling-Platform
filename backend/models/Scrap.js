const mongoose = require("mongoose");

const scrapSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  },
  category: {
    type: String,
    required: true
  },
  weight: {
    type: Number,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  status: {
    type: String,
    enum: [
      "Pending",     // user added scrap
      "Requested",   // user requested pickup
      "Accepted",    // buyer/admin accepted
      "PickedUp",    // pickup done
      "Completed"    // process finished
    ],
    default: "Pending"
  }
}, { timestamps: true });

module.exports = mongoose.model("Scrap", scrapSchema);
