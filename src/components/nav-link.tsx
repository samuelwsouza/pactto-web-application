import React from 'react';
import { Link, LinkProps, useLocation } from 'react-router-dom'

export type NavLinkProps = LinkProps & {
  icon: React.ReactNode
}

export function NavLink({ icon, children, ...props }: NavLinkProps) {
  const { pathname } = useLocation()
  const isActive = pathname === props.to;

  return (
    <Link
      data-current={isActive}
      className={`
        w-full
        flex
        items-center
        gap-2.5
        text-sm
        font-medium
        whitespace-nowrap
        overflow-hidden
        text-silver
        hover:bg-dark
        hover:bg-opacity-10
        ${isActive ? 'text-special bg-[#3A363F]' : ''}
      `}
      style={{ height: '2.75rem' }}
      {...props}
    >
      {React.cloneElement(icon as React.ReactElement, {
        className: `w-5 h-5 ${isActive ? 'text-special' : 'text-silver'}`,
      })}
      {children}
    </Link>
  )
}