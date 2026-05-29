import type { Metadata } from "next";
import { Proposal } from "@/components/Proposal";

export const metadata: Metadata = {
  title: "Proposta Comercial — Website Porto Primo Delicatessen",
  description:
    "Proposta para desenvolvimento e estruturação da presença digital da Porto Primo Delicatessen — posicionamento premium, experiência do usuário e fortalecimento da marca.",
  robots: { index: false, follow: false },
};

export default function ProposalPage() {
  return <Proposal />;
}
