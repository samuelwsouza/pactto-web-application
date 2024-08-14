import React from "react";

type InputProps = {
  variant?: 'small' | 'big'
  placeholder: 'Search' | 'Other'
  icon?: React.ReactNode
}

export function Input({ variant = 'big', icon, placeholder = 'Search' }: InputProps) {
  const baseClasses = "h-14 pl-4 bg-transparent text-white outline-none border-[1px] border-silver rounded-md placeholder:text-silver placeholder:font-semibold hover:border-white focus:border-special"
  const smallClasses = "w-[45rem]"
  const bigClasses = "w-full"
  const variantClasses = variant === 'big' ? bigClasses : smallClasses;

  return (
    <div className="flex items-center">
      <input 
        autoComplete="off" 
        className={`${baseClasses} ${variantClasses}`} 
        placeholder={placeholder} 
        type="text" />
        {icon} 
      {""}
    </div>
  )
}