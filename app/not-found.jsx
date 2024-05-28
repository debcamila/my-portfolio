"use client";
import Link from "next/link";
import { FaExclamationTriangle } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

const NotFound = () => {
  const router = useRouter();

  return (
    <section className="min-h-screen pt-12">
      <div className="container mx-auto">
        <div className="flex flex-col items-center text-center">
          <FaExclamationTriangle
            size={72}
            strokeWidth={0.8}
            className="text-primary mb-8"
          />
          <h2 className="text-4xl font-bold mb-8 xl:mb-6 text-center mx-auto">
            Página não encontrada!
          </h2>
          <p className="subtitle mx-auto">
            A página que você tentou acessar está indisponível ou não existe.
          </p>
          {/* buttons */}
          <div className="flex flex-col gap-y-3 md:flex-row gap-x-3 mx-auto xl:mx-0 mb-12">
            <Button onClick={() => router.back()} className="gap-x-2">
              Retornar à página anterior
            </Button>
            <Link href="/">
              <Button variant="secondary" className="gap-x-2">
                Ir para a página inicial
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NotFound;
