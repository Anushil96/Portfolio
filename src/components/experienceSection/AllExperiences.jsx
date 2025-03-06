import SingleExperience from "./SingleExperience";
import { FaArrowRightLong } from "react-icons/fa6";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const experiences = [
  {
    job: "Programmer Analyst",
    company: "Cognizant",
    date: "2020 - 2022",
    responsibilities: [
      "Test Scenarios & Test case Designing & Execution.",
      "Application Testing Accessibility Testing.",
      "Bug Reporting & Defect Tracking.",
      "Involved in end to end Testing of the Product.",
    ],
  },
  {
    job: "Analyst",
    company: "Axtria",
    date: "2022 - 2024",
    responsibilities: [
      "Explaining and facilitating web development concepts.",
      "Help students with their assignments and grade them weekly.",
      "Provide support for students through their learning journey.",
    ],
  },
  {
    job: "Course Instructor",
    company: "Sprints",
    date: "2024 - Present",
    responsibilities: [
      "Teaching JavaScript, React and TailwindCSS.",
      "Participating in preparing course materials.",
      "Helping students through their way in learning web development technologies.",
    ],
  },
];

const AllExperiences = () => {
  return (
    <div className="flex md:flex-row sm:flex-col items-center justify-between">
      {experiences.map((experience, index) => {
        return (
          <>
            <SingleExperience key={index} experience={experience} />
            {index < 2 ? (
              <motion.div
                variants={fadeIn("right", 0)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.7 }}
              >
                <FaArrowRightLong className="text-6xl text-orange lg:block sm:hidden" />
              </motion.div>
            ) : (
              ""
            )}
          </>
        );
      })}
    </div>
  );
};

export default AllExperiences;
