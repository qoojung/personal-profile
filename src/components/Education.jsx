const Education = ({ education }) => {
  return (
    <section
      id="education"
      aria-labelledby="education-heading"
      className="py-16 md:py-24"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section heading */}
        <h2 id="education-heading" className="text-3xl md:text-4xl font-bold mb-12 text-center bg-gradient-to-r from-blue-600 via-sky-500 to-cyan-500 bg-clip-text text-transparent">
          Education
        </h2>

        {/* Education cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {education.map((edu) => (
            <article
              key={edu.id}
              className="bg-white/70 backdrop-blur-md rounded-lg p-6 border border-white/30 shadow-xl transition-all duration-300 hover:shadow-glow-teal hover:scale-105"
            >
              {/* Institution name */}
              <h3 className="text-xl font-bold text-teal-600 mb-2">
                {edu.institution}
              </h3>

              {/* Degree */}
              <p className="text-lg font-semibold text-gray-900 mb-1">
                {edu.degree}
              </p>

              {/* Date range */}
              <p className="text-sm text-gray-600 mb-4">
                <time>{edu.dateRange}</time>
              </p>

              {/* Optional description */}
              {edu.description && (
                <p className="text-gray-700 text-sm">
                  {edu.description}
                </p>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
