import React from 'react';
import { motion } from 'framer-motion';
import { format, startOfWeek, addDays } from 'date-fns';
import { Dumbbell } from 'lucide-react';

interface WorkoutCalendarProps {
  workouts: string[];
}

export function WorkoutCalendar({ workouts }: WorkoutCalendarProps) {
  const startDate = startOfWeek(new Date());
  const weekDays = [...Array(7)].map((_, i) => addDays(startDate, i));
  const today = new Date();

  return (
    <div className="max-w-4xl mx-auto">
      <div className="grid grid-cols-7 gap-4 mb-4">
        {weekDays.map((date) => (
          <div key={date.toString()} className="text-center">
            <div className="text-sm text-gray-400 mb-1">
              {format(date, 'EEE')}
            </div>
            <motion.div
              className={`rounded-lg p-4 ${
                format(date, 'yyyy-MM-dd') === format(today, 'yyyy-MM-dd')
                  ? 'bg-purple-500/20'
                  : 'bg-white/5'
              }`}
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-lg font-semibold">{format(date, 'd')}</div>
              {format(date, 'yyyy-MM-dd') === format(today, 'yyyy-MM-dd') && (
                <Dumbbell className="w-4 h-4 mx-auto mt-2 text-purple-400" />
              )}
            </motion.div>
          </div>
        ))}
      </div>

      <div className="mt-8">
        <h3 className="text-xl font-semibold mb-4">Today's Workout</h3>
        <motion.div
          className="bg-white/5 rounded-xl p-6 mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="flex items-center justify-between mb-4">
            <h4 className="text-lg font-semibold">
              {format(today, 'EEEE, MMMM d')}
            </h4>
            <span className="text-purple-400">
              {workouts.length} exercises
            </span>
          </div>
          <ul className="space-y-2">
            {workouts.map((exercise, i) => (
              <li key={i} className="flex items-center text-gray-300">
                <Dumbbell className="w-4 h-4 mr-2 text-purple-400" />
                {exercise}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </div>
  );
}