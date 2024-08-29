/* eslint-disable @next/next/no-img-element */

export const IconWrapper = ({
  src,
  className,
}: {
  src: string;
  className?: string;
}) => {
  return (
    <div
      className={`w-20 h-20 md:w-24 md:h-24 flex flex-col rounded-full ${className}`}
    >
      <a href="https://www.flaticon.com/free-icons" title="www icons">
        <img
          src={src}
          alt=""
          className="w-full h-full items-center justify-center p-3"
        />
      </a>
    </div>
  );
};
