// IMPORTANTE: Ajustado para o nome real do seu arquivo de estilos
import '../styles/globals.css';

const WHATSAPP_PHONE = '5515272485728';

const MESSAGES = {
  header: 'Olá! Conheci o site da UFC e gostaria de agendar um horário de atendimento.',
  'hero-primary':
    'Olá! Acessei o site da UFC e gostaria de falar com um especialista sobre um projeto para o meu carro.',
  'hero-secondary': 'Olá! Gostaria de conhecer melhor os serviços da UFC SOUND & MECHANICS.',
  'servico-som':
    'Olá! Gostaria de fazer um orçamento para um projeto de Som Automotivo personalizado.',
  'servico-mecanica': 'Olá! Gostaria de agendar uma revisão de Mecânica Premium com hora marcada.',
  default: 'Olá! Gostaria de mais informações sobre os serviços da UFC SOUND & MECHANICS.'
};

function initWhatsAppModal() {
  const modal = document.querySelector('#whatsapp-modal');
  const dialog = document.querySelector('#modal-dialog');
  const messageEl = document.querySelector('#modal-message');
  const confirmBtn = document.querySelector('#modal-confirm');
  const closeBtn = document.querySelector('#modal-close');
  const cancelBtn = document.querySelector('#modal-cancel');
  const backdrop = document.querySelector('#modal-backdrop');

  if (!modal) return;

  function openModal(ctaType) {
    const message = MESSAGES[ctaType] || MESSAGES['default'];
    const text = encodeURIComponent(message);

    messageEl.textContent = message;
    confirmBtn.href = `https://api.whatsapp.com/send?phone=${WHATSAPP_PHONE}&text=${text}`;

    modal.classList.remove('opacity-0', 'pointer-events-none');
    dialog.classList.remove('translate-y-4');
    document.body.classList.add('overflow-hidden');
    confirmBtn.focus();
  }

  function closeModal() {
    modal.classList.add('opacity-0', 'pointer-events-none');
    dialog.classList.add('translate-y-4');
    document.body.classList.remove('overflow-hidden');
  }

  for (const btn of document.querySelectorAll('.whatsapp-btn')) {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      openModal(btn.dataset.cta || 'default');
    });
  }

  closeBtn.addEventListener('click', closeModal);
  cancelBtn.addEventListener('click', closeModal);
  backdrop.addEventListener('click', closeModal);

  confirmBtn.addEventListener('click', () => setTimeout(closeModal, 300));

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !modal.classList.contains('opacity-0')) closeModal();
  });
}

function initFloatingButtonScroll() {
  const floatingBtn = document.querySelector('#floating-whatsapp');
  if (!floatingBtn) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      floatingBtn.classList.remove('opacity-0', 'translate-y-10', 'pointer-events-none');
      floatingBtn.classList.add('opacity-100', 'translate-y-0');
    } else {
      floatingBtn.classList.remove('opacity-100', 'translate-y-0');
      floatingBtn.classList.add('opacity-0', 'translate-y-10', 'pointer-events-none');
    }
  });
}

function initScrollActivation() {
  // Only on touch devices (pointer: coarse = finger, not mouse)
  if (!globalThis.matchMedia('(pointer: coarse)').matches) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > document.body.scrollHeight - window.innerHeight - 300) {
      document.querySelector('#agenda-btn-wrapper').classList.toggle('is-center', true);
      document
        .querySelector('#agenda-btn-wrapper')
        .querySelector('a')
        .classList.toggle('active', true);
    } else {
      document.querySelector('#agenda-btn-wrapper').classList.toggle('is-center', false);
      document
        .querySelector('#agenda-btn-wrapper')
        .querySelector('a')
        .classList.toggle('active', false);
    }
  });

  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        const wrapper = entry.target;
        const child = wrapper.querySelector(':scope > a, :scope > button');
        wrapper.classList.toggle('is-center', entry.isIntersecting);
        if (child) {
          child.classList.toggle('active', entry.isIntersecting);
        }
      }
    },
    { rootMargin: '-40% 0px -40% 0px' }
  );

  for (const wrapper of document.querySelectorAll('.rotating-border--hover')) {
    observer.observe(wrapper);
  }
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    initWhatsAppModal();
    initFloatingButtonScroll();
    initScrollActivation();
  });
} else {
  initWhatsAppModal();
  initFloatingButtonScroll();
  initScrollActivation();
}
