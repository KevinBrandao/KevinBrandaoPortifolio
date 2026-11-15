import type { Metadata } from "next";
import { About } from "@/components/About";
import { Education } from "@/components/Education";
import { Experience } from "@/components/Experience";
import { Resume } from "@/components/Resume";
import { Stack } from "@/components/Stack";

const description =
  "Trajetória de Kevin Brandão: do suporte técnico ao desenvolvimento web e à qualidade de software. Experiência, formação e stack.";

export const metadata: Metadata = {
  title: "Sobre",
  description,
  alternates: { canonical: "/sobre" },
  openGraph: { title: "Sobre — Kevin Brandão", description, url: "/sobre" },
};

export default function SobrePage() {
  return (
    <>
      <About />
      <Experience />
      <Education />
      <Stack />
      <Resume />
    </>
  );
}
