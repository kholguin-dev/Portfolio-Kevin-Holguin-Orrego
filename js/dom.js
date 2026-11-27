/**
 * dom.js — Manipulación del DOM y renderizado dinámico (Semana 5: Día 18)
 */

/**
 * Renderiza la lista editorial de proyectos dentro de #projects-list
 * @param {Array} projects
 */
export function renderProjectsList(projects) {
  const container = document.getElementById('projects-list');
  if (!container) return;

  container.innerHTML = projects
    .map(
      (project) => `
      <button
        type="button"
        class="project-row-item"
        data-project-id="${project.id}"
        aria-label="Ver detalles técnicos de ${project.title}"
      >
        <div class="row g-3 align-items-center">
          <div class="col-2 col-md-1">
            <span class="project-row-num">${project.index}</span>
          </div>
          <div class="col-10 col-md-7">
            <h3 class="project-row-title">${project.title}</h3>
            <p class="project-row-summary">${project.shortSummary}</p>
          </div>
          <div class="col-12 col-md-4 text-md-end mt-3 mt-md-0">
            <span class="project-row-cta">
              Ver caso técnico <span aria-hidden="true">↗</span>
            </span>
          </div>
        </div>
      </button>
    `
    )
    .join('');
}

/**
 * Rellena el modal técnico de Bootstrap con los datos del proyecto seleccionado
 * @param {Object} project
 */
export function populateProjectModal(project) {
  if (!project) return;

  document.getElementById('modal-project-type').textContent = project.type;
  document.getElementById('projectModalLabel').textContent = project.title;
  document.getElementById('modal-project-description').textContent = project.description;
  document.getElementById('modal-project-challenge').textContent = project.challengeAndSolution;
  document.getElementById('modal-project-contribution').textContent = project.contribution;
  document.getElementById('modal-project-team').textContent = project.collaborators;

  const stackContainer = document.getElementById('modal-project-stack');
  stackContainer.innerHTML = project.stack
    .map((tech) => `<span class="skill-chip">${tech}</span>`)
    .join('');

  document.getElementById('modal-repo-link').href = project.repoUrl;
  document.getElementById('modal-demo-link').href = project.demoUrl;
}

/**
 * Renderiza la columna 01 de Experiencia Laboral
 * @param {Array} experienceList
 */
export function renderExperience(experienceList) {
  const container = document.getElementById('experience-list');
  if (!container) return;

  container.innerHTML = experienceList
    .map(
      (item) => `
      <article class="cv-entry">
        <div class="row g-2">
          <div class="col-sm-4">
            <span class="cv-date">${item.period}</span>
          </div>
          <div class="col-sm-8">
            <h4 class="cv-role">${item.role}</h4>
            <p class="cv-org">${item.organization}</p>
            <p class="cv-desc">${item.description}</p>
          </div>
        </div>
      </article>
    `
    )
    .join('');
}

/**
 * Renderiza la columna 02 de Educación
 * @param {Array} educationList
 */
export function renderEducation(educationList) {
  const container = document.getElementById('education-list');
  if (!container) return;

  container.innerHTML = educationList
    .map(
      (item) => `
      <article class="cv-entry">
        <div class="row g-2">
          <div class="col-sm-4">
            <span class="cv-date">${item.period}</span>
          </div>
          <div class="col-sm-8">
            <h4 class="cv-role">${item.degree}</h4>
            <p class="cv-org mb-0">${item.institution}</p>
          </div>
        </div>
      </article>
    `
    )
    .join('');
}

/**
 * Renderiza las etiquetas de habilidades técnicas y conductuales (BSM)
 * @param {Array} techSkills
 * @param {Array} softSkills
 */
export function renderSkills(techSkills, softSkills) {
  const techContainer = document.getElementById('tech-skills-container');
  const softContainer = document.getElementById('soft-skills-container');

  if (techContainer) {
    techContainer.innerHTML = techSkills
      .map((skill) => `<span class="skill-chip">${skill}</span>`)
      .join('');
  }

  if (softContainer) {
    softContainer.innerHTML = softSkills
      .map((skill) => `<span class="skill-chip skill-chip-soft">${skill}</span>`)
      .join('');
  }
}
