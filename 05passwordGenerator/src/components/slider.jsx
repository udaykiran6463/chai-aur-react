import React, { useState } from 'react';
import './slider.css'; // Import the custom CSS file

const Slider = ({sliderValues}) => {

    const {value,setValue} = sliderValues;    
    const handleChange = (e) => {
        setValue(e.target.value);
    };

    return (
        <div className="flex flex-col items-center">
            <input
                type="range"
                min="6"
                max="100"
                value={value}
                onChange={handleChange}
                className="w-full h-2 bg-gray-300 rounded-lg cursor-pointer"
                style={{
                    background: `linear-gradient(to right, #3b82f6 ${value-6}%, #e5e7eb ${value}%)`,
                }}
            />
            <div className="mt-4 text-lg font-semibold text-gray-800">
                Length: <span className="text-blue-500">{value}</span>
            </div>
        </div>
    );
};

export default Slider;
