import { Component, FileCode, TabletSmartphone } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const servicesData = [
  {
    icon: <FileCode size={72} strokeWidth={0.8} />,
    title: "Desenvolvimento Web",
    description:
      "Desenvolvimento de páginas web utilizando HTML, CSS, JS, TS e algumas bibliotecas e frameworks como, React.js, Next.js, Tailwind CSS, Material UI, entre outros.",
  },
  {
    icon: <Component size={72} strokeWidth={0.8} />,
    title: "UX/UI Design",
    description:
      "Criação de design systems de protótipos, wireframes e mockups utilizando o Figma, para a criação de uma boa usabilidade e designs acessíveis e responsivos.",
  },
  {
    icon: <TabletSmartphone size={72} strokeWidth={0.8} />,
    title: "Desenvolvimento mobile",
    description:
      "Transformação de sistemas legados e desenvolvimento de aplicativos móveis utilizando React Native para dispositivos iOS e Android.",
  },
];

const Services = () => {
  return (
    <section className="mb-12 xl:mb-36">
      <div className="container mx-auto">
        <h2 className="section-title mb-24 xl:mb-24 text-center mx-auto">
          O que eu faço?
        </h2>
        {/* grid items */}
        <div className="grid xl:grid-cols-3 justify-center gap-y-12 xl:gap-y-24 xl:gap-x-8">
          {servicesData.map((item, index) => {
            return (
              <Card
                className="w-full max-w-[424px] h-[300px] flex flex-col pt-16 pb-10 justify-center items-center relative"
                key={index}
              >
                <CardHeader className="text-primary absolute -top-[60px]">
                  <div className="w-[140px] h-[80px] bg-white dark:bg-background flex justify-center items-center">
                    {item.icon}
                  </div>
                </CardHeader>
                <CardContent className="text-center">
                  <CardTitle className="mb-4">{item.title}</CardTitle>
                  <CardDescription className="text-lg">
                    {item.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
