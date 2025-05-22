import React from 'react';
import { FiMail, FiPhone } from 'react-icons/fi';

const UserCard = ({ user }) => {
  const { name, picture, email, location, login, phone } = user;

  return (
    <div className='max-w-md bg-white border rounded-xl shadow-lg p-5 flex gap-4 items-start'>
      <img
        src={picture.large}
        alt='avatar'
        className='w-20 h-20 rounded-full border shadow'
      />

      <div className='flex-1'>
        <div className='flex items-center gap-1'>
          <h2 className='text-lg font-semibold text-gray-800'>
            {name.first} {name.last}
          </h2>
          <span className='bg-green-500 text-white rounded-full w-4 h-4 flex items-center justify-center text-xs font-bold'>
            ✓
          </span>
        </div>

        <p className='text-sm text-gray-500'>@{login.username}</p>

        <p className='mt-2 text-sm text-gray-700'>
          Living in {location.city}, {location.country}
        </p>
      </div>

      <div className='flex flex-col gap-2 items-center'>
        <div className='flex gap-3'>
          {/* Mail Icon with Tooltip */}
          <div className='group relative cursor-pointer'>
            <FiMail className='text-xl text-gray-600 hover:text-blue-600' />
            <span className='absolute -top-8 left-1/2 -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition pointer-events-none whitespace-nowrap'>
              {email}
            </span>
          </div>

          {/* Phone Icon with Tooltip */}
          <div className='group relative cursor-pointer'>
            <FiPhone className='text-xl text-gray-600 hover:text-green-600' />
            <span className='absolute -top-8 left-1/2 -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition pointer-events-none whitespace-nowrap'>
              {phone}
            </span>
          </div>
        </div>

        <button className='bg-gray-800 text-white text-sm px-3 py-1 rounded hover:bg-gray-700 mt-2'>
          + Follow
        </button>
      </div>
    </div>
  );
};

export default UserCard;
