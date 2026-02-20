import Head from 'next/head';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <Head>
        <title>
          Facundo Pedrazzoli | Freelancer en Programación y Tecnología
        </title>

        <meta
          name="description"
          content="Freelancer especializado en desarrollo web, dashboards, automatización y soluciones SaaS. Productos digitales rápidos, modernos y optimizados."
        />

        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Facundo Pedrazzoli | Freelancer Tech"
        />
        <meta
          property="og:description"
          content="Desarrollo web moderno, automatización, dashboards y soluciones optimizadas."
        />
        <meta property="og:image" content="/og-image.jpg" />
        <meta property="og:url" content="https://tudominio.com" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Facundo Pedrazzoli | Freelancer Tech"
        />
        <meta
          name="twitter:description"
          content="Landing pages, dashboards, SaaS y automatización."
        />
        <meta name="twitter:image" content="/og-image.jpg" />
      </Head>

      <main className="min-h-screen bg-gradient-to-b from-black via-neutral-950 to-black text-white">
        {/* HERO */}
        <section className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-24 md:grid-cols-2">
          <div>
            <h1 className="md:text-7xl text-5xl font-bold leading-[1.05] tracking-tight">
              Facundo Pedrazzoli
            </h1>

            <h2 className="mt-4 text-xl text-gray-500 md:text-2xl">
              Freelancer en Programación y Tecnología
            </h2>

            <p className="mt-8 text-lg leading-relaxed text-gray-300">
              Ayudo a empresas y emprendedores a crear productos digitales
              modernos, rápidos y optimizados. Desarrollo landing pages,
              dashboards, automatizaciones y soluciones SaaS listas para
              producción.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#contacto"
                className="rounded-lg bg-white px-6 py-3 font-semibold text-black transition hover:bg-gray-200"
              >
                Solicitar presupuesto
              </a>

              <a
                href="#proyectos"
                className="rounded-lg border border-white/20 px-6 py-3 transition hover:border-white/50"
              >
                Ver proyectos
              </a>
            </div>
          </div>

          <div className="flex justify-center">
            <Image
              src="/profile.jpg"
              alt="Facundo Pedrazzoli"
              width={380}
              height={380}
              priority
              sizes="(max-width: 768px) 280px, 380px"
              className="rounded-2xl border border-white/10"
            />
          </div>
        </section>

        {/* SOBRE MI */}
        <section className="border-t border-white/10 bg-black/40 px-6 py-24 backdrop-blur-sm">
          <div className="mx-auto max-w-4xl text-center">
            <h3 className="text-3xl font-bold md:text-4xl">Sobre mí</h3>

            <p className="mt-6 text-lg leading-relaxed text-gray-400">
              Trabajo desde una base operativa sólida: entiendo cómo funcionan
              los sistemas en producción, cómo fallan y qué necesitan las
              empresas para reducir errores, ganar visibilidad y automatizar
              procesos.
            </p>

            <p className="mt-4 text-lg leading-relaxed text-gray-400">
              Me especializo en transformar necesidades técnicas en soluciones
              claras, escalables y orientadas a resultados.
            </p>
          </div>
        </section>

        {/* SERVICIOS */}
        <section className="px-6 py-24">
          <div className="mx-auto max-w-6xl">
            <h3 className="text-center text-3xl font-bold md:text-4xl">
              Servicios
            </h3>

            <div className="mt-14 grid gap-6 md:grid-cols-3">
              {[
                {
                  title: 'Landing Pages',
                  desc: 'Diseño moderno, rápido y optimizado para conversión',
                },
                {
                  title: 'Dashboards & CRM',
                  desc: 'Visualización de datos y herramientas internas',
                },
                {
                  title: 'Automatización',
                  desc: 'Optimización de procesos y reducción de errores',
                },
                {
                  title: 'Desarrollo Web',
                  desc: 'Aplicaciones modernas y escalables',
                },
                {
                  title: 'Soluciones SaaS',
                  desc: 'Productos listos para producción',
                },
                {
                  title: 'Optimización',
                  desc: 'Mejoras de performance y UX',
                },
              ].map((service) => (
                <div
                  key={service.title}
                  className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition hover:border-white/30 hover:bg-white/10"
                >
                  <h4 className="text-lg font-semibold">{service.title}</h4>
                  <p className="mt-2 text-sm text-gray-400">{service.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PROYECTOS */}
        <section
          id="proyectos"
          className="border-t border-white/10 bg-black/40 px-6 py-24 backdrop-blur-sm"
        >
          <div className="mx-auto max-w-6xl">
            <h3 className="text-center text-3xl font-bold md:text-4xl">
              Proyectos Destacados
            </h3>

            <div className="mt-14 grid gap-6 md:grid-cols-2">
              <a
                href="https://www.spanishfromthejump.com/"
                target="_blank"
                className="rounded-xl border border-white/10 bg-white/5 p-6 transition hover:border-white/30 hover:bg-white/10"
              >
                <h4 className="text-xl font-semibold">Spanish From The Jump</h4>
                <p className="mt-2 text-gray-400">
                  Sitio educativo moderno enfocado en experiencia de usuario.
                </p>
              </a>

              <a
                href="https://deployuocra.netlify.app/"
                target="_blank"
                className="rounded-xl border border-white/10 bg-white/5 p-6 transition hover:border-white/30 hover:bg-white/10"
              >
                <h4 className="text-xl font-semibold">Deploy UOCRA</h4>
                <p className="mt-2 text-gray-400">
                  Proyecto web moderno con foco en performance.
                </p>
              </a>
            </div>
          </div>
        </section>

        {/* CONTACTO */}
        <section id="contacto" className="px-6 py-24">
          <div className="mx-auto max-w-3xl text-center">
            <h3 className="text-3xl font-bold md:text-4xl">Contacto</h3>

            <p className="mt-4 text-gray-400">
              Disponible para proyectos freelance y desarrollo de soluciones
              digitales.
            </p>

            <div className="mt-10 space-y-3 text-lg text-gray-300">
              <p>📞 11 2292-5684</p>
              <p>✉️ pedrazzolifacundo@gmail.com</p>
              <p>
                🔗{' '}
                <a
                  href="https://www.linkedin.com/in/facundo-pedrazzoli"
                  target="_blank"
                  className="text-gray-400 transition hover:text-white"
                >
                  LinkedIn
                </a>
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
