"use client";

import Input from "@/components/form/input/InputField";
import Label from "@/components/form/Label";
import { ChevronLeftIcon, EyeCloseIcon, EyeIcon } from "@/icons";
import Link from "next/link";
import React, { useState } from "react";
import { useFormik } from "formik";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { registerSchema } from "@/validation/auth.schema";
import { useRegister } from "@/hooks/useRegister";
import { RegisterPayload } from "@/types/auth.types";

export default function SignUpForm() {
  const [showPassword, setShowPassword] = useState(false);
  const { mutate: register, isPending } = useRegister();

  const formik = useFormik<RegisterPayload>({
    initialValues: {
      first_name: "",
      last_name: "",
      phone: "",
      email: "",
      password: "",
      current_role: "customer",
    },
    validationSchema: registerSchema,
    onSubmit: (values) => {
      register(values);
    },
  });

  return (
    <div className="no-scrollbar flex w-full flex-1 flex-col overflow-y-auto lg:w-1/2">
      <div className="mx-auto mb-5 w-full max-w-md sm:pt-10">
        <Link
          href="/"
          className="inline-flex items-center text-sm text-gray-500 transition-colors hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
        >
          <ChevronLeftIcon />
          Back to dashboard
        </Link>
      </div>
      <div className="mx-auto flex w-full max-w-md flex-1 flex-col justify-center">
        <div>
          <div className="mb-5 sm:mb-8">
            <h1 className="text-title-sm sm:text-title-md mb-2 font-semibold text-gray-800 dark:text-white/90">
              Sign Up
            </h1>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Enter your email and password to sign up!
            </p>
          </div>
          <div>
            <div className="relative py-3 sm:py-5">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-200 dark:border-gray-800"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="bg-white p-2 text-gray-400 sm:px-5 sm:py-2 dark:bg-gray-900">
                  Or
                </span>
              </div>
            </div>
            <form onSubmit={formik.handleSubmit}>
              <div className="space-y-5">
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <div className="sm:col-span-1">
                    <Label htmlFor="first_name">
                      First Name<span className="text-error-500">*</span>
                    </Label>
                    <Input
                      type="text"
                      id="first_name"
                      name="first_name"
                      placeholder="Enter your first name"
                      value={formik.values.first_name}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                    {formik.touched.first_name && formik.errors.first_name && (
                      <p className="text-error-500 mt-1 text-xs">
                        {formik.errors.first_name}
                      </p>
                    )}
                  </div>

                  <div className="sm:col-span-1">
                    <Label htmlFor="last_name">
                      Last Name<span className="text-error-500">*</span>
                    </Label>
                    <Input
                      type="text"
                      id="last_name"
                      name="last_name"
                      placeholder="Enter your last name"
                      value={formik.values.last_name}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                    {formik.touched.last_name && formik.errors.last_name && (
                      <p className="text-error-500 mt-1 text-xs">
                        {formik.errors.last_name}
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <Label htmlFor="phone">
                    Phone Number<span className="text-error-500">*</span>
                  </Label>
                  <Input
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder="Enter your phone number"
                    value={formik.values.phone}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.touched.phone && formik.errors.phone && (
                    <p className="text-error-500 mt-1 text-xs">
                      {formik.errors.phone}
                    </p>
                  )}
                </div>

                <div>
                  <Label htmlFor="email">
                    Email<span className="text-error-500">*</span>
                  </Label>
                  <Input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Enter your email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.touched.email && formik.errors.email && (
                    <p className="text-error-500 mt-1 text-xs">
                      {formik.errors.email}
                    </p>
                  )}
                </div>

                <div>
                  <Label htmlFor="password">
                    Password<span className="text-error-500">*</span>
                  </Label>
                  <div className="relative">
                    <Input
                      id="password"
                      name="password"
                      placeholder="Enter your password"
                      type={showPassword ? "text" : "password"}
                      value={formik.values.password}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                    <span
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute top-1/2 right-4 z-30 -translate-y-1/2 cursor-pointer"
                    >
                      {showPassword ? (
                        <EyeIcon className="fill-gray-500 dark:fill-gray-400" />
                      ) : (
                        <EyeCloseIcon className="fill-gray-500 dark:fill-gray-400" />
                      )}
                    </span>
                  </div>
                  {formik.touched.password && formik.errors.password && (
                    <p className="text-error-500 mt-1 text-xs">
                      {formik.errors.password}
                    </p>
                  )}
                </div>

                <div>
                  <Label>
                    Select Role<span className="text-error-500">*</span>
                  </Label>
                  <RadioGroup
                    value={formik.values.current_role}
                    onValueChange={(value) =>
                      formik.setFieldValue("current_role", value)
                    }
                    className="flex items-center gap-4"
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="vendor" id="vendor" />
                      <Label className="mb-0" htmlFor="vendor">
                        Vendor
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="customer" id="customer" />
                      <Label className="mb-0" htmlFor="customer">
                        Customer
                      </Label>
                    </div>
                  </RadioGroup>
                  {formik.touched.current_role &&
                    formik.errors.current_role && (
                      <p className="text-error-500 mt-1 text-xs">
                        {formik.errors.current_role}
                      </p>
                    )}
                </div>

                <div>
                  <button
                    type="submit"
                    disabled={isPending || !formik.isValid}
                    className="bg-brand-500 shadow-theme-xs hover:bg-brand-600 disabled:bg-brand-300 flex w-full items-center justify-center rounded-lg px-4 py-3 text-sm font-medium text-white transition disabled:cursor-not-allowed"
                  >
                    {isPending ? "Signing Up..." : "Sign Up"}
                  </button>
                </div>
              </div>
            </form>

            <div className="mt-5">
              <p className="text-center text-sm font-normal text-gray-700 sm:text-start dark:text-gray-400">
                Already have an account?{" "}
                <Link
                  href="/signin"
                  className="text-brand-500 hover:text-brand-600 dark:text-brand-400"
                >
                  Sign In
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
