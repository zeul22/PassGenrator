import React from 'react'
import UsersTable from "./UsersTable.jsx"
const DashboardAdmin = () => {
  return (
    <>
    <div className='bg-gray-800 h-screen p-6'>
        <div className='mt-6'>
            <div className='text-white text-2xl flex justify-center'>
            TOTAL USERS
            </div>
            <div className='mt-6'>
                <UsersTable />
            </div>
        </div>
    </div>
    </>
  )
}

export default DashboardAdmin