import React from 'react'

function Button({
    children,
    type = 'button',
    bgColor = 'bg-blue-500',
    textColor = 'text-white',
    className = "",
    ...props
}) {
    return (
        <div className={` px-4 py-2 rounded-full ${bgColor} ${textColor} ${className} `} {...props}>
            {children}
        </div>
    )
}

export default Button
