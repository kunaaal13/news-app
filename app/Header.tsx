import { Bars3Icon } from '@heroicons/react/24/solid'
import Link from 'next/link'
import DarkModeButton from './DarkModeButton'
import NavLinks from './NavLinks'
import SearchBox from './SearchBox'

function Header() {
  return (
    <header>
      <div className='grid grid-cols-3 p-10 items-center'>
        <Bars3Icon className='h-8 w-8 cursor-pointer' />

        <Link href='/' prefetch={false}>
          <h1 className='text-4xl font-serif text-center'>GenZ News</h1>
        </Link>

        <div className='flex items-center justify-end space-x-2'>
          {/* Dark Mode Button */}
          <DarkModeButton />

          <button className='ml-3 hidden md:inline bg-slate-900 text-white px-4 lg:px-8 py-2 lg:py-4 rounded-full dark:bg-slate-800'>
            Subscribe now
          </button>
        </div>
      </div>

      {/* Nav Links */}
      <NavLinks />

      {/* Search Bar */}
      <SearchBox />
    </header>
  )
}

export default Header
