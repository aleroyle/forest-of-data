export const palette = {
  // Wonder scenes (1-3)
  mossGreen: "#4A7C59",
  sageMoss: "#8FBC8F",
  warmBrown: "#8B7355",
  skyBlue: "#87CEEB",
  cream: "#FFF8E7",
  leafGreen: "#5B8C5A",
  bark: "#6B4E3D",

  // Warning scenes (4-5)
  desaturatedGreen: "#7A9A7B",
  amber: "#D4A017",
  warningGrey: "#9E9E9E",

  // Crisis scenes (6-7)
  darkSlate: "#2F4F4F",
  stormGrey: "#708090",
  deepAmber: "#B8860B",
  crashRed: "#8B0000",
  nightSky: "#1A2A3A",
  floodBlue: "#3B6978",

  // Restoration scenes (8-10)
  dawnGold: "#DAA520",
  richGreen: "#3A6B35",
  sunlight: "#FFD700",
  warmCream: "#FFF5D6",
} as const;

export const scenePalettes = {
  wonder: {
    background: palette.cream,
    primary: palette.mossGreen,
    secondary: palette.sageMoss,
    accent: palette.skyBlue,
    text: palette.bark,
  },
  warning: {
    background: "#F5F0E0",
    primary: palette.desaturatedGreen,
    secondary: palette.warningGrey,
    accent: palette.amber,
    text: "#5A4A3A",
  },
  crisis: {
    background: palette.nightSky,
    primary: palette.darkSlate,
    secondary: palette.stormGrey,
    accent: palette.crashRed,
    text: "#E0D8C8",
  },
  restoration: {
    background: palette.warmCream,
    primary: palette.richGreen,
    secondary: palette.dawnGold,
    accent: palette.sunlight,
    text: palette.bark,
  },
} as const;

export const typography = {
  story: "'Nunito', sans-serif",
  technical: "'Inter', system-ui, sans-serif",
} as const;
