import {
  Header,
  Hero,
  Mission,
  Journey,
  WhyJoin,
  Eligibility,
  KeyDates,
  Footer,
} from "@/components/sections";

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Mission />
        <Journey />
        <WhyJoin />
        <Eligibility />
        <KeyDates />
        <Footer />
      </main>
    </>
  );
}
