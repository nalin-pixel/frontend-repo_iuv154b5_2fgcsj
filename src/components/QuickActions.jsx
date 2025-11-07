import { Link } from 'react-router-dom';
import { PlusCircle, Upload, FileSpreadsheet, UserPlus } from 'lucide-react';

const ActionButton = ({ to, icon: Icon, label, description, color }) => (
  <Link
    to={to}
    className={`group relative overflow-hidden rounded-xl border bg-white p-4 hover:shadow-md transition-shadow`}
  >
    <div className="flex items-center gap-3">
      <div className={`h-10 w-10 grid place-items-center rounded-lg ${color}`}>
        <Icon size={20} className="text-white" />
      </div>
      <div>
        <p className="font-medium">{label}</p>
        <p className="text-sm text-gray-500">{description}</p>
      </div>
    </div>
  </Link>
);

export default function QuickActions() {
  return (
    <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      <ActionButton
        to="/jobs/new"
        icon={PlusCircle}
        label="Post a Job"
        description="Create a new job opening"
        color="bg-indigo-500"
      />
      <ActionButton
        to="/candidates/new"
        icon={UserPlus}
        label="Add Candidate"
        description="Add a candidate manually"
        color="bg-blue-500"
      />
      <ActionButton
        to="/candidates/import"
        icon={Upload}
        label="Import CSV"
        description="Bulk import candidates"
        color="bg-emerald-500"
      />
      <ActionButton
        to="/reports"
        icon={FileSpreadsheet}
        label="Reports"
        description="View analytics and exports"
        color="bg-violet-500"
      />
    </section>
  );
}
