import { type NextPage } from "next";
import Link from "next/link";
import { signIn, useSession, signOut } from "next-auth/react";

const Navbar: NextPage = () => {
  const { data: session } = useSession();

  return (
    <>
      <nav className="bg-gray-800 text-white shadow-lg">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center">
              <div className="text-xl font-semibold text-white">
                <Link href="/">Quizoba</Link>
              </div>
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  {/* Add your navigation links here */}
                  <Link href="/quizzes">Quizzes</Link>
                  <Link href="/createquiz">Create Quiz</Link>
                  <Link href="/profile">Profile</Link>
                </div>
              </div>
            </div>
            <div>
              {/* Search bar */}
              <input
                type="text"
                placeholder="Search for Quizzes"
                className="rounded-md bg-gray-700 p-2 text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
              />
            </div>
            {session ? (
              <div className="flex items-center gap-4">
                <span>Hello, {session.user?.name || "User"}!</span>
                <button
                  onClick={() => signOut()}
                  className="rounded-lg bg-yellow-300 p-2 text-black"
                >
                  Logout
                </button>
              </div>
            ) : (
              <div className="flex gap-4">
                <button
                  onClick={() => signIn()}
                  className="rounded-lg bg-yellow-300 p-2 text-black"
                >
                  Sign Up / Login
                </button>
              </div>
            )}
            <div className="hidden md:block">
              <div className="ml-4 flex items-center md:ml-6">
                {/* Additional buttons or profile dropdown could be placed here */}
              </div>
            </div>
            <div className="-mr-2 flex md:hidden">
              {/* Mobile menu button */}
              <button
                type="button"
                className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
              >
                {/* Icon for menu button */}
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
