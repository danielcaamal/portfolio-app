import { DownloadCV, PageTitle } from "../_components";
import { getOffers } from "../_utils";
import { OfferCard } from "./_components";

export default function Contact() {
  const offers = getOffers();

  return (
    <div className="h-full min-h-screen">
      <PageTitle title="CONTACT" subtitle="I'd Love To Hear From You." />
      <div className="container flex items-center flex-col md:flex-none">
        <div className="flex flex-col text-center items-center">
          <p className="text-2xl md:text-3xl text-justify leading-relaxed py-5">
            What can I do for you?
          </p>
          <p className="text-lg md:text-2xl text-justify leading-relaxed py-5">
            Web development, software development, and technology are my
            passions.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3">
          {offers.map((offer, index) => (
            <div key={index} className="snap-start">
              <OfferCard
                name={offer.name}
                description={offer.description}
                imageSrc={offer.iconSrc}
              />
            </div>
          ))}
        </div>
        <div className="text-lg md:text-2xl text-justify leading-relaxed py-5">
          <p className="mb-4">
            If you have any questions, comments, or just want to say hello, I’d
            love to hear from you. Feel free to reach out to me using the
            contact form below or by sending me an email at
            <span className="text-sky-400 mx-2">
              <a
                href="mailto:danielcaamal97@gmail.com"
                className="hover:underline"
              >
                danielcaamal97@gmail.com
              </a>
            </span>
            I’ll do my best to respond as soon as possible.
          </p>
          <p className="mb-4">
            If you’d like to learn more about my work experience, skills, or
            projects, you can download my CV by clicking the button below.
          </p>
        </div>
        <DownloadCV />
      </div>
    </div>
  );
}
