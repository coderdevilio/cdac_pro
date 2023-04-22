import React from 'react';

const testimonials = [
  {
    name: 'John Smith',
    position: 'CEO, Acme Inc.',
    testimonial: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec felis eget urna malesuada fermentum.',
    image: 'https://via.placeholder.com/150',
  },
  {
    name: 'Jane Doe',
    position: 'CTO, XYZ Corp.',
    testimonial: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    image: 'https://via.placeholder.com/150',
  },
];

const Testimonial = ({ name, position, testimonial, image }) => {
  return (
    <div className="testimonial">
      <div className="testimonial-image">
        <img src={image} alt={name} />
      </div>
      <div className="testimonial-text">
        <p>{testimonial}</p>
        <h4>{name}</h4>
        <span>{position}</span>
      </div>
    </div>
  );
};

const Testimonials = () => {
  return (
    <div className="testimonials">
      {testimonials.map((testimonial, index) => (
        <Testimonial
          key={index}
          name={testimonial.name}
          position={testimonial.position}
          testimonial={testimonial.testimonial}
          image={testimonial.image}
        />
      ))}
    </div>
  );
};

export default Testimonials;
