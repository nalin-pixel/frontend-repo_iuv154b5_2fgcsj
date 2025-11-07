import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useMemo, useState } from 'react';
import Navbar from './components/Navbar';
import StatsCards from './components/StatsCards';
import QuickActions from './components/QuickActions';
import SearchFilters from './components/SearchFilters';

function Home() {
  const [stats, setStats] = useState({ jobs: 12, candidates: 87, interviews: 9, selected: 5 });

  const handleSearch = (filters) => {
    // For now just log; in real app we'd call backend with filters
    console.log('Search with', filters);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6">
      <h1 className="text-2xl font-semibold tracking-tight">Dashboard</h1>
      <StatsCards stats={stats} />
      <SearchFilters onSearch={handleSearch} />
      <QuickActions />
    </div>
  );
}

function Placeholder({ title }) {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <h2 className="text-xl font-semibold">{title}</h2>
      <p className="text-gray-600 mt-2">This section will be wired to the backend in subsequent steps.</p>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/recruiter" element={<Placeholder title="Recruiter Workspace" />} />
          <Route path="/admin" element={<Placeholder title="Admin Panel" />} />
          <Route path="/jobs/new" element={<Placeholder title="Create Job" />} />
          <Route path="/candidates/new" element={<Placeholder title="Add Candidate" />} />
          <Route path="/candidates/import" element={<Placeholder title="Import Candidates via CSV" />} />
          <Route path="/reports" element={<Placeholder title="Reports & Analytics" />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
