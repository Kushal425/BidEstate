import { useState } from "react"
import "./Buypage.css"

const BidModal = ({ property, isOpen, onClose, onSubmitBid }) => {
  const [bidAmount, setBidAmount] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)

  if (!isOpen || !property) return null

  const minimumBid = property.currentBid + 10000

  const handleSubmit = async (e) => {
    e.preventDefault()

    const bid = Number.parseFloat(bidAmount)
    if (bid < minimumBid) {
      alert(`Minimum bid is Rs.${minimumBid.toLocaleString()}`)
      return
    }

    setIsSubmitting(true)

    try {
      await onSubmitBid(property.id, bid)
      setBidAmount("")
    } catch (error) {
      console.error("Error submitting bid:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose()
    }
  }

  return (
    <div className="modal-overlay" onClick={handleOverlayClick}>
      <div className="modal-content">
        <button className="close-button" onClick={onClose}>
          ×
        </button>

        <div className="modal-header">
          <h2 className="modal-title">{property.name}</h2>
          <p className="modal-subtitle">{property.location}</p>
        </div>

        <div className="modal-body">
          {/* Property Details */}
          <div className="property-details">
            <div className="detail-row">
              <span className="detail-label">Property Type</span>
              <span className="detail-value">{property.type}</span>
            </div>
            <div className="detail-row">
              <span className="detail-label">Bedrooms</span>
              <span className="detail-value">{property.bedrooms}</span>
            </div>
            <div className="detail-row">
              <span className="detail-label">Bathrooms</span>
              <span className="detail-value">{property.bathrooms}</span>
            </div>
            <div className="detail-row">
              <span className="detail-label">Area</span>
              <span className="detail-value">{property.area} sq ft</span>
            </div>
            <div className="detail-row">
              <span className="detail-label">Year Built</span>
              <span className="detail-value">{property.yearBuilt}</span>
            </div>
          </div>

          {/* Owner Details */}
          <div className="owner-details">
            <h3 className="owner-title">Owner Information</h3>
            <div className="detail-row">
              <span className="detail-label">Name</span>
              <span className="detail-value">{property.owner.name}</span>
            </div>
            <div className="detail-row">
              <span className="detail-label">Contact</span>
              <span className="detail-value">{property.owner.phone}</span>
            </div>
            <div className="detail-row">
              <span className="detail-label">Email</span>
              <span className="detail-value">{property.owner.email}</span>
            </div>
          </div>

          {/* Bidding Section */}
          <div className="bid-section">
            <div className="current-bid">
              <div className="current-bid-label">Current Highest Bid</div>
              <div className="current-bid-amount">Rs.{property.currentBid.toLocaleString()}</div>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="bid-input-group">
                <span className="bid-currency">Rs</span>
                <input
                  type="number"
                  className="bid-input"
                  value={bidAmount}
                  onChange={(e) => setBidAmount(e.target.value)}
                  placeholder="Enter your bid"
                  min={minimumBid}
                  step="100"
                  required
                />
              </div>
              <div className="minimum-bid">Minimum bid: Rs.{minimumBid.toLocaleString()}</div>
            </form>
          </div>
        </div>

        <div className="modal-actions">
          <button className="modal-button secondary" onClick={onClose}>
            Cancel
          </button>
          <button className="modal-button primary" onClick={handleSubmit} disabled={isSubmitting || !bidAmount}>
            {isSubmitting ? "Placing Bid..." : "Place Bid"}
          </button>
        </div>
      </div>
    </div>
  )
}

export default BidModal
