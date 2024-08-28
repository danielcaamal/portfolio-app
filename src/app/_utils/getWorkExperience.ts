interface WorkExperience {
  title: string;
  company: string;
  location: string;
  initialDate: string;
  finalDate: string;
  description: string;
}

export const getWorkExperience = (): WorkExperience[] => {
  return [
    {
      title: "Frontend Developer",
      company: "Globant",
      location: "Remote",
      initialDate: "2021-03-01",
      finalDate: "Present",
      description:
        "Developing web applications using React, Redux, TypeScript, and other technologies.",
    },
    {
      title: "Fullstack Developer",
      company: "Globant",
      location: "Remote",
      initialDate: "2020-09-01",
      finalDate: "2021-03-01",
      description:
        "Developing web applications using React, Redux, TypeScript, Node.js, Express, and other technologies.",
    },
    {
      title: "Fullstack Developer",
      company: "Globant",
      location: "Remote",
      initialDate: "2019-09-01",
      finalDate: "2020-09-01",
      description:
        "Developing web applications using React, Redux, TypeScript, Node.js, Express, and other technologies.",
    },
    {
      title: "Fullstack Developer",
      company: "Globant",
      location: "Remote",
      initialDate: "2018-09-01",
      finalDate: "2019-09-01",
      description:
        "Developing web applications using React, Redux, TypeScript, Node.js, Express, and other technologies.",
    },
  ].sort((a, b) => {
    return (
      new Date(b.initialDate).getTime() - new Date(a.initialDate).getTime()
    );
  });
};
