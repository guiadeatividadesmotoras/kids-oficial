/* ============================================
   MAIN.JS — Landing Page Guia de Atividades Motoras
   ============================================ */

'use strict';

/* ============================================
   1. CONTADOR DE PESSOAS ONLINE
   ============================================ */
(function initOnlineCounter() {
  const el = document.getElementById('onlineCount');
  if (!el) return;

  // Gera número aleatório entre min e max, evitando repetir o mesmo
  function randomBetween(min, max, avoid) {
    let n;
    do {
      n = Math.floor(Math.random() * (max - min + 1)) + min;
    } while (n === avoid);
    return n;
  }

  let current = randomBetween(9, 27, -1);
  el.textContent = current;

  // Atualiza a cada 15 segundos com transição suave
  setInterval(function () {
    const next = randomBetween(9, 27, current);
    current = next;

    // Fade out → update → fade in
    el.style.transition = 'opacity 0.6s ease';
    el.style.opacity = '0';

    setTimeout(function () {
      el.textContent = current;
      el.style.opacity = '1';
    }, 600);
  }, 15000);
})();


/* ============================================
   2. FAQ — ACORDEÃO
   ============================================ */
(function initFaq() {
  const items = document.querySelectorAll('.faq-item');

  items.forEach(function (item) {
    const btn    = item.querySelector('.faq-question');
    const answer = item.querySelector('.faq-answer');

    if (!btn || !answer) return;

    btn.addEventListener('click', function () {
      const isOpen = btn.getAttribute('aria-expanded') === 'true';

      // Fecha todos os outros
      items.forEach(function (other) {
        const otherBtn    = other.querySelector('.faq-question');
        const otherAnswer = other.querySelector('.faq-answer');
        if (otherBtn && otherAnswer && other !== item) {
          otherBtn.setAttribute('aria-expanded', 'false');
          otherAnswer.classList.remove('open');
        }
      });

      // Alterna o atual
      if (isOpen) {
        btn.setAttribute('aria-expanded', 'false');
        answer.classList.remove('open');
      } else {
        btn.setAttribute('aria-expanded', 'true');
        answer.classList.add('open');
      }
    });
  });
})();


/* ============================================
   3. SCROLL FADE-IN ANIMATION
   ============================================ */
(function initScrollFade() {
  // Adiciona classe fade-in nos elementos alvo
  const targets = document.querySelectorAll(
    '.step-card, .transformation-list li, .product-feature-card, ' +
    '.access-step, .comparison-card, .faq-item, .transition-card, ' +
    '.pricing-card, .guarantee-badge'
  );

  targets.forEach(function (el) {
    el.classList.add('fade-in');
  });

  // IntersectionObserver para ativar quando visível
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.12,
      rootMargin: '0px 0px -40px 0px'
    });

    targets.forEach(function (el) {
      observer.observe(el);
    });
  } else {
    // Fallback para browsers sem suporte
    targets.forEach(function (el) {
      el.classList.add('visible');
    });
  }
})();


/* ============================================
   4. SMOOTH SCROLL PARA LINKS DE ÂNCORA
   ============================================ */
(function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(function (link) {
    link.addEventListener('click', function (e) {
      const href = link.getAttribute('href');
      if (href === '#') return;

      const target = document.querySelector(href);
      if (!target) return;

      e.preventDefault();
      const offset = 56; // altura da barra fixa
      const top = target.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top: top, behavior: 'smooth' });
    });
  });
})();


/* ============================================
   5. HIGHLIGHT DE URGÊNCIA NO PREÇO
      (pisca suavemente para criar senso de escassez)
   ============================================ */
(function initPriceHighlight() {
  const priceEls = document.querySelectorAll('.pricing-value, .pricing-final-value');
  let step = 0;

  setInterval(function () {
    priceEls.forEach(function (el) {
      step++;
      if (step % 2 === 0) {
        el.style.transition = 'transform 0.2s ease';
        el.style.transform = 'scale(1.04)';
      } else {
        el.style.transform = 'scale(1)';
      }
    });
  }, 3500);
})();


/* ============================================
   6. BARRA DE PROVA SOCIAL — micro-animação de entrada
   ============================================ */
(function initSocialBar() {
  const bar = document.getElementById('socialProofBar');
  if (!bar) return;

  bar.style.opacity = '0';
  bar.style.transform = 'translateY(-100%)';
  bar.style.transition = 'opacity 0.5s ease, transform 0.5s ease';

  requestAnimationFrame(function () {
    requestAnimationFrame(function () {
      bar.style.opacity = '1';
      bar.style.transform = 'translateY(0)';
    });
  });
})();


/* ============================================
   7. STAGGERED ANIMATION para listas
      (delay crescente nos itens visíveis)
   ============================================ */
(function initStagger() {
  const lists = document.querySelectorAll('.transformation-list, .steps-list, .access-steps');

  lists.forEach(function (list) {
    const children = list.querySelectorAll('.fade-in');
    children.forEach(function (child, i) {
      child.style.transitionDelay = (i * 0.08) + 's';
    });
  });
})();
