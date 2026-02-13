const express = require("express");
const Scrap = require("../models/Scrap");
const authMiddleware = require("../middleware/authMiddleware");
const roleMiddleware = require("../middleware/roleMiddleware");

const router = express.Router();

/* =========================
   1️⃣ Add scrap (USER)
========================= */
router.post("/add", authMiddleware, async (req, res) => {
  try {
    const { category, weight, location } = req.body;

    if (!category || !weight || !location) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const scrap = await Scrap.create({
      userId: req.user.id,
      category,
      weight,
      location,
      status: "Pending"
    });

    res.status(201).json({
      message: "Scrap added successfully",
      scrap
    });
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});

/* =========================
   2️⃣ Get my scraps (USER)
========================= */
router.get("/my", authMiddleware, async (req, res) => {
  try {
    const scraps = await Scrap.find({ userId: req.user.id });
    res.json(scraps);
  } catch {
    res.status(500).json({ message: "Server error" });
  }
});

/* =========================
   3️⃣ Request pickup (USER)
========================= */
router.put("/request/:id", authMiddleware, async (req, res) => {
  try {
    const scrap = await Scrap.findById(req.params.id);

    if (!scrap) {
      return res.status(404).json({ message: "Scrap not found" });
    }

    if (scrap.userId.toString() !== req.user.id) {
      return res.status(403).json({ message: "Not authorized" });
    }

    if (scrap.status !== "Pending") {
      return res.status(400).json({
        message: "Pickup already requested or processed"
      });
    }

    scrap.status = "Requested";
    await scrap.save();

    res.json({
      message: "Pickup requested successfully",
      scrap
    });
  } catch {
    res.status(500).json({ message: "Server error" });
  }
});

/* =========================
   4️⃣ Accept pickup (BUYER / ADMIN)
========================= */
router.put(
  "/accept/:id",
  authMiddleware,
  roleMiddleware(["buyer", "admin"]),
  async (req, res) => {
    try {
      const scrap = await Scrap.findById(req.params.id);

      if (!scrap) {
        return res.status(404).json({ message: "Scrap not found" });
      }

      if (scrap.status !== "Requested") {
        return res.status(400).json({
          message: "Scrap not in requested state"
        });
      }

      scrap.status = "Accepted";
      await scrap.save();

      res.json({
        message: "Scrap accepted successfully",
        scrap
      });
    } catch {
      res.status(500).json({ message: "Server error" });
    }
  }
);

/* =========================
   5️⃣ Mark pickup done (BUYER / ADMIN)
========================= */
router.put(
  "/pickup/:id",
  authMiddleware,
  roleMiddleware(["buyer", "admin"]),
  async (req, res) => {
    try {
      const scrap = await Scrap.findById(req.params.id);

      if (!scrap) {
        return res.status(404).json({ message: "Scrap not found" });
      }

      if (scrap.status !== "Accepted") {
        return res.status(400).json({
          message: "Scrap must be accepted before pickup"
        });
      }

      scrap.status = "PickedUp";
      await scrap.save();

      res.json({
        message: "Scrap picked up successfully",
        scrap
      });
    } catch {
      res.status(500).json({ message: "Server error" });
    }
  }
);

/* =========================
   6️⃣ Complete scrap (ADMIN)
========================= */
router.put(
  "/complete/:id",
  authMiddleware,
  roleMiddleware(["admin"]),
  async (req, res) => {
    try {
      const scrap = await Scrap.findById(req.params.id);

      if (!scrap) {
        return res.status(404).json({ message: "Scrap not found" });
      }

      if (scrap.status !== "PickedUp") {
        return res.status(400).json({
          message: "Scrap must be picked up before completion"
        });
      }

      scrap.status = "Completed";
      await scrap.save();

      res.json({
        message: "Scrap process completed",
        scrap
      });
    } catch {
      res.status(500).json({ message: "Server error" });
    }
  }
);

/* =========================
   7️⃣ Get all scraps (BUYER / ADMIN)
========================= */
router.get(
  "/all",
  authMiddleware,
  roleMiddleware(["buyer", "admin"]),
  async (req, res) => {
    try {
      const scraps = await Scrap.find();
      res.json(scraps);
    } catch {
      res.status(500).json({ message: "Server error" });
    }
  }
);

module.exports = router;
