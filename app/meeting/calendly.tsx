"use client";

import { InlineWidget } from "react-calendly";

const Calendly = () => {
  return (
    <div className="w-full">
      <InlineWidget
        url="https://calendly.com/mzcopakistan/30min"
        styles={{
          height: "650px", // reduced height
          width: "100%",
          backgroundColor: "white",
          borderRadius: "12px",
          boxShadow: "0 8px 24px rgba(35,39,99,.12)",
        }}
        pageSettings={{
          backgroundColor: "ffffff",
          hideEventTypeDetails: false,
          hideLandingPageDetails: false,
          primaryColor: "68C3AA", // brand teal
          textColor: "232763", // brand navy
        }}
      />
    </div>
  );
};

export default Calendly;
