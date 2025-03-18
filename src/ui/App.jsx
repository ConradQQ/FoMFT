// import { useState } from 'react'
import './input.css'
import ItemSlot from './components/ItemSlot'
import ItemMenu from './components/ItemMenu'
function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    <div className="app-container flex flex-row w-screen h-screen bg-amber-400">
      <div className='items-menu w-1/3 bg-teal-500'>
        <div className='flex flex-col'><ItemMenu/></div>
      </div>
      <div className="armor-slots bg-fuchsia-800 flex flex-col w-1/3 h-full items-center p-4"> 
        <div className="grid grid-cols-1 gap-4"> 
          <div id='headSlot' className='text-center bg-amber-900 lg:w-48 lg:h-40 lg: mt-5'><ItemSlot slot="Helmet" /></div>
          <div id='chestSlot' className='text-center bg-black lg:w-48 lg:h-40 lg:mt-5'><ItemSlot slot="Torso" /></div>
          <div id='shoulderSlot' className='text-center bg-blue-400 lg:w-48 lg:h-40 lg:mt-5'><ItemSlot slot="Shoulders" /></div>
          <div id='legSlot' className='text-center bg-red-400 lg:w-48 lg:h-40 lg:mt-5'><ItemSlot slot="Legs" /></div>
          <div id='handSlot' className='text-center bg-green-300 lg:w-48 lg:h-40 lg:mt-5'><ItemSlot slot="Hands" /></div>
        </div>
      </div>
      <div className="stats-display bg-amber-700 flex flex-col w-1/3 h-full items-center">
        <h2>Total Stats</h2>
        
      </div>
    </div>
  </>
  )
}

export default App
