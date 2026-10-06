const fs = require('fs');
const path = require('path');

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach((file) => {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat && stat.isDirectory()) {
      results = results.concat(walk(fullPath));
    } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.ts')) {
      results.push(fullPath);
    }
  });
  return results;
}

const files = walk('./src');
let changed = 0;

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  // Match ALL rounded classes including directional (t, b, l, r, tl, tr, bl, br)
  const regex = /\brounded(?:-[trbl]|-(?:tl|tr|bl|br))?-(?:sm|md|lg|xl|2xl|3xl|4xl|full|\[.*?\])\b/g;
  if (regex.test(content)) {
    const newContent = content.replace(regex, 'rounded-none');
    fs.writeFileSync(file, newContent, 'utf8');
    changed++;
  }
});

console.log(`Updated ${changed} files to use rounded-none.`);
