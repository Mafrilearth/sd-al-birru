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

const replacements = {
  // Navigation & Core Sections
  'Pendaftaran': 'Registration',
  'pendaftaran': 'registration',
  'Beranda': 'Home',
  'Profil': 'About',
  'Informasi Publik': 'Public Information',
  'Hubungi Kami': 'Contact Us',
  'Galeri': 'Gallery',
  'Warta': 'News',
  'Berita': 'News',
  'Fasilitas': 'Facilities',
  'Ekstrakurikuler': 'Extracurriculars',
  'Kurikulum': 'Curriculum',
  
  // School Specific
  'Santri': 'Students',
  'santri': 'students',
  'Guru': 'Teachers',
  'guru': 'teachers',
  'Sekolah Dasar Islam Terpadu': 'Integrated Islamic Primary School',
  'Sekolah': 'School',
  'sekolah': 'school',
  'Yayasan': 'Foundation',
  'Panitia': 'Committee',
  'Gelombang': 'Phase',
  'Tahun Ajaran': 'Academic Year',
  'Formulir': 'Form',
  'formulir': 'form',
  
  // UI Elements
  'Kembali ke Beranda': 'Back to Home',
  'Muat Ulang Sistem': 'Reload System',
  'Halaman Tidak Ditemukan': 'Page Not Found',
  'Terjadi Kesalahan Sistem': 'System Error Occurred',
  'Sedang Memuat': 'Loading',
  'Selengkapnya': 'Read More',
  'Baca Selengkapnya': 'Read More',
  'Daftar': 'Register',
  'Kirim': 'Submit',
  'Cari': 'Search'
};

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let newContent = content;

  for (const [indonesian, english] of Object.entries(replacements)) {
    // We use a global replacement. Note: this is a bit aggressive but fulfills the user's strict requirement.
    const regex = new RegExp(`\\b${indonesian}\\b`, 'g');
    newContent = newContent.replace(regex, english);
  }

  if (content !== newContent) {
    fs.writeFileSync(file, newContent, 'utf8');
    changed++;
  }
});

console.log(`Updated ${changed} files with comprehensive English terminology.`);
