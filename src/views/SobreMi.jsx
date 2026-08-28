import Terminal from '../components/Terminal'
import SocialMediaButton from '../components/SocialMediaButton'
import { profile, terminalCommands } from '../data/profile'
import profilePhoto from '../assets/profile.png'
import github from '../assets/github.svg'
import linkedin from '../assets/linkedin.svg'

function SobreMi() {
  return (
    <section className="about-page px-4 sm:px-6 lg:px-10 py-12 sm:py-16 lg:py-24">
      <div className="about-shell max-w-6xl mx-auto">
        <div className="about-grid">
          <aside className="about-profile">
            <div className="about-identity">
              <div className="about-photo-wrap">
                {profilePhoto ? (
                  <img src={profilePhoto} alt={profile.name} className="about-photo" />
                ) : (
                  <div className="about-photo-fallback">Sin foto</div>
                )}
                <span className="about-photo-index">01</span>
              </div>
              <div className="about-socials">
                <SocialMediaButton img={github} url="https://github.com/JaimeMrF" alt="GitHub" />
                <SocialMediaButton img={linkedin} url="https://linkedin.com/in/tu-usuario" alt="LinkedIn" />
              </div>
            </div>

            <div className="about-profile-copy">
              <h2>{profile.name}</h2>
              <p>{profile.role}</p>
            </div>

            <div className="about-location">
              <span className="about-status-dot" />
              <span>{profile.location}</span>
            </div>

            <div className="about-focus">
              <span>Áreas de interés</span>
              <div className="about-focus-list">
                <span>Web</span>
                <span>Mobile</span>
                <span>Cloud</span>
                <span>Security</span>
              </div>
            </div>
          </aside>

          <div className="about-terminal-area">
            <Terminal commands={terminalCommands} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default SobreMi