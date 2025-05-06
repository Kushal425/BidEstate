import Testimonial from "./Testimonial"
import "./TestimonialList.css"

const TestimonialList = () => {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Marketing Director",
      image: "/placeholder.svg?height=80&width=80",
      text: "This product has completely transformed our workflow. The intuitive interface and powerful features have increased our team's productivity by 40%. I can't imagine going back to our old system.",
      rating: 5,
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Software Engineer",
      image: "/placeholder.svg?height=80&width=80",
      text: "The technical support team is exceptional. They responded to my queries within minutes and helped me solve a complex integration issue. Highly recommended for any tech company.",
      rating: 4.5,
    },
    {
      id: 3,
      name: "Emma Rodriguez",
      role: "Small Business Owner",
      image: "/placeholder.svg?height=80&width=80",
      text: "As a small business owner, I needed an affordable solution that wouldn't compromise on quality. This exceeded my expectations and has been crucial to my business growth.",
      rating: 5,
    },
    {
      id: 4,
      name: "David Wilson",
      role: "Product Manager",
      image: "/placeholder.svg?height=80&width=80",
      text: "The analytics dashboard provides invaluable insights that have helped us make data-driven decisions. The ROI we've seen since implementing this solution has been remarkable.",
      rating: 4.5,
    },
    {
      id: 5,
      name: "Jennifer Lee",
      role: "E-commerce Director",
      image: "/placeholder.svg?height=80&width=80",
      text: "Our conversion rates have increased by 28% since we started using this platform. The customer support team has been incredibly helpful throughout our onboarding process.",
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
