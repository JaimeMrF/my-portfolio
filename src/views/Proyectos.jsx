import ProjectCard from '../components/ProjectCard'

const projects = [
  {
    title: "Nombre del proyecto",
    description: "Breve descripción de qué hace el proyecto y qué tecnologías usaste.",
    img: null,
    link: "https://github.com/JaimeMrF/proyecto",
  }
]

function Proyectos() {
  return (
    <section className="projects-page px-4 sm:px-6 lg:px-10 py-10 sm:py-14 max-w-6xl mx-auto">
      <h1 className="projects-heading text-black dark:text-white mb-8">
        Proyectos
      </h1>

      <div className="projects-grid flex flex-wrap justify-center gap-6">
        {projects.map((project, index) => (
          <div key={index} className="project-grid-item w-full sm:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)]">
            <ProjectCard
              img={project.img}
              title={project.title}
              description={project.description}
              link={project.link}
            />
          </div>
        ))}
      </div>
    </section>
  )
}

export default Proyectos