import React from 'react';
import { Dumbbell } from 'lucide-react';

export function Header() {
  return (
    <header className="bg-black/20 backdrop-blur-lg border-b border-white/10">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Dumbbell className="w-8 h-8 text-purple-400" />
            <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              AIGymApp
            </h1>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <NavLink href="#dashboard">Dashboard</NavLink>
            <NavLink href="#workouts">Workouts</NavLink>
            <NavLink href="#analysis">Analysis</NavLink>
            <NavLink href="#profile">Profile</NavLink>
          </nav>
          <button className="px-4 py-2 bg-purple-500 hover:bg-purple-600 rounded-lg text-sm font-medium transition-colors">
            Upload Workout
          </button>
        </div>
      </div>
    </header>
  );
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      className="text-gray-300 hover:text-white transition-colors"
    >
      {children}
    </a>
  );
}