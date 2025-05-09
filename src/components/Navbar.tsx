export const Navbar = () => {
  return (
    <div className="w-full border-b border-gray-200">
      {/* TOP NAV */}
      <div className="flex flex-row items-center justify-between px-6 py-2 bg-white">
        {/* LEFT: LOGO + LOCATION */}
        <div className="w-1/4 flex flex-row items-center justify-center space-x-2">
          <div className="flex items-center">
            <img src="/apollo247.svg" alt="logo" className="w-12 h-12" />
          </div>
          <div className="flex flex-row items-center space-x-1 text-sm font-semibold cursor-pointer">
            <svg
              className="w-6 h-6"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <path
                  d="M12 21C15.5 17.4 19 14.1764 19 10.2C19 6.22355 15.866 3 12 3C8.13401 3 5 6.22355 5 10.2C5 14.1764 8.5 17.4 12 21Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </g>
            </svg>
            <div className="flex flex-col">
              <span className="text-xs font-normal">Select Location</span>
              <div className="flex items-center">
                <span className="font-semibold">Select Address</span>
                <svg
                  className="w-4 h-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <path
                      d="M7 10L12 15L17 10"
                      stroke="#000000"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>{" "}
                  </g>
                </svg>
              </div>
            </div>
          </div>
        </div>
        {/* Middle: Search */}
        <div className="relative w-2/4 max-w-2xl mx-8">
          <svg
            className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2 pointer-events-none"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              {" "}
              <path
                d="M11 6C13.7614 6 16 8.23858 16 11M16.6588 16.6549L21 21M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z"
                stroke="#000000"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>{" "}
            </g>
          </svg>
          <input
            type="text"
            placeholder="Search Doctors, Specialities, Conditions etc."
            className="w-2xl pl-10 pr-4 py-2 text-sm border rounded-lg shadow-xs focus:outline-none bg-[var(--search-background)] text-[var(--search-foreground)] border-[var(--search-border)]"
          />
        </div>
        {/* RIGHT: LOGIN BUTTONS */}
        <div className="w-1/4 flex items-center justify-center space-x-2">
          <div className="flex items-center px-3 py-1 space-x-2 border-[1px] text-sm font-semibold rounded-lg text-[var(--button-primary-color)] cursor-pointer">
            <span>Login</span>
            <svg
              className="w-7 h-7"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <path
                  d="M12.12 12.78C12.05 12.77 11.96 12.77 11.88 12.78C10.12 12.72 8.71997 11.28 8.71997 9.50998C8.71997 7.69998 10.18 6.22998 12 6.22998C13.81 6.22998 15.28 7.69998 15.28 9.50998C15.27 11.28 13.88 12.72 12.12 12.78Z"
                  stroke="#1d625e"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>{" "}
                <path
                  d="M18.74 19.3801C16.96 21.0101 14.6 22.0001 12 22.0001C9.40001 22.0001 7.04001 21.0101 5.26001 19.3801C5.36001 18.4401 5.96001 17.5201 7.03001 16.8001C9.77001 14.9801 14.25 14.9801 16.97 16.8001C18.04 17.5201 18.64 18.4401 18.74 19.3801Z"
                  stroke="#1d625e"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>{" "}
                <path
                  d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                  stroke="#1d625e"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>{" "}
              </g>
            </svg>
          </div>
        </div>
      </div>
      {/* BOTTOM NAV */}
      <div className="flex flex-row items-center justify-center space-x-14 px-6 py-2 bg-white text-sm font-semibold border-t border-gray-100 shadow-[0_2px_4px_0_rgba(0,0,0,0.05)] z-10">
        <a href="#" className="relative py-2 hover:text-[var(--button-primary-color)] after:content-[''] after:absolute after:bottom-1 after:left-0 after:w-full after:h-0.5 after:bg-[var(--button-primary-color)] after:scale-x-0 hover:after:scale-x-100">Buy Medicines</a>
        <a href="#" className="relative py-2 hover:text-[var(--button-primary-color)] after:content-[''] after:absolute after:bottom-1 after:left-0 after:w-full after:h-0.5 after:bg-[var(--button-primary-color)] after:scale-x-0 hover:after:scale-x-100">Find Doctors</a>
        <a href="#" className="relative py-2 hover:text-[var(--button-primary-color)] after:content-[''] after:absolute after:bottom-1 after:left-0 after:w-full after:h-0.5 after:bg-[var(--button-primary-color)] after:scale-x-0 hover:after:scale-x-100">Lab Tests</a>
        <a href="#" className="relative py-2 hover:text-[var(--button-primary-color)] after:content-[''] after:absolute after:bottom-1 after:left-0 after:w-full after:h-0.5 after:bg-[var(--button-primary-color)] after:scale-x-0 hover:after:scale-x-100">Circle Membership</a>
        <a href="#" className="relative py-2 hover:text-[var(--button-primary-color)] after:content-[''] after:absolute after:bottom-1 after:left-0 after:w-full after:h-0.5 after:bg-[var(--button-primary-color)] after:scale-x-0 hover:after:scale-x-100">Health Records</a>
        <a href="#" className="relative py-2 hover:text-[var(--button-primary-color)] after:content-[''] after:absolute after:bottom-1 after:left-0 after:w-full after:h-0.5 after:bg-[var(--button-primary-color)] after:scale-x-0 hover:after:scale-x-100">Diabetes Reversal</a>
        <a href="#" className="relative py-2 hover:text-[var(--button-primary-color)] after:content-[''] after:absolute after:bottom-1 after:left-0 after:w-full after:h-0.5 after:bg-[var(--button-primary-color)] after:scale-x-0 hover:after:scale-x-100 flex items-center">
          Buy Insurance
          <span className="text-[10px] text-[var(--tag-new-text)] font-normal ml-1 bg-[var(--tag-new-background)] px-1.5 py-0.5 rounded-sm">NEW</span>
        </a>
      </div>
    </div>
  );
};
