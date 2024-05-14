import Socials from "@/components/Socials";

const Contact = () => {
  return (
    <section>
      <div className="container mx-auto">
        {/* text & illustration */}
        <div className="grid xl:grid-cols-2 pt-12 xl:h-[480px] mb-6 xl:mb-1">
          {/* text */}
          <div className="flex flex-col justify-center">
            <div className="flex items-center gap-x-4 text-primary text-lg mb-4">
              <span className="w-[30px] h-[2px] bg-primary"></span>
              👋 Olá,
            </div>
            <h1 className="h1 max-w-md mb-8">Vamos nos conectar!</h1>
            <p className="subtitle max-w-[400px]">
              Sinta-se à vontade para entrar em contato comigo enviando um
              e-mail ou através das minhas redes sociais abaixo e entrarei em
              contato com você o mais breve possível.
            </p>
          </div>
          {/* illustration */}
          <div className="hidden xl:flex w-full bg-contact_illustration_light dark:bg-contact_illustration_dark bg-contain bg-top bg-no-repeat"></div>
        </div>
        {/* socials */}
        <Socials
          containerStyles="flex flex-wrap gap-x-6 mx-auto xl:mx-0 mb-24"
          iconsStyles="text-primary hover:text-foreground transition-all text-[35px] xl:text-[50px]"
        />
      </div>
    </section>
  );
};

export default Contact;
