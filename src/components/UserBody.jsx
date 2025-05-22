import React, { useEffect, useState } from 'react';
import UserCard from './UserCard';

const UserBody = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchUser = async () => {
    try {
      setLoading(true);
      const res = await fetch('https://randomuser.me/api/');
      const json = await res.json();
      setUser(json.results[0]);
    } catch (err) {
      console.error('Failed to fetch user', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  if (!user) return <h1 className='text-center mt-10 text-xl'>Loading...</h1>;

  return (
    <div className='min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-[length:400%_400%] animate-gradient p-6'>
      <UserCard user={user} />

      <button
        onClick={fetchUser}
        disabled={loading}
        className='mt-6 px-4 py-2 text-sm font-medium text-white bg-gray-800 rounded hover:bg-gray-700 transition disabled:opacity-50'
      >
        🔀 SWIPE
      </button>
    </div>
  );
};

export default UserBody;
