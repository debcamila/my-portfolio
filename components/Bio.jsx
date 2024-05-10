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
              imgSrc=""
              alt="Deborah's picture profile"
            />
          </div>
          <div className="flex-1">
            <div>
              <div className="text-lg mt-12 xl:mt-8">
                {/* infos */}
                <div>
                  <div className="text-center xl:text-left">
                    <h3 className="h3 mb-4">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit
                    </h3>
                    <p className="subtitle max-w-xl mx-auto xl:mx-0">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Molestias magni incidunt exercitationem distinctio tenetur
                      autem tempore consequatur optio quaerat id, rem quisquam,
                      ducimus, accusamus odio quae. Mollitia explicabo quos
                      illo?
                    </p>
                  </div>
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
