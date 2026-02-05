import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Trust from "@/components/Trust";
import ContactCTA from "@/components/ContactCTA"; // Add this

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Trust />
      <ContactCTA /> {/* Final CTA */}
    </>
  );
}