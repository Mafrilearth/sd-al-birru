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

const replacements = [
  { search: /\btext-slate-950(?!\/)(?! dark:text-)/g, replace: "text-slate-950 dark:text-slate-50" },
  { search: /\bhover:text-slate-950(?!\/)(?! dark:hover:text-)/g, replace: "hover:text-slate-950 dark:hover:text-slate-50" },
];

let totalFilesModified = 0;

for (const file of files) {
  const content = fs.readFileSync(file, "utf8");
  let newContent = content;

  for (const { search, replace } of replacements) {
    newContent = newContent.replace(search, replace);
  }

  if (newContent !== content) {
    fs.writeFileSync(file, newContent, "utf8");
    console.log(`Updated ${file}`);
    totalFilesModified++;
  }
}

console.log(`\nModified ${totalFilesModified} files.`);
