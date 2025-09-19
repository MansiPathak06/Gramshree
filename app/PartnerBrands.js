"use client";

import React, { useState, useCallback, useMemo } from "react";

// BrandIcon component moved outside to prevent re-renders
const BrandIcon = ({ type, isWhite = false }) => {
  const iconColor = isWhite ? "#fff" : "#333";

  const iconMap = useMemo(() => ({
    "retail-1": (
      <svg viewBox="0 0 100 100" fill="none" className="w-full h-full" role="img" aria-label="Retail icon">
        <rect
          x="20"
          y="30"
          width="60"
          height="40"
          stroke={iconColor}
          strokeWidth="2"
          fill="none"
        />
        <path d="M30 40 L70 40" stroke={iconColor} strokeWidth="2" />
        <circle cx="35" cy="55" r="3" fill={iconColor} />
        <circle cx="65" cy="55" r="3" fill={iconColor} />
      </svg>
    ),
    "fmcg-1": (
      <svg viewBox="0 0 100 100" fill="none" className="w-full h-full" role="img" aria-label="FMCG icon">
        <circle
          cx="50"
          cy="50"
          r="25"
          stroke={iconColor}
          strokeWidth="2"
          fill="none"
        />
        <path
          d="M35 45 Q50 35 65 45"
          stroke={iconColor}
          strokeWidth="2"
          fill="none"
        />
        <path d="M40 55 L60 55" stroke={iconColor} strokeWidth="2" />
      </svg>
    ),
    "electronics-1": (
      <svg viewBox="0 0 100 100" fill="none" className="w-full h-full" role="img" aria-label="Electronics icon">
        <rect
          x="25"
          y="35"
          width="50"
          height="30"
          stroke={iconColor}
          strokeWidth="2"
          fill="none"
        />
        <circle
          cx="40"
          cy="50"
          r="5"
          stroke={iconColor}
          strokeWidth="1"
          fill="none"
        />
        <circle
          cx="60"
          cy="50"
          r="5"
          stroke={iconColor}
          strokeWidth="1"
          fill="none"
        />
      </svg>
    ),
    "manufacturing-1": (
      <svg viewBox="0 0 100 100" fill="none" className="w-full h-full" role="img" aria-label="Manufacturing icon">
        <path
          d="M30 20 L30 70 L70 70 L70 20"
          stroke={iconColor}
          strokeWidth="2"
          fill="none"
        />
        <path
          d="M40 30 L60 30 M40 40 L60 40 M40 50 L60 50"
          stroke={iconColor}
          strokeWidth="1"
        />
        <rect x="45" y="10" width="10" height="10" fill={iconColor} />
      </svg>
    ),
    "services-1": (
      <svg viewBox="0 0 100 100" fill="none" className="w-full h-full" role="img" aria-label="Services icon">
        <circle
          cx="50"
          cy="50"
          r="30"
          stroke={iconColor}
          strokeWidth="2"
          fill="none"
        />
        <path
          d="M35 50 L45 60 L65 40"
          stroke={iconColor}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    "retail-2": (
      <svg viewBox="0 0 100 100" fill="none" className="w-full h-full" role="img" aria-label="Retail store icon">
        <rect
          x="25"
          y="25"
          width="50"
          height="50"
          stroke={iconColor}
          strokeWidth="2"
          fill="none"
        />
        <path
          d="M35 35 L65 35 M35 45 L65 45 M35 55 L65 55 M35 65 L65 65"
          stroke={iconColor}
          strokeWidth="1"
        />
      </svg>
    ),
    "fmcg-2": (
      <svg viewBox="0 0 100 100" fill="none" className="w-full h-full" role="img" aria-label="FMCG product icon">
        <path
          d="M30 30 Q50 20 70 30 L70 60 Q50 70 30 60 Z"
          stroke={iconColor}
          strokeWidth="2"
          fill="none"
        />
        <circle
          cx="50"
          cy="45"
          r="8"
          stroke={iconColor}
          strokeWidth="1"
          fill="none"
        />
      </svg>
    ),
    "electronics-2": (
      <svg viewBox="0 0 100 100" fill="none" className="w-full h-full" role="img" aria-label="Electronics device icon">
        <rect
          x="20"
          y="40"
          width="60"
          height="20"
          stroke={iconColor}
          strokeWidth="2"
          fill="none"
        />
        <circle cx="30" cy="50" r="3" fill={iconColor} />
        <circle cx="50" cy="50" r="3" fill={iconColor} />
        <circle cx="70" cy="50" r="3" fill={iconColor} />
      </svg>
    ),
  }), [iconColor]);

  return (
    iconMap[type] || (
      <svg viewBox="0 0 100 100" fill="none" className="w-full h-full" role="img" aria-label="Brand icon">
        <circle
          cx="50"
          cy="50"
          r="25"
          stroke={iconColor}
          strokeWidth="2"
          fill="none"
        />
        <text
          x="50"
          y="55"
          textAnchor="middle"
          fill={iconColor}
          fontSize="16"
          fontWeight="bold"
        >
          B
        </text>
      </svg>
    )
  );
};

const PartnerBrands = () => {
  const [hoveredBrand, setHoveredBrand] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = useMemo(() => [
    "All",
    "Retail",
    "Services",
    "Manufacturing",
    "FMCG",
    "Electronics",
  ], []);

  const partnerBrandsData = useMemo(() => [
    {
      id: "retail-1",
      name: "RELIANCE FRESH",
      category: "Retail",
      description:
        "Leading retail chain offering fresh groceries, vegetables, and daily essentials with over 1000+ stores across India.",
      products: "5000+ SKUs",
      revenue: "₹50Cr+ annually",
    },
    {
      id: "fmcg-1",
      name: "HINDUSTAN UNILEVER",
      category: "FMCG",
      description:
        "Global consumer goods company offering personal care, home care, and food & beverages products.",
      products: "700+ Brands",
      revenue: "₹200Cr+ annually",
    },
    {
      id: "electronics-1",
      name: "SAMSUNG",
      category: "Electronics",
      description:
        "World leader in consumer electronics, mobile devices, and home appliances with innovative technology solutions.",
      products: "200+ Models",
      revenue: "₹80Cr+ annually",
    },
    {
      id: "manufacturing-1",
      name: "TATA CONSUMER",
      category: "Manufacturing",
      description:
        "Leading manufacturer of tea, coffee, salt, and packaged foods with trusted brands across India.",
      products: "50+ Brands",
      revenue: "₹120Cr+ annually",
    },
    {
      id: "services-1",
      name: "FLIPKART",
      category: "Services",
      description:
        "E-commerce marketplace providing online retail services, logistics, and digital payment solutions.",
      products: "1M+ Products",
      revenue: "₹300Cr+ annually",
    },
    {
      id: "retail-2",
      name: "BIG BAZAAR",
      category: "Retail",
      description:
        "Hypermarket chain offering fashion, food, electronics, and home essentials at affordable prices.",
      products: "10000+ SKUs",
      revenue: "₹75Cr+ annually",
    },
    {
      id: "fmcg-2",
      name: "NESTLE",
      category: "FMCG",
      description:
        "Multinational food and beverage company known for nutrition, health, and wellness products.",
      products: "2000+ Products",
      revenue: "₹150Cr+ annually",
    },
    {
      id: "electronics-2",
      name: "LG ELECTRONICS",
      category: "Electronics",
      description:
        "Global electronics company providing home appliances, mobile devices, and air conditioning solutions.",
      products: "150+ Models",
      revenue: "₹60Cr+ annually",
    },
  ], []);

  const filteredBrands = useMemo(() => {
    return partnerBrandsData.filter((brand) => {
      const matchesSearch =
        brand.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        brand.category.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory =
        activeCategory === "All" || brand.category === activeCategory;
      return matchesSearch && matchesCategory;
    });
  }, [partnerBrandsData, searchTerm, activeCategory]);

  const handleSearchChange = useCallback((e) => {
    setSearchTerm(e.target.value);
  }, []);

  const handleSearchClear = useCallback(() => {
    setSearchTerm("");
  }, []);

  const handleCategoryChange = useCallback((category) => {
    setActiveCategory(category);
  }, []);

  const handleBrandHover = useCallback((brandId) => {
    setHoveredBrand(brandId);
  }, []);

  const handleBrandLeave = useCallback(() => {
    setHoveredBrand(null);
  }, []);

  const handleClearSearch = useCallback(() => {
    setSearchTerm("");
  }, []);

  const handleShowAllCategories = useCallback(() => {
    setActiveCategory("All");
  }, []);

  return (
    <section className="py-20 bg-gradient-to-br from-green-50 to-orange-50">
      <div className="mart-section">
        <div
          className="brands-container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
          id="brandsContainer"
        >
          {/* Search Section */}
          <div className="search-section text-center mb-16">
            <h1 className="title text-4xl md:text-5xl font-bold text-gray-800 mb-8 tracking-wider">
              PARTNER BRANDS & CATEGORIES
            </h1>
            <div className="search-box relative max-w-md mx-auto mb-8">
              <input
                type="text"
                className="search-input w-full px-6 py-4 text-lg border-2 border-gray-300 rounded-full focus:border-green-500 focus:outline-none transition-colors duration-300 pr-12 placeholder-gray-600 text-gray-900 focus:shadow-[0_0_0_3px_rgba(34,197,94,0.1)]"
                placeholder="Search Brand or Category"
                value={searchTerm}
                onChange={handleSearchChange}
                aria-label="Search brands and categories"
              />

              {searchTerm && (
                <button
                  type="button"
                  className="search-close absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-red-500 text-2xl font-bold transition-colors duration-200"
                  onClick={handleSearchClear}
                  aria-label="Clear search"
                >
                  ×
                </button>
              )}
            </div>

            {/* Category Filters */}
            <div className="category-filters flex flex-wrap justify-center gap-3 mb-8">
              {categories.map((category) => (
                <button
                  key={category}
                  type="button"
                  onClick={() => handleCategoryChange(category)}
                  className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                    activeCategory === category
                      ? "bg-green-500 text-white shadow-lg"
                      : "bg-white text-gray-600 border-2 border-gray-300 hover:border-orange-400 hover:text-green-600"
                  }`}
                  aria-pressed={activeCategory === category}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Brands Grid */}
          <div className="brands-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {filteredBrands.map((brand, index) => (
              <div
                key={brand.id}
                className={`brand-item group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 cursor-pointer overflow-hidden min-h-[280px] ${
                  hoveredBrand === brand.id ? "z-20" : "z-10"
                } opacity-0 translate-y-8 animate-[fadeInUp_0.8s_ease-out_forwards]`}
                style={{
                  animationDelay: `${index * 100}ms`,
                }}
                onMouseEnter={() => handleBrandHover(brand.id)}
                onMouseLeave={handleBrandLeave}
              >
                {/* Main Card Content */}
                <div
                  className={`p-6 text-center h-full flex flex-col justify-center transition-all duration-500 ${
                    hoveredBrand === brand.id
                      ? "opacity-0 pointer-events-none"
                      : "opacity-100"
                  }`}
                >
                  <div className="brand-logo w-16 h-16 mx-auto mb-4 transition-transform duration-300 group-hover:scale-110">
                    <BrandIcon type={brand.id} />
                  </div>
                  <h3 className="brand-name text-base font-bold text-gray-800 mb-2 tracking-wide leading-tight">
                    {brand.name}
                  </h3>
                  <p className="brand-category text-sm text-gray-600 font-medium">
                    {brand.category}
                  </p>
                </div>

                {/* Dropdown Content */}
                <div
                  className={`brand-dropdown absolute inset-0 bg-gray-800 text-white p-6 flex flex-col justify-center transition-all duration-500 ${
                    hoveredBrand === brand.id
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-full pointer-events-none"
                  }`}
                >
                  <div className="dropdown-logo w-10 h-10 mx-auto mb-3">
                    <BrandIcon type={brand.id} isWhite={true} />
                  </div>
                  <div className="dropdown-title text-lg font-bold mb-2 text-center leading-tight">
                    {brand.name}
                  </div>
                  <div className="dropdown-category text-xs text-gray-300 mb-3 text-center">
                    {brand.category}
                  </div>
                  <div 
                    className="dropdown-description text-xs text-gray-200 mb-3 leading-relaxed overflow-hidden"
                    style={{
                      display: '-webkit-box',
                      WebkitLineClamp: 3,
                      WebkitBoxOrient: 'vertical'
                    }}
                  >
                    {brand.description}
                  </div>
                  <div className="dropdown-stats flex justify-between mb-4 text-xs">
                    <span className="text-orange-300 text-xs">
                      {brand.products}
                    </span>
                    <span className="text-green-300 text-xs">
                      {brand.revenue}
                    </span>
                  </div>
                  <button 
                    type="button"
                    className="know-more-btn bg-orange-500 hover:bg-gradient-to-r hover:from-green-600 hover:to-orange-600 text-white px-4 py-2 rounded-lg font-semibold transition-all duration-300 mx-auto transform hover:scale-105 text-sm"
                  >
                    Partner Details
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* No Results Message */}
          {filteredBrands.length === 0 && (
            <div className="text-center py-16">
              <p className="text-xl text-gray-500">
                No brands found matching your search criteria.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mt-4">
                <button
                  type="button"
                  onClick={handleClearSearch}
                  className="text-green-500 hover:text-green-600 font-medium transition-colors duration-200"
                >
                  Clear search
                </button>
                <button
                  type="button"
                  onClick={handleShowAllCategories}
                  className="text-orange-500 hover:text-orange-600 font-medium transition-colors duration-200"
                >
                  Show all categories
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
};

export default PartnerBrands;
