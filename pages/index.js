import Link from 'next/link';

export default function Home() {
  return (
    <main className="p-10 text-center">
      <h1 className="text-4xl font-bold mb-6">Bisla Delivery Dashboard</h1>
      <p className="mb-4">Welcome to the Flyash Delivery Management System</p>
      <Link href="/dashboard" className="text-blue-600 underline">Go to Dashboard</Link>
    </main>
  );
}