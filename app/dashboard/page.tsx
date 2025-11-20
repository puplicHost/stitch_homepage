import Link from "next/link";

const stepIndicators = ["Job Details", "Requirements", "Compensation", "Review"];

export default function CompanyDashboardPage() {
  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col group/design-root">
      <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-gray-200 dark:border-gray-700 px-10 py-3 bg-white dark:bg-background-dark sticky top-0 z-10">
        <div className="flex items-center gap-4 text-gray-900 dark:text-white">
          <div className="size-6 text-primary">
            <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M36.7273 44C33.9891 44 31.6043 39.8386 30.3636 33.69C29.123 39.8386 26.7382 44 24 44C21.2618 44 18.877 39.8386 17.6364 33.69C16.3957 39.8386 14.0109 44 11.2727 44C7.25611 44 4 35.0457 4 24C4 12.9543 7.25611 4 11.2727 4C14.0109 4 16.3957 8.16144 17.6364 14.31C18.877 8.16144 21.2618 4 24 4C26.7382 4 29.123 8.16144 30.3636 14.31C31.6043 8.16144 33.9891 4 36.7273 4C40.7439 4 44 12.9543 44 24C44 35.0457 40.7439 44 36.7273 44Z"
                fill="currentColor"
              />
            </svg>
          </div>
          <h2 className="text-gray-900 dark:text-white text-lg font-bold leading-tight tracking-[-0.015em]">Ismailia Careers</h2>
        </div>
        <div className="flex flex-1 justify-end gap-4 items-center">
          {["notifications", "settings"].map((icon) => (
            <button
              key={icon}
              className="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 w-10 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 text-sm font-bold"
            >
              <span className="material-symbols-outlined text-xl">{icon}</span>
            </button>
          ))}
          <div
            className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10"
            data-alt="User profile picture"
            style={{
              backgroundImage:
                'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBktbtkd2w8mjTj15dhh1HAA462wSpXb3NgG_kRb_etrtfHo8FLy1TCo51NQXBDehwrl6qcS0aq3fpPijsV9094ThGxQG8EtNTBpTYjE1WOCPtMqvoaPAr091LGO1ZdOJtmEaJo1Q6EGbSBpfIC1H8LdTOFRLC-JHxpTiPCQ9ySr0GkIrqiXfTEqzdNGbpIvLxWe84yw9aRc5wJ10cDm1z8bAOHispWbYiCTzNDqMldCl0bC7yBPInpP7-1oG5ykEO_hBoJ1UIaFB8")'
            }}
          />
        </div>
      </header>
      <div className="flex flex-1">
        <aside className="w-64 flex-shrink-0 bg-white dark:bg-background-dark border-r border-gray-200 dark:border-gray-700 p-4">
          <div className="flex h-full flex-col justify-between">
            <div className="flex flex-col gap-4">
              <Link className="flex gap-3 items-center hover:opacity-90" href="/">
                <div
                  className="bg-center bg-no-repeat aspect-square bg-cover rounded-lg size-10"
                  data-alt="Company logo for MegaCorp Inc."
                  style={{
                    backgroundImage:
                      'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCZCHQZ1Fm0i9NLBOX9sMCC4NiEFAaU2y__5LSIlm1INc-9EFyPCY_77Xgv5BQXpDxhyk9-kDwbyfO7z95aI_1AYN-FX7Ly1ATOX0bz7G7tGOY1BjghtYN8wHSNVXXBLO4_ET_Nn4eL302JA8TT8SUu_Zu86SSFdzue2nX19assCG-HkOmmmOgGSQgjZyA-KYMoYxkwMzwk6jXegGkRoLbeB2ml7hSYMGqwwV-HNYYjb4mj0X00-LSjr1jheSjgPicr_s7a9mlkcyo")'
                  }}
                />
                <div className="flex flex-col">
                  <h1 className="text-gray-900 dark:text-white text-base font-medium leading-normal">MegaCorp Inc.</h1>
                  <p className="text-gray-500 dark:text-gray-400 text-sm font-normal leading-normal">Welcome back!</p>
                </div>
              </Link>
              <div className="flex flex-col gap-2 mt-4">
                <Link
                  className="flex items-center gap-3 px-3 py-2 rounded-lg bg-primary/10 dark:bg-primary/20 text-primary dark:text-primary"
                  href="/dashboard"
                >
                  <span className="material-symbols-outlined">add_circle</span>
                  <p className="text-sm font-semibold leading-normal">Post a New Job</p>
                </Link>
                <Link
                  className="flex items-center gap-3 px-3 py-2 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                  href="/search#jobs"
                >
                  <span className="material-symbols-outlined">format_list_bulleted</span>
                  <p className="text-sm font-medium leading-normal">Manage Listings</p>
                </Link>
                <Link
                  className="flex items-center gap-3 px-3 py-2 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                  href="/jops"
                >
                  <span className="material-symbols-outlined">group</span>
                  <p className="text-sm font-medium leading-normal">Review Applications</p>
                </Link>
              </div>
            </div>
          </div>
        </aside>
        <main className="flex-1 p-6 md:p-10">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-wrap justify-between gap-3 mb-6">
              <p className="text-gray-900 dark:text-white text-4xl font-black leading-tight tracking-[-0.033em]">Post a New Job</p>
            </div>
            <div className="flex flex-col gap-3 mb-8">
              <div className="flex gap-6 justify-between">
                <p className="text-gray-900 dark:text-white text-base font-medium leading-normal">Step 1 of 4: Job Details</p>
              </div>
              <div className="rounded-full bg-gray-200 dark:bg-gray-700">
                <div className="h-2 rounded-full bg-primary" style={{ width: "25%" }} />
              </div>
            </div>
            <div className="bg-white dark:bg-background-dark rounded-xl border border-gray-200 dark:border-gray-700 p-8 space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col col-span-2">
                  <label className="flex flex-col min-w-40 flex-1">
                    <p className="text-gray-900 dark:text-white text-base font-medium leading-normal pb-2">Job Title</p>
                    <input
                      className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary/50 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 focus:border-primary dark:focus:border-primary h-14 placeholder:text-gray-500 dark:placeholder:text-gray-400 p-[15px] text-base font-normal leading-normal"
                      placeholder="e.g., Senior Product Manager"
                      defaultValue=""
                    />
                  </label>
                </div>
                <div className="flex flex-col">
                  <label className="flex flex-col min-w-40 flex-1">
                    <p className="text-gray-900 dark:text-white text-base font-medium leading-normal pb-2">Location</p>
                    <select className="form-select flex w/full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary/50 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 focus:border-primary dark:focus:border-primary h-14 pl-[15px] pr-10 text-base font-normal leading-normal">
                      {["Ismailia City", "Fayed", "Qantara", "Abu Suweir"].map((city) => (
                        <option key={city}>{city}</option>
                      ))}
                    </select>
                  </label>
                </div>
                <div className="flex flex-col">
                  <label className="flex flex-col min-w-40 flex-1">
                    <p className="text-gray-900 dark:text-white text-base font-medium leading-normal pb-2">Job Type</p>
                    <select className="form-select flex w/full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary/50 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 focus:border-primary dark:focus:border-primary h-14 pl-[15px] pr-10 text-base font-normal leading-normal">
                      {["Full-time", "Part-time", "Contract", "Internship"].map((type) => (
                        <option key={type}>{type}</option>
                      ))}
                    </select>
                  </label>
                </div>
              </div>
              <div className="flex flex-col">
                <label className="flex flex-col min-w-40 flex-1">
                  <p className="text-gray-900 dark:text-white text-base font-medium leading-normal pb-2">Salary Range (Optional)</p>
                  <div className="flex items-center gap-4">
                    <input
                      className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary/50 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 focus:border-primary dark:focus:border-primary h-14 placeholder:text-gray-500 dark:placeholder:text-gray-400 p-[15px] text-base font-normal leading-normal"
                      placeholder="Minimum"
                      defaultValue=""
                    />
                    <span className="text-gray-500 dark:text-gray-400">-</span>
                    <input
                      className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary/50 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 focus:border-primary dark:focus:border-primary h-14 placeholder:text-gray-500 dark:placeholder:text-gray-400 p-[15px] text-base font-normal leading-normal"
                      placeholder="Maximum"
                      defaultValue=""
                    />
                  </div>
                </label>
              </div>
              <div className="border-t border-gray-200 dark:border-gray-700 pt-8 flex justify-end gap-3">
                <button className="flex items-center justify-center rounded-lg h-12 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 px-6 text-base font-bold">
                  Save as Draft
                </button>
                <button className="flex items-center justify-center rounded-lg h-12 bg-primary text-white px-6 text-base font-bold">
                  Next Step
                </button>
              </div>
            </div>
            <div className="mt-8 grid grid-cols-2 gap-4">
              {stepIndicators.map((step, idx) => (
                <div
                  key={step}
                  className={`rounded-lg border p-4 ${
                    idx === 0 ? "border-primary bg-primary/5 text-primary" : "border-gray-200 dark:border-gray-700"
                  }`}
                >
                  <p className="text-sm font-medium">{`Step ${idx + 1}`}</p>
                  <p className="text-lg font-bold">{step}</p>
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}


