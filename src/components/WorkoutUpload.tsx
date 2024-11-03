import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { Upload, Video, Image as ImageIcon } from 'lucide-react';
import { motion } from 'framer-motion';

interface WorkoutUploadProps {
  onUpload: (files: File[]) => void;
}

export function WorkoutUpload({ onUpload }: WorkoutUploadProps) {
  const onDrop = useCallback((acceptedFiles: File[]) => {
    onUpload(acceptedFiles);
  }, [onUpload]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'video/*': ['.mp4', '.mov'],
      'image/*': ['.png', '.jpg', '.jpeg']
    }
  });

  return (
    <div className="max-w-2xl mx-auto">
      <motion.div
        {...getRootProps()}
        className={`border-2 border-dashed rounded-xl p-12 text-center cursor-pointer transition-colors ${
          isDragActive ? 'border-purple-400 bg-purple-400/10' : 'border-gray-400/30 hover:border-purple-400/50'
        }`}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        <input {...getInputProps()} />
        <Upload className="w-12 h-12 mx-auto mb-4 text-purple-400" />
        <h3 className="text-xl font-semibold mb-2">Upload Workout Media</h3>
        <p className="text-gray-300 mb-4">
          Drag & drop your workout videos or images here
        </p>
        <div className="flex justify-center space-x-4 text-sm text-gray-400">
          <div className="flex items-center">
            <Video className="w-4 h-4 mr-1" />
            <span>Videos</span>
          </div>
          <div className="flex items-center">
            <ImageIcon className="w-4 h-4 mr-1" />
            <span>Images</span>
          </div>
        </div>
      </motion.div>
    </div>
  );
}