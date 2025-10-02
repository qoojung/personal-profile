import Navigation from './components/Navigation';
import Profile from './components/Profile';
import WorkExperience from './components/WorkExperience';
import Education from './components/Education';
import Contact from './components/Contact';
import { portfolioData } from './data/portfolioData';

function App() {
  return (
    <div className="min-h-screen text-gray-900">
      <Navigation />
      
      <main>
        {/* Profile Section */}
        <Profile
          name={portfolioData.profile.name}
          title={portfolioData.profile.title}
          bio={portfolioData.profile.bio}
          photoUrl={portfolioData.profile.photoUrl}
        />

        {/* Work Experience Section */}
        <WorkExperience experiences={portfolioData.workExperience} />

        {/* Education Section */}
        <Education education={portfolioData.education} />
      </main>

      {/* Contact Section */}
      <Contact
        email={portfolioData.contact.email}
        linkedin={portfolioData.contact.linkedin}
        github={portfolioData.contact.github}
        twitter={portfolioData.contact.twitter}
      />
    </div>
  )
}

export default App
