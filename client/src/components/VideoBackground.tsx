import ReactPlayer from 'react-player';
import { motion } from 'framer-motion';

export function VideoBackground() {
  return (
    <div className="fixed inset-0 w-full h-full -z-10">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="absolute inset-0 bg-black/50 z-10"
      />
      <ReactPlayer
        url="/attached_assets/video.mp4"
        playing
        loop
        muted
        width="100%"
        height="100%"
        style={{ objectFit: 'cover' }}
        config={{
          file: {
            attributes: {
              style: {
                width: '100%',
                height: '100%',
                objectFit: 'cover',
              }
            }
          }
        }}
      />
    </div>
  );
}