// import React, { useState, useEffect } from "react";

// function CartData() {
//   const [items, setItems] = useState([]);

//   const [cartItems, setCartItems] = useState([]);
//   const [eventStartDate, setEventStartDate] = useState(null);
//   const [eventEndDate, setEventEndDate] = useState(null);
//   const [setupDate, setSetupDate] = useState(null);

//   const [location, setLocation] = useState("");
//   const [paymentMethod, setPaymentMethod] = useState("");
//   const [transportCharge, setTransportCharge] = useState("");
//   const [distance, setDistance] = useState("");
//   const presentDate = new Date();
//   const year = presentDate.getFullYear();
//   const month = `0${presentDate.getMonth() + 1}`.slice(-2);
//   const day = `0${presentDate.getDate()}`.slice(-2);
//   const hours = `0${presentDate.getHours()}`.slice(-2);
//   const minutes = `0${presentDate.getMinutes()}`.slice(-2);
//   const minValue = `${year}-${month}-${day}T${hours}:${minutes}`;
//   useEffect(() => {
//     async function fetchData() {
//       const response = await fetch("http://localhost:8080/cart");
//       const data = await response.json();
//       setCartItems(data);
//     }

//     fetchData();
//   }, []);

//   function deletePost(id) {
//     fetch(`http://localhost:8080/cart/${id}`, { method: "DELETE" });
//     window.location.reload(true);
//     console.log(id);
//   }
//   const handleDateChange = (event) => {
//     const date = event.target.value;
//     setEventStartDate(date);
//   };

//   const handleEndDateChange = (event) => {
//     const date = event.target.value;
//     const currentDate = new Date();

//     // Only allow end dates that are after the start date
//     if (date > currentDate) {
//       setEventEndDate(date);
//     } else {
//       alert("End date must be after start date");
//     }
//   };

//   const handleSetUpDate = (event) => {
//     const date = event.target.value;
//     const currentDate = new Date();
//     //disable previous date have to do
//     //time baricate
//   };
//   const handleSubmit = (event) => {
//     event.preventDefault();
//     const currentDate = new Date();
//     if (eventStartDate < currentDate) {
//       alert(
//         "Error: Setup date and time must be before the event date and time"
//       );
//       return;
//     }

//     // If the setup date and time are valid, submit the form
//     // submitForm();
//   };

//   return (
//     <>
//       <div className="container">
//         {cartItems.map((item, i) => (
//           <div>
//             <img src={item.imageUrl} className="images" />
//             <h4 key={i}>{item.name}</h4>
//             <p>{item.releaseYear}</p>
//             <button>Add to cart</button>
//             <button onClick={() => deletePost(item.id)}>Remove</button>
//           </div>
//         ))}
//       </div>
//       <form onSubmit={handleSubmit}>
//         <label>Event Start Date and Time:</label>
//         <input
//           type="datetime-local"
//           name="eventStart"
//           id="date_event_start"
//           value={eventStartDate}
//           onChange={handleDateChange}
//         />
//         <br />
//         <label>Event End Date and Time:</label>
//         <input
//           type="datetime-local"
//           name="eventEnd"
//           id="date_event_end "
//           value={eventEndDate}
//           onChange={handleEndDateChange}
//         />
//         <br />
//         <label>Setup Date and Time:</label>
//         <input
//           type="datetime-local"
//           name="setupDate"
//           value={setupDate}
//           onChange={handleSetUpDate}
//         />
//         <label htmlFor="datetime">Date and time:</label>
//         <input
//           type="datetime-local"
//           id="datetime"
//           name="datetime"
//           min={minValue}
//         />
//         <br />
//         <label>Event Location:</label>
//         <select name="location">
//           <option value="default">Choose your location</option>
//           <option value="Bangalore">Bangalore</option>
//           <option value="Hyderabad">Hyderabad</option>
//           <option value="Delhi">Delhi</option>
//           <option value="Mumbai">Mumbai</option>
//           <option value="Chennai">Chennai</option>
//           <option value="Lucknow">Lucknow</option>
//           <option value="Visakhapatnam">Visakhapatnam</option>
//           <option value="Kochi">Kochi</option>
//         </select>
//         <br />
//         <label>Payment Method:</label>
//         <input type="radio" name="paymentMethod" value="creditCard" /> Credit
//         Card
//         <input type="radio" name="paymentMethod" value="Googl epay" /> PayPal
//         <br />
//         <label>Transport Charge:</label>
//         <input type="number" name="transportCharge" />
//         <label>Distance:</label>
//         <input type="text" name="distance" value={distance} readOnly />
//         <button type="submit">Make Enquiry</button>
//       </form>
//     </>
//   );
// }

// export default CartData;
