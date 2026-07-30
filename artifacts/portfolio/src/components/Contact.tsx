import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SiInstagram, SiGithub } from 'react-icons/si';
import { Send, CheckCircle2, Linkedin } from 'lucide-react';

export function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="py-24 bg-foreground text-background relative">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row gap-16 justify-between max-w-5xl mx-auto">
          
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:w-1/2"
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-background">
              Mari Berkolaborasi.
            </h2>
            <p className="text-background/80 text-lg mb-10 max-w-md">
              Punya ide proyek bareng? Atau sekadar mau ngobrol soal desain, koding, dan buku? Jangan ragu buat sapa aku lewat form ini atau mampir ke sosial media.
            </p>
            
            <div className="space-y-6">
              <h3 className="font-bold uppercase tracking-widest text-sm text-background/50">Temukan aku di</h3>
              <div className="flex gap-4">
                <a href="https://instagram.com/mrhaikalllllll" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary transition-colors border border-background/20">
                  <SiInstagram className="w-5 h-5" />
                  <span className="sr-only">Instagram</span>
                </a>
                <a href="https://linkedin.com/in/aryanpratama" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary transition-colors border border-background/20">
                  <Linkedin className="w-5 h-5" />
                  <span className="sr-only">LinkedIn</span>
                </a>
                <a href="https://github.com/haiklgeming-pixel" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary transition-colors border border-background/20">
                  <SiGithub className="w-5 h-5" />
                  <span className="sr-only">GitHub</span>
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:w-1/2 bg-background p-8 border-drawn text-foreground"
          >
            {isSubmitted ? (
              <div className="h-full min-h-[300px] flex flex-col items-center justify-center text-center space-y-4">
                <CheckCircle2 className="w-16 h-16 text-secondary" />
                <h3 className="text-2xl font-serif font-bold">Pesan Terkirim!</h3>
                <p className="text-muted-foreground">Makasih udah menghubungi! Aku bakal balas pesanmu secepatnya ke email yang kamu cantumin.</p>
                <button 
                  onClick={() => setIsSubmitted(false)}
                  className="mt-4 px-4 py-2 border border-border rounded-sm text-sm font-medium hover:bg-muted transition-colors"
                >
                  Kirim pesan lain
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-bold mb-2">Nama</label>
                  <input 
                    type="text" 
                    id="name" 
                    required
                    placeholder="Nama kamu..."
                    className="w-full px-4 py-3 bg-transparent border-2 border-border focus:border-primary focus:outline-none rounded-sm transition-colors font-sans"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-bold mb-2">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    required
                    placeholder="Alamat emailmu..."
                    className="w-full px-4 py-3 bg-transparent border-2 border-border focus:border-primary focus:outline-none rounded-sm transition-colors font-sans"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-bold mb-2">Pesan</label>
                  <textarea 
                    id="message" 
                    required
                    rows={4}
                    placeholder="Halo Haikal, aku mau ngajak ngobrol soal..."
                    className="w-full px-4 py-3 bg-transparent border-2 border-border focus:border-primary focus:outline-none rounded-sm transition-colors font-sans resize-none"
                  ></textarea>
                </div>
                <button 
                  type="submit"
                  className="w-full py-4 bg-primary text-primary-foreground font-bold rounded-sm hover:bg-primary/90 transition-colors flex items-center justify-center gap-2"
                >
                  Kirim Pesan
                  <Send className="w-4 h-4" />
                </button>
              </form>
            )}
          </motion.div>

        </div>
      </div>
      
      <div className="container mx-auto px-6 mt-24 pt-8 border-t border-background/20 text-center text-background/50 text-sm font-mono">
        <p>Dibuat dengan ☕ dan semangat. © 2026 Haikal Joanelman</p>
      </div>
    </section>
  );
}
