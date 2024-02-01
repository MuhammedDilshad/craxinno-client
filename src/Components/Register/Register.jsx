import React, { useState } from "react";
import { signUp } from "../../Api/UserRegister.js";
import { IoMdAlert } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";

function Register() {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: "",
      phone: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email address").required("Required"),
      phone: Yup.string().required("Required"),
      password: Yup.string()
        .min(6, "Password must be at least 6 characters")
        .matches(
          /^(?=.*[A-Z])(?=.*\d)/,
          "Password must contain at least one uppercase letter and one number"
        )
        .required("Required"),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref("password"), null], "Passwords must match")
        .required("Required"),
    }),
    onSubmit: async (values, { setErrors }) => {
      try {
        const response = await signUp(values);
        console.log("Form data submitted:", response.data);
        if (response.data?.errors) {
          console.log("Showing toast");
          alert(response.data.errors.message);
        }

        localStorage.setItem("user", response.data);
        setErrors({});
        navigate("/home");
      } catch (error) {
        if (error.response && error.response.data.errors) {
          setErrors(error.response.data.errors);
        } else {
          setErrors({ general: "An unexpected error occurred" });
        }
      }
    },
  });

  return (
    <div className="bg-white flex justify-center ">
      <div className="p-7">
        <div className="text-center pb-9">
          <strong className="text-black text-3xl">Create your account</strong>
          <p className="text-gray-600">
            Set-up your RentlyPass in as little as 2 minutes.
          </p>
        </div>
        <form onSubmit={formik.handleSubmit}>
          <strong className="text-gray-600">Contact details</strong>
          <div className="flex flex-col gap-5">
            <input
              type="email"
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              placeholder="Email"
              className={`rounded-lg border p-4 border-gray-600 text-gray-500 bg-white ${
                formik.touched.email && formik.errors.email
                  ? "border-red-500"
                  : ""
              }`}
            />
            {formik.touched.email && formik.errors.email && (
              <p className="text-red-500">{formik.errors.email}</p>
            )}
            <input
              type="tel"
              name="phone"
              value={formik.values.phone}
              onChange={formik.handleChange}
              placeholder="Mobile number"
              className={`rounded-lg border p-4 border-gray-600 text-gray-500 bg-white ${
                formik.touched.phone && formik.errors.phone
                  ? "border-red-500"
                  : ""
              }`}
            />
            {formik.touched.phone && formik.errors.phone && (
              <p className="text-red-500">{formik.errors.phone}</p>
            )}
          </div>
          <strong className="text-gray-600">Set a password</strong>
          <div className="flex flex-col gap-5">
            <input
              type="password"
              name="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              placeholder="Create a password"
              className={`rounded-lg border p-4 border-gray-600 text-gray-500 bg-white ${
                formik.touched.password && formik.errors.password
                  ? "border-red-500"
                  : ""
              }`}
            />
            {formik.touched.password && formik.errors.password && (
              <p className="text-red-500">{formik.errors.password}</p>
            )}
            <input
              type="password"
              name="confirmPassword"
              value={formik.values.confirmPassword}
              onChange={formik.handleChange}
              placeholder="Confirm your password"
              className={`rounded-lg border p-4 border-gray-600 text-gray-500 bg-white ${
                formik.touched.confirmPassword && formik.errors.confirmPassword
                  ? "border-red-500"
                  : ""
              }`}
            />
            {formik.touched.confirmPassword &&
              formik.errors.confirmPassword && (
                <p className="text-red-500">{formik.errors.confirmPassword}</p>
              )}
          </div>
          <div className="flex flex-row text-gray-600">
            <IoMdAlert />
            <p className="text-center whitespace-pre-line pl-3">
              We need a password to keep your information safe. But don’t <br />
              worry, we’ll also send your custom RentlyPass URL via email.
            </p>
          </div>
          <button
            type="submit"
            className="rounded-lg p-4 cursor-pointer text-white bg-blue-500 w-full"
          >
            Create your account
          </button>
          <p className="text-gray-600">
            By clicking ‘Create your account’, you are agreeing to our
            <span className="underline">
              Terms
              <br /> & Conditions
            </span>
            and <span className="underline">Privacy Policy.</span>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Register;
