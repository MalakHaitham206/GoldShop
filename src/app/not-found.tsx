import React from 'react';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center text-center vh-100">
      <div className="bg-gray-dark p-5 rounded-4 border border-primary">
        <h1 className="display-1 text-primary">404</h1>
        <p className="lead text-light">Page Not Found</p>
        <p className="text-muted mb-4">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link 
          href="/" 
          className="btn btn-primary mt-3 px-4 py-2 rounded-pill"
        >
          <i className="bi bi-house me-2"></i> Go To Home
        </Link>
      </div>
    </div>
  );
}