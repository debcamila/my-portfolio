import { Outfit } from "next/font/google";
import "./globals.css";

// components
import Header from "@/components/Header";
import Footer from "@/components/Footer";
// theme provider
import { ThemeProvider } from "@/components/ThemeProvider";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata = {
  title: "Deborah Camila | Portfólio",
  description:
    "Me chamo Deborah Camila, sou formada em Ciência da Computação e trabalho com o desenvolvimento front-end, utilizando JS, HTML, CSS e React.JS, tendo como missão construir sistemas de alta qualidade, eficientes, escaláveis e responsivos.",
  keywords: [
    "Next.js",
    "React.js",
    "JavaScript",
    "TypeScript",
    "HTML",
    "CSS",
    "Tailwind CSS",
    "Shadcn",
    "Desenvolvedora Front-End",
  ],
  authors: [{ name: "Deborah Camila" }],
  creator: "Deborah Camila",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={outfit.className}>
        <ThemeProvider attribute="class" defaultTheme="light">
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
