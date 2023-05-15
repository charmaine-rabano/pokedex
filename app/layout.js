import "./globals.css";

export const metadata = {
  title: "Pokedex by Charmaine",
  description: "This is a pokedex site by Charmaine Eunice Rabano",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
