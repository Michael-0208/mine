import { motion } from 'motion/react';

interface PageLoaderProps {
  onComplete: () => void;
}

export function PageLoader({ onComplete }: PageLoaderProps) {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 0.6, delay: 1.5 }}
      onAnimationComplete={onComplete}
      className="fixed inset-0 z-[10000] bg-[#0a0a0f] flex items-center justify-center"
    >
      <div className="relative">
        {/* Animated logo/text */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="text-4xl md:text-5xl"
            style={{ fontWeight: 700 }}
            initial={{ backgroundPosition: '0% 50%' }}
            animate={{ backgroundPosition: '100% 50%' }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          >
            <span className="bg-gradient-to-r from-purple-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent bg-[length:200%_100%]">
              Loading...
            </span>
          </motion.div>
        </motion.div>

        {/* Spinning ring */}
        <motion.div
          className="absolute -inset-8 border-2 border-purple-500/20 border-t-purple-500 rounded-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
        />
      </div>
    </motion.div>
  );
}
