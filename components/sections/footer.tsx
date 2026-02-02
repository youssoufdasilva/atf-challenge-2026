import { Button } from "@/components/ui/button";
import Image from "next/image";

const footerLinks = [
  { href: "#", label: "FAQs" },
  { href: "#", label: "Partner with Us" },
  { href: "#", label: "Contact Support" },
  { href: "#", label: "Privacy Policy" },
];

export function Footer() {
  return (
    <footer
      id="footer"
      className="py-16 px-4 md:py-24 md:px-8 lg:px-16 bg-foreground text-background"
    >
      <div className="max-w-4xl mx-auto">
        {/* Final CTA Section */}
        <div id="apply" className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Ready to Build the Future?
          </h2>
          <p className="text-lg md:text-xl text-background/80 max-w-2xl mx-auto mb-8">
            The next unicorn startup could be yours. The next breakthrough in
            African healthcare could be your code. It starts here.
          </p>
          <Button
            asChild
            size="lg"
            className="text-base px-8 py-6 bg-background text-foreground hover:bg-background/90"
          >
            <a href="#apply">Apply Now - Registration Closes March 31</a>
          </Button>
        </div>

        {/* Links */}
        <div className="flex flex-wrap justify-center gap-6 md:gap-8 mb-12 border-t border-background/20 pt-12">
          {footerLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm text-background/70 hover:text-background transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Powered by */}
        <div className="flex flex-col items-center gap-4">
          <Image
            src="/atf-assets/atf-logo-vector.svg"
            alt="ATF Logo"
            width={48}
            height={48}
            className="h-12 w-auto invert"
          />
          <p className="text-sm text-background/60">
            Powered by African Technology Forum
          </p>
        </div>
      </div>
    </footer>
  );
}
