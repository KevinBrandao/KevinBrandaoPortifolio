import type { Metadata } from "next";
import { Contact } from "@/components/Contact";

const description = "Fale com Kevin Brandão por LinkedIn, e-mail, WhatsApp ou GitHub.";

export const metadata: Metadata = {
  title: "Contato",
  description,
  alternates: { canonical: "/contato" },
  openGraph: { title: "Contato — Kevin Brandão", description, url: "/contato" },
};

export default function ContatoPage() {
  return <Contact pageTitle />;
}
