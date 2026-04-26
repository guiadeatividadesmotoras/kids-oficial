/* =============================================
   GUIA DE ATIVIDADES MOTORAS
   JavaScript Principal — Interações & Contador
   ============================================= */

(function () {
  'use strict';

  /* ── 1. CONTADOR DE PESSOAS ONLINE ─────────── */
  const countEl = document.getElementById('online-count');

  function getRandomCount() {
    // Retorna número entre 9 e 27 com tendência para 12–22 (mais realista)
    const base = Math.floor(Math.random() * 19) + 9; // 9..27
    return base;
  }

  function animateCount(from, to, duration) {
    if (!countEl) return;
    const start = performance.now();
    const diff = to - from;

    function update(now) {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      // Easing suave
      const eased = progress < 0.5
        ? 2 * progress * progress
        : -1 + (4 - 2 * progress) * progress;

      countEl.textContent = Math.round(from + diff * eased);

      if (progress < 1) {
        requestAnimationFrame(update);
      }
    }

    requestAnimationFrame(update);
  }

  let currentCount = getRandomCount();
  if (countEl) countEl.textContent = currentCount;

  // Atualiza a cada 15 segundos
  setInterval(function () {
    let newCount;
    // Evitar mudança muito grande (parecer mais natural)
    do {
      newCount = getRandomCount();
    } while (Math.abs(newCount - currentCount) > 7);

    animateCount(currentCount, newCount, 1200); // 1.2s de transição
    currentCount = newCount;
  }, 15000);


  /* ── 2. FAQ — ACESSIBILIDADE (TECLADO) ──────── */
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(function (item) {
    const summary = item.querySelector('.faq-question');
    if (summary) {
      summary.setAttribute('tabindex', '0');
    }
  });


  /* ── 3. SMOOTH SCROLL PARA ÂNCORAS ──────────── */
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      const targetEl = document.querySelector(targetId);
      if (!targetEl) return;
      e.preventDefault();
      const barHeight = document.getElementById('social-proof-bar')
        ? document.getElementById('social-proof-bar').offsetHeight
        : 44;
      const offsetTop = targetEl.getBoundingClientRect().top + window.scrollY - barHeight - 12;
      window.scrollTo({ top: offsetTop, behavior: 'smooth' });
    });
  });


  /* ── 4. BOTÕES CTA — MICRO-INTERAÇÃO ─────────── */
  const ctaButtons = document.querySelectorAll('.btn-cta');

  ctaButtons.forEach(function (btn) {
    btn.addEventListener('click', function () {
      // Pulso visual rápido
      btn.style.transform = 'scale(0.97)';
      setTimeout(function () {
        btn.style.transform = '';
      }, 140);
    });
  });


  /* ── 5. SCROLL REVEAL SUAVE ──────────────────── */
  if ('IntersectionObserver' in window) {
    const revealEls = document.querySelectorAll(
      '.step-card, .transformation-list li, .comparison-card, .faq-item, .access-step, .recap-item, .product-features li'
    );

    const revealObs = new IntersectionObserver(function (entries, observer) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.08,
      rootMargin: '0px 0px -30px 0px'
    });

    revealEls.forEach(function (el, index) {
      el.style.opacity = '0';
      el.style.transform = 'translateY(18px)';
      el.style.transition = 'opacity 0.45s ease ' + (index % 4 * 0.07) + 's, transform 0.45s ease ' + (index % 4 * 0.07) + 's';
      revealObs.observe(el);
    });
  }


  /* ── 6. BARRA DE PROVA SOCIAL — HIDE ON SCROLL DOWN ─ */
  const socialBar = document.getElementById('social-proof-bar');
  let lastScrollY = 0;
  let barHidden = false;

  window.addEventListener('scroll', function () {
    const currentY = window.scrollY;
    const scrollingDown = currentY > lastScrollY;

    if (scrollingDown && currentY > 120 && !barHidden) {
      socialBar.style.transform = 'translateY(-100%)';
      socialBar.style.transition = 'transform 0.3s ease';
      document.body.style.paddingTop = '0';
      barHidden = true;
    } else if (!scrollingDown && barHidden) {
      socialBar.style.transform = 'translateY(0)';
      document.body.style.paddingTop = socialBar.offsetHeight + 'px';
      barHidden = false;
    }

    lastScrollY = currentY;
  }, { passive: true });


  /* ── 7. CONTADOR — OCULTAR TEMPORARIAMENTE APÓS CLIQUE ─ */
  const onlineCounter = document.getElementById('online-counter');
  if (onlineCounter) {
    onlineCounter.addEventListener('click', function () {
      onlineCounter.style.opacity = '0';
      onlineCounter.style.transform = 'scale(0.9)';
      onlineCounter.style.transition = 'all 0.2s ease';
      setTimeout(function () {
        onlineCounter.style.opacity = '1';
        onlineCounter.style.transform = 'scale(1)';
      }, 3000);
    });
  }

})();
