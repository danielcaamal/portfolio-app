interface Education {
  title: string;
  institution: string;
  location: string;
  initialDate: string;
  finalDate: string;
  description: string;
  urlInstitution?: string;
}

export const getEducation = (): Education[] => {
  return [
    {
      title: "Data Engineer Nanodegree",
      institution: "Udacity",
      location: "Remote",
      initialDate: "2024-02-01",
      finalDate: "2024-05-01",
      description:
        "The Data Engineering Nanodegree program is designed to teach students how to create new data pipelines and work with big data at scale. Students will work on building big data pipelines, deploying data lakes, and automating data pipelines.",
      urlInstitution:
        "https://www.udacity.com/course/data-engineer-nanodegree--nd027",
    },
    {
      title: "Mechatronic Engineering",
      institution: "Universidad Autónoma de Yucatán",
      location: "Merida, Yucatan, Mexico",
      initialDate: "2016-07-01",
      finalDate: "2021-05-30",
      description:
        "Graduated by thesis with an outstanding curricular trajectory average (94.80). I developed a project with a EKG signal processing system for the detection of arrhythmias in real time with trained AI models with a	participation in “Energy Efficient Framework for Sport Wearable AIoT Cardia Arrhythmia Detection System” (2021) for the Journal IEEE Transactions on Instrumentation & Measurement.",
      urlInstitution: "https://uady.mx/",
    },
  ].sort((a, b) => {
    return (
      new Date(b.initialDate).getTime() - new Date(a.initialDate).getTime()
    );
  });
};
