'use client'

import React, { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import BlogCard from './BlogCard'

export default function BlogListContainer({ initialPosts, categories, activeCategorySlug }) {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategorySlug, setSelectedCategorySlug] = useState(activeCategorySlug || '')
  const [currentPage, setCurrentPage] = useState(1)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const dropdownRef = useRef(null)
  
  const postsPerPage = 18 // 3 columns * 6 rows = 18 posts per page

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  // Sync state if category prop changes
  useEffect(() => {
    setSelectedCategorySlug(activeCategorySlug || '')
    setCurrentPage(1)
  }, [activeCategorySlug])

  // Get active category display name
  const activeCategory = categories.find(c => c.slug.replace(/^\//, '') === selectedCategorySlug)
  const selectedCategoryName = activeCategory ? activeCategory.title : 'Categories Filter'

  // Filter posts based on active category and search query
  const filteredPosts = initialPosts.filter(post => {
    // 1. Category Filter
    const matchesCategory = !selectedCategorySlug || 
      post.categories?.some(cat => cat.slug?.replace(/^\//, '') === selectedCategorySlug)

    // 2. Search Query Filter
    const searchLower = searchQuery.toLowerCase()
    const titleMatch = post.title?.toLowerCase().includes(searchLower)
    const excerptMatch = post.excerpt?.toLowerCase().includes(searchLower)
    const matchesSearch = titleMatch || excerptMatch

    return matchesCategory && matchesSearch
  })

  // Pagination calculations
  const indexOfLastPost = currentPage * postsPerPage
  const indexOfFirstPost = indexOfLastPost - postsPerPage
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost)
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage)

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber)
    const gridEl = document.getElementById('blog-posts-grid')
    if (gridEl) {
      gridEl.scrollIntoView({ behavior: 'smooth' })
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  return (
    <div>
      {/* Search & Categories Filter Row - aligned side-by-side */}
      <div style={{
        display: 'flex',
        gap: '20px',
        maxWidth: '900px',
        margin: '0 auto 40px auto',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        {/* Search Input Container */}
        <div style={{
          position: 'relative',
          flex: '1 1 300px',
          maxWidth: '500px',
          width: '100%'
        }}>
          <span style={{
            position: 'absolute',
            left: '18px',
            top: '50%',
            transform: 'translateY(-50%)',
            color: '#94A3B8',
            display: 'flex',
            alignItems: 'center',
            pointerEvents: 'none'
          }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
          </span>
          <input
            type="text"
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value)
              setCurrentPage(1)
            }}
            style={{
              width: '100%',
              padding: '12px 16px 12px 48px',
              borderRadius: '9999px', // Pill container
              backgroundColor: '#1E293B',
              border: '1px solid #334155',
              color: '#FFFFFF',
              fontSize: '0.95rem',
              outline: 'none',
              boxSizing: 'border-box'
            }}
          />
        </div>

        {/* Categories Dropdown Filter */}
        <div ref={dropdownRef} style={{ position: 'relative', flex: '0 0 auto', width: '220px' }}>
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            style={{
              width: '100%',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: '12px 20px',
              borderRadius: '9999px', // Pill container
              backgroundColor: '#1E293B',
              border: '1px solid #334155',
              color: '#FFFFFF',
              fontSize: '0.95rem',
              fontWeight: '500',
              cursor: 'pointer',
              outline: 'none'
            }}
          >
            <span style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', marginRight: '8px' }}>
              {selectedCategoryName}
            </span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ transform: isDropdownOpen ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.2s', flexShrink: 0 }}><polyline points="6 9 12 15 18 9"></polyline></svg>
          </button>

          {isDropdownOpen && (
            <div style={{
              position: 'absolute',
              top: '110%',
              right: 0,
              zIndex: 50,
              width: '100%',
              backgroundColor: '#1E293B',
              border: '1px solid #334155',
              borderRadius: '12px',
              overflow: 'hidden',
              boxShadow: '0 10px 25px rgba(0,0,0,0.3)',
              marginTop: '5px'
            }}>
              {/* Option to clear category filter */}
              <div
                onClick={() => {
                  setSelectedCategorySlug('')
                  setIsDropdownOpen(false)
                  setCurrentPage(1)
                }}
                style={{
                  padding: '10px 16px',
                  color: !selectedCategorySlug ? '#3DAA72' : '#CBD5E1',
                  cursor: 'pointer',
                  backgroundColor: !selectedCategorySlug ? 'rgba(61,170,114,0.1)' : 'transparent',
                  fontWeight: !selectedCategorySlug ? 'bold' : 'normal',
                  fontSize: '0.9rem',
                  transition: 'background-color 0.2s'
                }}
                onMouseEnter={(e) => e.target.style.backgroundColor = 'rgba(255,255,255,0.05)'}
                onMouseLeave={(e) => e.target.style.backgroundColor = !selectedCategorySlug ? 'rgba(61,170,114,0.1)' : 'transparent'}
              >
                All Categories
              </div>
              {categories.map((cat) => {
                const cleanCatSlug = cat.slug ? cat.slug.replace(/^\//, '') : ''
                const isActive = selectedCategorySlug === cleanCatSlug
                return (
                  <div
                    key={cat.slug}
                    onClick={() => {
                      setSelectedCategorySlug(cleanCatSlug)
                      setIsDropdownOpen(false)
                      setCurrentPage(1)
                    }}
                    style={{
                      padding: '10px 16px',
                      color: isActive ? '#3DAA72' : '#CBD5E1',
                      cursor: 'pointer',
                      backgroundColor: isActive ? 'rgba(61,170,114,0.1)' : 'transparent',
                      fontWeight: isActive ? 'bold' : 'normal',
                      fontSize: '0.9rem',
                      borderTop: '1px solid rgba(51, 65, 85, 0.4)',
                      transition: 'background-color 0.2s'
                    }}
                    onMouseEnter={(e) => e.target.style.backgroundColor = 'rgba(255,255,255,0.05)'}
                    onMouseLeave={(e) => e.target.style.backgroundColor = isActive ? 'rgba(61,170,114,0.1)' : 'transparent'}
                  >
                    {cat.title}
                  </div>
                )
              })}
            </div>
          )}
        </div>
      </div>

      {/* Post Grid */}
      {currentPosts.length === 0 ? (
        <p className="text-center text-[#94A3B8] text-lg my-10">
          No posts found matching your search.
        </p>
      ) : (
        <>
          <div id="blog-posts-grid" style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
            gap: '30px',
            width: '100%',
            marginBottom: '40px'
          }}>
            {currentPosts.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>

          {/* Pagination Styled Banner */}
          {totalPages > 1 && (
            <div style={{
              width: '100%',
              backgroundColor: '#1E293B',
              border: '1px solid rgba(51, 65, 85, 0.6)',
              borderRadius: '9999px', // Pill shape matching sketch
              padding: '10px 24px',
              display: 'flex',
              justifyContent: 'flex-end', // Aligned right
              alignItems: 'center',
              boxSizing: 'border-box',
              marginTop: '40px'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                {/* Previous Button (Chevron Icon) */}
                <button
                  disabled={currentPage === 1}
                  onClick={() => handlePageChange(currentPage - 1)}
                  style={{
                    backgroundColor: 'transparent',
                    border: 'none',
                    color: currentPage === 1 ? '#475569' : '#FFFFFF',
                    cursor: currentPage === 1 ? 'not-allowed' : 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '8px',
                    outline: 'none'
                  }}
                  aria-label="Previous Page"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>
                </button>

                {/* Page Numbers */}
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => {
                  const isActive = pageNum === currentPage

                  // Pagination ellipsis logic (1, 2, 3 ... 10)
                  if (totalPages > 5) {
                    if (pageNum !== 1 && pageNum !== totalPages && Math.abs(pageNum - currentPage) > 1) {
                      if (pageNum === 2 && currentPage > 3) {
                        return <span key="ellipsis-start" style={{ color: '#6B7A99', padding: '0 4px' }}>...</span>
                      }
                      if (pageNum === totalPages - 1 && currentPage < totalPages - 2) {
                        return <span key="ellipsis-end" style={{ color: '#6B7A99', padding: '0 4px' }}>...</span>
                      }
                      return null
                    }
                  }

                  return (
                    <button
                      key={pageNum}
                      onClick={() => handlePageChange(pageNum)}
                      style={{
                        width: '32px',
                        height: '32px',
                        borderRadius: '50%', // Circle shape
                        backgroundColor: isActive ? '#3DAA72' : 'transparent',
                        border: 'none',
                        color: isActive ? '#FFFFFF' : '#94A3B8',
                        fontWeight: 'bold',
                        fontSize: '0.85rem',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        transition: 'all 0.2s',
                        outline: 'none'
                      }}
                    >
                      {pageNum}
                    </button>
                  )
                })}

                {/* Next Button (Chevron Icon) */}
                <button
                  disabled={currentPage === totalPages}
                  onClick={() => handlePageChange(currentPage + 1)}
                  style={{
                    backgroundColor: 'transparent',
                    border: 'none',
                    color: currentPage === totalPages ? '#475569' : '#FFFFFF',
                    cursor: currentPage === totalPages ? 'not-allowed' : 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '8px',
                    outline: 'none'
                  }}
                  aria-label="Next Page"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
                </button>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  )
}
