interface WorkExperience {
  title: string;
  company: string;
  location: string;
  initialDate: string;
  finalDate: string;
  description: string;
  urlCompany?: string;
}

export const getWorkExperience = (): WorkExperience[] => {
  return [
    {
      title: "Senior Full Stack Developer",
      company: "Nextia",
      location: "Remote",
      initialDate: "2022-05-01",
      finalDate: "Present",
      description:
        "Led the design, development, and maintenance of Infonavit’s backend (Node.js) and frontend (React) systems, supporting Mexico’s largest mortgage lender. Managed a high-dependency, high-concurrency environment for the platform mi cuenta (micuenta.infonavit.org.mx), ensuring seamless performance and reliability for millions of users. Develop and maintenance of Full Stack Solutions",
      urlCompany: "https://nextia.mx/",
    },
    {
      title: "Semi Junior Backend Developer",
      company: "Lynx",
      location: "Merida, Yucatan, Mexico",
      initialDate: "2021-09-01",
      finalDate: "2022-05-30",
      description:
        "Develop and maintenance of the Gasomarshal Python's Backend Volumetric Systems IoT (RESTful API, HTTP and database management) for SMARTGAS and other clients like G500, Gulf, FULLGAS and LAGAS.",
      urlCompany: "http://www.lynxis.mx/",
    },
  ].sort((a, b) => {
    return (
      new Date(b.initialDate).getTime() - new Date(a.initialDate).getTime()
    );
  });
};
