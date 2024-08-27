export const differenceInYears = (date1: Date, date2: Date) => {
  return Math.floor(
    (date1.getTime() - date2.getTime()) / (1000 * 60 * 60 * 24 * 365.25)
  );
};

export const getMyDates = () => {
  const now = new Date();
  const bi = new Date("1997-12-26");
  const initialExp = new Date("2021-03-01");
  return {
    now,
    birthDate: bi,
    age: differenceInYears(now, bi),
    initialExperience: initialExp,
    experience: differenceInYears(now, initialExp),
  };
};
