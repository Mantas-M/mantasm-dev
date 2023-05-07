import React from 'react'

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between flex-wrap bg-black p-6">
      <div className="w-full flex justify-end">
        <div className="text-xl">
          <a
            href="#responsive-header"
            className="block mt-4 lg:inline-block lg:mt-0 text-gray-300 hover:text-white mr-4"
          >
            Technologies
          </a>
          <a
            href="#responsive-header"
            className="block mt-4 lg:inline-block lg:mt-0 text-gray-300 hover:text-white mr-4"
          >
            Projects
          </a>
          <a
            href="#responsive-header"
            className="block mt-4 lg:inline-block lg:mt-0 text-gray-300 hover:text-white mr-4"
          >
            Get in touch
          </a>
        </div>
      </div>
    </nav>
  )
}
