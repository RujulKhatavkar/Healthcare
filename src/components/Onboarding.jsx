import React, { useState, useMemo } from 'react'

const defaultConditions = ['Diabetes','Hypertension','Heart Disease','Arthritis','Thyroid','Asthma','Kidney Disease','Other']
const defaultAllergies = ['Penicillin','Peanuts','Dairy','Seafood','Dust','Pollen','Other']
const defaultFoods = ['Vegetarian','Vegan','No spicy food','Low salt','Low sugar','Halal','Other']

export default function Onboarding({ setScreen, globalState, setGlobalState }) {
  const steps = [
    { type: 'welcome', title: 'Welcome to Saathi' },
    { type: 'name', title: 'Your name' },
    { type: 'age', title: 'Your age' },
    { type: 'visual', title: 'Visual comfort & font size' },
    { type: 'conditions', title: 'Health conditions' },
    { type: 'allergies', title: 'Allergies & food prefs' },
    { type: 'emergency', title: 'Emergency contact' },
    { type: 'complete', title: 'Done' }
  ]

  const [idx, setIdx] = useState(0)
  const step = steps[idx]

  const [condQuery, setCondQuery] = useState('')
  const [allergyQuery, setAllergyQuery] = useState('')
  const [foodQuery, setFoodQuery] = useState('')

  const filteredConditions = useMemo(()=> defaultConditions.filter(c => c.toLowerCase().includes(condQuery.toLowerCase())), [condQuery])
  const filteredAllergies = useMemo(()=> defaultAllergies.filter(a => a.toLowerCase().includes(allergyQuery.toLowerCase())), [allergyQuery])
  const filteredFoods = useMemo(()=> defaultFoods.filter(f => f.toLowerCase().includes(foodQuery.toLowerCase())), [foodQuery])

  const toggleCondition = (cond) => setGlobalState(s => ({ ...s, conditions: s.conditions?.includes(cond) ? s.conditions.filter(c=>c!==cond) : [...(s.conditions||[]), cond] }))
  const toggleAllergy = (alg) => setGlobalState(s => ({ ...s, allergies: s.allergies?.includes(alg) ? s.allergies.filter(a=>a!==alg) : [...(s.allergies||[]), alg] }))
  const toggleFood = (f) => setGlobalState(s => ({ ...s, foodPrefs: s.foodPrefs?.includes(f) ? s.foodPrefs.filter(x=>x!==f) : [...(s.foodPrefs||[]), f] }))

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-2xl mx-auto">
        <div className="mb-6">
          <div className="flex justify-between items-center mb-1">
            <span className="text-sm text-gray-600">Step {idx+1} of {steps.length}</span>
            <button className="text-sm text-blue-600" onClick={()=>setScreen('app')}>Skip</button>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-3 mb-2">
            <div className="bg-blue-600 h-3 rounded-full" style={{ width: `${((idx+1)/steps.length)*100}%` }} />
          </div>
          <div className="bg-blue-50 rounded-xl p-3 flex items-center justify-between">
            <div className="text-sm text-gray-700 italic">Read aloud is available for this step.</div>
            <button onClick={()=>setGlobalState(s=>({...s, muted: !s.muted, readAloud: true}))} className="px-3 py-2 rounded-md bg-white border">Mute</button>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow">
          <h2 className="text-2xl font-bold mb-2">{step.title}</h2>

          {step.type === 'welcome' && (
            <div>
              <p className="text-gray-600 mb-4">Quick setup — you can change anything later in Profile.</p>
              <button onClick={()=>setIdx(1)} className="w-full py-3 rounded-xl bg-blue-600 text-white">Begin</button>
            </div>
          )}

          {step.type === 'name' && (
            <input className="w-full p-4 text-lg border rounded-xl" placeholder="Your name" value={globalState.name} onChange={(e)=>setGlobalState(s=>({...s, name:e.target.value}))} />
          )}

          {step.type === 'age' && (
            <input className="w-full p-4 text-lg border rounded-xl" placeholder="Your age" type="number" value={globalState.age} onChange={(e)=>setGlobalState(s=>({...s, age:e.target.value}))} />
          )}
</div>
</div>
    </div>
  )
}
