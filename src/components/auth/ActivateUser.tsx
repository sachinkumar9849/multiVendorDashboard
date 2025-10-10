"use client";

import Input from "@/components/form/input/InputField";
import Label from "@/components/form/Label";
import { ChevronLeftIcon } from "@/icons";
import Link from "next/link";
import React, { useState } from "react";
import { useFormik } from "formik";
import { activateUserSchema } from "@/validation/auth.schema";
import { useActivateUser } from "@/hooks/useActivateUser";
import { ActivateUserPayload } from "@/types/auth.types";

export default function ActivateUser() {
  const { mutate: activateUser, isPending } = useActivateUser();
  const [resendCooldown, setResendCooldown] = useState(0);

  const formik = useFormik<ActivateUserPayload>({
    initialValues: {
      phone: "",
      code: "",
    },
    validationSchema: activateUserSchema,
    onSubmit: (values) => {
      activateUser(values);
    },
  });

  const handleResendCode = async () => {
    if (resendCooldown > 0) return;

    if (!formik.values.phone) {
      toast.error("Please enter your phone number first");
      return;
    }

    // TODO: Implement resend code API call here
    // For now, just show cooldown
    setResendCooldown(60);
    const interval = setInterval(() => {
      setResendCooldown((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    toast.success("Activation code resent to your phone");
  };

  return (
    <div className="no-scrollbar flex w-full flex-1 flex-col overflow-y-auto lg:w-1/2">
      <div className="mx-auto mb-5 w-full max-w-md sm:pt-10">
        <Link
          href="/signin"
          className="inline-flex items-center text-sm text-gray-500 transition-colors hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
        >
          <ChevronLeftIcon />
          Back to sign in
        </Link>
      </div>
      <div className="mx-auto flex w-full max-w-md flex-1 flex-col justify-center">
        <div>
          <div className="mb-5 sm:mb-8">
            <div className="bg-brand-50 dark:bg-brand-900/20 mb-6 inline-flex h-14 w-14 items-center justify-center rounded-full">
              <svg
                className="text-brand-600 dark:text-brand-400 h-7 w-7"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h1 className="text-title-sm sm:text-title-md mb-2 font-semibold text-gray-800 dark:text-white/90">
              Activate Your Account
            </h1>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Enter the 4-digit activation code sent to your phone number to
              activate your account.
            </p>
          </div>

          <form onSubmit={formik.handleSubmit}>
            <div className="space-y-5">
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
                  maxLength={10}
                />
                {formik.touched.phone && formik.errors.phone && (
                  <p className="text-error-500 mt-1 text-xs">
                    {formik.errors.phone}
                  </p>
                )}
              </div>

              <div>
                <Label htmlFor="code">
                  Activation Code<span className="text-error-500">*</span>
                </Label>
                <Input
                  type="text"
                  id="code"
                  name="code"
                  placeholder="Enter 4-digit code"
                  value={formik.values.code}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  maxLength={4}
                  className="text-center text-2xl tracking-widest"
                />
                {formik.touched.code && formik.errors.code && (
                  <p className="text-error-500 mt-1 text-xs">
                    {formik.errors.code}
                  </p>
                )}
                <p className="mt-2 text-xs text-gray-500 dark:text-gray-400">
                  Check your SMS for the activation code
                </p>
              </div>

              <div>
                <button
                  type="submit"
                  disabled={isPending || !formik.isValid}
                  className="bg-brand-500 shadow-theme-xs hover:bg-brand-600 disabled:bg-brand-300 flex w-full items-center justify-center rounded-lg px-4 py-3 text-sm font-medium text-white transition disabled:cursor-not-allowed"
                >
                  {isPending ? (
                    <>
                      <svg
                        className="mr-2 -ml-1 h-4 w-4 animate-spin"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        />
                      </svg>
                      Activating...
                    </>
                  ) : (
                    "Activate Account"
                  )}
                </button>
              </div>

              <div className="text-center">
                <button
                  type="button"
                  onClick={handleResendCode}
                  disabled={resendCooldown > 0 || isPending}
                  className="text-brand-500 hover:text-brand-600 dark:text-brand-400 text-sm font-medium transition disabled:cursor-not-allowed disabled:opacity-50"
                >
                  {resendCooldown > 0
                    ? `Resend code in ${resendCooldown}s`
                    : "Didn't receive the code? Resend"}
                </button>
              </div>
            </div>
          </form>

          <div className="mt-8 rounded-lg bg-gray-50 p-4 dark:bg-gray-800/50">
            <div className="flex items-start">
              <svg
                className="mt-0.5 h-5 w-5 flex-shrink-0 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <div className="ml-3">
                <h3 className="text-sm font-medium text-gray-800 dark:text-white/90">
                  Having trouble?
                </h3>
                <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
                  If you didn't receive the activation code, please check your
                  SMS or contact support for assistance.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-5">
            <p className="text-center text-sm font-normal text-gray-700 dark:text-gray-400">
              Already activated?{" "}
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
  );
}
