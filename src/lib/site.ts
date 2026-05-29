export const site = {
  name: "Porto Primo Delicatessen",
  shortName: "Porto Primo",
  tagline: "Padaria artesanal · Café · Delicatessen",
  city: "Recife — Pernambuco",
  address: "Rua da Aurora, 1200 — Boa Vista, Recife — PE",
  phone: "+55 (81) 99999-0000",
  whatsappE164: "5581999990000",
  whatsappMessage:
    "Olá! Gostaria de fazer um pedido na Porto Primo Delicatessen.",
  delivery:
    "Entrega própria em Boa Vista, Espinheiro e Graças. Retirada na loja a partir das 7h.",
  hours: [
    { label: "Segunda — Sexta", value: "7h — 20h" },
    { label: "Sábado", value: "7h — 21h" },
    { label: "Domingo", value: "8h — 14h" },
  ],
  social: {
    instagram: "https://instagram.com/portoprimo",
    facebook: "https://facebook.com/portoprimo",
  },
  mapsEmbed:
    "https://www.google.com/maps?q=Rua+da+Aurora,+Boa+Vista,+Recife,+PE&output=embed",
} as const;

export const whatsappLink = (msg?: string) => {
  const m = encodeURIComponent(msg ?? site.whatsappMessage);
  return `https://wa.me/${site.whatsappE164}?text=${m}`;
};
