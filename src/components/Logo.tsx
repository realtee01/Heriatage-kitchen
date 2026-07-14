import { cn } from '../lib/utils';

interface LogoProps {
  className?: string;
  iconOnly?: boolean;
}

export function Logo({ className, iconOnly = false }: LogoProps) {
  return (
    <div className={cn("flex items-center gap-4 group cursor-pointer", className)}>
      <div className="relative flex items-center justify-center">
        {/* Sleek Monogram Container */}
        <div className="relative w-11 h-11 rounded-full border border-amber-600/30 bg-zinc-950/40 backdrop-blur-md flex items-center justify-center overflow-hidden shadow-[0_0_15px_rgba(217,119,6,0.1)] group-hover:border-amber-500/60 group-hover:shadow-[0_0_20px_rgba(217,119,6,0.2)] transition-all duration-700 ease-out">
          {/* Subtle inner gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-amber-500/5 to-transparent" />
          
          <span className="font-serif text-lg tracking-tighter text-white relative z-10">
            H<span className="italic text-amber-500">K</span>
          </span>
        </div>
      </div>

      {!iconOnly && (
        <div className="flex flex-col -space-y-0.5 mt-0.5">
          <span className="text-[1.15rem] font-serif font-medium text-zinc-50 tracking-[0.15em] uppercase leading-none">
            Heritage
          </span>
          <span className="text-[0.6rem] font-sans font-medium text-amber-500/80 tracking-[0.4em] uppercase leading-none pl-0.5">
            Kitchens
          </span>
        </div>
      )}
    </div>
  );
}
