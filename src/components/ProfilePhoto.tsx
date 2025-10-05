export const ProfilePhoto = () => {
  return (
    <div className="h-full w-full flex flex-col items-center justify-center p-6 bg-gradient-to-br from-black via-black to-primary/5 overflow-auto">
      {/* Profile photo with glow */}
      <div className="relative flex-shrink-0 mb-6">
        {/* Glowing ring effect */}
        <div className="absolute inset-0 rounded-full bg-primary/20 blur-xl animate-pulse"></div>
        
        {/* Profile photo container */}
        <div className="relative w-40 h-40 rounded-full border-4 border-primary/50 overflow-hidden glitch-effect shadow-[0_0_50px_rgba(0,255,0,0.3)]">
          <div className="w-full h-full bg-gradient-to-br from-primary/30 to-accent/30 flex items-center justify-center">
            {/* Placeholder for actual photo - using initials */}
            <span className="text-6xl font-bold terminal-glow">CR</span>
          </div>
        </div>
      </div>

      {/* Name and title */}
      <div className="text-center space-y-2 mb-6">
        <h1 className="text-3xl font-bold terminal-glow tracking-wide">
          CHAYAN RANPARA
        </h1>
        <p className="text-lg text-accent">Software Developer in Test</p>
      </div>

      {/* Role tags - stacked vertically for better fit */}
      <div className="flex flex-col gap-2 text-sm text-muted-foreground mb-6">
        <div className="flex items-center gap-2">
          <span className="text-primary">▸</span>
          <span>Framework Developer</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-primary">▸</span>
          <span>Test Strategist</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-primary">▸</span>
          <span>Problem Solver</span>
        </div>
      </div>

      {/* Terminal-style status */}
      <div className="mt-auto pt-4 border-t border-primary/20 w-full max-w-xs">
        <div className="space-y-1 text-xs text-muted-foreground font-mono">
          <div className="flex justify-between">
            <span className="text-primary">STATUS:</span>
            <span>ONLINE</span>
          </div>
          <div className="flex justify-between">
            <span className="text-primary">LOCATION:</span>
            <span>EARTH</span>
          </div>
          <div className="flex justify-between">
            <span className="text-primary">MODE:</span>
            <span>CREATING</span>
          </div>
        </div>
      </div>
    </div>
  );
};