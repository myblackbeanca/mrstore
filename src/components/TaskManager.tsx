import React, { useState } from 'react';
import { Plus, CheckCircle, Clock, AlertCircle } from 'lucide-react';

interface Task {
  id: number;
  title: string;
  description: string;
  status: 'pending' | 'in-progress' | 'completed';
  priority: 'low' | 'medium' | 'high';
  dueDate: string;
}

export default function TaskManager() {
  const [tasks, setTasks] = useState<Task[]>([
    {
      id: 1,
      title: 'Finalize album artwork',
      description: 'Get final approval on album cover design',
      status: 'in-progress',
      priority: 'high',
      dueDate: '2024-05-20'
    },
    {
      id: 2,
      title: 'Submit to distribution',
      description: 'Upload tracks to distribution platform',
      status: 'pending',
      priority: 'high',
      dueDate: '2024-05-25'
    }
  ]);

  const getStatusIcon = (status: Task['status']) => {
    switch (status) {
      case 'completed':
        return <CheckCircle className="text-green-400" />;
      case 'in-progress':
        return <Clock className="text-yellow-400" />;
      case 'pending':
        return <AlertCircle className="text-red-400" />;
    }
  };

  const getPriorityColor = (priority: Task['priority']) => {
    switch (priority) {
      case 'high':
        return 'bg-red-500/20 text-red-300';
      case 'medium':
        return 'bg-yellow-500/20 text-yellow-300';
      case 'low':
        return 'bg-green-500/20 text-green-300';
    }
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Task Manager</h1>
        <button className="flex items-center space-x-2 bg-indigo-600 hover:bg-indigo-700 px-4 py-2 rounded-lg transition">
          <Plus className="w-5 h-5" />
          <span>Add Task</span>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {['pending', 'in-progress', 'completed'].map((status) => (
          <div key={status} className="bg-gray-800 rounded-lg p-4">
            <h2 className="text-xl font-semibold capitalize mb-4">{status}</h2>
            <div className="space-y-4">
              {tasks
                .filter((task) => task.status === status)
                .map((task) => (
                  <div
                    key={task.id}
                    className="bg-gray-700 rounded-lg p-4 space-y-2"
                  >
                    <div className="flex items-center justify-between">
                      <h3 className="font-medium">{task.title}</h3>
                      {getStatusIcon(task.status)}
                    </div>
                    <p className="text-sm text-gray-400">{task.description}</p>
                    <div className="flex items-center justify-between">
                      <span className={`text-sm px-2 py-1 rounded ${getPriorityColor(task.priority)}`}>
                        {task.priority}
                      </span>
                      <span className="text-sm text-gray-400">
                        Due: {task.dueDate}
                      </span>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}