const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

// 🔹 Connect to MongoDB
mongoose.connect("mongodb://localhost:27017/rentalDB", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log("✅ MongoDB Connected"))
.catch(err => console.error("❌ MongoDB Connection Error:", err));

// 🔹 Schema & Model
const BookingSchema = new mongoose.Schema({
    name: String,
    email: String,
    roomType: String,
    checkIn: String,
    checkOut: String
});
const Booking = mongoose.model("Booking", BookingSchema);

// 🔹 API Route to Save Booking
app.post("/api/book", async (req, res) => {
    try {
        const newBooking = new Booking(req.body);
        await newBooking.save();
        res.status(201).send({ message: "Booking Successful", booking: newBooking });
    } catch (error) {
        res.status(500).send({ message: "Error booking room", error });
    }
});

// 🔹 Start Server
app.listen(5000, () => console.log("🚀 Server running on http://localhost:5000"));
