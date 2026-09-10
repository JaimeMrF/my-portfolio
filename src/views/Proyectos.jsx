import ProjectCard from '../components/ProjectCard'
import unab_bus from '../assets/unab_bus.webp'
import portfolio from '../assets/portfolio.webp'

const projects = [
  {
    title: "Bus Unab",
    description: "Sistema de transporte universitario desarrollado con Laravel, Kotlin Multiplatform, MySQL y Firebase, con API REST, autenticación y panel de administración mediante Filament.",
    img: unab_bus,
    link: "https://github.com/JaimeMrF/bus_unab",
  },
  {
    title: "Portafolio",
    description: "Portafolio web desarrollado con React y Vite, con diseño responsive y componentes reutilizables para presentar proyectos, tecnologías y experiencia en desarrollo de software.",
    img: portfolio,
    link: "https://github.com/JaimeMrF/my-portfolio",
  }
]

function Proyectos() {
  return (
    <section className="projects-page px-4 sm:px-6 lg:px-10 py-10 sm:py-14 max-w-6xl mx-auto">
      <h1 className="projects-heading text-black dark:text-white mb-8">
        Proyectos
      </h1>

      <div className="projects-grid flex flex-wrap justify-start gap-6">
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