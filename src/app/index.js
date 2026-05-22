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

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    initWhatsAppLinks();
    initFloatingButtonScroll();
  });
} else {
  initWhatsAppLinks();
  initFloatingButtonScroll();
}
