import React from "react";
import { TECH as tech } from "../../@data/tech";
type Props = {};
console.log(tech);

const index = (props: Props) => {
  const techMap = Object.entries(tech).map(([key, value]) => {
    return (
      <div
        key={value.name}
        className="flex flex-row items-center justify-center gap-2 "
      >
        <div className={`text-4xl ${value.class}`}>{value.icon}</div>
      </div>
    );
  });

  return (
    <>
      <title>About | Brayden Barter</title>

      <section className="min-h-[calc(100vh-64px)] flex justify-center flex-col">
        <div className="w-[95%] h-[90%] md:w-[55%] mx-auto min-h-full md:h-100 border border-neutral-700 rounded-md p-8 bg-neutral-900 flex flex-col shadow-lg shadow-neutral-800 hover:border-neutral-600 hover:shadow-neutral-900 transition-all duration-300 gap-4">
          <ul className="text-lg">
            <li>Code Writer</li>
            <li>Snow Shredder</li>
            <li>Video Game Player</li>
            <li>Future Startup Founder</li>
          </ul>
          <div className="flex flex-col md:flex-row gap-4 w-full h-72 mx-auto">
            <div className="flex flex-col border border-white w-[90%] h-full mx-auto rounded-md"></div>
          </div>
          <div className="flex flex-row w-[90%] md:w-[55%] justify-center gap-4 mx-auto flex-wrap">
            {techMap}
          </div>
        </div>
      </section>
    </>
  );
};

export default index;
