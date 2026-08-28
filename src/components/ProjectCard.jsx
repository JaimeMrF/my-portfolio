function ProjectCard({ img, title, description, link }) {
  if (!img && !title && !description && !link) return null

  return (
    <article className="project-card group flex flex-col overflow-hidden transition-all duration-300">
      {img && (
        <div className="project-card-media w-full aspect-video overflow-hidden">
          <img
            src={img}
            alt={title || 'Vista previa del proyecto'}
            className="project-card-image w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
          />
        </div>
      )}

      {(title || description || link) && (
        <div className="flex flex-col gap-2 p-5 flex-1">
          {title && <h3 className="project-card-title text-base sm:text-lg font-semibold text-black dark:text-white">{title}</h3>}
          {description && <p className="project-card-description text-sm leading-relaxed flex-1">{description}</p>}
          {link && (
            <a href={link} target="_blank" rel="noopener noreferrer" className="project-card-link inline-flex items-center gap-1.5 w-fit">
              Ver proyecto
              <svg className="size-3.5 transition-transform duration-200 group-hover:translate-x-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </a>
          )}
        </div>
      )}
    </article>
  )
}

export default ProjectCard