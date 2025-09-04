import React from 'react'

const AdminHeader = () => {
  return (
    <header className="bg-gray-900 text-white px-6 py-3 shadow-md flex justify-between items-center">
      {/* Left Logo / Title */}
      <h1 className="text-2xl font-extrabold tracking-wide">Admin Panel</h1>

      {/* Right Section */}
      <div className="flex items-center gap-6">
        {/* Notification Button */}
        <button className="relative bg-gray-700 hover:bg-gray-600 transition-colors p-2 rounded-full">
          🔔
          {/* Red Dot Notification */}
          <span className="absolute top-1 right-1 block h-2 w-2 rounded-full bg-red-500"></span>
        </button>

        {/* Admin Name */}
        <span className="cursor-pointer font-medium hover:text-gray-300 transition-colors">
          Admin
        </span>
      </div>
    </header>
  )
}

export default AdminHeader
