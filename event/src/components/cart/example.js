import React, { useState, useEffect } from "react";
import "./checkout.css";
function CartData() {
  const [items, setItems] = useState([]);

  const [cartItems, setCartItems] = useState([]);
  const [eventStartDate, setEventStartDate] = useState(null);
  const [eventEndDate, setEventEndDate] = useState(null);
  const [setupDate, setSetupDate] = useState(null);
  const [dateTime, setDateTime] = useState(
    new Date().toISOString().substr(0, 12)
  );
  const [location, setLocation] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");
  const [transportCharge, setTransportCharge] = useState("");
  const [distance, setDistance] = useState("");
  const presentDate = new Date();
  const year = presentDate.getFullYear();
  const month = `0${presentDate.getMonth() + 1}`.slice(-2);
  const day = `0${presentDate.getDate()}`.slice(-2);
  const hours = `0${presentDate.getHours()}`.slice(-2);
  const minutes = `0${presentDate.getMinutes()}`.slice(-2);
  const minValue = `${year}-${month}-${day}T${hours}:${minutes}`;

  // Calculate the difference between the event start date and end date in milliseconds
  const diff = eventEndDate - eventStartDate;

  // Convert the difference to days by dividing it by the number of milliseconds in a day
  const diffInDays = diff / (1000 * 60 * 60 * 24);

  // Convert the difference to hours by dividing it by the number of milliseconds in an hour
  const diffInHours = diff / (1000 * 60 * 60);
  useEffect(() => {
    async function fetchData() {
      const response = await fetch("http://localhost:8080/cart");
      const data = await response.json();
      setCartItems(data);
    }

    fetchData();
  }, []);

  function deletePost(id) {
    fetch(`http://localhost:8080/cart/${id}`, { method: "DELETE" });
    window.location.reload(true);
    console.log(id);
  }
  const handleDateChange = (event) => {
    const date = event.target.value;
    setEventStartDate(date);
  };

  const handleEndDateChange = (event) => {
    const date = event.target.value;
    const currentDate = new Date();

    // Calculate the difference between the event start date and the end date in milliseconds
    const diff = date - eventStartDate;

    // Convert the difference to hours by dividing it by the number of milliseconds in an hour
    const diffInHours = diff / (1000 * 60 * 60);

    // Only allow end dates that are after the start date and at least 2 hours apart
    // and no more than 24 hours apart
    if (date > eventStartDate && diffInHours >= 2 && diffInHours <= 24) {
      setEventEndDate(date);
    } else {
      alert(
        "End date must be after start date and at least 2 hours apart and no more than 24 hours apart"
      );
    }
  };

  const handleSetUpDate = (event) => {
    const date = event.target.value;
    const currentDate = new Date();

    // Calculate the difference between the setup date and the event start date in milliseconds
    const diff = eventStartDate - date;

    // Convert the difference to days by dividing it by the number of milliseconds in a day
    const diffInDays = diff / (1000 * 60 * 60 * 24);

    // Only allow setup dates that are before the event start date and time
    // and after the current date and time
    // and at most one day before the event start date
    if (date < eventStartDate && date > currentDate && diffInDays <= 1) {
      setSetupDate(date);
    } else {
      alert(
        "Setup date and time must be before the event date and time, after the current date and time, and at most one day before the event start date"
      );
    }
  };
  const days = Math.floor(diffInDays);
  const hour = Math.floor(diffInHours % 24);

  const handleSubmit = (event) => {
    event.preventDefault();
    const currentDate = new Date();
    if (eventStartDate < currentDate) {
      alert(
        "Error: Setup date and time must be before the event date and time"
      );
      return;
    }
    if (distance <= 30) {
      setTransportCharge(1500);
    } else {
      setTransportCharge(1500 + 50 * (distance - 30));
    }
    // If the setup date and time are valid, submit the form
    // submitForm();
  };

  return (
    <>
      <div className="container_child">
        <p>
          The event is going on for {days} days and {hour} hours
        </p>
        ;
        {cartItems.map((item, i) => (
          <div>
            <div>
              {" "}
              <img src={item.imageUrl} className="images" />
            </div>

            <div>
              <h4 key={i}>{item.name}</h4>
              <p>{item.releaseYear}</p>
              {/* // <button className="cart-item-btn">Add to cart</button> */}
              <button
                className="cart-item-btn"
                onClick={() => deletePost(item.id)}
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>
      <form
        style={{ display: "flex", justifyContent: "space-between" }}
        onSubmit={handleSubmit}
      >
        <div>
          <label>Event Start Date and Time:</label>
          <input
            type="datetime-local"
            name="eventStart"
            id="date_event_start"
            value={eventStartDate}
            onChange={handleDateChange}
          />
        </div>
        <div>

        <label>Event End Date and Time:</label>
   
        <input
          type="datetime-local"
          name="eventEnd"
          id="date_event_end "
          value={eventEndDate}
          onChange={handleEndDateChange}
        />
        </div>
        <div>

        <label>Setup Date and Time:</label>
   
        <input
          type="datetime-local"
          name="setupDate"
          value={setupDate}
          onChange={handleSetUpDate}
        />
        </div>
        <div>

        <label>Event Location:</label>
    
        <select name="location">
          <option value="default">Choose your location</option>
          <option value="Bangalore">Bangalore</option>
          <option value="Hyderabad">Hyderabad</option>
          <option value="Delhi">Delhi</option>
          <option value="Mumbai">Mumbai</option>
          <option value="Chennai">Chennai</option>
          <option value="Lucknow">Lucknow</option>
          <option value="Visakhapatnam">Visakhapatnam</option>
          <option value="Kochi">Kochi</option>
        </select>
        </div>
        <div>

        <label>Payment Method:</label>
       
        <input type="radio" name="paymentMethod" value="creditCard" /> Credit
        Card
        <input type="radio" name="paymentMethod" value="Googl epay" /> PayPal
        </div>
        <div>
        
        <label>Transport Charge:</label>
       
        <input type="number" name="transportCharge" />
        </div>
        <div>
      
       <label>Distance:</label>
      
        <input type="text" name="distance" value={distance} readOnly />
        </div>
        
        <button type="submit">Make Enquiry</button>
      </form>
    </>
  );
}

export default CartData;
