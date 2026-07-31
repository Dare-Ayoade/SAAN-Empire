import "./globals.css";

export const metadata = {
  title: "Saan Empire — Gaming by day, hookah by night",
  description:
    "One space, two experiences. A gaming lounge by day and a hookah lounge by night in East Orange, NJ.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Fallback web fonts. Replace with your licensed Bord Demo font file
            in /public/fonts and the @font-face block in globals.css once you
            have the commercial license sorted. */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Anton&family=Inter:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
