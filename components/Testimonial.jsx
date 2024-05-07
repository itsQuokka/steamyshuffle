import React from "react";
import TestimonialSlider from "./TestimonialSlider";

const Testimonial = () => {
  return (
    <section className="section flex items-center" id="testimonial">
      <div className="container mx-auto">
        <h2 className="text-center">Hear the Reviews</h2>
        <p className="text-center mb-[30px]">
          Don't take our word for it, take theirs!
        </p>
        <TestimonialSlider />
      </div>
    </section>
  );
};

export default Testimonial;
