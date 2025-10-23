'use client';

import Image from 'next/image';

export default function Testimonial() {
  const testimonials = [
    {
      text: "I had a great experience working with UJ Software and Solutions. The team is very professional and skilled, and they provided a customized software solution that perfectly suited our business needs. Their customer support is excellent, always available to assist with any issues or questions.",
      name: "Shahrukh Shaikh",
      position: "Business Owner",
      image: "/assets/img/testimonial/testimonial-img1.png"
    },
    {
      text: "We're very happy with UJ software and service. It's easy to use, fast, and reliable. The support team (Vandan) is quick to help. We've had zero downtime and no major issues so far. Definitely a service we trust and recommend.",
      name: "Americo Account",
      position: "Accounting Firm",
      image: "/assets/img/testimonial/testimonial-img2.png"
    },
    {
      text: "The best partner of Tally! Special mention to Anita — she is the best customer support / trusted advisor a business owner can ask for. She has helped me in every step of setting up my business and making my business digital. She is always available to customer calls no matter the time of day!",
      name: "Barkha M",
      position: "Entrepreneur",
      image: "/assets/img/testimonial/testimonial-img3.png"
    },
    {
      text: "I have purchased Tally Prime from UJ Software. Miss Anita Jaiswal is supporting my team more than I expected till now — very accurate, quick and fast response, never ignores calls or messages. No company can give better after-sale service than UJ Software.",
      name: "Ashvini Kumar",
      position: "Business Owner",
      image: "/assets/img/testimonial/testimonial-img1.png"
    },
    {
      text: "Really happy with after-sales service of the company. Support part is too good and plays an important role. Moreover, cloud and software work seamlessly — have not faced any major issues. Extended thanks to Anita Jaiswal for speedy support.",
      name: "Shreyans Kothari",
      position: "Finance Manager",
      image: "/assets/img/testimonial/testimonial-img2.png"
    },
    {
      text: "The services are really good, especially Tally on Cloud — fast and easy to use. Other services are also great. Thanks to Nisha for her helpful and friendly support. Truly appreciate your dedication and expertise.",
      name: "Jaimin Ajmera",
      position: "Chartered Accountant",
      image: "/assets/img/testimonial/testimonial-img3.png"
    }
  ];

  return (
    <div className="testimonial-area testimonial-area-mb ptb-100">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-6">
              <div className="testimonial-list">
                <div className="list-img-1">
                  <img src="assets/img/testimonial/testimonial1.png" alt="Happy Client" />
                </div>
                <div className="list-img-2">
                  <img src="assets/img/testimonial/testimonial2.png" alt="Satisfied Customer" />
                </div>
                <div className="list-img-3">
                  <img src="assets/img/testimonial/testimonial3.png" alt="Client Review" />
                </div>
                <div className="list-img-4">
                  <img src="assets/img/testimonial/testimonial4.png" alt="Customer Testimonial" />
                </div>
                <div className="list-img-5">
                  <img src="assets/img/testimonial/testimonial5.png" alt="Client Feedback" />
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="testimonial-title">
                <span className="sp-before sp-after">Our Happy Clients</span>
                <h2>What Our Clients Say About Us</h2>
                <p className="mt-3">Real experiences from businesses we've helped grow with our solutions</p>
              </div>
              <div className="testimonial-slider owl-carousel owl-theme">
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="testimonial-item">
                    <div className="rating mb-3">
                      <i className='bx bxs-star'></i>
                      <i className='bx bxs-star'></i>
                      <i className='bx bxs-star'></i>
                      <i className='bx bxs-star'></i>
                      <i className='bx bxs-star'></i>
                    </div>
                    <p>{testimonial.text}</p>
                    <div className="content">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                      />
                      <div className="content-title">
                        <h3>{testimonial.name}</h3>
                        <span>{testimonial.position}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}
