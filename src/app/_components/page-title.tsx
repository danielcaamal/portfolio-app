

interface PageTitleProps {
  title: string;
  subtitle: string;
}

export const PageTitle = ({ title, subtitle }: PageTitleProps) => {
  return (
    <div className="container text-center mb-12">
      <p className="text-2xl text-sky-400">{title}</p>
      <p className="text-4xl ">
        {subtitle} 
      </p>
    </div>
  )
}