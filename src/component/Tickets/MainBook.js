// MainBook.js
import React, { useState } from 'react';
import EventListScreen from './Book';
import SeatSelectionScreen from './TickBook';

const MainBook = () => {
  const [events, setEvents] = useState([
    { id: 1, name: 'Concert' },
    { id: 2, name: 'Movie' },
    // Add more events here
  ]);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [selectedSeats, setSelectedSeats] = useState([]);

  const handleSelectEvent = (event) => {
    setSelectedEvent(event);
  };

  const handleSelectSeat = () => {
    // Implement seat selection logic here
    // For simplicity, we'll just toggle a seat between selected/unselected
  };

  const handleConfirmBooking = () => {
    // Implement booking confirmation logic here
    // For simplicity, we'll just display a confirmation message
    alert('Booking confirmed!');
  };

  return (
    <>
      {selectedEvent ? (
        <SeatSelectionScreen
          selectedEvent={selectedEvent}
          selectedSeats={selectedSeats}
          onSelectSeat={handleSelectSeat}
          onConfirmBooking={handleConfirmBooking}
        />
      ) : (
        <EventListScreen events={events} onSelectEvent={handleSelectEvent} />
      )}
    </>
  );
};

export default MainBook;
