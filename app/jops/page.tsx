import Link from "next/link";

const applications = [
  {
    company: "Innovatech",
    title: "Frontend Developer",
    date: "2023-10-15",
    status: "Under Review",
    badge: "warning",
    logo:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuB3tYEj7WJh4FE_oTGsVCAm4cUFUE6-LCk2dDxIRgM4_a5TL7b0Y9-nY9MCh194MnSGgtEPVQz5NM-QFmO7FromzlK4IK-_EHfoFTBNYuJbVKlJMFVZ2eJiM4GByDMP1HOuQBHgX9FnDTfMqo96B2qvq9kaRbxmEnXDicG1l7zt7B53uOWDmYD3MFIh2VDYKLbdw9NxwXVsJD36Ie9G__rmhO3n7KNahug0bLXa7tMztWFs0HucPZw7qQ25CDJjIbMhO0jPv7TjuLk"
  },
  {
    company: "DataSolutions",
    title: "UX/UI Designer",
    date: "2023-10-12",
    status: "Interviewing",
    badge: "primary",
    logo:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDPux7TD6gfmdcgphaiW_QjbdzoDcrIw2k-em2KcKcL3FcF7vX3Rl_RpBDBArlZ3TiJvMOXsixRKqIv-JN2u8XCK_uard7MQgzLQvUgUqDpm1SFPkckE3CtNG4ivr9bH8REUof5MulaqlCj-cj5QkNmrwfiJdh_ga-c4n7p6vb1SVgiYv1f4T6zUsZTMPuDtsLO54z4aVgqTHrpYAvoqpkf1fjnUjFWSaPAyQKpAufBi-C94c8pqKFJdOsLkx6G5QQuLrt34mZay9o"
  },
  {
    company: "NextGen PM",
    title: "Project Manager",
    date: "2023-10-10",
    status: "Offer",
    badge: "success",
    logo:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBbKCdgtAkpy0bJ10MBZ4OQmz1SIAlajbOzo4t9BAyGnE6FTuLQKjTYDas3ALi2o0HW2cxbqZvJgm-VyFbS0P95vqTCZXugpeMXSalp3X2325wOQZY4dc1DDkVk2240csnLav0vq4QQLP_4p5g3PGhEIA1Gr7K5u0A3NGo-dwqpydnySaDqY8LpLEJX_ttM6ZRI_JhmMYIUNoRjXkSh_oFBqipVEEVluXLPGzujDFQ28WgSdo3jUdttjp3pU3jdS4fl3Y_lmngEicc"
  },
  {
    company: "CodeCrafters",
    title: "Backend Engineer",
    date: "2023-10-08",
    status: "Rejected",
    badge: "danger",
    logo:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCNY6j1_LQUNjCRkSAHYvws1lm94Jfy3VOs6iwNHoEKMN_AEMPxUvdEQqppProYoZ0js6sg1odiN3VNk8yUO7YEUmNvz4uAHtx6MwPiQk-jrPXd5IGb4E74F22MMiJxseGzFAt4sPG0nea3ytl6rrsnPUcQYYhKLw27-aaq-PIGdMnEht8BGrPATTccNRAC7qrLPcTT6TIbLrcfCkuX7sT4EQbqOYYvwdZkZxgVb6EH-0RtqkKr3oiY_-GS4r5JsQR8QFzxPvtzx6Y"
  }
];

const badgeStyles: Record<string, string> = {
  warning: "bg-warning/20 text-yellow-800 dark:bg-warning/30 dark:text-yellow-200",
  primary: "bg-primary/20 text-blue-800 dark:bg-primary/30 dark:text-blue-200",
  success: "bg-success/20 text-green-800 dark:bg-success/30 dark:text-green-200",
  danger: "bg-danger/20 text-red-800 dark:bg-danger/30 dark:text-red-200"
};

export default function JobSeekerDashboard() {
  return (
    <div className="relative flex min-h-screen w-full bg-background-light dark:bg-background-dark">
      <aside className="flex h-screen w-64 flex-col border-r border-slate-200 dark:border-slate-800 bg-white dark:bg-background-dark fixed">
        <div className="flex h-full flex-col justify-between p-4">
          <div className="flex flex-col gap-8">
            <Link className="flex items-center gap-3 px-3 hover:opacity-90" href="/">
              <div
                className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10"
                style={{
                  backgroundImage:
                    'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAQ1TfcBwxVKpWVbOKO_EQx8QzUnH937CvdQtqUl4Dz_xZdC_hfsy9D--AypQttjoibHGkcZkvjdFCunOhtjHA3A-AFHh64LtxJ5e-uL4edlLW7rCEOogj0ttRVMJkhLLv8jGXr1wrsOX0sB2gBSO0GmRpQSRFE6c4Igfc6PpAV5Me7IlhEcPG6FPw1glbHTfHuMC_IMdI2aRA-G0cR1YO0PdNm7Xq9ZKybxcfKREAPAIYcA7PxYQcW956oZLNugUCcvla4pmLFFeQ")'
                }}
              />
              <div className="flex flex-col">
                <h1 className="text-slate-900 dark:text-white text-base font-bold leading-normal">Ismailia Careers</h1>
                <p className="text-slate-500 dark:text-slate-400 text-sm font-normal leading-normal">Job Seeker Portal</p>
              </div>
            </Link>
            <nav className="flex flex-col gap-2">
              <Link
                className="flex items-center gap-3 px-3 py-2 rounded-lg bg-primary/10 text-primary dark:bg-primary/20"
                href="/jops"
              >
                <span className="material-symbols-outlined">dashboard</span>
                <p className="text-sm font-bold leading-normal">Dashboard</p>
              </Link>
              <Link
                className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300"
                href="/search#jobs"
              >
                <span className="material-symbols-outlined">work</span>
                <p className="text-sm font-medium leading-normal">My Applications</p>
              </Link>
              <Link
                className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300"
                href="/search#courses"
              >
                <span className="material-symbols-outlined">school</span>
                <p className="text-sm font-medium leading-normal">My Courses</p>
              </Link>
              <Link
                className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300"
                href="/login#account"
              >
                <span className="material-symbols-outlined">settings</span>
                <p className="text-sm font-medium leading-normal">Profile Settings</p>
              </Link>
            </nav>
          </div>
          <div className="flex flex-col">
            <Link
              className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300"
              href="/login#login"
            >
              <span className="material-symbols-outlined">logout</span>
              <p className="text-sm font-medium leading-normal">Logout</p>
            </Link>
          </div>
        </div>
      </aside>
      <main className="flex flex-1 flex-col ml-64 mr-80 p-8">
        <header className="mb-8">
          <h1 className="text-slate-900 dark:text-white text-4xl font-black leading-tight tracking-[-0.033em]">
            Welcome back, Ahmed!
          </h1>
        </header>
        <div className="flex flex-col gap-6">
          <div className="w-full">
            <div className="flex border-b border-slate-200 dark:border-slate-700 gap-8">
              <a className="flex flex-col items-center justify-center border-b-[3px] border-b-primary text-primary pb-[13px] pt-4" href="#">
                <p className="text-sm font-bold leading-normal tracking-[0.015em]">Applied Jobs</p>
              </a>
              <a
                className="flex flex-col items-center justify-center border-b-[3px] border-b-transparent text-slate-500 dark:text-slate-400 pb-[13px] pt-4 hover:text-slate-700 dark:hover:text-slate-200"
                href="#"
              >
                <p className="text-sm font-bold leading-normal tracking-[0.015em]">Enrolled Courses</p>
              </a>
            </div>
          </div>
          <div className="w-full">
            <div className="overflow-hidden rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/50">
              <table className="w-full">
                <thead>
                  <tr className="bg-slate-50 dark:bg-slate-800/50">
                    {["Company", "Job Title", "Application Date", "Status"].map((heading) => (
                      <th
                        key={heading}
                        className="px-6 py-3 text-left text-xs font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider"
                      >
                        {heading}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
                  {applications.map((application) => (
                    <tr key={application.company}>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center gap-3">
                          <div
                            className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10"
                            style={{ backgroundImage: `url("${application.logo}")` }}
                          />
                          <span className="text-sm font-medium text-slate-900 dark:text-white">{application.company}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-800 dark:text-slate-200">
                        {application.title}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-500 dark:text-slate-400">
                        {application.date}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span
                          className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${badgeStyles[application.badge]}`}
                        >
                          {application.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>
      <aside className="fixed right-0 top-0 h-screen w-80 bg-white dark:bg-background-dark border-l border-slate-200 dark:border-slate-800 p-6">
        <div className="flex flex-col items-center gap-8">
          <div className="flex flex-col gap-4 items-center w-full">
            <div
              className="bg-center bg-no-repeat aspect-square bg-cover rounded-full h-32 w-32"
              style={{
                backgroundImage:
                  'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBIuLppqD9FHAvcuMjyy7yIOVK8gICA__Z7ump62Kcex4_r2ktqm29HB5AaLxrfA1lIWOaVHgxyyE0gEy9yjHDosL26QWZULpaeLv9opPAsgPvXY4aYEchcErylCGAKP4TcQUfhn2nl84TqFf4U4qBZY4Agy_6HztRsDEzlgx-YFMDaswm2RIf_HlaN0lnqhHg_WpxqhGogN6-9LoK0aK5EyuCb8fR0fLwHXLpPiZO6cjuNLnQkws3hTB8XRj1t7CMH6C5bq4P1b3o")'
              }}
            />
            <div className="flex flex-col items-center justify-center">
              <p className="text-slate-900 dark:text-white text-xl font-bold leading-tight">Ahmed Hassan</p>
              <p className="text-slate-500 dark:text-slate-400 text-base font-normal leading-normal">Software Engineer</p>
            </div>
            <div className="flex w-full gap-3">
              <button className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white text-sm font-bold leading-normal tracking-[0.015em] flex-1 hover:bg-slate-200 dark:hover:bg-slate-700">
                <span className="truncate">Edit Profile</span>
              </button>
              <button className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary text-white text-sm font-bold leading-normal tracking-[0.015em] flex-1 hover:bg-primary/90">
                <span className="truncate">View Resume</span>
              </button>
            </div>
          </div>
          <div className="w-full rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50 p-6 flex flex-col items-center gap-4">
            <div className="relative size-32">
              <svg className="size-full" viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg">
                <circle className="stroke-current text-slate-200 dark:text-slate-700" cx="18" cy="18" fill="none" r="16" strokeWidth="3" />
                <circle
                  className="stroke-current text-primary"
                  cx="18"
                  cy="18"
                  fill="none"
                  r="16"
                  strokeDasharray="100"
                  strokeDashoffset="25"
                  strokeLinecap="round"
                  strokeWidth="3"
                  transform="rotate(-90 18 18)"
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-3xl font-bold text-slate-900 dark:text-white">75%</span>
              </div>
            </div>
            <div className="text-center">
              <p className="text-lg font-semibold text-slate-900 dark:text-white">Profile Completion</p>
              <p className="text-sm text-slate-500 dark:text-slate-400">Complete your profile to stand out to recruiters.</p>
            </div>
            <button className="w-full flex cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary text-white text-sm font-bold leading-normal tracking-[0.015em] hover:bg-primary/90">
              <span>Complete Profile</span>
            </button>
          </div>
        </div>
      </aside>
    </div>
  );
}


