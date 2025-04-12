// /* eslint-disable no-unused-vars */
// import React from "react";
// import { useForm } from "react-hook-form";

// function Login() {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm();

//   // const submitHandler = async (data) => {
//   //   // Check if user is already logged in
//   //   const storedUser = localStorage.getItem("user");
//   //   if (storedUser) {
//   //     alert("You are already logged in! ✅");
//   //     return;
//   //   }

//   //   try {
//   //     // Simulating a successful login response
//   //     const res = { data: { userId: "12345", username: data.email } };
//   //     const { userId, username } = res.data;

//   //     // Store user data in localStorage
      

//   //     alert("Login Successfully ✅");
//   //     window.location.reload(); // Refresh to update navbar state
//   //   } catch (error) {
//   //     alert("Something went wrong! ❌");
//   //   }
//   // };
//   const submitHandler = async (data) => {
//     // Check if user is already logged in
//     const storedUser = localStorage.getItem("user");
//     if (storedUser) {
//       alert("You are already logged in! ✅");
//       return;
//     }

//     try {
//       // Retrieve user data from localStorage
//       const users = JSON.parse(localStorage.getItem("users")) || [];
//       const foundUser = users.find(
//         (user) => user.email === data.email && user.password === data.password
//       );

//       if (!foundUser) {
//         alert("Invalid email or password! ❌");
//         return;
//       }

//       // Store logged-in user details in localStorage
//       localStorage.setItem("user", JSON.stringify({
//         userId: foundUser.userId,
//         username: foundUser.username,
//       }));

//       alert("Login Successfully ✅");
//       window.location.reload(); // Refresh to update navbar state
//     } catch (error) {
//       alert("Something went wrong! ❌");
//     }
//   };

//   const validationSchema = {
//     emailValidator: {
//       required: { value: true, message: "Email is required" },
//       pattern: {
//         value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
//         message: "Enter a valid email",
//       },
//     },
//     passwordValidator: {
//       required: { value: true, message: "Enter your password" },
//       pattern: {
//         value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%?&])[A-Za-z\d@$!%?&]{5,}$/,
//         message:
//           "Password must be at least 5 characters long and include uppercase, lowercase, a number, and a special character",
//       },
//     },
//   };

//   return (
//     <>
//       <div>
//         <h2 className="text-2xl font-bold mb-4">Login</h2>
//         <form onSubmit={handleSubmit(submitHandler)}>
//           <div className="mb-4">
//             <label className="block text-gray-700">Email</label>
//             <input
//               type="email"
//               {...register("email", validationSchema.emailValidator)}
//               className="w-full px-3 py-2 border"
//               placeholder="Enter Email"
//             />
//             {errors.email && <p className="text-red-500">{errors.email.message}</p>}
//           </div>
//           <div className="mb-4">
//             <label className="block text-gray-700">Password</label>
//             <input
//               type="password"
//               {...register("password", validationSchema.passwordValidator)}
//               className="w-full px-3 py-2 border"
//               placeholder="Enter Password"
//             />
//             {errors.password && <p className="text-red-500">{errors.password.message}</p>}
//           </div>
//           <div className="mb-4 flex items-center justify-between">
//             <label className="inline-flex items-center">
//               <input type="checkbox" className="form-checkbox" />
//               <span className="ml-2 text-gray-700">Remember Me</span>
//             </label>
//             <a href="#" className="text-red-800">Forgot Password?</a>
//           </div>
//           <div className="mb-4">
//             <button type="submit" className="w-full bg-red-600 text-white py-2">
//               Login
//             </button>
//           </div>
//         </form>
//         <div className="text-center">
//           <span className="text-gray-700">Don&apos;t Have an Account? </span>
//           <button className="text-red-800">Sign Up</button>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Login;

/* eslint-disable no-unused-vars */
import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // const submitHandler = async (data) => {
  //   // Check if user is already logged in
  //   const storedUser = localStorage.getItem("user");
  //   if (storedUser) {
  //     alert("You are already logged in! ✅");
  //     return;
  //   }

  //   try {
  //     // Simulating a successful login response
  //     const res = { data: { userId: "12345", username: data.email } };
  //     const { userId, username } = res.data;

  //     // Store user data in localStorage
      

  //     alert("Login Successfully ✅");
  //     window.location.reload(); // Refresh to update navbar state
  //   } catch (error) {
  //     alert("Something went wrong! ❌");
  //   }
  // };
  const submitHandler = async (data) => {
    // Check if user is already logged in
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      alert("You are already logged in! ✅");
      return;
    }

    try {
      // Retrieve user data from localStorage
      const users = JSON.parse(localStorage.getItem("users")) || [];
      const foundUser = users.find(
        (user) => user.email === data.email && user.password === data.password
      );

      if (!foundUser) {
        alert("Invalid email or password! ❌");
        return;
      }

      // Store logged-in user details in localStorage
      localStorage.setItem("user", JSON.stringify({
        userId: foundUser.userId,
        username: foundUser.username,
      }));

      alert("Login Successfully ✅");
      window.location.reload(); // Refresh to update navbar state
    } catch (error) {
      alert("Something went wrong! ❌");
    }
  };

  const validationSchema = {
    emailValidator: {
      required: { value: true, message: "Email is required" },
      pattern: {
        value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
        message: "Enter a valid email",
      },
    },
    passwordValidator: {
      required: { value: true, message: "Enter your password" },
      pattern: {
        value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%?&])[A-Za-z\d@$!%?&]{5,}$/,
        message:
          "Password must be at least 5 characters long and include uppercase, lowercase, a number, and a special character",
      },
    },
  };

  return (
    <>
      <div>
        <h2 className="text-2xl font-bold mb-4">Login</h2>
        <form onSubmit={handleSubmit(submitHandler)}>
          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              {...register("email", validationSchema.emailValidator)}
              className="w-full px-3 py-2 border"
              placeholder="Enter Email"
            />
            {errors.email && <p className="text-red-500">{errors.email.message}</p>}
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Password</label>
            <input
              type="password"
              {...register("password", validationSchema.passwordValidator)}
              className="w-full px-3 py-2 border"
              placeholder="Enter Password"
            />
            {errors.password && <p className="text-red-500">{errors.password.message}</p>}
          </div>
          <div className="mb-4 flex items-center justify-between">
            <label className="inline-flex items-center">
              <input type="checkbox" className="form-checkbox" />
              <span className="ml-2 text-gray-700">Remember Me</span>
            </label>
            <Link to="/Forget" className="text-red-800">Forgot Password?</Link>
          </div>
          <div className="mb-4">
            <button type="submit" className="w-full bg-red-600 text-white py-2">
              Login
            </button>
          </div>
        </form>
        <div className="text-center">
          <span className="text-gray-700">Don&apos;t Have an Account? </span>
          <button className="text-red-800">Sign Up</button>
        </div>
      </div>
    </>
  );
}

export default Login;
