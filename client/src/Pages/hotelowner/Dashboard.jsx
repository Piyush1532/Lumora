import React, { useState } from 'react'
import Title from '../../Components/Title'
import { assets, dashboardDummyData } from '../../assets/assets'

const Dashboard = () => {
  const [dashboardData, setDashBoardData] = useState(dashboardDummyData)

  return (
    <div>
      <Title
        align="left"
        font="outfit"
        title="Dashboard"
        subTitle="Monitor your room listings, track bookings and analyze revenue—all in one place. Stay updated with real-time insights to ensure smooth operations."
      />

      <div className="flex flex-wrap gap-4 my-8">
        {/* Total bookings */}
        <div className="bg-primary/30 border border-primary/10 rounded flex items-center p-4 pr-8 flex-1 min-w-[260px]">
          <img src={assets.totalBookingIcon} alt="" className="hidden sm:block h-10" />
          <div className="flex flex-col sm:ml-4 font-medium">
            <p className="text-blue-500 text-lg">Total Booking</p>
            <p className="text-neutral-400 text-base">{dashboardData.totalBookings}</p>
          </div>
        </div>

        {/* Total revenue */}
        <div className="bg-primary/30 border border-primary/10 rounded flex items-center p-4 pr-8 flex-1 min-w-[260px]">
          <img src={assets.totalRevenueIcon} alt="" className="hidden sm:block h-10" />
          <div className="flex flex-col sm:ml-4 font-medium">
            <p className="text-blue-500 text-lg">Total Revenue</p>
            <p className="text-neutral-400 text-base">${dashboardData.totalRevenue}</p>
          </div>
        </div>
      </div>

      {/* Recent Booking */}
      <h2 className="text-xl text-blue-950/70 font-medium mb-5">Recent Bookings</h2>

      <div className="w-full max-w-3xl text-left border border-gray-300 rounded-lg max-h-80 overflow-y-auto">
        <table className="w-full">
          <thead className="bg-gray-50 sticky top-0">
            <tr>
              <th className="py-3 px-4 text-gray-800 font-medium text-left">User Name</th>
              <th className="py-3 px-4 text-gray-800 font-medium text-left hidden sm:table-cell">Room Name</th>
              <th className="py-3 px-4 text-gray-800 font-medium text-center">Total Amount</th>
              <th className="py-3 px-4 text-gray-800 font-medium text-center overflow-y-scroll">Payment Status</th>
            </tr>
          </thead>
        </table>
        <tbody className='text-sm'>
           {dashboardData.bookings.map((item,index)=>(
            <tr key={index} >
              <td className='py-3 px-4 text-gray-700 border-t border-gray-300 '>
              {item.user.username}
              </td>

              <td className='py-3 px-4 text-gray-700 border-t border-gray-300 max-sm:hidden '>
              {item.room.roomType}
              </td>

              <td className='py-3 px-4 text-gray-700 border-t border-gray-300 text-center'>
              ${item.totalPrice}
              </td>

             <td className='py-3 px-4 text-gray-700 border-t border-gray-300 flex '>
             <button className={`py-1 px-3 text-xs rounded-full mx-auto ${item.isPaid ? "bg-green-200 text-green-600" :"bg-amber-200 text-yellow-600"}`}>
              {item.isPaid ? "Completed":"Pending"}
             </button>
              </td>
            </tr>
           ))}
        </tbody>
      </div>
    </div>
  )
}

export default Dashboard
