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
    let line = lines[i];
    const orig = line;
    
    // Fix duplicate dark text
    line = line.replace(/dark:hover:text-slate-50 dark:text-slate-50/g, "dark:hover:text-slate-50");
    line = line.replace(/dark:text-slate-50 dark:text-slate-50/g, "dark:text-slate-50");
    line = line.replace(/dark:text-slate-50 font-bold dark:text-slate-50/g, "dark:text-slate-50 font-bold");

    if (line !== orig) {
      lines[i] = line;
      modified = true;
    }
  }

  if (modified) {
    fs.writeFileSync(file, lines.join("\n"), "utf8");
    console.log(`Cleaned up duplicates in ${file}`);
    totalFilesModified++;
  }
}

console.log(`\nCleaned up ${totalFilesModified} files.`);
