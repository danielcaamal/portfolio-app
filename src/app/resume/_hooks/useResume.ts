import {
  getEducation,
  getProfile,
  getSkills,
  getWorkExperience,
} from "@/app/_utils";

export const useResume = () => {
  const {
    profile,
    skill,
    firstName,
    lastName,
    birthDate,
    actualPosition,
    website,
    email,
  } = getProfile();
  const skills = getSkills();
  const workExperience = getWorkExperience();
  const education = getEducation();

  const profileMap = [
    {
      title: "Full Name",
      description: `${firstName} ${lastName}`,
    },
    {
      title: "Birth Date",
      description: birthDate.toLocaleDateString(),
    },
    {
      title: "Actual Position",
      description: actualPosition,
    },
    {
      title: "Website",
      description: website,
    },
    {
      title: "Email",
      description: email,
    },
  ];

  const formatDate = (dateStr: string): string => {
    const date = new Date(dateStr);
    if (isNaN(date.getTime())) {
      return dateStr;
    }
    const formatter = new Intl.DateTimeFormat("en-US", {
      month: "long",
      year: "numeric",
    });
    const formattedDate = formatter.format(date);
    return formattedDate;
  };

  return {
    profile,
    skill,
    skills: skills.slice(0, 10),
    profileMap,
    workExperience: workExperience.map((item) => ({
      ...item,
      initialDate: formatDate(item.initialDate),
      finalDate: formatDate(item.finalDate),
    })),
    education: education.map((item) => ({
      ...item,
      initialDate: formatDate(item.initialDate),
      finalDate: formatDate(item.finalDate),
    })),
  };
};
