import { useEffect, useRef } from 'react';
import { Package, Gauge, Users, ArrowRight } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    icon: Package,
    title: 'Pengadaan Peralatan',
    description:
      'Katalog lengkap peralatan laboratorium dari brand ternama dengan harga kompetitif dan garansi resmi.',
  },
  {
    icon: Gauge,
    title: 'Kalibrasi \u0026 Validasi',
    description:
      'Layanan kalibrasi akreditasi KAN dengan sertifikat yang valid dan dapat dilacak ke standar nasional.',
  },
  {
    icon: Users,
    title: 'Konsultasi Teknis',
    description:
      'Tim ahli kami siap membantu memilih peralatan yang tepat sesuai kebutuhan dan standar laboratorium Anda.',
  },
];

export default function ServicesSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.svc-header', {
        scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' },
        opacity: 0,
        y: 20,
        duration: 0.6,
        ease: 'power2.out',
      });

      gsap.from('.svc-card', {
        scrollTrigger: { trigger: sectionRef.current, start: 'top 70%' },
        opacity: 0,
        y: 30,
        duration: 0.6,
        stagger: 0.15,
        ease: 'power2.out',
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="layanan" ref={sectionRef} className="py-20 lg:py-24 bg-white">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-20">
        {/* Header */}
        <div className="svc-header text-center mb-14">
          <span className="label-category text-[#D4A843] mb-3 block">
            LAYANAN KAMI
          </span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#1A1A1A] mb-4">
            Solusi Lengkap untuk Kebutuhan Laboratorium
          </h2>
          <p className="text-[#6B6B6B] max-w-2xl mx-auto text-base">
            Kami menyediakan layanan terintegrasi mulai dari pengadaan peralatan,
            kalibrasi, hingga konsultasi teknis.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="svc-card bg-white rounded-lg p-8 border border-[#E0E0E0] hover:border-[#D4A843]/30 hover:shadow-lg transition-all duration-300 group"
            >
              <div className="w-14 h-14 rounded-lg bg-[#F5E6C3] flex items-center justify-center mb-6 group-hover:rotate-6 transition-transform duration-300">
                <service.icon size={28} className="text-[#D4A843]" />
              </div>
              <h3 className="text-xl font-semibold text-[#1A1A1A] mb-3">
                {service.title}
              </h3>
              <p className="text-[#6B6B6B] text-[15px] leading-relaxed mb-5">
                {service.description}
              </p>
              <span className="text-[#D4A843] font-medium text-sm flex items-center gap-1 cursor-pointer">
                Pelajari <ArrowRight size={14} />
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
