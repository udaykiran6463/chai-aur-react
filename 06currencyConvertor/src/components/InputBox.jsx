import React,{useId} from 'react';

function InputBox({
    onAmountChange,
    onCurrencyChange,
    currencyOptions = ["usd","inr"],
    selectCurrency = "usd",
    amountDisable = false,
    currencyDisable = false,
    amount,
    label = "From",
    className = "",
}) {
    return (
        <div className={`bg-slate-100 w-1/3 p-3 text-black rounded-lg flex justify-between ${className}`}>
            <div id='left' className='flex flex-col w-1/2 p-2 gap-5'>
                <label htmlFor="inputAmount">{label}</label>
                <input
                    type="number"
                    id="inputAmount"
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
                    onChange={onCurrencyChange && onCurrencyChange(e.target.value)}
                    disabled = {currencyDisable}>
                    {
                        currencyOptions.map((currency)=>(
                            <option key={currency} value={currency} >{currency}</option>
                        ))
                    }
                </select>
            </div>
        </div>
    );
}

export default InputBox;
