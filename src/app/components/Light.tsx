import React from 'react';

const Light: React.FC = () => {
  return (
        <div className="relative">
            {/* Purple glow effect as a semi-circle on the very left */}
            <div className="absolute -left-32 top-1/2 transform -translate-y-1/2 h-56 w-56 rounded-full bg-[#A78BFA] opacity-50 blur-3xl"></div>
        </div>
    );
};

export default Light;
