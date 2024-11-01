import Pagina from "@/components/Layout/pagina/pagina";
import { MenuProvider } from "@/context/menuContext";
import { UserProvider } from "@/context/usuarioContext";
import type { Metadata } from "next";
import 'react-toastify/dist/ReactToastify.css';
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
          <UserProvider>
            <MenuProvider>
              <Pagina>
                {children}
              </Pagina>
            </MenuProvider >
          </UserProvider>
        </UserProvider>
      </body>
    </html>
  );
}
