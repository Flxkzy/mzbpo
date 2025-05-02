export function AuditIllustration() {
  return (
    <div className="relative w-64 h-64">
      <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <rect x="40" y="40" width="120" height="120" rx="4" fill="#f8f9fa" stroke="#0A2E55" strokeWidth="2" />
        <rect x="50" y="60" width="100" height="10" rx="2" fill="#4682B4" opacity="0.7" />
        <rect x="50" y="80" width="80" height="10" rx="2" fill="#4682B4" opacity="0.5" />
        <rect x="50" y="100" width="90" height="10" rx="2" fill="#4682B4" opacity="0.3" />
        <rect x="50" y="120" width="70" height="10" rx="2" fill="#4682B4" opacity="0.2" />
        <circle cx="150" cy="70" r="15" fill="#20B2AA" opacity="0.8" />
        <path d="M145 70L150 75L155 65" stroke="white" strokeWidth="2" />
        <circle cx="150" cy="95" r="15" fill="#20B2AA" opacity="0.6" />
        <path d="M145 95L150 100L155 90" stroke="white" strokeWidth="2" />
        <circle cx="150" cy="120" r="15" fill="#20B2AA" opacity="0.4" />
        <path d="M145 120L150 125L155 115" stroke="white" strokeWidth="2" />
        <circle cx="60" cy="160" r="10" fill="#0A2E55" opacity="0.8" />
        <path d="M55 160H65M60 155V165" stroke="white" strokeWidth="2" />
        <circle cx="90" cy="160" r="10" fill="#0A2E55" opacity="0.6" />
        <path d="M85 160H95" stroke="white" strokeWidth="2" />
        <circle cx="120" cy="160" r="10" fill="#0A2E55" opacity="0.4" />
        <path d="M115 160H125M120 155V165" stroke="white" strokeWidth="2" />
      </svg>
    </div>
  )
}
