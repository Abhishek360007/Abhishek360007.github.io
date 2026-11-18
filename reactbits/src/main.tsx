/**
 * React Bits effects layered onto the plain HTML portfolio.
 *
 * script.js renders the page from data.js first (this module runs after it),
 * then each block below finds an element and swaps in a React Bits component.
 * If this bundle fails to load, the page still works exactly as before.
 */
import { createRoot } from 'react-dom/client';
import { createRef, type ReactNode } from 'react';
import BlurText from './components/BlurText';
import ClickSpark, { type ClickSparkHandle } from './components/ClickSpark';
import DecryptedText from './components/DecryptedText';
import GradientText from './components/GradientText';
import StarBorder from './components/StarBorder';
import './overrides.css';

const GRADIENT = ['#667eea', '#a855f7', '#5b6cf0'];
const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
const finePointer = matchMedia('(pointer: fine)').matches;

document.documentElement.classList.add('rb');

/** Replace `el` with a fresh host element and render into it. `keepClass` copies el's classes onto the host. */
function mountInPlace(el: Element, tag: string, node: ReactNode, keepClass = true) {
  const host = document.createElement(tag);
  if (keepClass) host.className = el.className;
  el.replaceWith(host);
  createRoot(host).render(node);
  return host;
}

// 1. Hero name: gradient that drifts and follows the pointer (GradientText).
const heroName = document.querySelector<HTMLElement>('#heroName');
if (heroName) {
  const name = heroName.textContent ?? '';
  heroName.classList.add('rb-hero-name');
  createRoot(heroName).render(
    <GradientText colors={GRADIENT} animationSpeed={7} followPointer={finePointer} scale={2.5}>
      {name}
    </GradientText>,
  );
}

// 2. "Hello, I'm": letters blur in on load (BlurText).
const hello = document.querySelector('.hero .hello');
if (hello) {
  mountInPlace(
    hello,
    'div',
    <BlurText text={hello.textContent ?? ''} animateBy="letters" delay={35} direction="bottom" trigger="load" />,
  );
}

// 3. Section title highlights ("Me", "Projects", ...): slow flowing gradient (GradientText).
document.querySelectorAll('.section-title > span').forEach(span => {
  const text = span.textContent ?? '';
  span.classList.add('rb-title');
  createRoot(span).render(
    <GradientText colors={GRADIENT} animationSpeed={10}>
      {text}
    </GradientText>,
  );
});

// 4. Contact subtitle: words blur in when scrolled into view (BlurText).
const contactSub = document.querySelector('#contact .section-sub');
if (contactSub) {
  contactSub.classList.remove('reveal');
  mountInPlace(contactSub, 'div', <BlurText text={contactSub.textContent ?? ''} animateBy="words" delay={60} trigger="view" />);
}

// 5. "Let's Talk" button: a star of light travels round its border (StarBorder).
const talk = document.querySelector<HTMLAnchorElement>('.hero .cta a.btn-primary');
if (talk) {
  mountInPlace(
    talk,
    'span',
    <StarBorder
      as="a"
      href={talk.getAttribute('href') ?? '#contact'}
      className="btn rb-star"
      color="#ffffff"
      backgroundColor="var(--grad)"
      textColor="#ffffff"
      borderColor="rgba(255, 255, 255, 0.22)"
      radius={12}
      duration={5}
      glow={0.8}
      hover="lap"
    >
      {talk.textContent}
    </StarBorder>,
    false,
  ).classList.add('rb-star-host');
}

// 6. Email addresses: letters scramble and resolve on hover (DecryptedText).
const emailTargets: [Element | null, 'hover' | 'inViewHover'][] = [
  [document.querySelector('#infoList a[href^="mailto:"]'), 'hover'],
  [document.querySelector('#contactInfo a[href^="mailto:"] div > span'), 'inViewHover'],
];
for (const [el, animateOn] of emailTargets) {
  if (!el) continue;
  const text = el.textContent ?? '';
  createRoot(el).render(
    <DecryptedText
      text={text}
      animateOn={animateOn}
      sequential
      revealDirection="start"
      speed={35}
      characters="abcdefghijklmnopqrstuvwxyz0123456789@."
      encryptedClassName="rb-encrypted"
    />,
  );
}

// 7. Sparks wherever the visitor clicks (ClickSpark), drawn on a fixed full-screen layer.
if (!reduced) {
  const layer = document.createElement('div');
  layer.className = 'rb-spark-layer';
  layer.setAttribute('aria-hidden', 'true');
  document.body.appendChild(layer);
  const sparks = createRef<ClickSparkHandle>();
  createRoot(layer).render(
    <ClickSpark ref={sparks} sparkColor={GRADIENT.concat('#ffffff')} sparkCount={10} sparkRadius={24} sparkSize={11} />,
  );
  document.addEventListener('pointerdown', e => {
    if (e.button === 0) sparks.current?.spark(e.clientX, e.clientY);
  });
}
