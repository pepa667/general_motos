// IMPORTANTE: Ajustado para o nome real do seu arquivo de estilos
import '../styles/globals.css';

const WHATSAPP_PHONE = '5515981661573';

const MESSAGES = {
  header: 'Olá! Conheci o site da UFC e gostaria de agendar um horário de atendimento.',
  'hero-primary':
    'Olá! Acessei o site da UFC e gostaria de falar com um especialista sobre um projeto para o meu carro.',
  'servico-som':
    'Olá! Gostaria de fazer um orçamento para um projeto de Som Automotivo personalizado.',
  'servico-mecanica': 'Olá! Gostaria de agendar uma revisão de Mecânica Premium com hora marcada.',
  default: 'Olá! Gostaria de mais informações sobre os serviços da UFC SOUND & MECHANICS.'
};

function initWhatsAppLinks() {
  const buttons = document.querySelectorAll('.whatsapp-btn');

  for (const button of buttons) {
    button.addEventListener('click', (e) => {
      e.preventDefault();

      const ctaType = button.dataset.cta || 'default';
      const text = encodeURIComponent(MESSAGES[ctaType] || MESSAGES['default']);
      const url = `https://api.whatsapp.com/send?phone=${WHATSAPP_PHONE}&text=${text}`;

      window.open(url, '_blank');
    });
  }
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

/**
 * On touch-only devices, the first tap reveals the rotating border (hover preview)
 * and the second tap confirms and triggers the WhatsApp action.
 * Buttons without a .rotating-border--hover wrapper (e.g. floating button) fire immediately.
 */
function initTouchHover() {
  if (!window.matchMedia('(hover: none)').matches) return;

  const buttons = document.querySelectorAll('.whatsapp-btn');

  // Tapping outside any button clears all touch-hover states
  document.addEventListener(
    'touchstart',
    (e) => {
      for (const btn of buttons) {
        const wrapper = btn.closest('.rotating-border--hover');
        if (wrapper && !wrapper.contains(e.target)) {
          wrapper.classList.remove('is-touch-hovered');
          btn.classList.remove('is-touch-hovered');
        }
      }
    },
    { passive: true }
  );

  for (const btn of buttons) {
    const wrapper = btn.closest('.rotating-border--hover');
    if (!wrapper) continue; // floating button has no wrapper — fires directly

    btn.addEventListener('touchend', (e) => {
      if (!wrapper.classList.contains('is-touch-hovered')) {
        e.preventDefault(); // block the synthetic click on first tap

        // Clear any other active touch-hover wrappers
        for (const other of buttons) {
          const otherWrapper = other.closest('.rotating-border--hover');
          if (otherWrapper && otherWrapper !== wrapper) {
            otherWrapper.classList.remove('is-touch-hovered');
            other.classList.remove('is-touch-hovered');
          }
        }

        wrapper.classList.add('is-touch-hovered');
        btn.classList.add('is-touch-hovered');
      }
      // Second tap: preventDefault is NOT called → synthetic click fires → initWhatsAppLinks handles it
    });
  }
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    initWhatsAppLinks();
    initFloatingButtonScroll();
    initTouchHover();
  });
} else {
  initWhatsAppLinks();
  initFloatingButtonScroll();
  initTouchHover();
}
