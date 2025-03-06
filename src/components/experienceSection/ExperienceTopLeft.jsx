import ExperienceInfo from "./ExperienceInfo";

const ExperienceTopLeft = () => {
  return (
    <div className="flex flex-col gap-6 w-[300px]">
      <p className="text-orange font-bold uppercase text-3xl font-special text-center">
        Since 2020
      </p>
      <div className="flex justify-center items-center gap-4">
        {/* <ExperienceInfo number="4" text="Years" /> */}
        {/* <p className="font-bold text-6xl text-lightBrown">-</p> */}
        {/* <ExperienceInfo number="23" text="Websites" /> */}
      </div>
      <p className="text-center">
      A passionate software engineer who constantly explores new technologies and innovative solutions. Dedicated to learning, evolving, and delivering impactful results.
      </p>
      {/* <ExperienceInfo number="$100k" text="Max Budget" /> */}
    </div>
  );
};

export default ExperienceTopLeft;
