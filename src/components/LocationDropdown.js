// LocationDropdown.js
import React, { useState } from 'react';

function LocationDropdown() {
  const [selectedLocation, setSelectedLocation] = useState("");

  const handleChange = (event) => {
    setSelectedLocation(event.target.value);
  };

  return (
    <div>
      <label htmlFor="locations"> </label>
      <select
        id="locations"
        name="locations"
        value={selectedLocation}
        onChange={handleChange}
      >
        <option value="police_nagar">Police Nagar</option>
        <option value="vaishali_nagar">Vaishali Nagar</option>
        <option value="wanadongri">Wanadongri</option>
      </select>

      {/* <p>Selected Location: {selectedLocation}</p> */}
    </div>
  );
}

export default LocationDropdown;


