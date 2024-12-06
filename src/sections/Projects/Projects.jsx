import styles from './ProjectsStyles.module.css';
import foodOrderSys from '../../assets/Food-Ordering-Sys.png';
import YoutubeClone from '../../assets/Youtube-Clone.png';
import HypePost from '../../assets/HypePost.png';
import ProjectCard from '../../component/ProjectCard';


function Projects() {
  return (
    <section id="projects" className={styles.container}>
        <h1 className="sectionTitle">Projects</h1>
        <div className={styles.projectsContainer}>
            <ProjectCard src={foodOrderSys} link="https://github.com/iamavinashmourya/food-ordering-dev-application" h3="Tomato" p="Full Stack Food Ordering Web Application"/>
            <ProjectCard src={YoutubeClone} link="https://github.com/iamavinashmourya/youtube-clone-dev" h3="Youtube Clone" p="YouTube Clone built using React JS and the YouTube Data API"/>
            <ProjectCard src={HypePost} link="https://github.com/iamavinashmourya/HypePost" h3="HypePost" p="Feature-rich blogging platform designed for dynamic content creation and community engagement"/>
            
        </div>
    </section>
  );
}

export default Projects;