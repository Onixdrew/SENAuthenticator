import React from 'react';
import "../media/Style/modal.css"

export default function Modal({ isOpen, onClose, children }) {
  return (
    <div>
      <div
        className="Modal-container"
        style={{ display: isOpen ? "grid" : "none" }}
      >
        <div className="Modal-body">
          <button className="buton " onClick={onClose}>
            X
          </button>
          {children}
        </div>
      </div>
    </div>
  );
}
