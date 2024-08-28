export const differenceInYears = (date1: Date, date2: Date) => {
  return Math.floor(
    (date1.getTime() - date2.getTime()) / (1000 * 60 * 60 * 24 * 365.25)
  );
};

export const getProfile = () => {
  const now = new Date();
  const bi = new Date("1997-12-26T00:00:00.000-06:00");
  const initialExp = new Date("2021-03-01T00:00:00.000-06:00");
  return {
    firstName: "Daniel",
    middleName: "Karim",
    lastName: "Caamal",
    secondLastName: "Herrera",
    email: "danielcaamal97@gmail.com",
    actualPosition: "Software Developer",
    website: "https://portfolio-b273a.web.app/",
    now,
    birthDate: bi,
    age: differenceInYears(now, bi),
    initialExperience: initialExp,
    experience: differenceInYears(now, initialExp),
    profile: `
      Full Stack Engineer with affinity for backend development and architecture design. 
      Lead developer in multiple projects, with experience in Full-Stack solutions and problems-solving.
    `,
    skill: `
      Proficient in TypeScript, JavaScript, NodeJS, NEST.js, and NEXT.js, React, and Angular.
      Experience in Backend and Frontend development, with a strong affinity for data manipulation and architecture design.
    `,
  };
};
