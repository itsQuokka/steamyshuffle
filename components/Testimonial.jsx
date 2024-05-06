import React from "react";
import TestimonialSlider from "./TestimonialSlider";

const Testimonial = () => {
  return (
    <section
      className="section flex items-center border-t border-accent"
      id="testimonial"
    >
      <div className="container mx-auto">
        <TestimonialSlider />
      </div>
    </section>
  );
};

export default Testimonial;
