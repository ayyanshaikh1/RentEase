import React, { useState } from "react";

const Buy = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        roomType: "",
        checkIn: "",
        checkOut: ""
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch("http://localhost:5000/api/book", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            const data = await response.json();
            if (response.ok) {
                alert("Booking Successful!");
                setFormData({ name: "", email: "", roomType: "", checkIn: "", checkOut: "" });
            } else {
                alert("Error: " + data.message);
            }
        } catch (error) {
            console.error("Fetch error:", error);
            alert("Server not responding!");
        }
    };

    return (
        <div style={{ padding: "20px", maxWidth: "400px", margin: "auto", border: "1px solid #ccc", borderRadius: "10px" }}>
            <h2 style={{ textAlign: "center" }}>Book a Room</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} required style={inputStyle} />
                <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required style={inputStyle} />
                <input type="text" name="roomType" placeholder="Room Type" value={formData.roomType} onChange={handleChange} required style={inputStyle} />
                <input type="date" name="checkIn" value={formData.checkIn} onChange={handleChange} required style={inputStyle} />
                <input type="date" name="checkOut" value={formData.checkOut} onChange={handleChange} required style={inputStyle} />
                <button type="submit" style={buttonStyle}>Book Now</button>
            </form>
        </div>
    );
};

const inputStyle = {
    width: "100%",
    padding: "10px",
    margin: "8px 0",
    borderRadius: "5px",
    border: "1px solid #ccc"
};

const buttonStyle = {
    width: "100%",
    padding: "10px",
    marginTop: "10px",
    backgroundColor: "#28a745",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer"
};

export default Buy;
