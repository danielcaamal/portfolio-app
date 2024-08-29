interface Offer {
  name: string;
  description: string;
  iconSrc: string;
}

export const getOffers = () => {
  const offers: Offer[] = [
    {
      name: "Database Design",
      description:
        "I can help you design a database that is efficient, scalable, and easy to use. I have experience working with a variety of database management systems, including PostgreSQL, MongoDB, Firebase, Redis, SQL Server and MySQL.",
      iconSrc: "/images/database-design.png",
    },
    {
      name: "Software Development",
      description:
        "I can help you build a software application that is reliable, scalable, and secure. I have experience working with a variety of programming languages, including Typescript, Javascript, Python and C#.",
      iconSrc: "/images/software-development.png",
    },
    {
      name: "Architecture Design",
      description:
        "I can help you design a software architecture that is flexible, modular, and maintainable. I have experience working with microservices, serverless architecture, and event-driven architecture.",
      iconSrc: "/images/architecture-design.png",
    },
    {
      name: "Web Development",
      description:
        "I can help you build a website or web application that is fast, responsive, secure, and user-friendly. I have experience working with a variety of technologies, including React, Node.js, NestJS, Next.js, and ExpressJS.",
      iconSrc: "/images/web-development.png",
    },
    {
      name: "Technology Consulting",
      description:
        "I can help you with technology strategy, planning, and implementation. I have experience working with a variety of technologies, including data analytics and artificial intelligence.",
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
