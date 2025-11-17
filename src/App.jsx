import React, { useState } from 'react'
import TopBar from './components/TopBar'
import Home from './components/Home'
import Onboarding from './components/Onboarding'
import CareTab from './components/CareTab'
import VisitsTab from './components/VisitsTab'
import InsuranceTab from './components/InsuranceTab'
import ProfileTab from './components/ProfileTab'

export default function App() {
  const [screen, setScreen] = useState('welcome') // welcome | onboarding | app
  const [activeTab, setActiveTab] = useState('home') // home|care|visits|insurance|profile
  const [globalState, setGlobalState] = useState({
    name: '',
    age: '',
    readAloud: true,
    muted: false,
    language: 'english',
    fontSize: 'large',
    aiEnabled: true,
    emergencyContact: '',
    healthID: 'SH-XX7823'
  })

  return (
    <div className="min-h-screen bg-gray-50" style={{ fontSize: globalState.fontSize === 'large' ? 18 : 16 }}>
      {screen !== 'welcome' && <TopBar globalState={globalState} setGlobalState={setGlobalState} setScreen={setScreen} />}

      <main className="pt-0 pb-32">
        {screen === 'welcome' && (
          <div className="min-h-screen flex items-center justify-center p-6">
            <div className="max-w-xl w-full bg-white rounded-2xl p-6 shadow border">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 rounded-xl bg-blue-50 flex items-center justify-center">
                  <svg className="w-8 h-8 text-blue-600" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M20.8 7.2a5 5 0 0 0-7.07 0L12 8.93l-1.73-1.71a5 5 0 0 0-7.07 7.07L12 21.07l8.8-6.8a5 5 0 0 0 0-7.07z" /></svg>
                </div>
                <div>
                  <div className="text-xl font-bold">Saathi</div>
                  <div className="text-sm text-gray-500">Gentle health companion</div>
                </div>
              </div>

              <div className="space-y-4 mb-4">
                <p className="text-gray-700">Walking with you, at your pace. Saathi helps with medication reminders, vitals tracking, and connecting with caregivers and doctors.</p>

                <div className="grid gap-3">
                  <div className="p-3 border rounded-lg">
                    <div className="font-semibold">1. Medication reminders & tracker</div>
                    <div className="text-sm text-gray-500">Never miss a dose — scan prescriptions or add manually.</div>
                  </div>

                  <div className="p-3 border rounded-lg">
                    <div className="font-semibold">2. Vitals & dashboard</div>
                    <div className="text-sm text-gray-500">Monitor BP, heart rate, SpO₂ and steps at a glance.</div>
                  </div>

                  <div className="p-3 border rounded-lg">
                    <div className="font-semibold">3. Emergency & caregivers</div>
                    <div className="text-sm text-gray-500">Quick-call emergency button and caregiver sharing & monitoring.</div>
                  </div>
                </div>
              </div>

              <div className="flex gap-3">
                <button onClick={() => setScreen('onboarding')} className="flex-1 py-3 rounded-xl bg-blue-600 text-white">Begin Setup</button>
                <button onClick={() => setScreen('app')} className="flex-1 py-3 rounded-xl bg-white border">Maybe later</button>
              </div>
            </div>
          </div>
        )}

        {screen === 'onboarding' && <Onboarding setScreen={setScreen} globalState={globalState} setGlobalState={setGlobalState} />}

        {screen === 'app' && (
          <>
            {activeTab === 'home' && <Home globalState={globalState} />}
            {activeTab === 'care' && <CareTab />}
            {activeTab === 'visits' && <VisitsTab />}
            {activeTab === 'insurance' && <InsuranceTab />}
            {activeTab === 'profile' && <ProfileTab globalState={globalState} setGlobalState={setGlobalState} />}
          </>
        )}
      </main>

      {/* Bottom nav when in app */}
      {screen === 'app' && (
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-2">
          <div className="flex justify-between max-w-4xl mx-auto">
            <button onClick={() => setActiveTab('home')} className={`flex-1 py-3 text-center rounded-lg ${activeTab==='home' ? 'bg-blue-50 text-blue-600' : 'text-gray-600'}`}>
              <div className="flex flex-col items-center">
                <svg className="w-6 h-6 mb-1" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M3 12l9-7 9 7v8a1 1 0 0 1-1 1h-5V13H9v8H4a1 1 0 0 1-1-1v-8z" /></svg>
                <span className="text-xs">Home</span>
              </div>
            </button>
            <button onClick={() => setActiveTab('care')} className={`flex-1 py-3 text-center rounded-lg ${activeTab==='care' ? 'bg-blue-50 text-blue-600' : 'text-gray-600'}`}>
              <div className="flex flex-col items-center">
                <svg className="w-6 h-6 mb-1" viewBox="0 0 24 24" fill="none" stroke="currentColor"><rect x="2" y="10" width="20" height="8" rx="4"/><path d="M8 10l8 8"/></svg>
                <span className="text-xs">Care</span>
              </div>
            </button>
            <button onClick={() => setActiveTab('visits')} className={`flex-1 py-3 text-center rounded-lg ${activeTab==='visits' ? 'bg-blue-50 text-blue-600' : 'text-gray-600'}`}>
              <div className="flex flex-col items-center">
                <svg className="w-6 h-6 mb-1" viewBox="0 0 24 24" fill="none" stroke="currentColor"><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/></svg>
                <span className="text-xs">Visits</span>
              </div>
            </button>
            <button onClick={() => setActiveTab('insurance')} className={`flex-1 py-3 text-center rounded-lg ${activeTab==='insurance' ? 'bg-blue-50 text-blue-600' : 'text-gray-600'}`}>
              <div className="flex flex-col items-center">
                <svg className="w-6 h-6 mb-1" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M12 2l8 4v6c0 5-3.58 9.74-8 11-4.42-1.26-8-6-8-11V6l8-4z"/></svg>
                <span className="text-xs">Insure</span>
              </div>
            </button>
            <button onClick={() => setActiveTab('profile')} className={`flex-1 py-3 text-center rounded-lg ${activeTab==='profile' ? 'bg-blue-50 text-blue-600' : 'text-gray-600'}`}>
              <div className="flex flex-col items-center">
                <svg className="w-6 h-6 mb-1" viewBox="0 0 24 24" fill="none" stroke="currentColor"><circle cx="12" cy="7" r="4"/><path d="M20 21v-2a4 4 0 0 0-3-3.87M4 21v-2a4 4 0 0 1 3-3.87"/></svg>
                <span className="text-xs">Profile</span>
              </div>
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
