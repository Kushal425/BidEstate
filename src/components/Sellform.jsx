import { useState } from "react"
import "./Sellform.css"

const SellForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    propertyAddress: "",
    description: "",
    startingPrice: "",
    endDate: "",
    images: [],
  })

  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showSuccessModal, setShowSuccessModal] = useState(false)
  const [dragOver, setDragOver] = useState(false)

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))

    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }))
    }
  }

  const handleImageUpload = (files) => {
    const newImages = Array.from(files).map((file) => ({
      file,
      url: URL.createObjectURL(file),
      id: Date.now() + Math.random(),
    }))

    setFormData((prev) => ({
      ...prev,
      images: [...prev.images, ...newImages].slice(0, 5), 
    }))
  }

  const handleFileInputChange = (e) => {
    if (e.target.files.length > 0) {
      handleImageUpload(e.target.files)
    }
  }

  const handleDragOver = (e) => {
    e.preventDefault()
    setDragOver(true)
  }

  const handleDragLeave = (e) => {
    e.preventDefault()
    setDragOver(false)
  }

  const handleDrop = (e) => {
    e.preventDefault()
    setDragOver(false)
    const files = e.dataTransfer.files
    if (files.length > 0) {
      handleImageUpload(files)
    }
  }

  const removeImage = (imageId) => {
    setFormData((prev) => ({
      ...prev,
      images: prev.images.filter((img) => img.id !== imageId),
    }))
  }

  const validateForm = () => {
    const newErrors = {}

    if (!formData.name.trim()) {
      newErrors.name = "Name is required"
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required"
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address"
    }

    if (!formData.propertyAddress.trim()) {
      newErrors.propertyAddress = "Property address is required"
    }

    if (!formData.description.trim()) {
      newErrors.description = "Property description is required"
    } else if (formData.description.trim().length < 50) {
      newErrors.description = "Description must be at least 50 characters long"
    }

    if (!formData.startingPrice.trim()) {
      newErrors.startingPrice = "Starting price is required"
    } else if (isNaN(formData.startingPrice) || Number.parseFloat(formData.startingPrice) <= 0) {
      newErrors.startingPrice = "Please enter a valid price"
    }

    if (!formData.endDate.trim()) {
      newErrors.endDate = "Auction end date is required"
    } else {
      const selectedDate = new Date(formData.endDate)
      const today = new Date()
      today.setHours(0, 0, 0, 0)

      if (selectedDate <= today) {
        newErrors.endDate = "End date must be in the future"
      }
    }

    if (formData.images.length === 0) {
      newErrors.images = "At least one property image is required"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const sendConfirmationEmail = async (formData) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log("Confirmation email sent to:", formData.email)
        console.log("Form data submitted:", formData)
        resolve()
      }, 1000)
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)

    try {
      await new Promise((resolve) => setTimeout(resolve, 2000))

      await sendConfirmationEmail(formData)

      setShowSuccessModal(true)

      setFormData({
        name: "",
        email: "",
        propertyAddress: "",
        description: "",
        startingPrice: "",
        endDate: "",
        images: [],
      })
    } catch (error) {
      console.error("Error submitting form:", error)
      alert("There was an error submitting your property. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const closeModal = () => {
    setShowSuccessModal(false)
  }

  const getTomorrowDate = () => {
    const tomorrow = new Date()
    tomorrow.setDate(tomorrow.getDate() + 1)
    return tomorrow.toISOString().split("T")[0]
  }

  return (
    <div className="sell-form-container">
      <div className="sell-form-wrapper">
        <div className="form-header">
          <h1 className="form-title">List Your Property</h1>
          <p className="form-subtitle">
            Join thousands of sellers who have successfully auctioned their properties on our platform. Fill out the
            form below to get started.
          </p>
        </div>

        <div className="form-content">
          <form onSubmit={handleSubmit}>
            <div className="form-grid">
              {/* Name */}
              <div className="form-group half">
                <label htmlFor="name" className="form-label required">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className={`form-input ${errors.name ? "error" : ""}`}
                  placeholder="Enter your full name"
                />
                {errors.name && <div className="form-error">{errors.name}</div>}
              </div>

              {/* Email */}
              <div className="form-group half">
                <label htmlFor="email" className="form-label required">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className={`form-input ${errors.email ? "error" : ""}`}
                  placeholder="Enter your email address"
                />
                {errors.email && <div className="form-error">{errors.email}</div>}
              </div>

              {/* Property Address */}
              <div className="form-group full">
                <label htmlFor="propertyAddress" className="form-label required">
                  Property Address
                </label>
                <input
                  type="text"
                  id="propertyAddress"
                  name="propertyAddress"
                  value={formData.propertyAddress}
                  onChange={handleInputChange}
                  className={`form-input ${errors.propertyAddress ? "error" : ""}`}
                  placeholder="Enter complete property address"
                />
                {errors.propertyAddress && <div className="form-error">{errors.propertyAddress}</div>}
              </div>

              {/* Property Images */}
              <div className="form-group full">
                <label className="form-label required">Property Images (Max 5)</label>
                <div
                  className={`file-upload-area ${dragOver ? "dragover" : ""}`}
                  onDragOver={handleDragOver}
                  onDragLeave={handleDragLeave}
                  onDrop={handleDrop}
                  onClick={() => document.getElementById("imageInput").click()}
                >
                  <svg className="file-upload-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                    />
                  </svg>
                  <div className="file-upload-text">Click to upload or drag and drop</div>
                  <div className="file-upload-subtext">PNG, JPG, GIF up to 10MB each</div>
                </div>
                <input
                  type="file"
                  id="imageInput"
                  className="file-input"
                  multiple
                  accept="image/*"
                  onChange={handleFileInputChange}
                />
                {errors.images && <div className="form-error">{errors.images}</div>}

                {formData.images.length > 0 && (
                  <div className="uploaded-images">
                    {formData.images.map((image) => (
                      <div key={image.id} className="uploaded-image">
                        <img src={image.url || "/placeholder.svg"} alt="Property" />
                        <button type="button" className="remove-image" onClick={() => removeImage(image.id)}>
                          ×
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Description */}
              <div className="form-group full">
                <label htmlFor="description" className="form-label required">
                  Property Description
                </label>
                <textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  className={`form-textarea ${errors.description ? "error" : ""}`}
                  placeholder="Describe your property in detail (minimum 50 characters)..."
                  rows="5"
                />
                <div style={{ fontSize: "0.875rem", color: "#6b7280", marginTop: "0.25rem" }}>
                  {formData.description.length}/50 characters minimum
                </div>
                {errors.description && <div className="form-error">{errors.description}</div>}
              </div>

              {/* Starting Price */}
              <div className="form-group half">
                <label htmlFor="startingPrice" className="form-label required">
                  Starting Price
                </label>
                <div className="price-input-group">
                  <span className="price-symbol">Rs</span>
                  <input
                    type="number"
                    id="startingPrice"
                    name="startingPrice"
                    value={formData.startingPrice}
                    onChange={handleInputChange}
                    className={`form-input price-input ${errors.startingPrice ? "error" : ""}`}
                    placeholder="0.00"
                    min="0"
                    step="0.01"
                  />
                </div>
                {errors.startingPrice && <div className="form-error">{errors.startingPrice}</div>}
              </div>

              {/* End Date */}
              <div className="form-group half">
                <label htmlFor="endDate" className="form-label required">
                  Auction End Date
                </label>
                <input
                  type="date"
                  id="endDate"
                  name="endDate"
                  value={formData.endDate}
                  onChange={handleInputChange}
                  className={`form-input ${errors.endDate ? "error" : ""}`}
                  min={getTomorrowDate()}
                />
                {errors.endDate && <div className="form-error">{errors.endDate}</div>}
              </div>
            </div>

            <button type="submit" className="submit-button" disabled={isSubmitting}>
              {isSubmitting && <span className="loading-spinner"></span>}
              {isSubmitting ? "Submitting Property..." : "List My Property"}
            </button>
          </form>
        </div>
      </div>

      {/* Success Modal */}
      {showSuccessModal && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <svg className="success-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <h2 className="modal-title">Property Listed Successfully!</h2>
            <p className="modal-text">
              Thank you for listing your property with us. A confirmation email has been sent to{" "}
              <strong>{formData.email}</strong> with all the details. Our team will review your submission and contact
              you within 24 hours.
            </p>
            <button className="modal-button" onClick={closeModal}>
              Continue
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default SellForm
