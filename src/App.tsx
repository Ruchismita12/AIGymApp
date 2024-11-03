import React, { useState } from 'react';
import { Header } from './components/Header';
import { Introduction } from './components/Introduction';
import { WorkoutUpload } from './components/WorkoutUpload';
import { WorkoutAnalysis } from './components/WorkoutAnalysis';
import { WorkoutCalendar } from './components/WorkoutCalendar';

export type MediaInfo = {
  type: 'image' | 'video';
  exercises: string[];
  stats: {
    calories: number;
    reps: number;
    form: number;
    coordination: number;
    rangeOfMotion: number;
    posture: number;
  };
};

function App() {
  const [mediaInfo, setMediaInfo] = useState<MediaInfo | null>(null);

  const handleMediaUpload = (files: File[]) => {
    if (files.length === 0) return;
    
    const file = files[0];
    const isVideo = file.type.startsWith('video/');
    
    // Simulate AI analysis based on media type
    const analysis: MediaInfo = {
      type: isVideo ? 'video' : 'image',
      exercises: isVideo ? [
        "Lateral Shoulder Raise",
        "Lat Pull Down",
        "Skull-Crushers",
        "Shoulder Press",
        "Shrugs",
        "Bent over Rows",
        "Kickbacks"
      ] : [
        "Lateral Shoulder Raise",
        "Shoulder Press"
      ],
      stats: {
        calories: isVideo ? 743 : 180,
        reps: isVideo ? 16 : 8,
        form: isVideo ? 88 : 92,
        coordination: isVideo ? 76 : 85,
        rangeOfMotion: isVideo ? 95 : 90,
        posture: isVideo ? 87 : 89
      }
    };
    
    setMediaInfo(analysis);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900">
      <Header />
      <main className="container mx-auto px-4 py-8 space-y-12">
        <Introduction />
        <WorkoutUpload onUpload={handleMediaUpload} />
        {mediaInfo && (
          <>
            <WorkoutAnalysis mediaInfo={mediaInfo} />
            <WorkoutCalendar workouts={mediaInfo.exercises} />
          </>
        )}
      </main>
    </div>
  );
}

export default App;