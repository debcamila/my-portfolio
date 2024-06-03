import DevImg from "@/components/DevImg";

const About = () => {
  return (
    <section className="min-h-screen pt-12">
      <div className="container mx-auto">
        <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">
          Sobre mim
        </h2>
        <div className="flex flex-col xl:flex-row">
          {/* image */}
          <div className="hidden xl:flex flex-1 relative">
            <div className="bg-about_shape2_light dark:bg-about_shape2_dark w-[500px] h-[500px] bg-no-repeat absolute -top-1">
              <DevImg
                containerStyles="bg-about_shape w-[510px] h-[462px] bg-no-repeat relative bg-bottom"
                imgSrc="/about/developer-about.png"
                alt="Deborah's picture profile"
              />
            </div>
          </div>
          <div className="flex-1">
            <div className="text-lg mt-12 xl:mt-8">
              {/* infos */}
              <div className="text-center xl:text-left">
                <p className="subtitle max-w-xl mx-auto xl:mx-0">
                  Olá, você pode me chamar de Deb ou Debs. Eu sou uma
                  desenvolvedora front-end brasileira, trabalho com tecnologia
                  desde 2018, e desde então tenho tido experiência em
                  desenvolver sistemas de alta qualidade, eficientes, escaláveis
                  e responsivos.
                </p>
                <p className="subtitle max-w-xl mx-auto xl:mx-0">
                  Toda a minha trajetória pelo mundo da tecnologia foi
                  construída coletivamente, através de comunidades, grupos e
                  redes de apoio que tem como fundamentos &ldquo;diversidade,
                  inclusão e equidade&rdquo;. Aprender a codificar nestes
                  ambientes acolhedores e colaborativos, se conectar com outras
                  pessoas para ensinar e aprender sobre diversos assuntos tornou
                  a jornada mais prazerosa.
                </p>
                <p className="subtitle max-w-xl mx-auto xl:mx-0">
                  Gosto de compartilhar sobre o que eu sei e tenho dedicado
                  gande parte do meu tempo a isso como mentora voluntária em
                  alguns projetos sociais, com o objetivo de inspirar, encorajar
                  e capacitar jovens meninas a buscarem conhecimento e
                  aprendizado para que possam promover mudanças positivas em
                  suas vidas e em suas comunidades.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
