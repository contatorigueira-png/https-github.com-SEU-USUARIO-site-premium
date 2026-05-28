export const site = {
  name: "Ilha da Kosta II",
  shortName: "Ilha da Kosta",
  city: "Recife — Pernambuco",
  address: "Av. Boa Viagem, Recife — PE",
  phone: "+55 (81) 99999-0000",
  whatsappE164: "5581999990000",
  whatsappMessage:
    "Olá! Gostaria de reservar uma mesa no Ilha da Kosta II.",
  hours: [
    { label: "Terça — Quinta", value: "18h — 23h" },
    { label: "Sexta — Sábado", value: "12h — 00h" },
    { label: "Domingo", value: "12h — 22h" },
    { label: "Segunda", value: "Fechado" },
  ],
  social: {
    instagram: "https://instagram.com/ilhadakosta",
    facebook: "https://facebook.com/ilhadakosta",
  },
  mapsEmbed:
    "https://www.google.com/maps?q=Av.+Boa+Viagem,+Recife,+PE&output=embed",
} as const;

export const whatsappLink = (msg?: string) => {
  const m = encodeURIComponent(msg ?? site.whatsappMessage);
  return `https://wa.me/${site.whatsappE164}?text=${m}`;
};
