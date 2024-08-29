/* eslint-disable @next/next/no-img-element */
import { PageTitle } from "../_components";
import { getProfile } from "../_utils";

export default function About() {
  const { age, experience } = getProfile();

  return (
    <div className="h-full min-h-screen">
      <PageTitle title="ABOUT ME" subtitle="Let me introduce myself" />
      <div className="container flex items-center flex-col md:flex-none">
        <img
          className="md:float-left h-40 md:h-60 w-auto rounded-full shadow-lg mb-6 md:mb-0 md:mr-8 m-5"
          src="/images/me.jpeg"
          alt="Profile"
        />
        <div className="text-lg md:text-2xl text-justify leading-relaxed py-5">
          <p className="mb-4">
            My name is Daniel Karim Caamal Herrera, and I am a {age}-year-old
            Mechatronic Engineer with a passion for technology and innovation.
            My ultimate goal is to travel the world and contribute to
            groundbreaking projects that challenge and inspire me.
          </p>
          <p className="mb-4">
            I hold a Bachelor&apos;s degree in Mechatronic Engineering from the
            Universidad Autónoma de Yucatán, where I graduated with an
            impressive GPA of 94.80. My thesis, titled
            <span className="text-sky-400">
              &quot;Energy Efficient Framework for Sport Wearable AIoT Cardiac
              Arrhythmia Detection System&quot;
            </span>
            , was published in the prestigious{" "}
            <span className="text-sky-400">
              IEEE Transactions on Instrumentation & Measurement journal
            </span>{" "}
            in 2021.
          </p>
          <p className="mb-4">
            I bring over {experience} years of experience in the IT industry,
            where I&apos;ve had the opportunity to grow and develop my skills
            across multiple roles. I began my career as a Backend Developer,
            where I discovered a strong affinity for data manipulation and
            architecture design.
          </p>
          <p className="mb-4">
            Over time, I continued to hone my expertise in backend development,
            eventually venturing into frontend work. While I’ve gained valuable
            experience in UI/UX design, my true passion lies in problem-solving
            across all aspects of development.
          </p>
          <p className="mb-4">
            Currently, I work as a Full Stack Developer, leveraging my
            proficiency in NEST.js and NEXT.js frameworks, with TypeScript as my
            primary language.
          </p>
          <p className="mb-4">
            Although I don’t yet consider myself a senior developer, I’ve
            mastered these tools and am constantly seeking new challenges to
            expand my skill set.
          </p>
        </div>
      </div>
    </div>
  );
}
