import React from 'react';
import { NavLink } from 'react-router-dom';
import { Calendar, CheckSquare, Clock, Layout, FileText } from 'lucide-react';

export default function Sidebar() {
  const navItems = [
    { to: '/', icon: <Layout />, label: 'Dashboard' },
    { to: '/calendar', icon: <Calendar />, label: 'Calendar' },
    { to: '/tasks', icon: <CheckSquare />, label: 'Tasks' },
    { to: '/scheduler', icon: <Clock />, label: 'Scheduler' },
    { to: '/templates', icon: <FileText />, label: 'Templates' }
  ];

  return (
    <aside className="w-64 bg-gray-800 p-4">
      <div className="flex items-center space-x-2 mb-8">
        <Calendar className="w-8 h-8 text-indigo-400" />
        <h1 className="text-xl font-bold">ReleaseMaster</h1>
      </div>
      
      <nav className="space-y-2">
        {navItems.map(({ to, icon, label }) => (
          <NavLink
            key={to}
            to={to}
            className={({ isActive }) =>
              `flex items-center space-x-2 p-2 rounded-lg transition ${
                isActive
                  ? 'bg-indigo-600 text-white'
                  : 'text-gray-300 hover:bg-gray-700'
              }`
            }
          >
            {icon}
            <span>{label}</span>
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}