import React from "react";

export default function Loading() {
  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="text-center">
        <div 
          className="spinner-border text-primary" 
          role="status" 
          style={{ width: '4rem', height: '4rem' }}
        >
          <span className="visually-hidden">Loading...</span>
        </div>
        <h4 className="mt-4 text-light">
          <i className="bi bi-arrow-repeat me-2"></i>
          Loading Products...
        </h4>
      </div>
    </div>
  );
}