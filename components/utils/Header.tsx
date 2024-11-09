import { cn } from '@/lib/utils'
import { headertype } from '@/utils/type'
import Link from 'next/link'
import React from 'react'

const Header = ({title, titleClassName}: headertype) => {
  return (
    <header className='flex items-center text-white-1 justify-between'>
        <h1 className={cn('text-5 font-bold', titleClassName)}>{title}</h1>
        <Link href={"/discover"} className='text-3 font-semibold text-orange-1 '>See all</Link>
    </header>
  )
}

export default Header