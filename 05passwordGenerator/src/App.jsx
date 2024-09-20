import { useState, useCallback, useEffect, useRef } from 'react';
import './App.css';
import Slider from './components/slider.jsx';

function App() {
    const [value, setValue] = useState(15);
    const [charAllowed, setCharAllowed] = useState(true);
    const [numberAllowed, setNumberAllowed] = useState(false);
    const [symbolAllowed, setSymbolAllowed] = useState(false);
    const [Password, setPassword] = useState("udaykiran");



    const passwordGenerator = useCallback(() => {
        let pass = "";
        let str = "abcdefghijklmnopqrstuvwxyz";
        if (numberAllowed) str += '0123456789';
        if (charAllowed) str += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        if (symbolAllowed) str += "!@#$%^&*()=_+[]{}|',<>?/";
        for (let i = 1; i <= value; i++) {
            let char = Math.floor(Math.random() * str.length);
            pass += str[char];
        }
        setPassword(pass);
    }, [value, numberAllowed, charAllowed, symbolAllowed, setPassword]);

    // useEffect(() => {
    //     passwordGenerator()
    // }, [length, numberAllowed, charAllowed, passwordGenerator])

    const isInitialRender = useRef(true);
    useEffect(() => {
        if (isInitialRender.current) {
            isInitialRender.current = false; 
        } else {
            passwordGenerator(); 
        }
    }, [value, numberAllowed, charAllowed, passwordGenerator]);
    

    // ref hook using
    const passwordRef = useRef(null)

    const copyPasswordToClipboard = useCallback(() => {
        passwordRef.current?.select()
        passwordRef.current?.setSelectionRange(0, 8)
        console.log(passwordRef.current.value);
        window.navigator.clipboard.writeText(Password)
    }, [Password])

    return (
        <div id="screen" className="bg-black h-screen w-screen flex flex-col items-center">
            <h1 className='text-white text-5xl mt-16 font-bold text-center'>Password Generator</h1>
            <div id="box" className="bg-white mt-16 p-6 rounded-xl  shadow-lg">
                <div id="inputBox" className="flex justify-between items-center mb-10 bg-gray-100 rounded-lg border-2 border-blue-500">
                    <input id="textBox" ref={passwordRef} value={Password} readOnly className="text-lg flex-1 px-3 py-2 border-none outline-none rounded-lg bg-transparent" placeholder="Your Password" />
                    <span onClick={copyPasswordToClipboard} className="cursor-pointer text-xl font-semibold bg-blue-500 my-auto text-white hover:bg-blue-700 p-2 rounded-r-[6px] shadow-lg transform active:scale-90 transition-transform">copy</span>
                </div>

                <Slider sliderValues={{ value, setValue }} />

                <div id="ticks" className="ml-3 flex flex-col gap-4 bg-white p-4 pt-6 rounded-lg">
                    <div className="flex items-center text-lg text-gray-800">
                        <input type="checkbox" checked={charAllowed} onChange={() => { setCharAllowed(prev => !prev) }} className="form-checkbox h-5 w-5 text-blue-500 rounded border-gray-300 focus:ring-blue-500 transition duration-150 ease-in-out" id="capital-char" name="characteristics" />
                        <label htmlFor="capital-char" className="ml-2 cursor-pointer hover:text-blue-500">Capital Character</label>
                    </div>

                    <div className="flex items-center text-lg text-gray-800">
                        <input type="checkbox" checked={symbolAllowed} onChange={() => { setSymbolAllowed(prev => !prev) }} className="form-checkbox h-5 w-5 text-blue-500 rounded border-gray-300 focus:ring-blue-500 transition duration-150 ease-in-out" id="special-char" name="characteristics" />
                        <label htmlFor="special-char" className="ml-2 cursor-pointer hover:text-blue-500">Special Character</label>
                    </div>

                    <div className="flex items-center text-lg text-gray-800">
                        <input type="checkbox" checked={numberAllowed} onChange={() => { setNumberAllowed(prev => !prev) }} className="form-checkbox h-5 w-5 text-blue-500 rounded border-gray-300 focus:ring-blue-500 transition duration-150 ease-in-out" id="numbers" name="characteristics" />
                        <label htmlFor="numbers" className="ml-2 cursor-pointer hover:text-blue-500">Numbers</label>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
