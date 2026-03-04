import { Montserrat, Raleway } from "next/font/google";
import "../assets/styles/globals.css";
import { Timer } from "@/src/widgets/timer";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["cyrillic"],
});

const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className={`${montserrat.variable} ${raleway.variable}`}>
      <body>
        <Timer />
        {children}
      </body>
    </html>
  );
}
