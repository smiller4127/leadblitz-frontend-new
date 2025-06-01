
import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gray-50 text-center px-4">
      <h1 className="text-4xl font-bold mb-4 text-blue-600">🚀 🚀 Welcome to LeadBlitz CRM Platform</h1>
      <p className="mb-8 text-gray-700">Modern CRM Starter · Authenticated · Beautiful UI</p>
      <div className="space-x-4">
        <Link className="bg-blue-600 text-white px-4 py-2 rounded shadow hover:bg-blue-700" href="/auth">Login</Link>
        <Link className="bg-gray-800 text-white px-4 py-2 rounded shadow hover:bg-gray-900" href="/dashboard">Dashboard</Link>
      </div>
    </main>
  );
}
