# Guia de Atividades Motoras — Landing Page

Landing page de alta conversão, 100% mobile-first, para o produto **Guia de Atividades Motoras** (+250 atividades para foco, calma e coordenação infantil).

---

## ✅ Funcionalidades Implementadas

### Estrutura de Conversão (14 Blocos)
1. **Barra de Prova Social** — Topo fixo com "+2.200 famílias já aplicaram este método"
2. **Contador de Pessoas Online** — Fixo, discreto, canto inferior direito, atualiza a cada 15s (9–27 pessoas)
3. **Headline** — Caixa alta, destaque em azul, máx. 3 linhas
4. **Subheadline** — Texto puro sem efeitos
5. **Vídeo Principal** — Proporção 9:16 (TikTok), Vimeo embed
6. **Depoimento em Vídeo** — 2º vídeo Vimeo com contexto emocional
7. **Dor Latente** — Imagem de mãe com 5 pensamentos sobrepostos (vermelho com blur)
8. **Transição para Solução** — Pergunta impactante com partes sublinhadas
9. **Passo a Passo** — 3 steps visuais com numeração azul
10. **Transformação** — 6 bullets de resultado em cards brancos
11. **O Que Você Recebe** — Imagem do produto + lista de features
12. **Acesso Imediato** — 3 steps compactos (e-mail → abrir → aplicar)
13. **Ancoragem de Valor** — Preços riscados + preço real destacado em verde
14. **CTA #1** — Botão verde grande "Quero começar agora"
15. **Conversa Séria** — Comparativo COM vs SEM o guia
16. **CTA #2** — Botão verde final com reforço emocional
17. **FAQ** — 6 perguntas em accordion nativo (details/summary)
18. **Rodapé** — Legal + política de privacidade

---

## 🗂️ Estrutura de Arquivos

```
index.html          — Página principal (todos os 16 blocos)
css/
  style.css         — Design system mobile-first completo
js/
  main.js           — Contador online, scroll reveal, interações
```

---

## 🔗 URIs Funcionais

| Rota | Descrição |
|------|-----------|
| `index.html` | Landing page principal |
| `#video-principal` | Vídeo de apresentação |
| `#depoimento` | Vídeo depoimento |
| `#dor` | Seção de dor latente |
| `#como-funciona` | Passo a passo |
| `#cta-1` | Primeiro CTA |
| `#cta-2` | CTA final |
| `#faq` | Perguntas frequentes |

**Checkout:** [https://pay.cakto.com.br/3e6jg76_843810](https://pay.cakto.com.br/3e6jg76_843810)

---

## 🎨 Design System

| Token | Valor |
|-------|-------|
| `--blue` | `#3B82F6` |
| `--blue-light` | `#EEF6FF` |
| `--green-btn` | `#22C55E` |
| `--text-dark` | `#1A1A1A` |
| `--text-mid` | `#333333` |
| `--white` | `#FFFFFF` |
| Fonte | Inter (Google Fonts) |
| Ícones | Font Awesome 6.4 |

---

## 📱 Mobile-First

- Viewport base: **320px → 480px** (foco)
- Breakpoints: `480px`, `600px`
- Vídeos: proporção **9:16** (TikTok vertical)
- Botões: altura mínima `56px`, `border-radius: 50px`
- Textos: máx. 480px de largura

---

## 🔧 JavaScript (main.js)

| Feature | Detalhes |
|---------|----------|
| Contador Online | 9–27 pessoas, atualiza a cada 15s com animação suave |
| Scroll Reveal | IntersectionObserver para cards/items |
| Barra Topo | Oculta ao scroll down, reaparece ao scroll up |
| FAQ | Nativo com `<details>` (sem JS) |
| CTA Feedback | Micro-animação de clique nos botões |

---

## ⚠️ Funcionalidades Não Implementadas

- [ ] Pixel de rastreamento (Facebook/Google Ads)
- [ ] Temporizador de escassez/urgência
- [ ] Pop-up de saída (exit intent)
- [ ] Integração com e-mail marketing (automação pós-compra)

---

## 🚀 Próximos Passos

1. Adicionar pixel Meta/Google para rastreamento de conversão
2. Implementar timer de countdown para urgência
3. Adicionar mais depoimentos em texto (cards estilo WhatsApp)
4. Testar velocidade com Lighthouse e otimizar imagens
5. Configurar domínio personalizado no Publish

---

## 📦 Dados do Produto

- **Produto:** Guia de Atividades Motoras (método digital)
- **Público:** Mães de crianças de 3 a 10 anos
- **Preço:** R$ 47,00 à vista ou 12x de R$ 4,90
- **Checkout:** Cakto
- **Vídeos:** Vimeo (embed 9:16)
- **Imagem produto:** GitHub raw

---

*Desenvolvido com HTML5, CSS3 e JavaScript puro — sem frameworks, sem dependências pesadas.*
