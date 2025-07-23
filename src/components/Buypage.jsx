import { useState, useEffect } from "react"
import PropertyCard from "./Propertycard"
import BidModal from "./BidModel"
import "./Buypage.css"

const BuyPage = () => {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedProperty, setSelectedProperty] = useState(null)
  const [showBidModal, setShowBidModal] = useState(false)
  const [showSuccessModal, setShowSuccessModal] = useState(false)
  const [filters, setFilters] = useState({
    propertyType: "",
    minPrice: "",
    maxPrice: "",
    bedrooms: "",
    bathrooms: "",
    location: "",
    features: [],
  })

  const [properties] = useState([
    {
      id: 1,
      name: "Modern Downtown Apartment",
      location: "Downtown, New York",
      currentBid: 450000,
      auctionEndDate: "2026-02-15T18:00:00",
      image: "assets/modern-downtown-apartment.jpeg",
      type: "Apartment",
      bedrooms: 2,
      bathrooms: 2,
      area: 1200,
      yearBuilt: 2020,
      owner: {
        name: "John Smith",
        phone: "+1 (555) 123-4567",
        email: "john.smith@email.com",
      },
    },
    {
      id: 2,
      name: "Luxury Family Villa",
      location: "Beverly Hills, CA",
      currentBid: 1250000,
      auctionEndDate: "2026-02-20T15:30:00",
      image: "assets/Luxury-Villa.jpeg",
      type: "House",
      bedrooms: 5,
      bathrooms: 4,
      area: 3500,
      yearBuilt: 2018,
      owner: {
        name: "Sarah Johnson",
        phone: "+1 (555) 987-6543",
        email: "sarah.johnson@email.com",
      },
    },
    {
      id: 3,
      name: "Cozy Suburban Home",
      location: "Suburbs, Austin TX",
      currentBid: 320000,
      auctionEndDate: "2025-08-12T12:00:00",
      image: "assets/cozy-suburban-home.jpeg",
      type: "House",
      bedrooms: 3,
      bathrooms: 2,
      area: 1800,
      yearBuilt: 2015,
      owner: {
        name: "Mike Davis",
        phone: "+1 (555) 456-7890",
        email: "mike.davis@email.com",
      },
    },
    {
      id: 4,
      name: "Waterfront Condo",
      location: "Miami Beach, FL",
      currentBid: 680000,
      auctionEndDate: "2025-07-25T20:00:00",
      image: "assets/waterfront-condo.jpeg",
      type: "Condo",
      bedrooms: 2,
      bathrooms: 2,
      area: 1400,
      yearBuilt: 2019,
      owner: {
        name: "Lisa Rodriguez",
        phone: "+1 (555) 321-0987",
        email: "lisa.rodriguez@email.com",
      },
    },
    {
      id: 5,
      name: "Historic Townhouse",
      location: "Boston, MA",
      currentBid: 890000,
      auctionEndDate: "2025-07-24T16:45:00",
      image: "assets/historic-townhouse.jpeg",
      type: "Townhouse",
      bedrooms: 4,
      bathrooms: 3,
      area: 2200,
      yearBuilt: 1920,
      owner: {
        name: "Robert Wilson",
        phone: "+1 (555) 654-3210",
        email: "robert.wilson@email.com",
      },
    },
    {
      id: 6,
      name: "Mountain View Cabin",
      location: "Aspen, CO",
      currentBid: 750000,
      auctionEndDate: "2024-02-22T14:30:00",
      image: "assets/mountain-cabin.jpeg",
      type: "Cabin",
      bedrooms: 3,
      bathrooms: 2,
      area: 1600,
      yearBuilt: 2017,
      owner: {
        name: "Emily Chen",
        phone: "+1 (555) 789-0123",
        email: "emily.chen@email.com",
      },
    },
  ])

  const [filteredProperties, setFilteredProperties] = useState(properties)

  useEffect(() => {
    let filtered = properties

    if (searchTerm) {
      filtered = filtered.filter(
        (property) =>
          property.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          property.location.toLowerCase().includes(searchTerm.toLowerCase()),
      )
    }

    if (filters.propertyType) {
      filtered = filtered.filter((property) => property.type === filters.propertyType)
    }

    if (filters.minPrice) {
      filtered = filtered.filter((property) => property.currentBid >= Number.parseInt(filters.minPrice))
    }
    if (filters.maxPrice) {
      filtered = filtered.filter((property) => property.currentBid <= Number.parseInt(filters.maxPrice))
    }

    if (filters.bedrooms) {
      filtered = filtered.filter((property) => property.bedrooms >= Number.parseInt(filters.bedrooms))
    }

    if (filters.bathrooms) {
      filtered = filtered.filter((property) => property.bathrooms >= Number.parseInt(filters.bathrooms))
    }

    if (filters.location) {
      filtered = filtered.filter((property) => property.location.toLowerCase().includes(filters.location.toLowerCase()))
    }

    setFilteredProperties(filtered)
  }, [searchTerm, filters, properties])

  const handleFilterChange = (filterName, value) => {
    setFilters((prev) => ({
      ...prev,
      [filterName]: value,
    }))
  }

  const handleFeatureChange = (feature, checked) => {
    setFilters((prev) => ({
      ...prev,
      features: checked ? [...prev.features, feature] : prev.features.filter((f) => f !== feature),
    }))
  }

  const clearFilters = () => {
    setFilters({
      propertyType: "",
      minPrice: "",
      maxPrice: "",
      bedrooms: "",
      bathrooms: "",
      location: "",
      features: [],
    })
    setSearchTerm("")
  }

  const handleBidClick = (property) => {
    setSelectedProperty(property)
    setShowBidModal(true)
  }

  const handleSubmitBid = async (propertyId, bidAmount) => {
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setShowBidModal(false)
    setShowSuccessModal(true)

    console.log(`Bid submitted: Rs.${bidAmount} for property ${propertyId}`)
  }

  const closeSuccessModal = () => {
    setShowSuccessModal(false)
    setSelectedProperty(null)
  }

  return (
    <div className="buy-page-container">
      {/* Header */}
      <div className="buy-page-header">
        <h1 className="header-title-buy">Find Your Dream Property</h1>
      </div>

      {/* Search Section */}
      <div className="search-section">
        <div className="search-container">
          <svg className="search-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
          <input
            type="text"
            className="search-input"
            placeholder="Search properties by name or location..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      {/* Main Content */}
      <div className="main-content">
        {/* Filters Sidebar */}
        <div className="filters-sidebar">
          <h2 className="filters-title">Filters</h2>

          {/* Property Type */}
          <div className="filter-group">
            <label className="filter-label">Property Type</label>
            <select
              className="filter-select"
              value={filters.propertyType}
              onChange={(e) => handleFilterChange("propertyType", e.target.value)}
            >
              <option value="">All Types</option>
              <option value="House">House</option>
              <option value="Apartment">Apartment</option>
              <option value="Condo">Condo</option>
              <option value="Townhouse">Townhouse</option>
              <option value="Cabin">Cabin</option>
            </select>
          </div>

          {/* Price Range */}
          <div className="filter-group">
            <label className="filter-label">Price Range</label>
            <div className="price-range">
              <input
                type="number"
                className="filter-input"
                placeholder="Min Price"
                value={filters.minPrice}
                onChange={(e) => handleFilterChange("minPrice", e.target.value)}
              />
              <input
                type="number"
                className="filter-input"
                placeholder="Max Price"
                value={filters.maxPrice}
                onChange={(e) => handleFilterChange("maxPrice", e.target.value)}
              />
            </div>
          </div>

          {/* Bedrooms */}
          <div className="filter-group">
            <label className="filter-label">Minimum Bedrooms</label>
            <select
              className="filter-select"
              value={filters.bedrooms}
              onChange={(e) => handleFilterChange("bedrooms", e.target.value)}
            >
              <option value="">Any</option>
              <option value="1">1+</option>
              <option value="2">2+</option>
              <option value="3">3+</option>
              <option value="4">4+</option>
              <option value="5">5+</option>
            </select>
          </div>

          {/* Bathrooms */}
          <div className="filter-group">
            <label className="filter-label">Minimum Bathrooms</label>
            <select
              className="filter-select"
              value={filters.bathrooms}
              onChange={(e) => handleFilterChange("bathrooms", e.target.value)}
            >
              <option value="">Any</option>
              <option value="1">1+</option>
              <option value="2">2+</option>
              <option value="3">3+</option>
              <option value="4">4+</option>
            </select>
          </div>

          {/* Location */}
          <div className="filter-group">
            <label className="filter-label">Location</label>
            <input
              type="text"
              className="filter-input"
              placeholder="Enter city or area"
              value={filters.location}
              onChange={(e) => handleFilterChange("location", e.target.value)}
            />
          </div>

          {/* Features */}
          <div className="filter-group">
            <label className="filter-label">Features</label>
            <div className="checkbox-group">
              {["Pool", "Garage", "Garden", "Fireplace", "Balcony"].map((feature) => (
                <div key={feature} className="checkbox-item">
                  <input
                    type="checkbox"
                    id={feature}
                    checked={filters.features.includes(feature)}
                    onChange={(e) => handleFeatureChange(feature, e.target.checked)}
                  />
                  <label htmlFor={feature}>{feature}</label>
                </div>
              ))}
            </div>
          </div>

          <button className="clear-filters" onClick={clearFilters}>
            Clear All Filters
          </button>
        </div>

        {/* Properties Section */}
        <div className="properties-section">
          {/* Results Header */}
          <div className="results-header">
            <div className="results-count">{filteredProperties.length} properties found</div>
            <select className="sort-select">
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="ending-soon">Ending Soon</option>
              <option value="newest">Newest First</option>
            </select>
          </div>

          {/* Properties Grid */}
          <div className="properties-grid">
            {filteredProperties.map((property) => (
              <PropertyCard key={property.id} property={property} onBidClick={handleBidClick} />
            ))}
          </div>

          {filteredProperties.length === 0 && (
            <div style={{ textAlign: "center", padding: "3rem", color: "#6b7280" }}>
              <p>No properties found matching your criteria.</p>
              <button
                onClick={clearFilters}
                style={{
                  marginTop: "1rem",
                  color: "#4f46e5",
                  textDecoration: "underline",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                }}
              >
                Clear filters to see all properties
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Bid Modal */}
      <BidModal
        property={selectedProperty}
        isOpen={showBidModal}
        onClose={() => setShowBidModal(false)}
        onSubmitBid={handleSubmitBid}
      />

      {/* Success Modal */}
      {showSuccessModal && (
        <div className="modal-overlay" onClick={closeSuccessModal}>
          <div className="modal-content success-modal" onClick={(e) => e.stopPropagation()}>
            <svg className="success-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <h2 className="success-title">Bid Placed Successfully!</h2>
            <p className="success-text">
              Your bid has been submitted successfully. Our team will contact you within 24 hours with updates on the
              auction status. You will receive email notifications for any bid updates.
            </p>
            <button className="success-button" onClick={closeSuccessModal}>
              Continue Browsing
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default BuyPage
