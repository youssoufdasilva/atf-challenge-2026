const eligibilityCriteria = [
  "Based in Ghana, Nigeria, Kenya, or South Africa.",
  "A university student or recent graduate (0-3 years out of school).",
  "Passionate about technology (No prior AI coding experience required for the beginner track!).",
  "Available to commit 5-10 hours per week during the AI School.",
];

export function Eligibility() {
  return (
    <section
      id="eligibility"
      className="py-16 px-4 md:py-24 md:px-8 lg:px-16 bg-background"
    >
      <div className="max-w-3xl mx-auto">
        {/* Headline */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-12 md:mb-16">
          Who Can Apply?
        </h2>

        {/* Checklist */}
        <div className="bg-muted border border-border p-6 md:p-8">
          <p className="text-lg font-medium mb-6">
            You are eligible if you are:
          </p>
          <ul className="space-y-4">
            {eligibilityCriteria.map((criterion, index) => (
              <li key={index} className="flex items-start gap-4">
                <span className="w-6 h-6 bg-primary text-primary-foreground flex items-center justify-center flex-shrink-0 text-sm font-bold">
                  ✓
                </span>
                <span className="text-lg">{criterion}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
