import React from "react";

type ButtonProps = {
  variant?: 'primary' | 'secondary';
  icon?: React.ReactNode;
  children: React.ReactNode;
  size?: 'small' | 'medium' | 'large' | 'extralarge';
  color?: 'normal' | 'darker' | 'subscription';
  state?: 'normal' | 'unavailable';
}

export function Button({ variant = 'primary', icon, children, size = 'medium', color = 'normal', state = 'normal' }: ButtonProps) {
  const baseClasses = "rounded-full flex items-center gap-1 font-semibold tracking-wider transition-colors";
  const primaryClasses = "bg-special text-white hover:bg-[#52998f]";
  const secondaryClasses = "bg-gray-600 text-white hover:bg-gray-300";
  const variantClasses = variant === 'primary' ? primaryClasses : secondaryClasses;
  const sizeClasses = {
    small: 'py-2 px-3 text-xs',
    medium: 'py-3 px-4 text-sm',
    large: 'py-3 px-7 text-sm text-[#000000]',
    extralarge: 'py-3 px-10 text-base',
  };
  const colorClasses = {
    normal: 'bg-special transition-colors',
    darker: 'bg-[#fff]/70 transition-colors',
    subscription: 'bg-[#B8B8B8] transition-colors'
  }

  const stateClasses = {
    normal: '',
    unavailable: 'pointer-events-none bg-gray-700/30 text-gray-200/30'
  }

  return (
    <button className={`${baseClasses} ${variantClasses} ${sizeClasses[size]} ${colorClasses[color]} ${stateClasses[state]}`}>
      {icon && <span>{icon}</span>}
      <span>{children}</span>
    </button>
  )
}