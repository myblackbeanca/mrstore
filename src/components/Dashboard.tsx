import React from 'react';
import { Calendar, CheckSquare, Clock, AlertTriangle } from 'lucide-react';

export default function Dashboard() {
  const upcomingReleases = [
    { title: 'Summer Single', date: '2024-06-15', type: 'Single' },
    { title: 'Autumn EP', date: '2024-09-01', type: 'EP' }
  ];

  const pendingTasks = [
    { title: 'Finalize artwork', due: '2024-05-20', priority: 'High' },
    { title: 'Submit for distribution', due: '2024-05-25', priority: 'High' },
    { title: 'Create social media content', due: '2024-05-30', priority: 'Medium' }
  ];

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Upcoming Releases */}
        <div className="bg-gray-800 rounded-lg p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold">Upcoming Releases</h2>
            <Calendar className="text-indigo-400" />
          </div>
          <div className="space-y-4">
            {upcomingReleases.map((release, index) => (
              <div key={index} className="flex justify-between items-center">
                <div>
                  <h3 className="font-medium">{release.title}</h3>
                  <p className="text-sm text-gray-400">{release.type}</p>
                </div>
                <span className="text-sm text-indigo-400">{release.date}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Pending Tasks */}
        <div className="bg-gray-800 rounded-lg p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold">Pending Tasks</h2>
            <CheckSquare className="text-indigo-400" />
          </div>
          <div className="space-y-4">
            {pendingTasks.map((task, index) => (
              <div key={index} className="flex justify-between items-center">
                <div>
                  <h3 className="font-medium">{task.title}</h3>
                  <p className="text-sm text-gray-400">Due: {task.due}</p>
                </div>
                <span className={`text-sm px-2 py-1 rounded ${
                  task.priority === 'High' ? 'bg-red-500/20 text-red-300' : 'bg-yellow-500/20 text-yellow-300'
                }`}>
                  {task.priority}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-gray-800 rounded-lg p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold">Quick Actions</h2>
            <Clock className="text-indigo-400" />
          </div>
          <div className="space-y-4">
            <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded-lg transition">
              Schedule New Release
            </button>
            <button className="w-full bg-gray-700 hover:bg-gray-600 text-white py-2 rounded-lg transition">
              Create Task
            </button>
            <button className="w-full bg-gray-700 hover:bg-gray-600 text-white py-2 rounded-lg transition">
              View Calendar
            </button>
          </div>
        </div>
      </div>

      {/* Alerts Section */}
      <div className="mt-6 bg-red-500/10 border border-red-500/20 rounded-lg p-4">
        <div className="flex items-center space-x-2 text-red-400 mb-2">
          <AlertTriangle />
          <h2 className="text-lg font-semibold">Important Alerts</h2>
        </div>
        <p className="text-red-300">
          Artwork submission deadline approaching for "Summer Single" (2 days remaining)
        </p>
      </div>
    </div>
  );
}