import Link from "next/link";

const courseCards = [
  {
    title: "Advanced Digital Marketing",
    status: "Active",
    statusColor: "text-green-600 dark:text-green-400",
    enrolled: "25/40",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBY1u91kcr9EgE9HV_LUiZRuL9oGhbYrisBJv28v-2qMDzVY6JRSjoM-xJVDhczfc_Jhf8nZXrtxNmG-AbEbyJSRJO_tFNdi2SkVe6y3NfKLPOBhSBnDO5zs57bkUCUOakiNWXK9wDhl2fr1-zl6mBjFHw4dePNEOlOOl-HFt7QRf06K8FJZkJNaQJOoj_dnEfTHX53s7nyIExUVlKDOFlujWLo3plG2JM5r-FLjD4n9PqTnHcBEas4RM0fOWcaM5dAVy8qBxO2l60"
  },
  {
    title: "Project Management Fundamentals",
    status: "Active",
    statusColor: "text-green-600 dark:text-green-400",
    enrolled: "38/40",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDEvXOgUCbeal5HzkyZXD5DphtR7tiX6v9IDVmCmEXHT2sSxkONiHHKGxYO0wxZDEvHNr4-NT21M6ThtQkbzMYyNGD8hAYkgVO3oG_TfgCjP0uhST1FvOTEH746khWSNw8tisTSe4Ayzkxe-Wd1vAfJXJ6trT0YyXkxIG5B6g3jpsOquGjGs8ygI4G9EBREuU8FmoAj302L8lWBIwhHTuacIyz5CFAXvJqca7h51s5S6gDdcD6pzJDe6pUFIWNM_l-rLvw9J14WrvE"
  },
  {
    title: "Graphic Design for Beginners",
    status: "Inactive",
    statusColor: "text-red-600 dark:text-red-400",
    enrolled: "12/30",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDolu8AdDFqpEjfiv6x9oFkrJV9lZQp3TEmyYy7xhxTux32LFpj9zsSkxIijWNVx6ditXOQluD1v9IZxwnp_zCaXITZofEgPBS369qtfGmZw-iVGSMhysR2Cs8Rlfb6Pt5wKb8UIT4p34o8nAbI-YNypk8BhEoABwmsnx-t_x4GBGiT_ZLfVNgBWk1IXiE8TZZ21LdI3UA-cNrutK_-N7P0YyDkuAaMwdvgWSXlha8Lsy2nmhxxNtwGlL6_0KwCcgx4zz4LNwWEIvc"
  }
];

export default function CourseProviderDashboard() {
  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col">
      <div className="flex h-full min-h-screen">
        <aside className="flex h-screen min-h-full w-64 flex-col justify-between border-r border-gray-200 bg-white p-4 dark:border-gray-800 dark:bg-background-dark">
          <div className="flex flex-col gap-8">
            <Link className="flex items-center gap-3 px-3 hover:opacity-90" href="/">
              <div className="flex size-10 items-center justify-center rounded-lg bg-primary/20 text-primary">
                <span className="material-symbols-outlined">school</span>
              </div>
              <h1 className="text-base font-bold leading-normal text-[#111418] dark:text-white">Ismailia Careers</h1>
            </Link>
            <div className="flex flex-col gap-1">
              <Link
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800"
                href="/"
              >
                <span className="material-symbols-outlined text-base">dashboard</span>
                <p className="text-sm font-medium leading-normal">Dashboard</p>
              </Link>
              <Link className="flex items-center gap-3 rounded-lg bg-primary/20 px-3 py-2 text-primary" href="/courses">
                <span className="material-symbols-outlined" style={{ fontVariationSettings: '"FILL" 1' }}>
                  book
                </span>
                <p className="text-sm font-bold leading-normal">My Courses</p>
              </Link>
              <Link
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800"
                href="/search#courses"
              >
                <span className="material-symbols-outlined">add_circle</span>
                <p className="text-sm font-medium leading-normal">Post New Course</p>
              </Link>
              <Link
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800"
                href="/dashboard"
              >
                <span className="material-symbols-outlined">bar_chart</span>
                <p className="text-sm font-medium leading-normal">Analytics</p>
              </Link>
              <Link
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800"
                href="/login#account"
              >
                <span className="material-symbols-outlined">settings</span>
                <p className="text-sm font-medium leading-normal">Settings</p>
              </Link>
            </div>
          </div>
          <div className="flex flex-col gap-1 border-t border-gray-200 pt-4 dark:border-gray-800">
            <Link
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800"
              href="/login#login"
            >
              <span className="material-symbols-outlined">logout</span>
              <p className="text-sm font-medium leading-normal">Log Out</p>
            </Link>
          </div>
        </aside>
        <div className="flex flex-1 flex-col">
          <header className="flex items-center justify-between whitespace-nowrap border-b border-gray-200 bg-white px-10 py-3 dark:border-gray-800 dark:bg-background-dark">
            <label className="relative flex h-10 w-full max-w-sm items-center">
              <span className="material-symbols-outlined absolute left-3 text-gray-500 dark:text-gray-400">search</span>
              <input
                className="form-input h-full w-full rounded-lg border-gray-300 bg-background-light pl-10 text-sm text-[#111418] placeholder:text-gray-500 focus:border-primary focus:ring-primary dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200 dark:placeholder:text-gray-400 dark:focus:border-primary"
                placeholder="Search courses, participants..."
                type="text"
              />
            </label>
            <div className="flex flex-1 items-center justify-end gap-4">
              <div className="flex gap-2">
                {["notifications", "help"].map((icon) => (
                  <button
                    key={icon}
                    className="flex h-10 w-10 cursor-pointer items-center justify-center overflow-hidden rounded-full bg-background-light text-gray-600 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700"
                  >
                    <span className="material-symbols-outlined text-base">{icon}</span>
                  </button>
                ))}
              </div>
              <div
                className="aspect-square size-10 rounded-full bg-cover bg-center bg-no-repeat"
                data-alt="User avatar image"
                style={{
                  backgroundImage:
                    'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCJFQaAGqRr9ZFjkmPb-teEtT1p6hJoQEEMfAkVWh7Wqu_shwyWhmDzsq8SuKVWCxgKBMImeX-0DNc7O7TqO9uxfnKLEPygWofg--oUOoFZi6sHwwjtOTkVmv3jQZoT9C1aLqtJLj5W1C_zQuqCWUzxWGC4ZEN38cf-5l86H0ZrF_QVL7x7H4egJOnWlv41WLQuxw9AunK6i2UlN6ceQd9o0h0Mjn7_8m8UzRCqUwfjDyfS5ItUBEBrMdqNqLStE6nDYdDZkJ6OKTw")'
                }}
              />
            </div>
          </header>
          <main className="flex-1 overflow-y-auto p-10">
            <div className="mx-auto max-w-7xl">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div className="flex flex-col gap-1">
                  <p className="text-3xl font-bold tracking-tight text-[#111418] dark:text-white">Course Management</p>
                  <p className="text-base font-normal text-gray-500 dark:text-gray-400">Oversee, edit, and manage all your courses.</p>
                </div>
                <button className="flex min-w-[84px] cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-lg bg-primary px-5 py-2.5 text-sm font-bold text-white shadow-sm transition-colors hover:bg-primary/90">
                  <span className="material-symbols-outlined text-base">add</span>
                  <span className="truncate">Post New Course</span>
                </button>
              </div>
              <div className="mt-8 pb-3">
                <div className="flex gap-8 border-b border-gray-200 dark:border-gray-700">
                  {["Active Courses", "Drafts", "Archived"].map((tab, idx) => (
                    <a
                      key={tab}
                      className={`flex flex-col items-center justify-center border-b-[3px] pb-[13px] pt-4 ${
                        idx === 0
                          ? "border-b-primary text-primary"
                          : "border-b-transparent text-gray-500 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200"
                      }`}
                      href="#"
                    >
                      <p className="text-sm font-bold">{tab}</p>
                    </a>
                  ))}
                </div>
              </div>
              <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {courseCards.map((course) => (
                  <div
                    key={course.title}
                    className="flex flex-col justify-between gap-4 rounded-xl border border-gray-200 bg-white p-4 shadow-sm transition-shadow hover:shadow-lg dark:border-gray-800 dark:bg-gray-900"
                  >
                    <div className="flex flex-col gap-4">
                      <div
                        className="aspect-video w-full rounded-lg bg-cover bg-center bg-no-repeat"
                        style={{ backgroundImage: `url("${course.image}")` }}
                      />
                      <div className="flex flex-col gap-1">
                        <div className="flex items-center gap-2">
                          <span className={`inline-block h-2 w-2 rounded-full ${course.status.startsWith("Active") ? "bg-green-500" : "bg-red-500"}`} />
                          <p className={`text-sm font-medium ${course.statusColor}`}>{course.status}</p>
                        </div>
                        <p className="text-base font-bold text-[#111418] dark:text-white">{course.title}</p>
                        <p className="text-sm font-normal text-gray-500 dark:text-gray-400">Enrolled: {course.enrolled}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <button className="flex flex-1 cursor-pointer items-center justify-center overflow-hidden rounded-lg bg-primary/10 px-4 py-2 text-sm font-medium text-primary transition-colors hover:bg-primary/20 dark:bg-primary/20 dark:hover:bg-primary/30">
                        <span className="truncate">Edit</span>
                      </button>
                      <button className="flex flex-1 cursor-pointer items-center justify-center overflow-hidden rounded-lg bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700">
                        <span className="truncate">View</span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}


