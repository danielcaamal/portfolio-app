interface Skill {
  name: string;
  description: string;
  level: number; // 0-100
}

export const getSkills = (): Skill[] => {
  return [
    {
      name: "ReactJS",
      description:
        "React is an open-source, front end, JavaScript library for building user interfaces or UI components.",
      level: 85,
    },
    {
      name: "NestJS",
      description:
        "NestJS is a framework for building efficient, scalable Node.js server-side applications. It uses progressive JavaScript, is built with TypeScript and combines elements of OOP (Object Oriented Programming), FP (Functional Programming), and FRP (Functional Reactive Programming).",
      level: 98,
    },
    {
      name: "NextJS",
      description:
        "Next.js is an open-source React front-end development web framework that enables functionality such as server-side rendering and generating static websites for React based web applications.",
      level: 80,
    },
    {
      name: "NodeJS",
      description:
        "Node.js is an open-source, cross-platform, back-end JavaScript runtime environment that runs on the V8 engine and executes JavaScript code outside a web browser.",
      level: 90,
    },
    {
      name: "ExpressJS",
      description:
        "Express.js, or simply Express, is a back end web application framework for Node.js, released as free and open-source software under the MIT License.",
      level: 90,
    },
    {
      name: "MongoDB",
      description:
        "MongoDB is a source-available cross-platform document-oriented database program. Classified as a NoSQL database program, MongoDB uses JSON-like documents with optional schemas.",
      level: 80,
    },
    {
      name: "Firebase",
      description:
        "Firebase is a platform developed by Google for creating mobile and web applications.",
      level: 50,
    },
    {
      name: "Docker",
      description:
        "Docker is a set of platform as a service products that use OS-level virtualization to deliver software in packages called containers.",
      level: 75,
    },
    {
      name: "Kubernetes",
      description:
        "Kubernetes, also known as K8s, is an open-source system for automating deployment, scaling, and management of containerized applications.",
      level: 20,
    },
    {
      name: "AWS",
      description:
        "Amazon Web Services is a subsidiary of Amazon providing on-demand cloud computing platforms and APIs to individuals, companies, and governments, on a metered pay-as-you-go basis.",
      level: 70,
    },
    {
      name: "CI/CD",
      description:
        "CI/CD is a method to frequently deliver apps to customers by introducing automation into the stages of app development.",
      level: 70,
    },
    {
      name: "Postgres",
      description:
        "PostgreSQL, also known as Postgres, is a free and open-source relational database management system emphasizing extensibility and SQL compliance.",
      level: 85,
    },
    {
      name: "Django",
      description:
        "Django is a high-level Python web framework that encourages rapid development and clean, pragmatic design.",
      level: 80,
    },
  ].sort((a, b) => {
    if (a.level > b.level) return -1;
    if (a.level < b.level) return 1;
    if (a.name.localeCompare(b.name) < 0) return -1;
    return 0;
  });
};
