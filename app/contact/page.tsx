import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Brayden Barter",
};

const Contact = () => {
  return (
    <>
      <h1 className="text-4xl m-8 text-center underline">Contact</h1>

      <section className="min-h-[calc(100vh-64px)] flex flex-start flex-col">
        <div className="w-[95%] h-[90%] md:w-[55%] mx-auto min-h-full md:h-100 border border-neutral-700 rounded-md p-8 bg-neutral-900 flex flex-col shadow-lg shadow-neutral-800  hover:border-teal-300 hover:shadow-neutral-900 transition-all duration-300 gap-4">
          If you want to get in contact with me about job opportunities, or just
          general queries, you can reach me at any of the following:
          <ul className="list-disc list-inside">
            <li>
              <a
                href="mailto:braydenbarter@gmail.com"
                className="text-teal-300 hover:underline text-xl"
                target="_blank"
                rel="noreferrer"
              >
                Email
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/brayden-barter-5b1b3b1b9/"
                className="text-teal-300 hover:underline text-xl"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default Contact;

