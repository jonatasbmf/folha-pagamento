import { UserProvider } from "@/context/usuarioContext";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Folha de Pagamento",
  description: "Aprendendo Next e Nest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>
        <UserProvider>
          {children}
        </UserProvider>
      </body>
    </html>
  );
}
