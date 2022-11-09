import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { VscFold, VscSymbolKeyword } from "react-icons/vsc";
import { AuthContext } from "../../Contexts/AuthProvider";

const Headers = () => {
  const { user, logOut } = useContext(AuthContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const links = [
    <Link to="/">Home</Link>,
    <Link to="/">All Reviews</Link>,
    <Link to="/">Blog</Link>,
  ];
  const signOut = () => {
    logOut()
      .then(() => {})
      .catch((err) => console.log(err.message));
  };
  return (
    <div className="bg-gray-900">
      <div className="py-2 mx-auto max-w-[90%] lg:max-w-6xl">
        <div className="relative flex items-center justify-between">
          <div className="relative flex items-center justify-between">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="200"
              height="68"
              viewBox="0 0 200 68">
              <text
                id="Bohemian_Cath"
                data-name="Bohemian Cath"
                transform="translate(4)"
                fill="#04DA8D"
                fontSize="25"
                fontFamily="KristenITC-Regular, Kristen ITC">
                <tspan x="0" y="51">
                  BohemianCatch
                </tspan>
              </text>
            </svg>
          </div>
          <ul className="flex items-center hidden space-x-8 lg:flex">
            {links.map((link, idx) => (
              <li
                key={idx}
                className="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400">
                {link}
              </li>
            ))}
            {user && (
              <>
                <li className="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400">
                  <Link to="/my-reviews">My Review</Link>
                </li>
                <li className="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400">
                  <Link to="/add-service">Add Service</Link>
                </li>
              </>
            )}
          </ul>
          <ul className="flex items-center hidden space-x-8 lg:flex">
            <li>
              {user ? (
                <button
                  onClick={signOut}
                  className="inline-flex items-center justify-center py-2 px-6 font-medium tracking-wide text-white transition duration-200 rounded-full shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none bg-blue-600"
                  aria-label="Sign up"
                  title="Sign up">
                  Logout
                </button>
              ) : (
                <Link
                  to="/login"
                  className="inline-flex items-center justify-center py-2 px-6 font-medium tracking-wide text-white transition duration-200 rounded-full shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none bg-blue-600"
                  aria-label="Sign up"
                  title="Sign up">
                  Sign up
                </Link>
              )}
            </li>
          </ul>
          <div className="lg:hidden">
            <button
              aria-label="Open Menu"
              title="Open Menu"
              className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline text-white"
              onClick={() => setIsMenuOpen(true)}>
              <VscSymbolKeyword />
            </button>
            {isMenuOpen && (
              <div className="absolute top-0 left-0 w-full z-30">
                <div className="p-5 bg-white border rounded shadow-sm">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="200"
                        height="68"
                        viewBox="0 0 200 68">
                        <text
                          id="Bohemian_Cath"
                          data-name="Bohemian Cath"
                          transform="translate(4)"
                          fill="#04DA8D"
                          fontSize="25"
                          fontFamily="KristenITC-Regular, Kristen ITC">
                          <tspan x="0" y="51">
                            Bohemian Cath
                          </tspan>
                        </text>
                      </svg>
                    </div>
                    <div>
                      <button
                        aria-label="Close Menu"
                        title="Close Menu"
                        className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                        onClick={() => setIsMenuOpen(false)}>
                        <VscFold />
                      </button>
                    </div>
                  </div>
                  <nav>
                    <ul className="space-y-4">
                      {links.map((link, idx) => (
                        <li
                          key={idx}
                          className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400">
                          {link}
                        </li>
                      ))}
                    </ul>
                  </nav>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Headers;
