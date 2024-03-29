import { type NextPage } from "next";

const Hero: NextPage = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center">
        {/* Hero section */}
        <div className="flex h-48 w-full items-center justify-center ">
          <div className="p-4 text-center">
            <h1 className="text-4xl font-bold text-white md:text-6xl">
              Welcome to Quizoba
            </h1>
            <p className="mt-2 text-xl text-white md:text-2xl">
              The best place to create and take quizzes
            </p>
          </div>
        </div>

        {/* Most Played Quizzes Section */}
        <div className="mt-10 w-full px-4">
          <h2 className="text-center text-3xl font-bold">
            Most Played Quizzes
          </h2>
          <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-3">
            {/* Dynamic content for most played quizzes */}
            {/* Placeholder divs for example */}
            <div className="rounded-lg bg-gray-200 p-4">Quiz 1</div>
            <div className="rounded-lg bg-gray-200 p-4">Quiz 2</div>
            <div className="rounded-lg bg-gray-200 p-4">Quiz 3</div>
          </div>
        </div>

        {/* Newest Quizzes Section */}
        <div className="mt-10 w-full px-4">
          <h2 className="text-center text-3xl font-bold">Newest Quizzes</h2>
          <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-3">
            {/* Dynamic content for newest quizzes */}
            {/* Placeholder divs for example */}
            <div className="rounded-lg bg-gray-200 p-4">New Quiz 1</div>
            <div className="rounded-lg bg-gray-200 p-4">New Quiz 2</div>
            <div className="rounded-lg bg-gray-200 p-4">New Quiz 3</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
