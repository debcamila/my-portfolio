"use client";
import { TypewriterEffectSmooth } from "./ui/typewriter-effect";

import Link from "next/link";
import { Button } from "./ui/button";
import { Download, Send } from "lucide-react";
import { RiArrowDownSLine } from "react-icons/ri";

import Socials from "./Socials";

const Hero = () => {
  const words = [
    {
      text: "Olá,",
    },
    {
      text: "meu",
    },
    {
      text: "nome",
    },
    {
      text: "é",
    },
    {
      text: "Deborah Camila",
      className: "text-primary dark:text-primary",
    },
  ];

  return (
    <section className="py-12 xl:py-24 h-[84vh] xl:pt-28 bg-hero bg-no-repeat bg-bottom bg-cover dark:bg-none">
      <div className="container mx-auto">
        {/* text */}
        <div className="flex flex-col items-center text-center">
          <div className="text-sm uppercase font-semibold mb-4 text-primary tracking-[4px]">
            Desenvolvedora Front-end
          </div>
          <TypewriterEffectSmooth words={words} />
          <p className="subtitle mx-auto xl:mx-0">
            Vejo cada desafio como uma nova oportunidade para aprender
          </p>
          {/* buttons */}
          <div className="flex flex-col gap-y-3 md:flex-row gap-x-3 mx-auto xl:mx-0 mb-12">
            <Link href="/contact">
              <Button className="gap-x-2">
                Enviar mensagem <Send size={18} />
              </Button>
            </Link>
            <Button variant="secondary" className="gap-x-2">
              Baixar CV <Download size={18} />
            </Button>
          </div>
          {/* socials */}
          <Socials
            containerStyles="flex gap-x-6 mx-auto xl:mx-0"
            iconsStyles="text-foreground text-[25px] hover:text-primary transition-all"
          />
        </div>
        {/* icon */}
        <div className="hidden md:flex absolute left-2/4 bottom-44 xl:bottom-12 animate-bounce">
          <RiArrowDownSLine className="text-3xl text-primary" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
