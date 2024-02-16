import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faPython, faReact } from '@fortawesome/free-brands-svg-icons';
import './App.css';

const App = () => {
  const [repositories, setRepositories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRepositories = async () => {
      try {
        const response = await fetch('https://api.github.com/users/AbhilashGaurav/repos?per_page=4');
        const data = await response.json();
        setRepositories(data);
      } catch (error) {
        console.error('Error fetching GitHub repositories:', error);
        setError('Error fetching GitHub repositories');
      } finally {
        setLoading(false);
      }
    };
    fetchRepositories();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="portfolio-container">
      <header>
        <div className="profile-photo"></div>
        <div className="header-content">
          <h1>Ashvath L G</h1>
          <div className="social-icons">
            <a href="https://www.linkedin.com/in/ashvath-l-g-2503bb217/" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faLinkedin} size="2x" />
            </a>
            <a href="https://github.com/A16-code" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faGithub} size="2x" />
            </a>
          </div>
        </div>
      </header>
      <div className="content">
        <section className="about">
          <h2>About Me</h2>
          <p>
            Hello! I'm Ashvath L G from Chennai, a passionate web developer with a strong foundation in React Native and JS.
            I love building engaging and interactive web applications. Let's create something amazing together!
          </p>
        </section>
        <section className="projects">
          <h2>Projects</h2>
          <div className="project-tiles">
            {repositories.map(repo => (
              <div className="project-tile" key={repo.id}>
                <div>
                  <b>
                    {repo.name === "AirQuality-Data-Refinement-Conversion-Tool"
                      ? "Study on Advertising during COVID-19 Project"
                      : repo.name === "Carbon_Eater_Hackdata"
                      ? "ICICI Asset Allocator Fund & increasing its Penetration"
                      : repo.name === "Drowsiness_Detection"
                      ? "Analysing the deodorant market segment and consumer brand preference"
                      : repo.name}
                  </b>
                </div>
                <p>{repo.description}</p>
              </div>
            ))}
          </div>
        </section>
        <section className="skillset">
          <h2>Skillset</h2>
          <div className="palettes">
            <div>
              <FontAwesomeIcon icon={faPython} size="3x" />
              <FontAwesomeIcon icon={faReact} size="3x" />
            </div>
          </div>
        </section>
        <section className="experience">
          <h2>Experience</h2>
          <p>Sundaram Finance Limited</p>
          <p>
            A dedicated and passionate Web Developer, My journey into technology commenced with curiosity about the inner workings of the web.
            Over time, this curiosity has transformed into a deep-seated love for creating seamless and user-friendly digital experiences.
          </p>
          <p>
            ICICI Asset Management Company
          </p>
          <p>
            Engaged in Mutual Funds B2B marketing, collaborated with distributors, increased sales for ICICI Bank and Wealth segment.
            Conducted detailed data analysis, achieved a notable 25% conversion rate.
            Demonstrated proficiency in market analysis and strategic collaboration, emphasizing successful marketing initiatives in a dynamic financial landscape.
          </p>
        </section>
        <section className="contact">
          <h2>Contact</h2>
          <div>Father's Name : L V Gopinath</div>
          <div>Mother's Name : G Vimala</div>
          <div>Date of Birth : 16 Oct 2000</div>
          <div>Languages Known : English, Tamil, Telugu, Malayalam</div>
          <div>Nationality : Indian</div>
          <div>Hobbies : Travelling, Photography, Football, Listening to Smooth Music</div>
        </section>
      </div>
    </div>
  );
};

export default App;
