export function Mission() {
  const sectors = [
    { name: "Agriculture", icon: "🌾" },
    { name: "Health", icon: "🏥" },
    { name: "Finance", icon: "💰" },
    { name: "Education", icon: "📚" },
  ];

  return (
    <section
      id="mission"
      className="py-16 px-4 md:py-24 md:px-8 lg:px-16 bg-muted"
    >
      <div className="max-w-4xl mx-auto">
        {/* Sector Icons */}
        <div className="flex justify-center gap-6 md:gap-10 mb-10">
          {sectors.map((sector) => (
            <div key={sector.name} className="flex flex-col items-center gap-2">
              <span className="text-3xl md:text-4xl">{sector.icon}</span>
              <span className="text-xs md:text-sm text-muted-foreground">
                {sector.name}
              </span>
            </div>
          ))}
        </div>

        {/* Headline */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-8">
          We Are Building the Next Generation of{" "}
          <span className="text-primary">African Innovators</span>.
        </h2>

        {/* Body Copy */}
        <div className="text-lg md:text-xl text-muted-foreground text-center space-y-6 max-w-3xl mx-auto">
          <p>
            Artificial Intelligence is changing the world, but Africa needs
            creators, not just consumers. The African Technology Forum (ATF),
            supported by our strategic partners, is on a mission to upskill{" "}
            <strong className="text-foreground">15,000 young leaders</strong>{" "}
            like you.
          </p>
          <p>
            Whether you are a coder, a designer, or a problem-solver, this is
            your launchpad. We provide the curriculum, the mentors, and the
            technology—you provide the ambition.
          </p>
        </div>
      </div>
    </section>
  );
}
