import React from 'react';
import './TopBar.css';

function TopBar() {
  return (
    <header className="topbar">
      <div className="topbar-inner">
        <span className="topbar-logo">FortressForesight</span>
        <button className="topbar-account" aria-label="Account">
          <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <circle cx="12" cy="8" r="4" />
            <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
          </svg>
        </button>
      </div>
    </header>
  );
}

export default TopBar;
