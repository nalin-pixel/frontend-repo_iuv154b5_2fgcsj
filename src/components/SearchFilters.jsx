import { useState } from 'react';
import { Search, Filter } from 'lucide-react';

export default function SearchFilters({ onSearch }) {
  const [query, setQuery] = useState('');
  const [status, setStatus] = useState('');

  const submit = (e) => {
    e.preventDefault();
    onSearch?.({ query, status });
  };

  return (
    <form onSubmit={submit} className="bg-white border rounded-xl p-4 flex flex-col sm:flex-row gap-3 items-center">
      <div className="relative w-full sm:max-w-sm">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search candidates, skills or jobs..."
          className="w-full pl-9 pr-3 py-2 rounded-md border focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
      </div>
      <div className="flex items-center gap-2 w-full sm:w-auto">
        <Filter size={18} className="text-gray-400" />
        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          className="w-full sm:w-56 py-2 px-3 rounded-md border focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          <option value="">All Statuses</option>
          <option value="open">Open Jobs</option>
          <option value="closed">Closed Jobs</option>
          <option value="applied">Applied</option>
          <option value="shortlisted">Shortlisted</option>
          <option value="interviewed">Interviewed</option>
          <option value="selected">Selected</option>
          <option value="rejected">Rejected</option>
        </select>
      </div>
      <button
        type="submit"
        className="w-full sm:w-auto bg-indigo-600 hover:bg-indigo-700 text-white font-medium px-4 py-2 rounded-md"
      >
        Search
      </button>
    </form>
  );
}
