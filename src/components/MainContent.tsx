import projects from '../content/projects'
import * as Icons from './Icons'
import ProjectContainer from './ProjectContainer'

function MainContent() {
  return (
    <>
        <main id="main-content">
            <section id="about">
                <h2>About</h2>
                <p id="about-text">I'm a passionate Web Developer based in Bochum, Germany studying Computer Science 
                    at TU Dortmund. My focus is on frontend technologies. I also have experience working on the 
                    backend with Python, which allows me to contribute across the stack when needed. 
                    <br />
                    <br />
                    I'm always eager to learn new skills and apply them in practice, whether through university 
                    projects, freelance work, or personal challenges.
                    <br />
                    <br />
                    Outside of tech, I enjoy traveling and discovering the world, which fuels my curiosity and 
                    creativity. Always open to new opportunities, connections, and inspiring conversations.
                </p>
            </section>
            <section id="skills">
                <h2>Skills</h2>
                <p>I enjoy creating modern, user-friendly interfaces and also have solid experience working on the backend.</p>
                <div className="skills-container">
                    <div className="skills-category" id="frameworks-category"> 
                        <h3>Frameworks</h3>
                        <ul>
                            <li><img loading="lazy" className="skill-icon" src={Icons.reactLogo} alt="React" /><span>React</span></li>
                            <li><img loading="lazy" className="skill-icon" src={Icons.tailwindLogo} alt="Tailwind CSS" /><span>Tailwind CSS</span></li>
                            <li><img loading="lazy" className="skill-icon" src={Icons.flaskLogo} alt="Flask" /><span>Flask</span></li>
                            <li><img loading="lazy" className="skill-icon" src={Icons.fastapiLogo} alt="FastAPI" /><span>FastAPI</span></li>
                        </ul>
                    </div>
                    <div className="skills-category" id="programming-languages-category">
                        <h3>Programming Languages</h3>
                        <ul>
                            <li><img loading="lazy" className="skill-icon" src={Icons.javascriptLogo} alt="JavaScript" /><span>JavaScript</span></li>
                            <li><img loading="lazy" className="skill-icon" src={Icons.typescriptLogo} alt="TypeScript" /><span>TypeScript</span></li>
                            <li><img loading="lazy" className="skill-icon" src={Icons.htmlLogo} alt="HTML" /><span>HTML</span></li>
                            <li><img loading="lazy" className="skill-icon" src={Icons.cssLogo} alt="CSS" /><span>CSS</span></li>
                            <li><img loading="lazy" className="skill-icon" src={Icons.pythonLogo} alt="Python" /><span>Python</span></li>
                        </ul>
                    </div>
                    <div className="skills-category" id="tools-category">
                        <h3>Tools & Technologies</h3>
                        <ul>
                            <li><img loading="lazy" className="skill-icon" src={Icons.restfulLogo} alt="RESTful APIs" /><span>RESTful APIs</span></li>
                            <li><img loading="lazy" className="skill-icon" src={Icons.gitLogo} alt="Git" /><span>Git</span></li>
                            <li><img loading="lazy" className="skill-icon" src={Icons.dockerLogo} alt="Docker" /><span>Docker</span></li>
                            <li><img loading="lazy" className="skill-icon" src={Icons.mysqlLogo} alt="MySQL" /><span>MySQL</span></li>
                        </ul>
                    </div>
                    <div className="skills-category" id="other-skills-category">
                        <h3>Other Skills</h3>
                        <ul>
                            <li><img loading="lazy" className="skill-icon" src={Icons.scrumLogo} alt="Scrum" /><span>Scrum</span></li>
                            <li><img loading="lazy" className="skill-icon" src={Icons.langchainLogo} alt="LangChain" /><span>LangChain</span></li>
                        </ul>
                    </div>
                </div>
            </section>
            <section id="projects">
                <h2>Projects</h2>
                <p>I have projects in web development with a focus on creating beautiful and functional websites.</p>
                <div id="projects-container">  
                    {projects.map((project) => (<ProjectContainer key={project.title} project={project} />))}
                </div>
            </section>
            <section id="contact">
                <h2>Contact</h2>
                <p>
                    You can reach me through my <a href="https://www.linkedin.com/in/sabina-romanova-4130ba264" target="_blank" rel="noopener noreferrer">LinkedIn</a> profile. 
                </p>
                <p>
                    Also check out my <a href="https://github.com/b-na" target="_blank" rel="noopener noreferrer">GitHub</a> profile.
                </p>
            </section>
            <div id="back-to-top">
                <a href="#header"><img loading="lazy" className="arrow-up-icon" src={Icons.arrowUpLogo} alt="Arrow Up" /></a>
            </div>
        </main>
    </>
  )
}

export default MainContent