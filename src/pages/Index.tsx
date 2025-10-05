import { Terminal } from '@/components/Terminal';
import { ProfilePhoto } from '@/components/ProfilePhoto';

const Index = () => {
  return (
    <div className="h-screen w-screen overflow-hidden bg-black">
      <div className="h-full grid grid-cols-1 lg:grid-cols-[35%_65%]">
        {/* Left side - Profile Photo */}
        <div className="h-[40vh] lg:h-full border-b lg:border-b-0 lg:border-r border-primary/30 overflow-hidden">
          <ProfilePhoto />
        </div>

        {/* Right side - Terminal */}
        <div className="h-[60vh] lg:h-full overflow-hidden">
          <Terminal />
        </div>
      </div>
    </div>
  );
};

export default Index;