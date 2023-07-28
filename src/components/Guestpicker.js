import React, { useState } from 'react';
import './Guestpicker.css';

const Guestpicker = ({onSelectGuests}) => {
  const [selectedGuests, setSelectedGuests] = useState('1');

  const handleGuestsChange = (e) => {
    const guests = e.target.value;
    setSelectedGuests(guests);
    onSelectGuests(guests)
  };

  return (
    <div className="custom-guestpicker">
      <select value={selectedGuests} onChange={handleGuestsChange}>
        <option value="1">1 คน</option>
        <option value="2">2 คน</option>
        <option value="3">3 คน</option>
        <option value="4">4 คน</option>
      </select>
    </div>
  );
};

export default Guestpicker;