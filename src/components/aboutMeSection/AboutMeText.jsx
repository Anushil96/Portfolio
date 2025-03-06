import { Link } from "react-scroll";

const AboutMeText = () => {
  return (
    <div className="flex flex-col md:items-start sm:items-center md:text-left sm:text-center">
      <h2 className="text-6xl text-cyan mb-10">About Me</h2>
      <p>
      I am a Data Analyst with 1 year of experience in data analysis and a strong foundation in software testing (3 years in automation & manual testing). I specialize in extracting meaningful insights from data, optimizing workflows, and enhancing decision-making through data-driven strategies. My background in software testing equips me with a keen eye for detail, ensuring data accuracy, quality assurance, and process efficiency. Passionate about analytics, automation, and continuous learning, I strive to bridge the gap between data and technology for impactful business solutions.
      </p>
      <button className="border border-orange rounded-full py-2 px-4 text-lg flex gap-2 items-center mt-10 hover:bg-orange transition-all duration-500 cursor-pointer md:self-start sm:self-center">
        <Link
          spy={true}
          smooth={true}
          duration={500}
          offset={-120}
          to="projects"
          className="cursor-pointer text-white hover:text-cyan transition-all duration-500"
        >
          My Projects
        </Link>
      </button>
    </div>
  );
};

export default AboutMeText;
