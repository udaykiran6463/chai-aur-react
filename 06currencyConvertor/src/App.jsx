import { useEffect, useState } from 'react'
import './App.css'
import { InputBox } from './components/index.js'
import useCurrencyInfo from './hooks/useCurrencyInfo.js'

function App() {



    const [amount, setAmount] = useState(1);
    const [from, setFrom] = useState('usd');
    const [to, setTo] = useState('inr');
    const [convertedAmount, setConvertedAmount] = useState();
    let currencyInfo = useCurrencyInfo(from);
    const options = Object.keys(currencyInfo);


    const swap = () => {
        setFrom(to)
        setTo(from)
        setConvertedAmount(amount)
        setAmount(convertedAmount)
    }

    const convert = () => {
        setConvertedAmount(amount * currencyInfo[to])
    }


    return (
        <div className="bg-gray-900 w-screen h-screen flex items-center justify-center" style={{ fontFamily: "'Roboto', sans-serif" }}>
            <div className="text-center">
                <h1 className="text-4xl text-white font-bold mb-8">Currency Exchange</h1>
                <div className="box bg-gray-800 p-6 rounded-lg shadow-xl">
                    <div className="flex flex-col gap-6 items-center justify-center">
                        <div className="bg-gray-700  p-5 rounded-lg shadow-md w-full max-w-md">
                            <InputBox label='From' amount={amount} currencyOptions={options} onAmountChange={(amt) => setAmount(amt)} selectCurrency={from} onCurrencyChange={(cur) => setFrom(cur)} />
                        </div>
                        <button onClick={swap} className="absolute bg-yellow-300 px-6 py-1.5 rounded-lg text-lg font-semibold text-gray-900 hover:bg-yellow-400 transition-colors transform active:scale-95">
                            Swap
                        </button>
                        <div className="bg-gray-700 p-5 rounded-lg shadow-md w-full max-w-md">
                            <InputBox label='To' amount={convertedAmount} currencyOptions={options} amountDisable={true} selectCurrency={to} onCurrencyChange={(cur) => setFrom(cur)} />
                        </div>
                    </div>
                    <button onClick={function () {
                        convert()
                    }} className="mt-6 bg-blue-600 px-6 py-2 rounded-lg text-lg font-semibold text-white hover:bg-blue-700 transition-colors transform active:scale-95 w-full">
                        Submit
                    </button>
                </div>
            </div>
        </div>
    )
}

export default App
