
import { useEffect, useState } from 'react';
import { supabase } from '@/utils/supabaseClient';
import { useRouter } from 'next/router';

export default function Dashboard() {
  const [user, setUser] = useState<any>(null);
  const router = useRouter();

  useEffect(() => {
    const fetchUser = async () => {
      const { data } = await supabase.auth.getUser();
      if (!data.user) {
        router.push('/auth');
      } else {
        setUser(data.user);
      }
    };
    fetchUser();
  }, []);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.push('/auth');
  };

  return (
    <main className="min-h-screen bg-gray-50 p-6 font-sans">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">📊 Dashboard</h1>
        <button onClick={handleLogout} className="text-sm bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700">
          Logout
        </button>
      </div>
      <p>Welcome, {user?.email}</p>
      <p className="mt-2 text-gray-600">CRM interface goes here: contacts, messages, analytics, etc.</p>
    </main>
  );
}
