/**
 * events.js — Gestión de eventos e interacciones con Web APIs (Semana 5: Días 18 y 21)
 */

import { populateProjectModal } from './dom.js';

const STORAGE_KEY_LAST_PROJECT = 'kho_last_viewed_project';

/**
 * Controla la cortina editorial de entrada (KHO.)
 */
export function initIntroCurtain() {
  const curtain = document.getElementById('intro-curtain');
  if (!curtain) return;

  document.body.classList.add('curtain-active');

  window.setTimeout(() => {
    curtain.classList.add('is-hidden');
    document.body.classList.remove('curtain-active');
  }, 950);
}

/**
 * Delegación de eventos para abrir el modal técnico de cada proyecto
 * y guardar el último proyecto consultado en localStorage
 * @param {Array} projects
 */
export function initProjectModalEvents(projects) {
  const listContainer = document.getElementById('projects-list');
  const modalElement = document.getElementById('projectModal');
  const indicator = document.getElementById('last-viewed-indicator');

  if (!listContainer || !modalElement || typeof bootstrap === 'undefined') return;

  const projectModal = new bootstrap.Modal(modalElement);

  // Recuperar último proyecto consultado desde localStorage
  const savedProjectTitle = localStorage.getItem(STORAGE_KEY_LAST_PROJECT);
  if (savedProjectTitle && indicator) {
    indicator.innerHTML = `Último caso revisado: <span class="text-lime">${savedProjectTitle}</span>`;
  }

  listContainer.addEventListener('click', (event) => {
    const trigger = event.target.closest('[data-project-id]');
    if (!trigger) return;

    const projectId = trigger.getAttribute('data-project-id');
    const selectedProject = projects.find((item) => item.id === projectId);
    if (!selectedProject) return;

    populateProjectModal(selectedProject);
    localStorage.setItem(STORAGE_KEY_LAST_PROJECT, selectedProject.title);

    if (indicator) {
      indicator.innerHTML = `Último caso revisado: <span class="text-lime">${selectedProject.title}</span>`;
    }

    projectModal.show();
  });
}

/**
 * Permite copiar el correo electrónico con un clic usando Clipboard API
 */
export function initCopyEmailEvent() {
  const copyBtn = document.getElementById('copy-email-btn');
  const feedback = document.getElementById('copy-feedback');
  const email = 'kholguin.design@gmail.com';

  if (!copyBtn || !feedback) return;

  copyBtn.addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText(email);
      feedback.textContent = '✓ Correo copiado: kholguin.design@gmail.com';
    } catch {
      feedback.textContent = `Correo directo: ${email}`;
    }

    window.setTimeout(() => {
      feedback.textContent = '';
    }, 3500);
  });
}

/**
 * Cierra el menú colapsable en dispositivos móviles al hacer clic en un enlace
 */
export function initMobileNavAutoClose() {
  const navCollapse = document.getElementById('mainNav');
  if (!navCollapse || typeof bootstrap === 'undefined') return;

  const navLinks = navCollapse.querySelectorAll('.nav-link');
  navLinks.forEach((link) => {
    link.addEventListener('click', () => {
      if (navCollapse.classList.contains('show')) {
        const bsCollapse = bootstrap.Collapse.getInstance(navCollapse);
        if (bsCollapse) bsCollapse.hide();
      }
    });
  });
}
