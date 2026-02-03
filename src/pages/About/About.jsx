import HeroImg from "@/assets/images/hero.jpg";

export default function About() {
  return (
    <section id="about" className="py-16 md:py-32 text-white bg-[#04081A]">
      <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
        <h2 className="relative z-10 max-w-xl text-4xl font-medium lg:text-5xl text-white">
          Developer, Designer, Creator, Innovator
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 md:gap-12 lg:gap-24">
          <div className="relative mb-6 sm:mb-0">
            <div className="bg-linear-to-b aspect-76/59 relative rounded-2xl p-px from-zinc-300 to-transparent">
              <img
                src={HeroImg}
                className="rounded-[15px] shadow block"
                alt="Juan Marbis"
                width={1207}
                height={929}
              />
            </div>
          </div>

          <div className="relative space-y-4">
            <p className="text-white">
              Hello! I'm Juan Marbis, and I'm obsessed with what data can reveal when you ask
              the right questions.
            </p>
            <p className="text-white">
              I'm driven by a genuine curiosity for how data can transform the way organizations
              understand themselves and make decisions. My journey has taken me through diverse
              experiences across industries, countries, and disciplines each has reinforced
              my belief that the most powerful insights come from combining technical rigor with
              varied perspectives.
            </p>
            <p className='text-white'>
              Whether I'm building automated pipelines, designing relational
              databases, or creating visualization dashboards, I approach every project with the
              same question: how can this actually help someone work smarter?
            </p>

            
          </div>
        </div>
      </div>
    </section>
  );
}