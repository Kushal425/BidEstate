import "./Testimonial.css"

const Testimonial = ({ image, name, role, text, rating }) => {
  // Generate stars based on rating
  const renderStars = () => {
    const stars = []
    const fullStars = Math.floor(rating)
    const hasHalfStar = rating % 1 !== 0

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <span key={`star-${i}`} className="star">
          ★
        </span>,
      )
    }

    if (hasHalfStar) {
      stars.push(
        <span key="half-star" className="star half">
          ★
        </span>,
      )
    }

    return stars
  }

  return (
    <div className="testimonial">
      <div className="testimonial-content">
        <div className="quote-icon">"</div>
        <p className="testimonial-text">{text}</p>
        <div className="quote-icon closing-quote">"</div>
      </div>
      <div className="testimonial-author">
        <div className="testimonial-image">
          <img src={image || "/placeholder.svg?height=80&width=80"} alt={name} />
        </div>
        <div className="testimonial-info">
          <h3 className="testimonial-name">{name}</h3>
          <p className="testimonial-role">{role}</p>
          {rating && <div className="testimonial-rating">{renderStars()}</div>}
        </div>
      </div>
    </div>
  )
}

export default Testimonial
