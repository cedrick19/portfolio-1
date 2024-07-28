import React from "react";
import { CONTACTS } from "../../../constants/constants";
import Link from "next/link";

const Contact = () => {
  return (
    <div className="flex flex-col space-y-2 pt-6">
      <div className="flex flex-col">
        <span className="dark:text-Snow text-xs font-bold">Email Address</span>

        <span className="text-xs dark:text-gray-600">{CONTACTS.EMAIL}</span>
      </div>
      <div className="flex flex-col">
        <span className="dark:text-Snow text-xs font-bold">Phone</span>
        <span className="text-xs dark:text-gray-600">{CONTACTS.PHONE}</span>
      </div>
    </div>
  );
};

export default Contact;
