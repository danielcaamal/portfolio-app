interface Skill {
  name: string;
  description: string;
  level: number; // 0-100
}

export const getSkills = (): Skill[] => {
  return [
    {
      name: "JavaScript",
      description:
        "JavaScript is a programming language that conforms to the ECMAScript specification. JavaScript is high-level, often just-in-time compiled, and multi-paradigm.",
      level: 90,
    },
    {
      name: "TypeScript",
      description:
        "TypeScript is an open-source language which builds on JavaScript, one of the world’s most used tools, by adding static type definitions.",
      level: 90,
    },
    {
      name: "React",
      description:
        "React is an open-source, front end, JavaScript library for building user interfaces or UI components.",
      level: 90,
    },
    {
      name: "Node.js",
      description:
        "Node.js is an open-source, cross-platform, back-end JavaScript runtime environment that runs on the V8 engine and executes JavaScript code outside a web browser.",
      level: 90,
    },
    {
      name: "Express",
      description:
        "Express.js, or simply Express, is a back end web application framework for Node.js, released as free and open-source software under the MIT License.",
      level: 90,
    },
    {
      name: "MongoDB",
      description:
        "MongoDB is a source-available cross-platform document-oriented database program. Classified as a NoSQL database program, MongoDB uses JSON-like documents with optional schemas.",
      level: 90,
    },
    {
      name: "Firebase",
      description:
        "Firebase is a platform developed by Google for creating mobile and web applications.",
      level: 90,
    },
    {
      name: "Docker",
      description:
        "Docker is a set of platform as a service products that use OS-level virtualization to deliver software in packages called containers.",
      level: 90,
    },
    {
      name: "Kubernetes",
      description:
        "Kubernetes, also known as K8s, is an open-source system for automating deployment, scaling, and management of containerized applications.",
      level: 90,
    },
    {
      name: "AWS",
      description:
        "Amazon Web Services is a subsidiary of Amazon providing on-demand cloud computing platforms and APIs to individuals, companies, and governments, on a metered pay-as-you-go basis.",
      level: 90,
    },
    {
      name: "CI/CD",
      description:
        "CI/CD is a method to frequently deliver apps to customers by introducing automation into the stages of app development.",
      level: 90,
    },
  ].sort((a, b) => b.level - a.level);
};
