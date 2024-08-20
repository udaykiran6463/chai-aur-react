import { useState } from 'react'
import './App.css'

function App() {
  const [bgColor, setBgColor] = useState("#000000")
  const colorsCodes = ["#FFB3B3", "#A3E3A3", "#A3C4FF", "#D1D1A3", "#CFCFCF", "#FFFFB3", "#FFD1DC", "#D1A3D1", "#F3E6FF", "#FFFFFF", "#A8A8A8"];
  const colors = ["red","green","blue","olive","gray","yellow","pink","purple","lavender","white","black" ];

  function colorHandle(event){
    let btn = event.currentTarget
    let cc = btn.getAttribute('cc')
    console.log(cc);
    setBgColor(cc)
  }

  return (
    <div >
      <div style={{ backgroundColor: bgColor}} className='w-[100%] h-screen duration-200'>        
        <div className='fixed bottom-16 left-1/2 transform -translate-x-1/2'>
          <div className=' flex bg-zinc-400 py-3 gap-7 px-4 border-2 border-black rounded-[50px] w-[90%] m-auto'>
            {colors.map((color, index) => (
              <div  key={index}   cc={colorsCodes[index]}  className="py-1.5 h-10 border-2 border-black cursor-pointer w-[75px] rounded-full text-center text-white text-opacity-100 flex items-center justify-center" style={{ backgroundColor: colorsCodes[index] }} onClick={colorHandle}>
                <span className=""></span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
export default App
