import React, { useId } from 'react'
import { forwardRef } from 'react'

const Input = forwardRef(function Input({
    label,
    type = "text",
    className = "",
    options = [],
    required,
    ...props
}, ref) {
    const id = useId()
    return (

        <div className='w-full'>
            {label && <label
                htmlFor={id}
                className='inline-block mb-1 pl-1 text-black'
            >
                {label} {required && <span className="text-red-500 ">*</span>}
            </label>}

            {type === "select" ? (
                <select
                    className={`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full ${className}`}
                    id={id}
                    ref={ref}
                    {...props}
                >
                    {options.map((option) => (
                        <option key={option.value} value={option.value}>
                            {option.label}
                        </option>
                    ))}
                </select>
            ) : <input
                className={`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full ${className}`}
                type={type}
                ref={ref}
                id={id}
                {...props}
            />
            }
        </div>
    )
})

export default Input