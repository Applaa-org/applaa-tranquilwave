import * as React from 'react';
import { Play, Pause, Volume2, VolumeX } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';

export default function AudioControls() {
  const [isPlaying, setIsPlaying] = React.useState(false);
  const [volume, setVolume] = React.useState([50]);
  const [isMuted, setIsMuted] = React.useState(false);
  const audioContextRef = React.useRef<AudioContext | null>(null);
  const oscillatorRef = React.useRef<OscillatorNode | null>(null);
  const gainNodeRef = React.useRef<GainNode | null>(null);

  const startAudio = () => {
    if (!audioContextRef.current) {
      audioContextRef.current = new (window.AudioContext || (window as any).webkitAudioContext)();
    }

    const audioContext = audioContextRef.current;
    
    // Create oscillator for gentle tone
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();
    
    oscillator.type = 'sine';
    oscillator.frequency.setValueAtTime(220, audioContext.currentTime); // A3 note
    
    // Create gentle modulation
    const lfo = audioContext.createOscillator();
    const lfoGain = audioContext.createGain();
    lfo.frequency.setValueAtTime(0.5, audioContext.currentTime); // Slow modulation
    lfoGain.gain.setValueAtTime(10, audioContext.currentTime);
    
    lfo.connect(lfoGain);
    lfoGain.connect(oscillator.frequency);
    
    // Set volume
    const vol = isMuted ? 0 : volume[0] / 100 * 0.1; // Keep it very soft
    gainNode.gain.setValueAtTime(vol, audioContext.currentTime);
    
    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);
    
    oscillator.start();
    lfo.start();
    
    oscillatorRef.current = oscillator;
    gainNodeRef.current = gainNode;
    setIsPlaying(true);
  };

  const stopAudio = () => {
    if (oscillatorRef.current) {
      oscillatorRef.current.stop();
      oscillatorRef.current = null;
    }
    setIsPlaying(false);
  };

  const togglePlay = () => {
    if (isPlaying) {
      stopAudio();
    } else {
      startAudio();
    }
  };

  const handleVolumeChange = (newVolume: number[]) => {
    setVolume(newVolume);
    if (gainNodeRef.current && audioContextRef.current) {
      const vol = isMuted ? 0 : newVolume[0] / 100 * 0.1;
      gainNodeRef.current.gain.setValueAtTime(vol, audioContextRef.current.currentTime);
    }
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
    if (gainNodeRef.current && audioContextRef.current) {
      const vol = !isMuted ? 0 : volume[0] / 100 * 0.1;
      gainNodeRef.current.gain.setValueAtTime(vol, audioContextRef.current.currentTime);
    }
  };

  React.useEffect(() => {
    return () => {
      if (oscillatorRef.current) {
        oscillatorRef.current.stop();
      }
      if (audioContextRef.current) {
        audioContextRef.current.close();
      }
    };
  }, []);

  return (
    <div className="flex flex-col items-center space-y-4 p-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-blue-100">
      <div className="flex items-center space-x-4">
        <Button
          onClick={togglePlay}
          size="lg"
          className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 to-teal-400 hover:from-blue-600 hover:to-teal-500 shadow-lg"
        >
          {isPlaying ? (
            <Pause className="w-8 h-8" />
          ) : (
            <Play className="w-8 h-8 ml-1" />
          )}
        </Button>
        
        <div className="flex items-center space-x-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleMute}
            className="text-blue-600 hover:text-blue-700"
          >
            {isMuted ? (
              <VolumeX className="w-5 h-5" />
            ) : (
              <Volume2 className="w-5 h-5" />
            )}
          </Button>
          <div className="w-32">
            <Slider
              value={volume}
              onValueChange={handleVolumeChange}
              max={100}
              step={1}
              className="w-full"
            />
          </div>
        </div>
      </div>
      <p className="text-sm text-gray-600 font-medium">
        {isPlaying ? 'Playing gentle ambient tone' : 'Click to start tranquil sounds'}
      </p>
    </div>
  );
}