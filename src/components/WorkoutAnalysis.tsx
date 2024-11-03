import React from 'react';
import { motion } from 'framer-motion';
import { Activity, Flame, Target } from 'lucide-react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from 'chart.js';
import { Line, Doughnut } from 'react-chartjs-2';
import type { MediaInfo } from '../App';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

interface WorkoutAnalysisProps {
  mediaInfo: MediaInfo;
}

export function WorkoutAnalysis({ mediaInfo }: WorkoutAnalysisProps) {
  const { stats } = mediaInfo;

  const lineChartData = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [
      {
        label: 'Calories Burned',
        data: [
          Math.round(stats.calories * 0.6),
          Math.round(stats.calories * 0.8),
          stats.calories,
          Math.round(stats.calories * 0.7),
          Math.round(stats.calories * 0.9),
          Math.round(stats.calories),
          Math.round(stats.calories * 0.85)
        ],
        borderColor: 'rgb(147, 51, 234)',
        tension: 0.3,
      },
    ],
  };

  const doughnutData = {
    labels: ['Coordination', 'Range of Motion', 'Posture'],
    datasets: [
      {
        data: [stats.coordination, stats.rangeOfMotion, stats.posture],
        backgroundColor: [
          'rgba(147, 51, 234, 0.8)',
          'rgba(236, 72, 153, 0.8)',
          'rgba(59, 130, 246, 0.8)',
        ],
      },
    ],
  };

  return (
    <div className="space-y-8">
      <motion.div 
        className="bg-white/5 rounded-xl p-6 mb-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h3 className="text-xl font-semibold mb-4">Analysis Results</h3>
        <p className="text-gray-300">
          {mediaInfo.type === 'video' ? 
            'Full workout session analyzed with multiple exercises detected.' :
            'Single exercise snapshot analyzed for form and technique.'
          }
        </p>
        <div className="mt-4">
          <h4 className="font-medium mb-2">Detected Exercises:</h4>
          <ul className="list-disc list-inside text-gray-300">
            {mediaInfo.exercises.map((exercise, index) => (
              <li key={index}>{exercise}</li>
            ))}
          </ul>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <StatCard
          icon={<Activity className="w-6 h-6 text-purple-400" />}
          title="Form Score"
          value={`${stats.form}%`}
          subtitle="Current workout"
        />
        <StatCard
          icon={<Flame className="w-6 h-6 text-pink-400" />}
          title="Calories Burned"
          value={stats.calories.toString()}
          subtitle="This session"
        />
        <StatCard
          icon={<Target className="w-6 h-6 text-blue-400" />}
          title="Completed Reps"
          value={stats.reps.toString()}
          subtitle="Total count"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <motion.div
          className="bg-white/5 rounded-xl p-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h3 className="text-lg font-semibold mb-4">Weekly Progress</h3>
          <Line data={lineChartData} options={{
            responsive: true,
            scales: {
              y: {
                beginAtZero: true,
                grid: {
                  color: 'rgba(255, 255, 255, 0.1)',
                },
                ticks: { color: 'rgba(255, 255, 255, 0.8)' },
              },
              x: {
                grid: {
                  color: 'rgba(255, 255, 255, 0.1)',
                },
                ticks: { color: 'rgba(255, 255, 255, 0.8)' },
              },
            },
            plugins: {
              legend: {
                labels: { color: 'rgba(255, 255, 255, 0.8)' },
              },
            },
          }} />
        </motion.div>

        <motion.div
          className="bg-white/5 rounded-xl p-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h3 className="text-lg font-semibold mb-4">Form Analysis</h3>
          <Doughnut data={doughnutData} options={{
            responsive: true,
            plugins: {
              legend: {
                position: 'bottom' as const,
                labels: { color: 'rgba(255, 255, 255, 0.8)' },
              },
            },
          }} />
        </motion.div>
      </div>
    </div>
  );
}

function StatCard({ icon, title, value, subtitle }: {
  icon: React.ReactNode;
  title: string;
  value: string;
  subtitle: string;
}) {
  return (
    <motion.div
      className="bg-white/5 rounded-xl p-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <div className="flex items-center justify-between mb-4">
        <div className="bg-white/10 rounded-lg p-3">
          {icon}
        </div>
      </div>
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-3xl font-bold my-2">{value}</p>
      <p className="text-sm text-gray-400">{subtitle}</p>
    </motion.div>
  );
}