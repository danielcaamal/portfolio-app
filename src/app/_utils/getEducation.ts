interface Education {
  title: string;
  institution: string;
  location: string;
  initialDate: string;
  finalDate: string;
  description: string;
}

export const getEducation = (): Education[] => {
  return [
    {
      title: "Bachelor of Computer Science",
      institution: "University of California, Berkeley",
      location: "Berkeley, CA",
      initialDate: "2014-08-01",
      finalDate: "2018-05-01",
      description:
        "The Bachelor of Computer Science (BCS) is a four-year undergraduate degree in the field of computer science. The degree focuses on the study of computer algorithms, software systems, and computer networks.",
    },
    {
      title: "High School Diploma",
      institution: "Berkeley High School",
      location: "Berkeley, CA",
      initialDate: "2010-08-01",
      finalDate: "2014-05-01",
      description:
        "The High School Diploma is a four-year degree that certifies the completion of high school education. The degree focuses on the study of mathematics, science, history, and literature.",
    },
  ].sort((a, b) => {
    return (
      new Date(b.initialDate).getTime() - new Date(a.initialDate).getTime()
    );
  });
};
