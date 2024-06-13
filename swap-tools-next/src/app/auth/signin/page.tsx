import { cn } from "@/lib/utils";
import { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";

export const metadata: Metadata = {
    title: "Pagina de Cadastro",
    description: "Pagina de Cadastro de Usuario"
  };
  const fontSans = FontSans({
    subsets: ["latin"],
    variable: "--font-sans",
  })

export default function SingIn() {
    return (
        <main className="flex flex-col items-center justify-center w-screen h-screen bg-gray-100">
            <div className={cn(
                "min-h-screen bg-background font-sans antialiased",
                fontSans.variable
                )}>Sign In</div>
        </main>
    )
}