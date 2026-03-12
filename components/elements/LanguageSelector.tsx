"use client";
import { useState, useEffect, useRef } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

export default function LanguageSelector() {
  const { language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const languages = [
    { code: 'en', name: 'EN', fullName: 'English' },
    { code: 'pt', name: 'PT', fullName: 'Português' }
  ];

  const currentLanguage = languages.find(lang => lang.code === language);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="language-selector position-relative" ref={dropdownRef}>
      <button
        className="btn btn-outline-light d-flex align-items-center gap-1 px-2 py-1"
        onClick={() => setIsOpen(!isOpen)}
        type="button"
        style={{ minWidth: '50px', fontSize: '0.875rem' }}
      >
        <span className="fw-medium">{currentLanguage?.name}</span>
        <i className={`ri-arrow-${isOpen ? 'up' : 'down'}-s-line`} style={{ fontSize: '0.75rem' }}></i>
      </button>
      
      {isOpen && (
        <div 
          className="position-absolute mt-1 border rounded-2 shadow-sm"
          style={{
            top: '100%',
            left: '0',
            minWidth: '150px',
            backgroundColor: 'var(--bs-body-bg)',
            border: '1px solid var(--bs-border-color)',
            zIndex: 1050
          }}
        >
          {languages.map((lang, index) => (
            <button
              key={lang.code}
              className={`w-100 d-flex align-items-center justify-content-start px-3 py-2 border-0 text-start ${
                language === lang.code ? 'text-primary' : ''
              }`}
              style={{
                backgroundColor: 'transparent',
                color: language === lang.code ? 'var(--bs-primary)' : 'var(--bs-body-color)',
                borderRadius: index === 0 ? '0.25rem 0.25rem 0 0' : '0 0 0.25rem 0.25rem',
                fontSize: '0.875rem',
                whiteSpace: 'nowrap'
              }}
              onMouseEnter={(e) => {
                if (language !== lang.code) {
                  e.currentTarget.style.backgroundColor = 'var(--bs-secondary-bg)';
                }
              }}
              onMouseLeave={(e) => {
                if (language !== lang.code) {
                  e.currentTarget.style.backgroundColor = 'transparent';
                }
              }}
              onClick={() => {
                setLanguage(lang.code as 'en' | 'pt');
                setIsOpen(false);
              }}
            >
              <span className="fw-medium me-2">{lang.name}</span>
              <span className="text-muted">- {lang.fullName}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}