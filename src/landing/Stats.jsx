import React from 'react'

const STATS = [
  { value: '500+',  label: 'Patients Helped',       sub: 'From the United States' },
  { value: '50+',   label: 'Accredited Hospitals',   sub: 'India & Turkey' },
  { value: '80%',   label: 'Average Cost Savings',   sub: 'vs. U.S. prices' },
  { value: '24/7',  label: 'Patient Support',        sub: 'Before, during & after' },
]

const Stats = () => {
  return (
    <div className="bg-primary">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 lg:divide-x lg:divide-white/20">
          {STATS.map(({ value, label, sub }) => (
            <div key={label} className="flex flex-col items-center text-center lg:px-8">
              <p className="text-4xl lg:text-5xl font-bold text-white tracking-tight">{value}</p>
              <p className="mt-1 text-sm font-semibold text-white/90">{label}</p>
              <p className="mt-0.5 text-xs text-blue-100">{sub}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Stats
