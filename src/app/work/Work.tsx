import Image from 'next/image';

export default function Work() {
  return (
    <section id="work" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-6xl font-black mb-16">WORK</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            // Tambahkan URL gambar di sini
          ].map((src, i) => (
            <div key={i} className="group relative border-4 border-white overflow-hidden">
              <Image
                src={src}
                alt={`Portfolio work ${i + 1}`}
                width={800}
                height={800}
                className="w-full aspect-square object-cover transition-transform group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-[#FF3366] bg-opacity-0 group-hover:bg-opacity-90 transition-all flex items-center justify-center">
                <span className="text-white text-2xl font-bold opacity-0 group-hover:opacity-100 transition-opacity">
                  VIEW PROJECT
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
