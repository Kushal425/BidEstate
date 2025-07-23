import { useState, useEffect } from "react"
import "./Buypage.css"

const PropertyCard = ({ property, onBidClick }) => {
  const [timeLeft, setTimeLeft] = useState("")

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date().getTime()
      const endTime = new Date(property.auctionEndDate).getTime()
      const difference = endTime - now

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24))
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))

        if (days > 0) {
          setTimeLeft(`${days}d ${hours}h ${minutes}m`)
        } else if (hours > 0) {
          setTimeLeft(`${hours}h ${minutes}m`)
        } else {
          setTimeLeft(`${minutes}m`)
        }
      } else {
        setTimeLeft("Auction Ended")
      }
    }

    calculateTimeLeft()
    const timer = setInterval(calculateTimeLeft, 60000) // Update every minute

    return () => clearInterval(timer)
  }, [property.auctionEndDate])

  const isEndingSoon = () => {
    const now = new Date().getTime()
    const endTime = new Date(property.auctionEndDate).getTime()
    const difference = endTime - now
    return difference < 24 * 60 * 60 * 1000 // Less than 24 hours
  }

  return (
    <div className="property-card">
      <img src={property.image || "/placeholder.svg"} alt={property.name} className="property-image" />
      <div className="property-content">
        <h3 className="property-name">{property.name}</h3>
        <div className="property-location">
          <svg className="location-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
            />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          {property.location}
        </div>
        <div className="property-price">Rs.{property.currentBid.toLocaleString()}</div>
        <div className={`auction-timer ${isEndingSoon() ? "ending-soon" : ""}`}>
          {timeLeft === "Auction Ended" ? "Auction Ended" : `Ends in: ${timeLeft}`}
        </div>
        <button className="bid-button" onClick={() => onBidClick(property)} disabled={timeLeft === "Auction Ended"}>
          {timeLeft === "Auction Ended" ? "Auction Ended" : "Place Bid"}
        </button>
      </div>
    </div>
  )
}

export default PropertyCard
