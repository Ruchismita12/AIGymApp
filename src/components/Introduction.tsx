import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Camera, Activity } from 'lucide-react';

export function Introduction() {
  const features = [
    {
      icon: <Camera className="w-6 h-6 text-purple-400" />,
      title: "Upload Your Workout",
      description: "Share videos or photos of your exercises"
    },
    {
      icon: <Brain className="w-6 h-6 text-pink-400" />,
      title: "AI Analysis",
      description: "Get instant feedback on your form and technique"
    },
    {
      icon: <Activity className="w-6 h-6 text-blue-400" />,
      title: "Track Progress",
      description: "Monitor your improvements over time"
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="text-center max-w-3xl mx-auto"
    >
      <h2 className="text-3xl font-bold mb-4">
        Transform Your Workouts with AI
      </h2>
      <p className="text-gray-300 mb-12">
        Upload your workout videos or photos and let our AI analyze your form, 
        track your progress, and help you achieve better results. Get instant 
        feedback on your technique and comprehensive workout analytics.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            className="bg-white/5 rounded-xl p-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
          >
            <div className="bg-white/10 rounded-lg p-3 w-fit mx-auto mb-4">
              {feature.icon}
            </div>
            <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
            <p className="text-gray-400">{feature.description}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}