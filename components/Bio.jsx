import DevImg from "./DevImg";

const Bio = () => {
  return (
    <section className="xl:h-[860px] pb-12 xl:py-24">
      <div className="container mx-auto">
        <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">
          Sobre mim
        </h2>
        <div className="flex flex-col xl:flex-row">
          {/* image */}
          <div className="hidden xl:flex flex-1 relative">
            <DevImg
              containerStyles="bg-bio_shape_light dark:bg-bio_shape_dark w-[505px] h-[505px] bg-no-repeat relative"
              imgSrc="/bio/developer-bio.png"
              alt="Deborah's picture profile"
            />
          </div>
          <div className="flex-1">
            <div className="text-lg mt-12 xl:mt-8">
              {/* infos */}
              <div>
                <div className="text-center xl:text-left">
                  <h3 className="h3 mb-4">
                    Desenvolvedora Front-end com mais de 5 anos de experiência
                    em diferentes tecnologias
                  </h3>
                  <p className="subtitle max-w-xl mx-auto xl:mx-0">
                    Eu sou a Deborah, sou formada em Ciência da Computação e
                    trabalho com o desenvolvimento front-end, utilizando
                    JavaScript, HTML, CSS e React.JS, tendo como missão
                    construir sistemas de alta qualidade, eficientes, escaláveis
                    e responsivos.
                  </p>
                  <p className="subtitle max-w-xl mx-auto xl:mx-0">
                    Além das minhas responsabilidades técnicas, também estou
                    dedicada em compartilhar ideias e conhecimentos para causar
                    um impacto positivo no mundo. Desde 2019 participo de
                    iniciativas que promovem o incentivo e a capacitação de
                    meninas e mulheres para as áreas ligadas à ciência,
                    tecnologia, engenharia e matemática (STEM, do inglês{" "}
                    <i>science, technology, engineering and math</i>), com o
                    objetivo de diminuir a evasão do gênero tanto no ambiente
                    acadêmico quanto no profissional. Acredito que a tecnologia
                    deve ser diversa, acessível e inclusiva para todas as
                    pessoas.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Bio;
