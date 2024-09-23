import React from "react";
import { Pricing } from "../../..";
import "./pricing-screen.css";

export const PricingScreen = () => {
  return (
    <Pricing
      breakpoint="desktop"
      className="pricing-18"
      contentClassName="pricing-instance"
      sectionTitleClassName="pricing-instance"
    />
  );
};