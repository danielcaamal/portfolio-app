interface Offer {
  name: string;
  description: string;
  iconSrc: string;
}

export const getOffers = () => {
  const offers: Offer[] = [
    {
      name: "Web Development",
      description:
        "I can help you build a website or web application that is fast, responsive, and user-friendly. I have experience working with a variety of technologies, including HTML, CSS, JavaScript, React, and Node.js.",
      iconSrc: "/images/web-development.png",
    },
    {
      name: "Software Development",
      description:
        "I can help you build a software application that is reliable, scalable, and secure. I have experience working with a variety of programming languages, including Python, Java, and C++.",
      iconSrc: "/images/software-development.png",
    },
    {
      name: "Database Design",
      description:
        "I can help you design a database that is efficient, scalable, and easy to use. I have experience working with a variety of database management systems, including MySQL, PostgreSQL, and MongoDB.",
      iconSrc: "/images/database-design.png",
    },
    {
      name: "Architecture Design",
      description:
        "I can help you design a software architecture that is flexible, modular, and maintainable. I have experience working with a variety of software design patterns, including MVC, MVVM, and MVP.",
      iconSrc: "/images/architecture-design.png",
    },
    {
      name: "Technology Consulting",
      description:
        "I can help you with technology strategy, planning, and implementation. I have experience working with a variety of technologies, including cloud computing, artificial intelligence, and blockchain.",
      iconSrc: "/images/technology-consulting.png",
    },
    {
      name: "Resolving Technical Issues",
      description:
        "I can help you troubleshoot and resolve technical issues with your website, web application, or software application. I have experience working with a variety of tools and technologies, including debugging tools, monitoring tools, and performance optimization tools.",
      iconSrc: "/images/technical-issues.png",
    },
  ];
  return offers;
};
