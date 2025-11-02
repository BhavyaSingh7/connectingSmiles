import React from 'react';
import './css/LoadingSkeleton.css';

const LoadingSkeleton = ({ type = 'image', width, height, className = '' }) => {
  if (type === 'image') {
    return (
      <div 
        className={`skeleton skeleton-image ${className}`}
        style={{ width, height }}
        aria-label="Loading content"
        role="status"
      >
        <span className="visually-hidden">Loading image...</span>
      </div>
    );
  }

  if (type === 'text') {
    return (
      <div 
        className={`skeleton skeleton-text ${className}`}
        style={{ width, height }}
        aria-label="Loading content"
        role="status"
      >
        <span className="visually-hidden">Loading text...</span>
      </div>
    );
  }

  if (type === 'card') {
    return (
      <div 
        className={`skeleton skeleton-card ${className}`}
        style={{ width, height }}
        aria-label="Loading card"
        role="status"
      >
        <div className="skeleton skeleton-image" style={{ height: '200px', width: '100%' }}></div>
        <div className="skeleton-content">
          <div className="skeleton skeleton-text" style={{ height: '24px', width: '80%', marginBottom: '12px' }}></div>
          <div className="skeleton skeleton-text" style={{ height: '16px', width: '100%' }}></div>
          <div className="skeleton skeleton-text" style={{ height: '16px', width: '90%', marginTop: '8px' }}></div>
        </div>
        <span className="visually-hidden">Loading card content...</span>
      </div>
    );
  }

  return null;
};

export default LoadingSkeleton;

