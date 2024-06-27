"use client";
import React, { useRef, useEffect, useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { cn } from "@/utils/cn";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import {
  setRegisterFirstName,
  setRegisterLastName,
  setRegisterEmail,
  setRegisterPassword,
  setRegisterPasswordConfirmation,
  setSignupOpen,
} from "@/redux/Auth-module/AuthSlice";
import { IoClose } from "react-icons/io5";

interface FormData {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
  password_confirmation: string;
  twoFactorAuth: boolean;
}

export function SignupFormDemo() {
  const dispatch = useAppDispatch();
  const isSignupOpen = useAppSelector((state) => state.auth.isSignupOpen);
  const formRef = useRef<HTMLDivElement>(null);

  const [formData, setFormData] = useState<FormData>({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    password_confirmation: "",
    twoFactorAuth: false,
  });

  const [passwordError, setPasswordError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: type === "checkbox" ? checked : value,
    }));
  };

  const validateForm = (): boolean => {
    setPasswordError("");

    if (formData.password !== formData.password_confirmation) {
      setPasswordError("Passwords do not match.");
      return false;
    }

    return true;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    // Dispatch actions to store the formData in Redux store
    dispatch(setRegisterFirstName(formData.firstname));
    dispatch(setRegisterLastName(formData.lastname));
    dispatch(setRegisterEmail(formData.email));
    dispatch(setRegisterPassword(formData.password));
    dispatch(setRegisterPasswordConfirmation(formData.password_confirmation));

    console.log("Form submitted", formData);
    dispatch(setSignupOpen(false));
    // Additional actions or API calls with formData
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (formRef.current && !formRef.current.contains(event.target as Node)) {
      dispatch(setSignupOpen(false));
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="bg-black/80 fixed z-[60] flex justify-center w-full py-8 h-full">
      <div
        ref={formRef}
        className="max-w-md w-full h-fit rounded-md md:rounded-2xl px-4 py-2 md:p-8 shadow-input bg-white dark:bg-black mx-4"
      >
        <IoClose
          className="z-[80] absolute right-88 top-20 text-red-600 cursor-pointer"
          onClick={() => dispatch(setSignupOpen(false))}
          size={24}
        />

        <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200">
          Welcome to Aceternity
        </h2>

        <form className="my-8" onSubmit={handleSubmit}>
          <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
            <LabelInputContainer>
              <Label htmlFor="firstname">
                First name <span className="text-red-500">*</span>
              </Label>
              <Input
                id="firstname"
                placeholder="Tyler"
                type="text"
                value={formData.firstname}
                onChange={handleChange}
                required
              />
            </LabelInputContainer>
            <LabelInputContainer>
              <Label htmlFor="lastname">
                Last name <span className="text-red-500">*</span>
              </Label>
              <Input
                id="lastname"
                placeholder="Durden"
                type="text"
                value={formData.lastname}
                onChange={handleChange}
                required
              />
            </LabelInputContainer>
          </div>
          <LabelInputContainer className="mb-4">
            <Label htmlFor="email">
              Email Address <span className="text-red-500">*</span>
            </Label>
            <Input
              id="email"
              placeholder="projectmayhem@fc.com"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </LabelInputContainer>
          <LabelInputContainer className="mb-4">
            <Label htmlFor="password">
              Password <span className="text-red-500">*</span>
            </Label>
            <Input
              id="password"
              placeholder="••••••••"
              type="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </LabelInputContainer>
          <LabelInputContainer className="mb-8">
            <Label htmlFor="password_confirmation">
              Confirm Password <span className="text-red-500">*</span>
            </Label>
            <Input
              id="password_confirmation"
              placeholder="••••••••"
              type="password"
              value={formData.password_confirmation}
              onChange={handleChange}
              required
            />
            {passwordError && (
              <p className="text-red-500 text-sm">{passwordError}</p>
            )}
          </LabelInputContainer>
          <LabelInputContainer className="flex-row items-center mb-8">
            <Label
              htmlFor="twoFactorAuth"
              className="flex items-center space-x-2"
            >
              <span>2FAuthorization</span>
              <Input
                className="h-fit"
                id="twoFactorAuth"
                type="checkbox"
                checked={formData.twoFactorAuth}
                onChange={handleChange}
              />
            </Label>
          </LabelInputContainer>
          <button
            className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
            type="submit"
          >
            Sign up &rarr;
            <BottomGradient />
          </button>
        </form>
      </div>
    </div>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};
