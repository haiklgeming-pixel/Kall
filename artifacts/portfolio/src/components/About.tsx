import React from 'react';
import { motion } from 'framer-motion';

export function About() {
  const skills = [
    {
      category: "Desain",
      items: ["Canva", "Figma (basic)", "Adobe Illustrator (basic)"]
    },
    {
      category: "Coding",
      items: ["HTML", "CSS", "JavaScript", "Python (basic)"]
    },
    {
      category: "Soft Skills",
      items: ["Event Management", "Content Writing", "Teamwork"]
    },
    {
      category: "Tools",
      items: ["Google Workspace", "Notion", "Trello"]
    }
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-full h-full bg-dots opacity-30 -z-10 pointer-events-none" />
      
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          
          {/* Bio Side */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="lg:w-5/12"
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-8 text-foreground">
              Sedikit Tentang Aku.
            </h2>
            <div className="prose prose-lg prose-p:text-muted-foreground prose-p:leading-relaxed">
              <p>
                Aku Haikal, siswa kelas 12 di SMA Negeri 12 Jakarta. Selain pelajaran wajib di kelas, aku suka banget bikin hal-hal baru. 
              </p>
              <p>
                Waktu luangku biasanya habis buat membuat website sederhana di kamar. Aku percaya kalau kombinasi antara logika sains dan kreativitas seni itu menyenangkan.
              </p>
              <p>
                Rencananya, setelah lulus aku mau kuliah di jurusan Ilmu Komputer atau Desain Komunikasi Visual
              </p>
            </div>

            <div className="mt-10 p-6 bg-secondary/10 border-drawn-2 inline-block">
              <h3 className="font-bold text-foreground mb-2 text-sm uppercase tracking-widest">Pendidikan Saat Ini</h3>
              <ul className="space-y-1 text-muted-foreground">
                <li><span className="font-semibold text-foreground">Sekolah:</span> SMA Negeri 12 Jakarta</li>
                <li><span className="font-semibold text-foreground">Jurusan:</span> Jurusan (Soshum)</li>
                <li><span className="font-semibold text-foreground">Angkatan:</span> 2025</li>
              </ul>
            </div>
          </motion.div>

          {/* Skills Side */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:w-7/12 w-full grid grid-cols-1 sm:grid-cols-2 gap-8"
          >
            {skills.map((skillGroup, idx) => (
              <div 
                key={skillGroup.category} 
                className="p-6 bg-card border-drawn shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-serif italic font-bold">
                    {idx + 1}
                  </div>
                  <h3 className="font-serif font-bold text-lg">{skillGroup.category}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map(item => (
                    <span 
                      key={item} 
                      className="px-3 py-1.5 bg-background border border-border text-sm font-medium rounded-sm text-foreground"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
