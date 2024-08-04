import React from 'react';
import './Testimonials.css';

const Testimonials = () => {
  const cards = [
    {
      imgSrc: "https://dummyimage.com/302x302",
      text: "Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin coffee ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.",
      name: "HOLDEN CAULFIELD",
      role: "Senior Product Designer",
    },
    {
      imgSrc: "https://dummyimage.com/300x300",
      text: "Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin coffee ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.",
      name: "ALPER KAMU",
      role: "UI Developer",
    },
    {
      imgSrc: "https://dummyimage.com/305x305",
      text: "Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin coffee ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.",
      name: "HENRY LETHAM",
      role: "CTO",
    }
  ];

  return (
    <section>
      <div className="container_testimonial">
      <div className="Testimonials-container">
      <div className='Testimonials_button'>
            TESTIMONIALS
        </div>
                <h2 className="Testimonials-title">
                    Hear from our clients.
                </h2>
                <p className="Testimonials-description">
                We have three projects with this template and that is because we love the design, the large number of possibilities.                </p>
            </div>
        <div className="flex">
          {cards.map((card, index) => (
            <div className="card" key={index} style={{ animationDelay: `${index * 0.5}s` }}>
              <div className="text-center">
                <img
                  alt="testimonial"
                  className="testimonial-img"
                  src={card.imgSrc}
                />
                <p className="leading-relaxed">
                  {card.text}
                </p>
                <span className="divider"></span>
                <h2 className="title-font">{card.name}</h2>
                <p className="role">{card.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
