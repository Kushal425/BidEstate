import Testimonial from "./Testimonial"
import "./TestimonialList.css"

const TestimonialList = () => {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Marketing Director",
      image: "assets/1.png",
      text: "An exceptional platform that made buying property effortless. The live auction feature kept me engaged and informed throughout the process! I couldn't be happier with my purchase.",
      rating: 5,
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Software Engineer",
      image: "assets/2.png",
      text: "Selling my property on BidEstate was quick and easy. The transparency in bidding gave me confidence and fetched the best price! I highly recommend this platform to anyone looking to buy or sell real estate.",
      rating: 4.5,
    },
    {
      id: 3,
      name: "Emma Rodriguez",
      role: "Small Business Owner",
      image: "assets/3.png",
      text: "The live countdown and bidding updates were fantastic. It felt like I was part of a real auction from the comfort of my home. The platform is user-friendly and the customer support was top-notch. I will definitely use BidEstate again for my next property investment.",
      rating: 5,
    },
    {
      id: 4,
      name: "David Wilson",
      role: "Product Manager",
      image: "assets/4.png",
      text: "BidEstate has simplified property transactions. A user-friendly interface with real-time features makes it stand out in the market. I was able to buy my dream home without any hassle. The bidding process was smooth and transparent, and the customer service was always available to assist.",
      rating: 4.5,
    },
    {
      id: 5,
      name: "Jennifer Lee",
      role: "E-commerce Director",
      image: "assets/5.png",
      text: "Our conversion rates have increased by 28% since we started using this platform. The customer support team has been incredibly helpful throughout our onboarding process.A revolutionary platform for property auctions! BidEstate is reliable, fast, and ensures complete transparency for buyers and sellers alike.",
      rating: 5,
    },
  ]

  return (
    <div className="testimonial-list">
      <h2 className="testimonial-list-title">What Our Customers Say</h2>
      <div className="testimonials-container">
        {testimonials.map((testimonial) => (
          <Testimonial
            key={testimonial.id}
            name={testimonial.name}
            role={testimonial.role}
            image={testimonial.image}
            text={testimonial.text}
            rating={testimonial.rating}
          />
        ))}
      </div>
      <p className="scroll-hint">Scroll to see more testimonials →</p>
    </div>
  )
}

export default TestimonialList
