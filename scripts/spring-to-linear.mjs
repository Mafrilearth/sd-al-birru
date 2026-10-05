// Generates the CSS linear() easing used by --ease-apple-spring in src/app/globals.css
// from the same spring tokens as appleSpring in src/lib/motion.ts.
// Usage: node scripts/spring-to-linear.mjs
const stiffness = 300;
const damping = 28;
const mass = 0.8;

const w0 = Math.sqrt(stiffness / mass);
const zeta = damping / (2 * Math.sqrt(stiffness * mass));
const wd = w0 * Math.sqrt(1 - zeta * zeta);
const x = (t) =>
  1 - Math.exp(-zeta * w0 * t) * (Math.cos(wd * t) + ((zeta * w0) / wd) * Math.sin(wd * t));

let settle = 0;
for (let t = 0; t < 3; t += 0.001) if (Math.abs(1 - x(t)) > 0.001) settle = t;
settle = Math.ceil(settle * 100) / 100;

const samples = 20;
const points = Array.from({ length: samples + 1 }, (_, i) => +x((settle * i) / samples).toFixed(4));
points[samples] = 1;

console.log(`/* zeta ${zeta.toFixed(3)}, settles in ${Math.round(settle * 1000)}ms */`);
console.log(`--ease-apple-spring: linear(${points.join(", ")});`);
console.log(`--duration-apple-spring: ${Math.round(settle * 1000)}ms;`);
