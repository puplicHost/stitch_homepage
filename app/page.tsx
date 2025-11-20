import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="layout-container flex h-full grow flex-col">
      <header className="sticky top-0 z-50 flex items-center justify-between whitespace-nowrap border-b border-solid border-border-light bg-surface-light px-6 py-3 dark:border-border-dark dark:bg-surface-dark lg:px-10">
        <div className="flex items-center gap-4 text-text-light-primary dark:text-text-dark-primary">
          <div className="size-6 text-primary">
            <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M36.7273 44C33.9891 44 31.6043 39.8386 30.3636 33.69C29.123 39.8386 26.7382 44 24 44C21.2618 44 18.877 39.8386 17.6364 33.69C16.3957 39.8386 14.0109 44 11.2727 44C7.25611 44 4 35.0457 4 24C4 12.9543 7.25611 4 11.2727 4C14.0109 4 16.3957 8.16144 17.6364 14.31C18.877 8.16144 21.2618 4 24 4C26.7382 4 29.123 8.16144 30.3636 14.31C31.6043 8.16144 33.9891 4 36.7273 4C40.7439 4 44 12.9543 44 24C44 35.0457 40.7439 44 36.7273 44Z"
                fill="currentColor"
              />
            </svg>
          </div>
          <h2 className="text-xl font-bold leading-tight tracking-[-0.015em]">Ismailia Careers</h2>
        </div>
        <div className="hidden items-center justify-end gap-8 lg:flex lg:flex-1">
          <div className="flex items-center gap-9">
            <Link
              className="text-sm font-medium leading-normal text-text-light-primary hover:text-primary dark:text-text-dark-primary dark:hover:text-primary"
              href="/search#jobs"
            >
              Jobs
            </Link>
            <Link
              className="text-sm font-medium leading-normal text-text-light-primary hover:text-primary dark:text-text-dark-primary dark:hover:text-primary"
              href="/search#courses"
            >
              Courses
            </Link>
            <Link
              className="text-sm font-medium leading-normal text-text-light-primary hover:text-primary dark:text-text-dark-primary dark:hover:text-primary"
              href="/dashboard"
            >
              For Companies
            </Link>
          </div>
          <Link
            className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary text-white text-sm font-bold leading-normal tracking-[0.015em]"
            href="/login#login"
          >
            <span className="truncate">Login</span>
          </Link>
          <div
            className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10"
            data-alt="User profile picture"
            style={{
              backgroundImage:
                'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCmHCNYCTwfPe4bAjsjqtzhF3-XSmmiuZBPBqyiLVwS6XYsxiSiJfaNSfzNMLTniS-_hIkOqIuiew0jK75XwJBKolK12xLcypVVUx21-tI8mSY7ZxL7fL96V2rCdU-i1nK3n2Vse6hmMHrrU5nAwIxa-ZxHnUmQxn7VArs6P40coU_hhl2VWqaF9CsTiw5qel0y-fsG2rIn6TmRGfgaQAcjits1LrYJ9UiBZqCPy09Uk72NwTSiLws2lPAnu5gVIXygqOLD-MIAE_0")'
            }}
          />
        </div>
        <button className="lg:hidden text-text-light-primary dark:text-text-dark-primary">
          <span className="material-symbols-outlined text-3xl">menu</span>
        </button>
      </header>
      <main className="w-full">
        <section className="bg-surface-light py-12 dark:bg-surface-dark md:py-20">
          <div className="mx-auto max-w-5xl px-6">
            <div className="flex flex-col items-center gap-6 text-center">
              <h1 className="text-4xl font-black leading-tight tracking-[-0.033em] text-text-light-primary dark:text-text-dark-primary md:text-5xl">
                Find Your Next Career Opportunity in Ismailia.
              </h1>
              <h2 className="text-base font-normal leading-normal text-text-light-secondary dark:text-text-dark-secondary">
                Search for jobs and professional courses to advance your skills.
              </h2>
              <div className="mt-4 flex w-full max-w-2xl flex-col items-stretch gap-2 rounded-lg bg-surface-light p-2 shadow-lg dark:bg-background-dark sm:flex-row">
                <label className="flex flex-1 flex-col min-w-40 h-14">
                  <div className="flex w-full flex-1 items-stretch h-full">
                    <div className="text-text-light-secondary dark:text-text-dark-secondary flex items-center justify-center pl-4">
                      <span className="material-symbols-outlined">search</span>
                    </div>
                    <input
                      className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden border-none bg-transparent text-text-light-primary focus:outline-0 focus:ring-0 h-full placeholder:text-text-light-secondary dark:text-text-dark-primary dark:placeholder:text-text-dark-secondary px-2 text-base font-normal leading-normal"
                      placeholder="Search by title, skill, or company..."
                      defaultValue=""
                    />
                  </div>
                </label>
                <div className="flex items-center gap-2">
                  <div className="relative w-full sm:w-auto">
                    <select className="w-full appearance-none rounded-lg border border-border-light bg-background-light py-2 pl-3 pr-8 text-sm font-medium text-text-light-secondary focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary dark:border-border-dark dark:bg-surface-dark dark:text-text-dark-secondary">
                      <option>Jobs</option>
                      <option>Courses</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-text-light-secondary dark:text-text-dark-secondary">
                      <span className="material-symbols-outlined">expand_more</span>
                    </div>
                  </div>
                  <Link
                    className="flex w-full min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-5 bg-primary text-white text-base font-bold leading-normal tracking-[0.015em] sm:w-auto"
                    href="/search#jobs"
                  >
                    <span className="truncate">Search</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
            <aside className="w-full">
              <div className="sticky top-24 space-y-6">
                <h3 className="text-lg font-bold">Filters</h3>
                <div className="flex flex-col gap-3">
                  {["Field", "Experience Level", "Location", "Job Type", "Course Type"].map((title) => (
                    <details
                      key={title}
                      className="flex flex-col rounded-lg border border-border-light bg-surface-light px-[15px] py-[7px] group dark:border-border-dark dark:bg-surface-dark"
                    >
                      <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-2">
                        <p className="text-sm font-medium">{title}</p>
                        <span className="material-symbols-outlined text-text-light-secondary group-open:rotate-180 dark:text-text-dark-secondary">
                          expand_more
                        </span>
                      </summary>
                      {title === "Field" && (
                        <div className="pb-2">
                          {["Engineering", "IT", "Sales", "Marketing"].map((option, idx) => (
                            <label key={option} className="flex gap-x-3 py-2 flex-row">
                              <input
                                className="h-5 w-5 rounded border-2 border-border-light bg-transparent text-primary checked:bg-primary checked:border-primary checked:bg-[image:--checkbox-tick-svg] focus:ring-0 focus:ring-offset-0 focus:border-border-light dark:border-border-dark"
                                type="checkbox"
                                defaultChecked={idx === 0}
                              />
                              <p className="text-sm font-normal">{option}</p>
                            </label>
                          ))}
                        </div>
                      )}
                    </details>
                  ))}
                </div>
                <button className="flex min-w-[84px] w-full max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 flex-1 bg-transparent text-text-light-secondary text-sm font-bold leading-normal tracking-[0.015em] ring-1 ring-border-light hover:bg-background-light dark:text-text-dark-secondary dark:ring-border-dark dark:hover:bg-surface-dark">
                  <span className="truncate">Clear Filters</span>
                </button>
              </div>
            </aside>
            <main className="lg:col-span-3">
              <div className="flex flex-col gap-6">
                <p className="text-sm font-medium text-text-light-secondary dark:text-text-dark-secondary">Showing 78 results</p>
                <div className="space-y-6">
                  {[
                    {
                      title: "Senior Frontend Developer",
                      subtitle: "Tech Solutions Inc. • Ismailia City",
                      tags: ["Full-time", "Remote"],
                      salary: "$75,000 - $90,000",
                      badgeColor: "primary",
                      link: "/jops"
                    },
                    {
                      title: "Project Management Professional (PMP) Course",
                      subtitle: "Innovate Academy • Online",
                      tags: ["Course", "Self-paced"],
                      salary: "$499",
                      badgeColor: "secondary",
                      link: "/courses"
                    },
                    {
                      title: "Digital Marketing Specialist",
                      subtitle: "Canal Logistics • Ismailia City",
                      tags: ["Part-time"],
                      salary: "$30,000 - $45,000",
                      badgeColor: "primary",
                      link: "/jops"
                    }
                  ].map((card, index) => (
                    <div
                      key={card.title}
                      className="rounded-lg border border-border-light bg-surface-light p-6 transition-shadow hover:shadow-lg dark:border-border-dark dark:bg-surface-dark"
                    >
                      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                        <div className="flex items-start gap-4">
                          <div className="flex size-12 items-center justify-center rounded-lg bg-background-light dark:bg-background-dark">
                            <Image
                              alt={`${card.title} Logo`}
                              className="h-8 w-8 object-contain"
                              width={32}
                              height={32}
                              src={
                                [
                                  "https://lh3.googleusercontent.com/aida-public/AB6AXuBEg2OqiW-tQb3dEvMy0UIFNqe6yHgWSbXke1W9q3I_F-2N8_Q1V_E7pCivbf-EStUXDbn7fBx4SIM3XkDvpuaK5BODSz65ZXfugWMKrLGqdVVDyQc3AP37Rcu2jfPqTNUgjaaUKUfoC6oGbljPiw6ayBOHqaWrSHakgfBAdqoBC42jaCe51LRWwU9xNHVPtyZeIe2Wbk_tioxifFX3EWPqT4a1XjFD8KE5Aysp4TnbvgVN6y1U_9gUBAc_tPS4f4LS4HqmZIslPRo",
                                  "https://lh3.googleusercontent.com/aida-public/AB6AXuBf3oZhXEmv5rT-T4vscFMxHQ49Ke4co5GmAUqaOXfQQDTxSQPfqdLBg-0mjYf_ky5VCmbLHXvkZ-CSXsuJnOtL-TXBZjMtSwVM1dYvRMvI5EfO8SC6TYmAR-iej2Oz56uFEZFuxBf5DJ6Ii444AgI0WxQtQvJmkPi46EwCjjMFillj52FDx1ez_8BqprVaWjANfsxwcgaCMJsiZSuyc6xEL7S4vRdOv7OOvRi5kp0jIwB5ZDR3-_WjNqiZ2w8Y3f1spuHmOoS9Chc",
                                  "https://lh3.googleusercontent.com/aida-public/AB6AXuDpkecPwoR-b5D2TEor_htD_EoHV5t1N_r-TucQEGoQtiHModyiqL8AAa4IWAEgaxDYXqe0KvqxeeE7NdLaia-wa7M3Fi5nP6RGrkRtjjDJ3tWy1wH-_THoMZSu-Ifl06M9tmYMjv623xzfxMZ8YtpZN_DeWa_DVz0XDyuqHNq3lcmPjb7IhIIx_DH34tZw_pBM3bewhmlc25cFvxTUH455Hrl-GQyrlMMJKLLcxNTvjjUTo1JJz2PReIi3xo80ItWJKpeCO8Zjsfo"
                                ][index]
                              }
                            />
                          </div>
                          <div>
                            <h3 className="text-lg font-bold text-text-light-primary dark:text-text-dark-primary">{card.title}</h3>
                            <p className="text-sm text-text-light-secondary dark:text-text-dark-secondary">{card.subtitle}</p>
                            <div className="mt-2 flex flex-wrap gap-2">
                              {card.tags.map((tag) => (
                                <span
                                  key={tag}
                                  className={`rounded-full px-2.5 py-0.5 text-xs font-semibold ${
                                    tag === "Course"
                                      ? "bg-purple-500/20 text-purple-600 dark:text-purple-400"
                                      : tag === "Self-paced"
                                      ? "bg-yellow-500/20 text-yellow-700 dark:text-yellow-400"
                                      : "bg-primary/20 text-primary"
                                  }`}
                                >
                                  {tag}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-shrink-0 flex-col items-end gap-2">
                          <p className="text-sm font-semibold text-text-light-primary dark:text-text-dark-primary">{card.salary}</p>
                          <Link
                            className={`mt-2 flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 text-white text-sm font-bold leading-normal tracking-[0.015em] sm:mt-0 ${
                              card.badgeColor === "secondary" ? "bg-secondary" : "bg-primary"
                            }`}
                            href={card.link}
                          >
                            <span className="truncate">{card.title.includes("Course") ? "Enroll Now" : "View Details"}</span>
                          </Link>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <nav aria-label="Pagination" className="flex items-center justify-center pt-8">
                  <ul className="flex items-center -space-x-px h-8 text-sm">
                    {["Previous", "1", "2", "3", "...", "10", "Next"].map((item, idx) =>
                      item === "..." ? (
                        <li key={item}>
                          <span className="flex items-center justify-center px-3 h-8 leading-tight text-text-light-secondary bg-surface-light border border-border-light dark:bg-surface-dark dark:border-border-dark dark:text-text-dark-secondary">
                            ...
                          </span>
                        </li>
                      ) : (
                        <li key={item}>
                          <a
                            className={`flex items-center justify-center px-3 h-8 leading-tight border ${
                              item === "2"
                                ? "text-primary bg-primary/20 border-primary hover:bg-primary/30 hover:text-blue-700 dark:border-border-dark dark:bg-gray-700 dark:text-white"
                                : "text-text-light-secondary bg-surface-light border-border-light hover:bg-background-light hover:text-text-light-primary dark:bg-surface-dark dark:border-border-dark dark:text-text-dark-secondary dark:hover:bg-background-dark dark:hover:text-white"
                            } ${idx === 0 ? "ms-0 rounded-l-lg" : ""} ${idx === 6 ? "rounded-r-lg" : ""}`}
                            href="#"
                          >
                            {item}
                          </a>
                        </li>
                      )
                    )}
                  </ul>
                </nav>
              </div>
            </main>
          </div>
        </div>
      </main>
      <footer className="bg-surface-light dark:bg-surface-dark border-t border-border-light dark:border-border-dark">
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
          <div className="sm:flex sm:items-center sm:justify-between">
            <div className="flex justify-center text-text-light-primary dark:text-text-dark-primary sm:justify-start">
              <div className="flex items-center gap-2">
                <div className="size-5 text-primary">
                  <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M36.7273 44C33.9891 44 31.6043 39.8386 30.3636 33.69C29.123 39.8386 26.7382 44 24 44C21.2618 44 18.877 39.8386 17.6364 33.69C16.3957 39.8386 14.0109 44 11.2727 44C7.25611 44 4 35.0457 4 24C4 12.9543 7.25611 4 11.2727 4C14.0109 4 16.3957 8.16144 17.6364 14.31C18.877 8.16144 21.2618 4 24 4C26.7382 4 29.123 8.16144 30.3636 14.31C31.6043 8.16144 33.9891 4 36.7273 4C40.7439 4 44 12.9543 44 24C44 35.0457 40.7439 44 36.7273 44Z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
                <span className="font-bold">Ismailia Careers</span>
              </div>
            </div>
            <p className="mt-4 text-center text-sm text-text-light-secondary dark:text-text-dark-secondary lg:mt-0 lg:text-right">
              © 2024 Ismailia Careers. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

