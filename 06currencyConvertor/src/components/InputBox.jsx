import React,{useId} from 'react';
import useCurrencyInfo from '../hooks/useCurrencyInfo';

function InputBox({
    onAmountChange,
    onCurrencyChange,
    currencyOptions = ["usd","eur","gbp","inr","aud","cad","jpy","cny","chf","sek","nzd","mxn","sgd","hkd","nok","krw","zar","brl","rub","myr","thb"],
    selectCurrency = "usd",
    amountDisable = false,
    currencyDisable = false,
    amount,
    label = "From",
    className = "",
}) {
    const handleClick = (e) => {
        const inputElement = document.getElementById(amountInputID);
        if (inputElement) {
            inputElement.value = ''; // Clear the input box content
            inputElement.focus(); // Focus the input box
        }
    }
    const amountInputID = useId()
    return (
        <div className={`bg-slate-100 p-3 text-black rounded-lg flex justify-between ${className}`}>
            <div id='left' className='flex flex-col w-1/2 p-2 gap-5'>
                <label htmlFor={amountInputID}>{label}</label>
                <input
                    type="number"
                    onClick = {handleClick}
                    id={amountInputID}
                    className='text-lg px-2 py-1'
                    placeholder='Amount'
                    disabled={amountDisable}
                    value={amount}
                    onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}/>
            </div>
            <div id='currency' className='flex flex-col w-1/3 p-2 gap-5'>
                <label htmlFor="selectCurrency">Currency Type</label>
                <select
                    id="selectCurrency"
                    value = {selectCurrency}
                    onChange= { (e) => onCurrencyChange && onCurrencyChange(e.target.value)}
                    disabled = {currencyDisable}>
                    {
                        currencyOptions.map((currency)=>(
                            <option key={currency} value={currency} >{currency.toUpperCase()}</option>
                        ))
                    }
                </select>
            </div>
        </div>
    );
}

export default InputBox;
