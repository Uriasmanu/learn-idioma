import { Check } from 'lucide-react';

interface BotaoAcertoProps {
  onClick?: () => void;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export default function BotaoAcerto({ 
  onClick, 
  className = '', 
  size = 'md' 
}: BotaoAcertoProps) {
  // Tamanhos configuráveis
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-16 h-16'
  };

  const iconSizes = {
    sm: 16,
    md: 24,
    lg: 32
  };

  return (
    <button
      onClick={onClick}
      className={`
        ${sizeClasses[size]}
        bg-green-500 hover:bg-green-600
        text-white
        rounded-full
        flex items-center justify-center
        transition-all duration-200
        shadow-md hover:shadow-lg
        focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2
        active:scale-95
        ${className}
      `}
      aria-label="Acerto"
    >
      <Check 
        size={iconSizes[size]} 
        className="stroke-current stroke-2"
      />
    </button>
  );
}