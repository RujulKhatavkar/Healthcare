import React from 'react'
import { Volume2, Sparkles, User } from 'lucide-react'

export default function TopBar({ globalState, setGlobalState, setScreen }) {
  const toggleMute = () => setGlobalState(s => ({ ...s, muted: !s.muted, readAloud: true }))
  return (
    <div className="w-full bg-white border-b border-gray-200 p-4 flex items-center gap-3 justify-between">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-md bg-blue-50 flex items-center justify-center">
          <svg className="w-6 h-6 text-blue-600" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M20.8 7.2a5 5 0 0 0-7.07 0L12 8.93l-1.73-1.71a5 5 0 0 0-7.07 7.07L12 21.07l8.8-6.8a5 5 0 0 0 0-7.07z" /></svg>
        </div>
        <div>
          <div className="text-sm text-gray-500">Saathi</div>
          <div className="font-semibold text-lg">{globalState.name || 'Friend'}</div>
        </div>
      </div>

      <div className="flex items-center gap-3 flex-1 max-w-2xl mx-4">
        <div className="flex items-center bg-gray-100 rounded-full px-3 py-2 gap-2 flex-1">
          <svg className="w-5 h-5 text-gray-500" viewBox="0 0 24 24" fill="none" stroke="currentColor"><circle cx="11" cy="11" r="6"/><path d="M21 21l-4.35-4.35" /></svg>
          <input className="bg-transparent outline-none w-full text-sm" placeholder="Search doctors, medicines, conditions..." />
          <select value={globalState.language} onChange={(e)=>setGlobalState(s=>({...s, language: e.target.value}))} className="bg-transparent text-sm outline-none">
            <option value="english">EN</option>
            <option value="hindi">HI</option>
            <option value="marathi">MR</option>
          </select>
        </div>
        <button onClick={toggleMute} className={`flex items-center gap-2 px-3 py-2 rounded-xl border ${globalState.readAloud && !globalState.muted ? 'bg-blue-600 text-white border-blue-600' : 'bg-white text-gray-700 border-gray-200'}`}>
          {globalState.muted ? <svg className="w-5 h-5"><path d="M0 0" /></svg> : <Volume2 className="w-5 h-5" />}
        </button>
      </div>

      <div className="flex items-center gap-3">
        <button className="p-2 rounded-md bg-white border border-gray-200" onClick={()=>setGlobalState(s=>({...s, aiEnabled: !s.aiEnabled}))}>
          <Sparkles className={`w-5 h-5 ${globalState.aiEnabled ? 'text-purple-600' : 'text-gray-400'}`} />
        </button>
        <button className="p-2 rounded-md bg-white border border-gray-200" onClick={()=>setScreen('profile')}>
          <User className="w-5 h-5 text-gray-600" />
        </button>
      </div>
    </div>
  )
}
