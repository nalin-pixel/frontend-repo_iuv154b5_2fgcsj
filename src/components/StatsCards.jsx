import { Users, ClipboardList, CalendarCheck, CheckCircle2 } from 'lucide-react';

const Card = ({ title, value, icon: Icon, accent }) => (
  <div className="bg-white border rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow">
    <div className="flex items-center justify-between">
      <div>
        <p className="text-sm text-gray-500">{title}</p>
        <p className="text-2xl font-semibold mt-1">{value}</p>
      </div>
      <div className={`h-10 w-10 grid place-items-center rounded-lg ${accent}`}>
        <Icon size={20} className="text-white" />
      </div>
    </div>
  </div>
);

export default function StatsCards({ stats }) {
  const items = [
    { title: 'Total Jobs Posted', value: stats.jobs, icon: ClipboardList, accent: 'bg-indigo-500' },
    { title: 'Total Candidates', value: stats.candidates, icon: Users, accent: 'bg-blue-500' },
    { title: 'Active Interviews', value: stats.interviews, icon: CalendarCheck, accent: 'bg-emerald-500' },
    { title: 'Selected Candidates', value: stats.selected, icon: CheckCircle2, accent: 'bg-violet-500' },
  ];

  return (
    <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {items.map((item) => (
        <Card key={item.title} {...item} />
      ))}
    </section>
  );
}
