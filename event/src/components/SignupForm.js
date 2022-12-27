// import React, { useState } from "react";
import "./styles/sign.css";

// export default function SignupForm() {
//   const [formData, setFormData] = useState({
//     email: "",
//     password: "",
//   });

//   const handleChange = (event) => {
//     setFormData({
//       ...formData,
//       [event.target.name]: event.target.value,
//     });
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();

//     // Convert the form data to a JSON string
//     const data = JSON.stringify(formData);
//     console.log(data);
//     // You can then send the JSON data to your server or store it in a database
//     fetch("https://reqres.in/api/register", {
//       method: "POST",
//       headers: {
//         "content-Type": "application/json",
//       },
//       body: data,
//     })
//       .then((res) => res.json())
//       .then((result) => {})
//       .catch((err) => {
//         console.log("err");
//       });
//   };

//   return (
//     <div className="signup_box">
//       <form onSubmit={handleSubmit}>
//         <fieldset>
//           <legend>Sign Up Form </legend>
//           <label>
//             Email:
//             <input type="email" name="email" onChange={handleChange} required />
//           </label>
//           <br />
//           <label>
//             Password:
//             <input
//               type="password"
//               name="password"
//               onChange={handleChange}
//               required
//             />
//           </label>
//           <br />
//           <button type="submit">Sign Up</button>
//         </fieldset>
//       </form>

//       <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3RwzG-gTiUEISh51YKe8kJ5eEd_lk0qj9oeju9vsXAnpaVAMHgCCwo-ZjPLBN6rqdIoU&usqp=CAU" />
//     </div>
//   );
// }
import React, { useState } from "react";

export default function SignupForm() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Convert the form data to a JSON string
    const data = JSON.stringify(formData);
    console.log(data);
    // You can then send the JSON data to your server or store it in a database
    fetch("https://reqres.in/api/register", {
      method: "POST",
      headers: {
        "content-Type": "application/json",
      },
      body: data,
    })
      .then((res) => res.json())
      .then((result) => {})
      .catch((err) => {
        console.log("err");
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Email:
        <input type="email" name="email" onChange={handleChange} required />
      </label>
      <br />
      <label>
        Password:
        <input
          type="password"
          name="password"
          onChange={handleChange}
          required
        />
      </label>
      <br />
      <button type="submit">Sign Up</button>
    </form>
  );
}
