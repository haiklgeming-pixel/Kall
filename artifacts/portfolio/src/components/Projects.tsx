import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

type Category = 'Semua' | 'Akademik' | 'Organisasi' | 'Karya Pribadi';

const projects = [
  {
    title: 'Website Kelas XII IPA 3',
    category: 'Akademik',
    description: 'Membuat website profil kelas dengan fitur galeri foto, jadwal pelajaran, dan daftar anggota. Dikerjakan bersama 2 teman menggunakan HTML, CSS, dan JavaScript.',
    tags: ['HTML/CSS', 'JavaScript', 'Team Project'],
    year: '2024'
  },
  {
    title: 'Riset Mini: Dampak Media Sosial terhadap Konsentrasi Belajar',
    category: 'Akademik',
    description: 'Penelitian sederhana menggunakan metode survei dengan 80+ responden siswa SMA. Disajikan dalam bentuk infografis dan poster ilmiah di Karya Ilmiah Remaja.',
    tags: ['Penelitian', 'Infografis', 'Public Speaking'],
    year: '2024'
  },
  {
    title: 'Ketua Seksi Acara — Pentas Seni Sekolah 2024',
    category: 'Organisasi',
    description: 'Mengkoordinasi 12 penampil dan 30 panitia untuk acara tahunan sekolah. Mengelola rundown, komunikasi antar divisi, dan troubleshooting on-stage.',
    tags: ['Event Management', 'Leadership', 'Coordination'],
    year: '2024'
  },
  {
    title: 'Staff Humas OSIS 2023–2024',
    category: 'Organisasi',
    description: 'Mengelola akun Instagram resmi OSIS (@osis_smaxyz) dengan konten mingguan. Membuat desain poster dan reels untuk 15+ kegiatan sekolah.',
    tags: ['Social Media', 'Canva', 'Content Creation'],
    year: '2023'
  },
  {
    title: 'Kumpulan Cerpen "Ruang Antara"',
    category: 'Karya Pribadi',
    description: 'Antologi 5 cerita pendek bertema kehidupan remaja, diterbitkan sebagai zine digital. Desain layout menggunakan Canva, disebarkan lewat Linktree.',
    tags: ['Menulis', 'Canva', 'Zine'],
    year: '2024'
  },
  {
    title: 'Mini Portfolio Desain Grafis',
    category: 'Karya Pribadi',
    description: 'Koleksi 20+ karya desain: poster acara, konten media sosial, dan infografis sekolah. Menggunakan Canva dan mulai belajar Figma.',
    tags: ['Canva', 'Figma', 'Visual Design'],
    year: '2023–2024'
  }
];

export function Projects() {
  const [activeCategory, setActiveCategory] = useState<Category>('Semua');
  const categories: Category[] = ['Semua', 'Akademik', 'Organisasi', 'Karya Pribadi'];

  const filteredProjects = projects.filter(
    (project) => activeCategory === 'Semua' || project.category === activeCategory
  );

  return (
    <section id="projects" className="py-24 bg-paper relative">
      <div className="container mx-auto px-6 md:px-12">
        <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-foreground">
              Jejak Karya.
            </h2>
            <p className="text-muted-foreground max-w-xl text-lg">
              Kumpulan proyek, tulisan, dan pengalaman yang aku kerjakan sejauh ini, baik di sekolah maupun waktu luang.
            </p>
          </div>
          
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeCategory === cat 
                    ? 'bg-foreground text-background shadow-md border-drawn' 
                    : 'bg-transparent text-muted-foreground hover:text-foreground border border-transparent hover:border-border'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, idx) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                key={project.title}
                className={`group p-6 bg-background rounded-sm flex flex-col justify-between transition-transform hover:-translate-y-1 ${
                  idx % 2 === 0 ? 'border-drawn shadow-md' : 'border-drawn-2 shadow-lg'
                }`}
              >
                <div>
                  <div className="flex justify-between items-start mb-4">
                    <span className="text-xs font-bold uppercase tracking-wider text-primary">
                      {project.category}
                    </span>
                    <span className="text-xs text-muted-foreground font-mono">{project.year}</span>
                  </div>
                  <h3 className="text-xl font-serif font-semibold mb-3 leading-snug group-hover:text-primary transition-colors flex items-start gap-2">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                    {project.description}
                  </p>
                </div>
                
                <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-border border-dashed">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-xs px-2 py-1 bg-muted/50 text-foreground rounded-sm font-mono">
                      #{tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
