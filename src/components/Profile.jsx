import { useState, useEffect } from 'react';

const Profile = ({ name, title, bio, photoUrl }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger fade-in animation after component mounts
    setIsVisible(true);
  }, []);

  return (
    <section
      id="profile"
      aria-label="Profile"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-100 via-sky-50 to-cyan-100 animate-gradient-shift -z-10" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(59,130,246,0.1),transparent_50%)] -z-10" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(6,182,212,0.1),transparent_50%)] -z-10" />

      {/* Content container with fade-in animation */}
      <div
        className={`max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        {/* Profile photo */}
        <div className="mb-8">
          <img
            src={photoUrl || '/profile-photo.jpg'}
            alt={name}
            className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 rounded-full mx-auto border-4 border-blue-400 shadow-glow-blue hover:shadow-[0_0_40px_rgba(59,130,246,0.6)] transition-all duration-300 object-cover"
            onError={(e) => {
              // Prevent infinite loop if fallback also fails
              if (e.target.src.startsWith('data:image/svg+xml')) {
                return;
              }
              // Fallback for missing image - generate SVG with first letter of name
              const initial = name && name.length > 0 ? name.charAt(0).toUpperCase() : '?';
              e.target.src = `data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="200" height="200"%3E%3Crect fill="%2322d3ee" width="200" height="200"/%3E%3Ctext x="50%25" y="50%25" font-size="80" text-anchor="middle" dy=".3em" fill="%23fff"%3E${initial}%3C/text%3E%3C/svg%3E`;
            }}
          />
        </div>

        {/* Name with responsive typography and gradient */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 via-sky-500 to-cyan-500 bg-clip-text text-transparent">
          {name}
        </h1>

        {/* Professional title with accent color */}
        <p className="text-xl sm:text-2xl md:text-3xl text-blue-600 font-semibold mb-6">
          {title}
        </p>

        {/* Bio text with proper spacing */}
        <p className="text-base sm:text-lg md:text-xl text-gray-700 max-w-2xl mx-auto leading-relaxed px-4">
          {bio}
        </p>
      </div>
    </section>
  );
};

export default Profile;
