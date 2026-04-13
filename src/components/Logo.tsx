import { cn } from '../lib/utils';

interface LogoProps {
  className?: string;
  iconOnly?: boolean;
}

export function Logo({ className, iconOnly = false }: LogoProps) {
  return (
    <div className={cn("flex items-center gap-3 group cursor-pointer", className)}>
      <div className="relative flex items-center justify-center">
        {/* Outer Ring */}
        <div className="absolute inset-0 bg-gradient-to-tr from-amber-600 to-amber-300 rounded-lg rotate-45 group-hover:rotate-90 transition-transform duration-500 opacity-20" />
        
        {/* Main Icon Container */}
        <div className="relative w-10 h-10 bg-zinc-900 border border-amber-500/30 rounded-lg flex items-center justify-center overflow-hidden shadow-xl">
          <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 to-transparent" />
          
          {/* Stylized 'H' with Chef Hat */}
          <svg 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="1.5" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            className="w-6 h-6 text-amber-500 transform group-hover:scale-110 transition-transform duration-500"
          >
            {/* The 'H' Base */}
            <path d="M7 10v10M17 10v10M7 15h10" />
            
            {/* The Chef Hat on top */}
            <path d="M8 10c0-2.5 1.5-4.5 4-4.5s4 2 4 4.5" />
            <path d="M8 10h8" />
            <path d="M10 5.5c0-1 1-2 2-2s2 1 2 2" className="opacity-60" />
          </svg>
          
          {/* Shine Effect */}
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
        </div>
      </div>

      {!iconOnly && (
        <div className="flex flex-col -space-y-1">
          <span className="text-xl font-serif font-bold text-white tracking-tight uppercase">
            Heritage
          </span>
          <span className="text-[10px] font-sans font-bold text-amber-500 tracking-[0.3em] uppercase opacity-80">
            Kitchens
          </span>
        </div>
      )}
    </div>
  );
}
