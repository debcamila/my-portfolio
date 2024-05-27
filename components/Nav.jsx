// link (next js)
import Link from "next/link";

// next hooks
import { usePathname } from "next/navigation";

// framer motion
import { motion } from "framer-motion";
import { useEffect } from "react";

const links = [
  { path: "/", name: "início", title: "Portfólio" },
  { path: "/about", name: "sobre", title: "Sobre" },
  { path: "/projects", name: "meus projetos", title: "Projetos" },
  { path: "/contact", name: "contato", title: "Contato" },
];
const Nav = ({ containerStyles, linkStyles, underlineStyles }) => {
  const path = usePathname();
  const location = usePathname();

  useEffect(() => {
    if (location) {
      const tabTitle = links.find((item) => item.path === location);
      document.title = `Deborah Camila | ${
        tabTitle ? tabTitle.title : "Portfólio"
      }`;
    }
  }, [location]);

  return (
    <nav className={`${containerStyles}`}>
      {links.map((link, index) => {
        return (
          <Link
            href={link.path}
            key={index}
            className={`capitalize ${linkStyles}`}
          >
            {link.path == path && (
              <motion.span
                layoutId="underline"
                className={`${underlineStyles}`}
              />
            )}
            {link.name}
          </Link>
        );
      })}
    </nav>
  );
};

export default Nav;
