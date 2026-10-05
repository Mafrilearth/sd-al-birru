import fs from "fs";
import path from "path";

function getAllFiles(dirPath, arrayOfFiles) {
  const files = fs.readdirSync(dirPath);

  arrayOfFiles = arrayOfFiles || [];

  files.forEach(function (file) {
    if (fs.statSync(dirPath + "/" + file).isDirectory()) {
      arrayOfFiles = getAllFiles(dirPath + "/" + file, arrayOfFiles);
    } else {
      if (file.endsWith(".tsx")) {
        arrayOfFiles.push(path.join(dirPath, "/", file));
      }
    }
  });

  return arrayOfFiles;
}

const files = getAllFiles("src");

let totalFilesModified = 0;

for (const file of files) {
  const content = fs.readFileSync(file, "utf8");
  const lines = content.split("\n");
  let modified = false;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    // If line has amber background and dark:text-slate-50, remove dark:text-slate-50
    if ((line.includes("bg-amber") || line.includes("from-amber")) && line.includes("dark:text-slate-50")) {
      lines[i] = line.replace(/dark:text-slate-50/g, "").replace(/\s+/g, " "); // cleanup double spaces
      modified = true;
    }
    if ((line.includes("bg-amber") || line.includes("from-amber")) && line.includes("dark:text-white")) {
      lines[i] = line.replace(/dark:text-white/g, "").replace(/\s+/g, " ");
      modified = true;
    }
  }

  if (modified) {
    fs.writeFileSync(file, lines.join("\n"), "utf8");
    console.log(`Fixed contrast in ${file}`);
    totalFilesModified++;
  }
}

console.log(`\nFixed contrast in ${totalFilesModified} files.`);
