'use client'

import React, { useState, useEffect } from 'react'

export default function CommentSection({ postSlug }) {
  const [comments, setComments] = useState([])
  const [name, setName] = useState('')
  const [text, setText] = useState('')
  const [successMsg, setSuccessMsg] = useState('')

  // Load comments on mount
  useEffect(() => {
    const key = `karo-blog-comments-${postSlug}`
    const stored = localStorage.getItem(key)
    if (stored) {
      try {
        setComments(JSON.parse(stored))
      } catch (e) {
        console.error("Error parsing stored comments:", e)
      }
    }
  }, [postSlug])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!name.trim() || !text.trim()) return

    const newComment = {
      id: Date.now(),
      name: name.trim(),
      text: text.trim(),
      date: new Date().toLocaleDateString('en-IN', {
        year: 'numeric', month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit'
      })
    }

    const updatedComments = [newComment, ...comments]
    setComments(updatedComments)
    
    // Save to local storage
    const key = `karo-blog-comments-${postSlug}`
    localStorage.setItem(key, JSON.stringify(updatedComments))

    // Clear inputs and show success message
    setName('')
    setText('')
    setSuccessMsg('Comment posted successfully!')
    setTimeout(() => setSuccessMsg(''), 4000)
  }

  return (
    <div style={{ marginTop: '50px', borderTop: '1px solid #334155', paddingTop: '40px' }}>
      <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#FFFFFF', marginBottom: '25px' }}>
        Comments ({comments.length})
      </h3>

      {/* Comment Form */}
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px', marginBottom: '40px' }}>
        <div style={{ display: 'flex', gap: '15px', flexWrap: 'wrap' }}>
          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            style={{
              flex: '1 1 200px',
              padding: '12px 18px',
              borderRadius: '8px',
              backgroundColor: '#1E293B',
              border: '1px solid #334155',
              color: '#FFFFFF',
              fontSize: '0.95rem',
              outline: 'none'
            }}
          />
        </div>
        <textarea
          placeholder="Join the discussion... write your comment here."
          value={text}
          onChange={(e) => setText(e.target.value)}
          required
          rows={4}
          style={{
            width: '100%',
            padding: '12px 18px',
            borderRadius: '8px',
            backgroundColor: '#1E293B',
            border: '1px solid #334155',
            color: '#FFFFFF',
            fontSize: '0.95rem',
            outline: 'none',
            resize: 'vertical',
            boxSizing: 'border-box'
          }}
        />
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <button
            type="submit"
            style={{
              backgroundColor: '#3DAA72',
              color: '#FFFFFF',
              border: 'none',
              padding: '12px 24px',
              borderRadius: '8px',
              fontWeight: 'bold',
              cursor: 'pointer',
              fontSize: '0.95rem',
              transition: 'background-color 0.2s'
            }}
          >
            Post Comment
          </button>
          {successMsg && <span style={{ color: '#3DAA72', fontWeight: '500', fontSize: '0.9rem' }}>{successMsg}</span>}
        </div>
      </form>

      {/* Comments List */}
      {comments.length === 0 ? (
        <p style={{ color: '#94A3B8', fontStyle: 'italic' }}>No comments yet. Be the first to share your thoughts!</p>
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          {comments.map((comment) => (
            <div key={comment.id} style={{
              backgroundColor: '#1B2A4A',
              border: '1px solid #253559',
              borderRadius: '12px',
              padding: '20px',
              display: 'flex',
              flexDirection: 'column',
              gap: '8px'
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '5px' }}>
                <strong style={{ color: '#FFFFFF', fontSize: '0.95rem' }}>{comment.name}</strong>
                <span style={{ color: '#6B7A99', fontSize: '0.8rem' }}>{comment.date}</span>
              </div>
              <p style={{ color: '#E2E8F0', fontSize: '0.95rem', lineHeight: '1.5', margin: 0, whiteSpace: 'pre-line' }}>{comment.text}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
