import * as Yup from "yup";

export const registerSchema = Yup.object({
  first_name: Yup.string()
    .min(2, "First name must be at least 2 characters")
    .max(50, "First name must be less than 50 characters")
    .required("First name is required"),
  last_name: Yup.string()
    .min(2, "Last name must be at least 2 characters")
    .max(50, "Last name must be less than 50 characters")
    .required("Last name is required"),
  phone: Yup.string()
    .matches(/^[0-9]{10}$/, "Phone number must be exactly 10 digits")
    .required("Phone number is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/,
      "Password must contain at least one uppercase letter, one lowercase letter, and one number",
    )
    .required("Password is required"),
  current_role: Yup.string()
    .oneOf(["customer", "vendor"], "Please select a valid role")
    .required("Role is required"),
});

export const activateUserSchema = Yup.object({
  phone: Yup.string()
    .matches(/^[0-9]{10}$/, "Phone number must be exactly 10 digits")
    .required("Phone number is required"),
  code: Yup.string()
    .matches(/^[0-9]{4}$/, "Activation code must be exactly 4 digits")
    .required("Activation code is required"),
});
