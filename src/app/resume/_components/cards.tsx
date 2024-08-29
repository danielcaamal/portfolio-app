interface ResumeCardsProps {
  title: string;
  description: string;
  children: React.ReactNode;
}

export const ResumeCards = ({
  title,
  description,
  children,
}: ResumeCardsProps) => {
  return (
    <div className="container flex flex-col">
      <span className="text-2xl md:text-3xl text-orange-600 text-bold">
        {title}
      </span>
      <span className="max-w-lg text-xl">{description}</span>
      <div className="flex flex-col md:flex-row md:space-x-20 space-y-10 md:space-y-0 ">
        {children}
      </div>
    </div>
  );
};
