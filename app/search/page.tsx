import Link from "next/link";

const jobCards = [
  {
    title: "Senior Frontend Developer",
    company: "TechCorp Solutions",
    location: "Ismailia City, Ismailia",
    tags: ["Full-time", "Senior-level", "Engineering"],
    posted: "Posted 2 days ago",
    logo:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuD705AP60PbS-6U4ZgrxAU0vxFMqEEddBC0EMW7qEfrbgJ0MzadGfO_8Q0-9ZaogHj8773rX7kwIUaNlEWS5zwgX5_jI35GSCj_4Pmov6Du4kRSUKl37hxkdTFKvrFD9nFTwE61kBTCYxNqU9yGaiL9ITZzSNf1NVhekcQVr0XeYRmhZw9Mt87OTRt2g3d28nsC_UGkEn49utFcXsa5CaL943fXeVGMCuhjdArsZjEZXypmaC6JvQFWGqB7hmeKcNJC1hdo28Yk4UA"
  },
  {
    title: "Logistics Coordinator",
    company: "Suez Canal Authority",
    location: "Ismailia City, Ismailia",
    tags: ["Full-time", "Mid-level", "Logistics"],
    posted: "Posted 5 days ago",
    logo:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDSXJ4UzkLs9FAnrMOmzuluWjJEWJm7kOnjyutF9S_7yPtdO1zYAFTHbjfbm-0QOMCevOZ5ybGsGP84Ph1m9lEsHeWPXqULwDpCwqYbxXNsFCUf1mjXrMCy_R6ihRIUs5fTtC9tE2zGkPQsvPh4Ki-lypBvVQ7G4tCcH-CbpzJr6XqZMIu-3vM-g46QisJcZ_cbWg58CswfW5sTw2HzKuH6ge4ue_bwu7up3QZf4mt5TKfQxs6MH1bWQe-XX5zQNIhV8krckZXusXI"
  }
];

const courseCard = {
  title: "Digital Marketing Fundamentals",
  provider: "Ismailia LearnHub",
  location: "Online",
  tags: ["Course", "6 Weeks", "Beginner"],
  price: "EGP 1,200",
  logo:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuDdqmmUzCrPLp1oQP4l942EfTa7nuvHtYSIe4K2-OE8OgC7TF1O_6BLJsDRa9lNpbjI3ETqMD6rBwKds2GPtf6U1zSgMSt5V4vPN1Bopp4vM9wtScM6rVOnHUTHSQh1UaB2egbpap1m8Q0ffn8p97iYtHv5VElUbtFf0TEyf9h946frvpTkEKWsdkOXI42CAuWVTLleT4MDnJ-cIOcGVD_ga709nb0CSlQ1GXc0TQ6HYvBb_yLHkHU1uga43NIv6FuZblyJsSjQtUE"
};

export default function SearchPage() {
  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden">
      <header className="sticky top-0 z-20 flex items-center justify-between whitespace-nowrap border-b border-solid border-gray-200 dark:border-gray-700 px-4 sm:px-6 lg:px-10 py-3 bg-white dark:bg-background-dark/80 backdrop-blur-sm">
        <div className="flex items-center gap-4 text-gray-900 dark:text-white">
          <div className="size-6 text-primary">
            <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M36.7273 44C33.9891 44 31.6043 39.8386 30.3636 33.69C29.123 39.8386 26.7382 44 24 44C21.2618 44 18.877 39.8386 17.6364 33.69C16.3957 39.8386 14.0109 44 11.2727 44C7.25611 44 4 35.0457 4 24C4 12.9543 7.25611 4 11.2727 4C14.0109 4 16.3957 8.16144 17.6364 14.31C18.877 8.16144 21.2618 4 24 4C26.7382 4 29.123 8.16144 30.3636 14.31C31.6043 8.16144 33.9891 4 36.7273 4C40.7439 4 44 12.9543 44 24C44 35.0457 40.7439 44 36.7273 44Z"
                fill="currentColor"
              />
            </svg>
          </div>
          <h2 className="text-lg font-bold leading-tight tracking-[-0.015em]">Ismailia Careers</h2>
        </div>
        <nav className="hidden md:flex items-center gap-9">
          <Link className="text-sm font-medium leading-normal text-primary" href="#jobs">
            Jobs
          </Link>
          <Link
            className="text-sm font-medium leading-normal text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary"
            href="#courses"
          >
            Courses
          </Link>
          <Link
            className="text-sm font-medium leading-normal text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary"
            href="/dashboard"
          >
            Companies
          </Link>
        </nav>
        <div className="flex items-center gap-3">
          <Link
            className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary/10 dark:bg-primary/20 text-primary text-sm font-bold leading-normal tracking-[0.015em]"
            href="/login#login"
          >
            <span className="truncate">Login</span>
          </Link>
          <Link
            className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary text-white text-sm font-bold leading-normal tracking-[0.015em]"
            href="/login#register"
          >
            <span className="truncate">Sign Up</span>
          </Link>
        </div>
      </header>
      <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          <aside className="w-full lg:w-1/4 lg:max-w-xs shrink-0">
            <div className="sticky top-24 space-y-6">
              <div className="bg-white dark:bg-background-dark p-4 rounded-xl border border-gray-200 dark:border-gray-700">
                <div className="flex border-b border-gray-200 dark:border-gray-700 mb-4">
                  <button className="flex-1 py-2 text-sm font-semibold text-primary border-b-2 border-primary">Filter Jobs</button>
                  <button className="flex-1 py-2 text-sm font-semibold text-gray-500 dark:text-gray-400">Filter Courses</button>
                </div>
                <div className="space-y-6">
                  {[
                    {
                      title: "Location",
                      options: ["Ismailia City", "Fayed", "El Qantara"],
                      checkedIndex: 0
                    },
                    {
                      title: "Job Type",
                      options: ["Full-time", "Part-time", "Remote"],
                      checkedIndex: 0
                    },
                    {
                      title: "Experience Level",
                      options: ["Internship", "Entry-level", "Mid-level", "Senior-level"],
                      checkedIndex: 2
                    }
                  ].map((section) => (
                    <div key={section.title}>
                      <h3 className="font-bold text-gray-800 dark:text-gray-200 mb-3">{section.title}</h3>
                      <div className="space-y-2">
                        {section.options.map((option, idx) => (
                          <label
                            key={option}
                            className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-300"
                          >
                            <input
                              type="checkbox"
                              className="rounded border-gray-300 dark:border-gray-600 text-primary focus:ring-primary dark:bg-gray-700"
                              defaultChecked={idx === section.checkedIndex}
                            />
                            <span>{option}</span>
                          </label>
                        ))}
                      </div>
                    </div>
                  ))}
                  <div>
                    <h3 className="font-bold text-gray-800 dark:text-gray-200 mb-3">Salary Range</h3>
                    <input
                      type="range"
                      min="0"
                      max="100"
                      className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-lg appearance-none cursor-pointer"
                    />
                    <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400 mt-1">
                      <span>EGP 5k</span>
                      <span>EGP 50k+</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <button className="w-full flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary text-white text-sm font-bold leading-normal tracking-[0.015em]">
                  <span className="truncate">Apply Filters</span>
                </button>
                <button className="w-full flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-sm font-bold leading-normal tracking-[0.015em]">
                  <span className="truncate">Reset</span>
                </button>
              </div>
            </div>
          </aside>
          <div className="w-full lg:w-3/4 flex flex-col gap-6">
            <p className="text-[#111418] dark:text-white text-4xl font-black leading-tight tracking-[-0.033em] min-w-72">
              Find Your Next Opportunity in Ismailia
            </p>
            <label className="flex flex-col min-w-40 h-14 w-full">
              <div className="flex w-full flex-1 items-stretch rounded-xl h-full border border-gray-200 dark:border-gray-700 bg-white dark:bg-background-dark">
                <div className="text-gray-500 dark:text-gray-400 flex items-center justify-center pl-4">
                  <span className="material-symbols-outlined">search</span>
                </div>
                <input
                  className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden text-[#111418] dark:text-gray-200 focus:outline-0 focus:ring-0 border-none bg-transparent h-full placeholder:text-gray-500 dark:placeholder:text-gray-400 px-4 pl-2 text-base font-normal leading-normal"
                  placeholder="Search by keyword (e.g., 'Software Engineer')"
                  defaultValue=""
                />
                <button className="flex min-w-[100px] cursor-pointer items-center justify-center overflow-hidden rounded-r-lg m-1 bg-primary text-white text-sm font-bold leading-normal tracking-[0.015em]">
                  <span className="truncate">Search</span>
                </button>
              </div>
            </label>
            <div className="flex flex-wrap items-center gap-3">
              {["Ismailia City", "Full-time", "Mid-level"].map((chip) => (
                <div
                  key={chip}
                  className="flex h-8 shrink-0 items-center justify-center gap-x-1 rounded-full bg-primary/20 pl-3 pr-2 text-primary"
                >
                  <p className="text-sm font-medium leading-normal">{chip}</p>
                  <button className="text-primary rounded-full hover:bg-primary/20">
                    <span className="material-symbols-outlined text-base">close</span>
                  </button>
                </div>
              ))}
              <a className="text-sm text-gray-500 dark:text-gray-400 hover:text-primary dark:hover:text-primary underline" href="#">
                Clear all
              </a>
            </div>
            <div className="flex flex-wrap justify-between items-center gap-4">
              <h2 className="text-gray-800 dark:text-gray-200 text-lg font-bold">Showing 72 results</h2>
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-600 dark:text-gray-400">Sort by:</span>
                <select className="form-select rounded-lg border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-sm focus:border-primary focus:ring-primary">
                  <option>Relevance</option>
                  <option>Date Posted</option>
                  <option>Salary (High to Low)</option>
                </select>
              </div>
            </div>
            <div className="space-y-4" id="jobs">
              {jobCards.map((job) => (
                <div
                  key={job.title}
                  className="bg-white dark:bg-background-dark border border-gray-200 dark:border-gray-700 rounded-xl p-4 flex flex-col sm:flex-row gap-4 items-start hover:shadow-lg hover:border-primary transition-all duration-200"
                >
                  <div
                    className="bg-center bg-no-repeat aspect-square bg-cover rounded-lg size-16 shrink-0"
                    style={{ backgroundImage: `url("${job.logo}")` }}
                  />
                  <div className="flex-grow">
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white">{job.title}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300">{job.company}</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{job.location}</p>
                    <div className="flex flex-wrap gap-2 mt-3">
                      {job.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs font-semibold px-2 py-1 bg-primary/10 text-primary rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="w-full sm:w-auto flex flex-col items-start sm:items-end gap-2 mt-2 sm:mt-0">
                    <span className="text-sm text-gray-500 dark:text-gray-400">{job.posted}</span>
                    <Link
                      className="w-full sm:w-auto flex min-w-[120px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary text-white text-sm font-bold leading-normal tracking-[0.015em]"
                      href="/jops"
                    >
                      <span className="truncate">View &amp; Apply</span>
                    </Link>
                  </div>
                </div>
              ))}
              <div
                className="bg-white dark:bg-background-dark border border-gray-200 dark:border-gray-700 rounded-xl p-4 flex flex-col sm:flex-row gap-4 items-start hover:shadow-lg hover:border-primary transition-all duration-200"
                id="courses"
              >
                <div
                  className="bg-center bg-no-repeat aspect-square bg-cover rounded-lg size-16 shrink-0"
                  style={{ backgroundImage: `url("${courseCard.logo}")` }}
                />
                <div className="flex-grow">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white">{courseCard.title}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">{courseCard.provider}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{courseCard.location}</p>
                  <div className="flex flex-wrap gap-2 mt-3">
                    {courseCard.tags.map((tag) => (
                      <span
                        key={tag}
                        className={`text-xs font-semibold px-2 py-1 rounded-full ${
                          tag === "Course"
                            ? "bg-amber-500/10 text-amber-600"
                            : "bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300"
                        }`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="w-full sm:w-auto flex flex-col items-start sm:items-end gap-2 mt-2 sm:mt-0">
                  <span className="text-lg font-bold text-gray-700 dark:text-gray-200">{courseCard.price}</span>
                  <Link
                    className="w-full sm:w-auto flex min-w-[120px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary/20 text-primary text-sm font-bold leading-normal tracking-[0.015em]"
                    href="/courses"
                  >
                    <span className="truncate">Learn &amp; Enroll</span>
                  </Link>
                </div>
              </div>
            </div>
            <nav aria-label="Pagination" className="flex items-center justify-between pt-4">
              <div className="hidden sm:block">
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Showing <span className="font-medium">1</span> to <span className="font-medium">10</span> of{" "}
                  <span className="font-medium">72</span> results
                </p>
              </div>
              <div className="flex flex-1 justify-between sm:justify-end">
                <a
                  className="relative inline-flex items-center rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700"
                  href="#"
                >
                  Previous
                </a>
                <a
                  className="relative ml-3 inline-flex items-center rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700"
                  href="#"
                >
                  Next
                </a>
              </div>
            </nav>
          </div>
        </div>
      </main>
    </div>
  );
}


