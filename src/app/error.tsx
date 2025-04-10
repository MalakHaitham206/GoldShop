'use client';
import React from 'react';

export default function Error({ error, reset }: { error: Error; reset: () => void }) {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center vh-100 text-center p-4">
      <div className="bg-gray-dark p-5 rounded-4 shadow-lg border border-primary">
        <i className="bi bi-exclamation-triangle-fill text-primary display-4 mb-4"></i>
        <h1 className="text-white mb-3">Golden Alert!</h1>
        <p className="text-light lead mb-4">{error.message}</p>
        <button 
          className="btn btn-primary btn-lg px-4 py-2 rounded-pill" 
          onClick={() => reset()}
        >
          <i className="bi bi-arrow-clockwise me-2"></i> Try Again
        </button>
      </div>
    </div>
  );
}