/**
 * main.js — Orquestador principal de la aplicación modular ES6+
 */

import { PROJECTS, EXPERIENCE, EDUCATION, TECH_SKILLS, SOFT_SKILLS } from './data.js';
import {
  renderProjectsList,
  renderExperience,
  renderEducation,
  renderSkills
} from './dom.js';
import {
  initIntroCurtain,
  initProjectModalEvents,
  initCopyEmailEvent,
  initMobileNavAutoClose
} from './events.js';

/**
 * Activa animaciones suaves de aparición conforme el usuario hace scroll
 */
function initScrollReveal() {
  const elements = document.querySelectorAll('.reveal-on-scroll');
  if (!('IntersectionObserver' in window)) {
    elements.forEach((el) => el.classList.add('is-visible'));
    return;
  }

  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          obs.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );

  elements.forEach((el) => observer.observe(el));
}

document.addEventListener('DOMContentLoaded', () => {
  // 1. Cortina editorial de entrada
  initIntroCurtain();

  // 2. Renderizado dinámico desde módulos de datos
  renderProjectsList(PROJECTS);
  renderExperience(EXPERIENCE);
  renderEducation(EDUCATION);
  renderSkills(TECH_SKILLS, SOFT_SKILLS);

  // 3. Inicialización de eventos e interacciones
  initProjectModalEvents(PROJECTS);
  initCopyEmailEvent();
  initMobileNavAutoClose();
  initScrollReveal();

  // 4. Año dinámico en el pie de página
  const yearEl = document.getElementById('current-year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
});
