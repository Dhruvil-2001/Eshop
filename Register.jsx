// /* eslint-disable no-unused-vars */
// import React from 'react'
// import { useForm } from "react-hook-form";
// import axios from "axios";

// function Register() {
//     const {
//         register,
//         handleSubmit,
//         watch,
//         formState: { errors },
//       } = useForm();
    
//       const submitHandler = async (data) => {
//         console.log(data);
//         try {
//           // data.roleId = "67c68ccb957e608ef47a4203";
         
//           localStorage.setItem("user", JSON.stringify({ userId, username }));
//           if (res.status === 201) {
//             alert("Login Successfully ✅");
//           }
//         } catch (error) {
//           if (error.response && error.response.data) {
//             alert(error.response.data.message || "Something went wrong ! ❌");
//           } else {
//             alert("Network error or server is down.");
//           }
//         }
//       };
    
//       const validationSchema = {
//         nameValidator: { required: { value: true, message: "Name is required" } },
//         emailValidator: {
//           required: { value: true, message: "Email is required" },
//           pattern: {
//             value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
//             message: "Enter a valid email",
//           },
//         },
//         passwordValidator: {
//           required: { value: true, message: "Enter your password" },
//           pattern: {
//             value:
//               /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%?&])[A-Za-z\d@$!%?&]{5,}$/,
//             message:
//               "Password must be at least 5 characters long and include uppercase, lowercase, a number, and a special character",
//           },
//         },
       
//       };
    
//   return (
//     <>
//     <div>
//         <h2 className='text-2xl font-bold mb-4'>Sign Up</h2>
//         <form onSubmit={handleSubmit(submitHandler)}>
//             <div className='mb-4'> 
//                 <label className='block text-gray-700'>Name</label>
//                 <input  type="text" className='w-full px-3 py-2 border'
//                 placeholder='Enter Name'

//                 {...register("name", validationSchema.nameValidator)}/>
//              {errors.name && <p className="text-red-500">{errors.name.message}</p>}
//             </div>

//             <div className='mb-4'> 
//                 <label className='block text-gray-700'>Email</label>
//                 <input  type="email" className='w-full px-3 py-2 border'
//                 placeholder='Enter Email'
//                 {...register("email", validationSchema.emailValidator)}/>
//                  {errors.email && <p className="text-red-500">{errors.email.message}</p>}
//             </div>
            
//             <div className='mb-4'>
//                 <label className='block text-gray-700'>Password</label>
//                 <input type="password" className='w-full px-3 py-2 border'
//                 placeholder='Enter Password'
//                 {...register("password", validationSchema.passwordValidator)}/>
//                  {errors.password && <p className="text-red-500">{errors.password.message}</p>}
//             </div>
            
//             <div className='mb-4'>
//                 <button type='submit' className='w-full bg-red-600 text-white py-2'>Sign Up</button>
//             </div>
//         </form>
//         <div className='text-center'>
//             <span className='text-gray-700'>Already Have a Account?</span>
//             <button className='text-red-800'>Login</button>
//         </div>
//     </div>
//    </>
//   )
// }

// export default Register

/* eslint-disable no-unused-vars */
import React from "react";
import { useForm } from "react-hook-form";

function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const submitHandler = async (data) => {
    try {
      // Retrieve existing users from localStorage
      let users = JSON.parse(localStorage.getItem("users")) || [];
      
      // Check if the email is already registered
      const existingUser = users.find((user) => user.email === data.email);
      if (existingUser) {
        alert("Email is already registered! ❌");
        return;
      }

      // Create new user object
      const newUser = {
        userId: Date.now().toString(),
        username: data.username,
        email: data.email,
        password: data.password,
      };
      
      // Save new user to localStorage
      users.push(newUser);
      localStorage.setItem("users", JSON.stringify(users));

      alert("Registration Successful ✅");
      window.location.reload(); // Refresh to update navbar state
    } catch (error) {
      alert("Something went wrong! ❌");
    }
  };

  return (
    <>
      <div>
        <h2 className="text-2xl font-bold mb-4">Register</h2>
        <form onSubmit={handleSubmit(submitHandler)}>
          <div className="mb-4">
            <label className="block text-gray-700">Username</label>
            <input
              type="text"
              {...register("username", { required: "Username is required" })}
              className="w-full px-3 py-2 border"
              placeholder="Enter Username"
            />
            {errors.username && <p className="text-red-500">{errors.username.message}</p>}
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                  message: "Enter a valid email",
                },
              })}
              className="w-full px-3 py-2 border"
              placeholder="Enter Email"
            />
            {errors.email && <p className="text-red-500">{errors.email.message}</p>}
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Password</label>
            <input
              type="password"
              {...register("password", {
                required: "Password is required",
                pattern: {
                  value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%?&])[A-Za-z\d@$!%?&]{5,}$/,
                  message:
                    "Password must be at least 5 characters long and include uppercase, lowercase, a number, and a special character",
                },
              })}
              className="w-full px-3 py-2 border"
              placeholder="Enter Password"
            />
            {errors.password && <p className="text-red-500">{errors.password.message}</p>}
          </div>
          <div className="mb-4">
            <button type="submit" className="w-full bg-green-600 text-white py-2">
              Register
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Register;
