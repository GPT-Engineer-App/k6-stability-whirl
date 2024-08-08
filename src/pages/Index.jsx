import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Sparkles } from 'lucide-react';

const Index = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-400 via-pink-500 to-red-500">
      <motion.div
        className="absolute inset-0 z-0"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0) 50%)`,
        }}
      />
      <Card className="w-[350px] bg-white/80 backdrop-blur-md shadow-xl">
        <CardHeader>
          <CardTitle className="text-3xl font-bold text-center">Welcome to Your Fancy App</CardTitle>
          <CardDescription className="text-center">Prepare to be amazed!</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col items-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', stiffness: 260, damping: 20 }}
          >
            <Sparkles className="w-16 h-16 text-yellow-500 mb-4" />
          </motion.div>
          <p className="text-lg text-gray-700 mb-6 text-center">
            Start building your extraordinary project with style and elegance.
          </p>
          <Button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-bold py-2 px-4 rounded-full transition-all duration-200 ease-in-out transform hover:scale-105">
            Get Started
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default Index;
