const WorkExperience = ({ experiences }) => {
  return (
    <section
      id="experience"
      aria-labelledby="experience-heading"
      className="py-16 md:py-24"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section heading */}
        <h2 id="experience-heading" className="text-3xl md:text-4xl font-bold mb-12 text-center bg-gradient-to-r from-blue-600 via-sky-500 to-cyan-500 bg-clip-text text-transparent">
          Work Experience
        </h2>

        {/* Experience cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {experiences.map((experience) => (
            <article
              key={experience.id}
              className="bg-white/70 backdrop-blur-md rounded-lg p-6 border border-white/30 shadow-xl transition-all duration-300 hover:shadow-glow-blue hover:scale-105"
            >
              {/* Company name */}
              <h3 className="text-xl font-bold text-blue-600 mb-2">
                {experience.company}
              </h3>

              {/* Position */}
              <p className="text-lg font-semibold text-gray-900 mb-1">
                {experience.position}
              </p>

              {/* Date range */}
              <p className="text-sm text-gray-600 mb-4">
                <time>{experience.dateRange}</time>
              </p>

              {/* Responsibilities as bullet list */}
              <ul className="space-y-2" aria-label="Key responsibilities">
                {experience.responsibilities.map((responsibility, index) => (
                  <li
                    key={index}
                    className="text-gray-700 text-sm flex items-start"
                  >
                    <span className="text-blue-500 mr-2 mt-1" aria-hidden="true">•</span>
                    <span>{responsibility}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;
