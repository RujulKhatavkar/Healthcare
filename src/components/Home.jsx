import React from 'react'

export default function Home({ globalState }) {
  const vitals = [
    { key: 'BP', label: 'Blood Pressure', value: '136/88', status: 'slightly-high' },
    { key: 'Sugar', label: 'Blood Sugar', value: '164 mg/dL', status: 'normal' },
    { key: 'HR', label: 'Heart Rate', value: '78 bpm', status: 'normal' },
    { key: 'SpO2', label: 'SpO₂', value: '98%', status: 'normal' }
  ]

  return (
    <div className="p-6 space-y-6">
      <div className="bg-white rounded-2xl p-5 border border-gray-200">
        <div className="flex items-center justify-between">
          <div>
            <div className="text-sm text-gray-500">Major Reminder</div>
            <div className="text-xl font-bold text-gray-800">Take Telmisartan — 8:00 PM</div>
          </div>
          <div className="text-right">
            <div className="text-sm text-gray-500">Adherence</div>
            <div className="text-lg font-semibold text-green-600">12 days streak</div>
          </div>
        </div>
      </div>

      <div className="text-center">
        <div className="text-lg font-semibold text-gray-700 mb-3">Quick Actions</div>
        <div className="flex gap-3 items-center justify-center">
          <button className="px-6 py-4 rounded-2xl bg-blue-600 text-white font-medium">Add Medicine</button>
          <button className="px-6 py-4 rounded-2xl bg-green-600 text-white font-medium">Log Vitals</button>
          <button className="px-6 py-4 rounded-2xl bg-purple-600 text-white font-medium">Appointments</button>
        </div>
      </div>

      <div className="bg-white rounded-2xl p-5 border border-gray-200">
        <div className="flex items-center justify-between mb-3">
          <div className="text-lg font-semibold text-gray-700">Medication Tracker (Week)</div>
          <div className="text-sm text-gray-500">Week overview</div>
        </div>
        <div className="h-24 flex items-center justify-center text-sm text-gray-500">Week chart placeholder</div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        {vitals.map(v => (
          <div key={v.key} className="bg-white rounded-2xl p-4 border border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-sm text-gray-500">{v.label}</div>
                <div className="text-xl font-bold text-gray-800">{v.value}</div>
              </div>
              <div className="text-sm text-gray-500">{v.status === 'normal' ? 'Good' : 'Check'}</div>
            </div>
            <div className="mt-3 bg-indigo-50 p-3 rounded-lg text-sm text-gray-700">AI: Quick tip available</div>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-2xl p-5 border border-gray-200 flex items-center justify-between">
        <div>
          <div className="text-base font-semibold text-gray-700">Emergency Contact</div>
          <div className="text-lg mt-1">{globalState.emergencyContact || 'Not set'}</div>
        </div>
        <div className="flex items-center gap-3">
          <button className="px-4 py-3 rounded-xl bg-red-600 text-white">CALL</button>
          <div className="text-right">
            <div className="text-sm text-gray-500">Health ID</div>
            <div className="font-semibold">{globalState.healthID}</div>
          </div>
        </div>
      </div>
    </div>
  )
}
