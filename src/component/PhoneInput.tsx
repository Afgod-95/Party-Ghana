import React from "react";
import PhoneInput from "react-phone-number-input";
import { isValidPhoneNumber } from "react-phone-number-input"; // validator
import "react-phone-number-input/style.css";

interface PhoneFieldProps {
  value: string | undefined;
  onChange: (value: string | undefined) => void;
}

const inputBaseClasses =
  "w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 placeholder-slate-500 text-slate-900 bg-white";

export default function PhoneField({ value, onChange }: PhoneFieldProps) {
  const isValid = value ? isValidPhoneNumber(value) : true; // only check if value exists

  return (
    <div className="flex flex-col">
      <label className="block text-sm font-medium text-slate-700 mb-2">
        Mobile Number *
      </label>
      <PhoneInput
        defaultCountry="GH"
        placeholder="+233 24 123 4567"
        value={value}
        onChange={onChange}
        className={inputBaseClasses}
      />
      {!isValid && (
        <span className="text-red-500 text-xs mt-1">
          Please enter a valid phone number.
        </span>
      )}
    </div>
  );
}
