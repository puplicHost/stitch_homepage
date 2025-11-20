import Image from "next/image";
import Link from "next/link";

export default function AuthPage() {
  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col bg-background-light dark:bg-background-dark group/design-root overflow-x-hidden">
      <div className="layout-container flex h-full grow flex-col">
        <div className="flex flex-1 justify-center">
          <div className="layout-content-container flex flex-col w-full flex-1">
            <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen">
              <div
                className="relative hidden lg:flex flex-col items-center justify-center p-12 bg-center bg-no-repeat bg-cover text-white"
                style={{
                  backgroundImage:
                    'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBO6u9mkxlYAJd8Du3tHNCpXQUxbUrcVwSdPw8MBSWvLOCpGsXqVzS7LioCx8DqahVCw5pb5HrAohC6nJMI4CZ570NHaUNbyRSWyyPRWGAcpmIsvI9Q17bQ7WtaV3GeOoApHfDJEaQBsYCZBg_O4JcYypugoPHMq6jhcQryo-9fYxxVMXzxDkcCqGawwHQ03UJcD_Qxa8IUKnvyw45GYU4RuzO6ZLEfY5E-NnB_Xn2aN4VKZtDHO1ATEiwuRW_mmEm052x6q955YHc")'
                }}
              >
                <div className="absolute inset-0 bg-primary/70 backdrop-blur-sm" />
                <div className="relative z-10 flex flex-col items-center text-center gap-6">
                  <div className="flex items-center gap-4 text-white">
                    <div className="w-12 h-12">
                      <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M36.7273 44C33.9891 44 31.6043 39.8386 30.3636 33.69C29.123 39.8386 26.7382 44 24 44C21.2618 44 18.877 39.8386 17.6364 33.69C16.3957 39.8386 14.0109 44 11.2727 44C7.25611 44 4 35.0457 4 24C4 12.9543 7.25611 4 11.2727 4C14.0109 4 16.3957 8.16144 17.6364 14.31C18.877 8.16144 21.2618 4 24 4C26.7382 4 29.123 8.16144 30.3636 14.31C31.6043 8.16144 33.9891 4 36.7273 4C40.7439 4 44 12.9543 44 24C44 35.0457 40.7439 44 36.7273 44Z"
                          fill="currentColor"
                        />
                      </svg>
                    </div>
                    <h2 className="text-white text-3xl font-bold leading-tight tracking-[-0.015em]">Ismailia Careers</h2>
                  </div>
                  <h1 className="text-white text-5xl font-black leading-tight tracking-[-0.033em]">
                    Your Gateway to Opportunity in Ismailia.
                  </h1>
                </div>
              </div>
              <div className="flex flex-col justify-center items-center w-full bg-white dark:bg-background-dark p-6 sm:p-12">
                <div className="w-full max-w-md" id="account">
                  <nav className="mb-6 flex flex-wrap items-center justify-center gap-4 text-xs font-semibold uppercase tracking-wide text-neutral-text/60 dark:text-white/60">
                    {[
                      { label: "Home", href: "/" },
                      { label: "Jobs", href: "/search#jobs" },
                      { label: "Courses", href: "/search#courses" },
                      { label: "Companies", href: "/dashboard" },
                      { label: "Providers", href: "/courses" }
                    ].map((item) => (
                      <Link key={item.label} className="hover:text-primary" href={item.href}>
                        {item.label}
                      </Link>
                    ))}
                  </nav>
                  <header className="flex lg:hidden items-center justify-center gap-4 text-neutral-text dark:text-white mb-8">
                    <div className="w-8 h-8">
                      <svg className="text-primary" fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M36.7273 44C33.9891 44 31.6043 39.8386 30.3636 33.69C29.123 39.8386 26.7382 44 24 44C21.2618 44 18.877 39.8386 17.6364 33.69C16.3957 39.8386 14.0109 44 11.2727 44C7.25611 44 4 35.0457 4 24C4 12.9543 7.25611 4 11.2727 4C14.0109 4 16.3957 8.16144 17.6364 14.31C18.877 8.16144 21.2618 4 24 4C26.7382 4 29.123 8.16144 30.3636 14.31C31.6043 8.16144 33.9891 4 36.7273 4C40.7439 4 44 12.9543 44 24C44 35.0457 40.7439 44 36.7273 44Z"
                          fill="currentColor"
                        />
                      </svg>
                    </div>
                    <h2 className="text-neutral-text dark:text-white text-lg font-bold leading-tight tracking-[-0.015em]">Ismailia Careers</h2>
                  </header>
                  <div className="pb-3">
                    <div className="flex border-b border-neutral-border/50 dark:border-white/20 gap-8">
                      {[
                        { label: "Login", target: "login" },
                        { label: "Register", target: "register" },
                        { label: "Forgot Password", target: "forgot" }
                      ].map((tab, idx) => (
                        <a
                          key={tab.target}
                          className={`flex flex-col items-center justify-center border-b-[3px] pb-[13px] pt-4 ${
                            idx === 0
                              ? "border-b-primary text-primary"
                              : "border-b-transparent text-neutral-text/60 dark:text-white/60 hover:text-primary dark:hover:text-primary"
                          }`}
                          href={`#${tab.target}`}
                        >
                          <p className="text-sm font-bold leading-normal tracking-[0.015em]">{tab.label}</p>
                        </a>
                      ))}
                    </div>
                  </div>
                  <div className="py-8 flex flex-col gap-6" aria-labelledby="login" id="login">
                    <div className="flex flex-col gap-4">
                      <label className="flex flex-col w-full">
                        <p className="text-neutral-text dark:text-white/90 text-base font-medium leading-normal pb-2">Email Address</p>
                        <input
                          className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-neutral-text dark:text-white focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-neutral-border dark:border-white/30 bg-white dark:bg-background-dark/50 h-14 placeholder:text-neutral-text/50 dark:placeholder:text-white/50 p-[15px] text-base font-normal leading-normal"
                          placeholder="Enter your email"
                          defaultValue=""
                          type="email"
                        />
                      </label>
                      <label className="flex flex-col w-full">
                        <div className="flex justify-between items-baseline pb-2">
                          <p className="text-neutral-text dark:text-white/90 text-base font-medium leading-normal">Password</p>
                          <a className="text-sm font-medium text-primary hover:underline" href="#forgot">
                            Forgot Password?
                          </a>
                        </div>
                        <div className="flex w-full flex-1 items-stretch rounded-lg">
                          <input
                            className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-neutral-text dark:text-white focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-neutral-border dark:border-white/30 bg-white dark:bg-background-dark/50 h-14 placeholder:text-neutral-text/50 dark:placeholder:text-white/50 p-[15px] text-base font-normal leading-normal"
                            placeholder="Enter your password"
                            type="password"
                          />
                        </div>
                      </label>
                    </div>
                    <button className="flex min-w-[84px] w-full cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-5 bg-primary text-white text-base font-bold leading-normal tracking-[0.015em] hover:bg-primary/90 transition-colors">
                      <span className="truncate">Sign In</span>
                    </button>
                    <div className="flex items-center gap-4">
                      <hr className="flex-grow border-t border-neutral-border/50 dark:border-white/20" />
                      <span className="text-neutral-text/60 dark:text-white/60 text-sm">or</span>
                      <hr className="flex-grow border-t border-neutral-border/50 dark:border-white/20" />
                    </div>
                    <div className="flex flex-col sm:flex-row gap-4">
                      {["Google", "LinkedIn"].map((provider) => (
                        <button
                          key={provider}
                          className="flex flex-1 items-center justify-center gap-2 h-12 px-5 rounded-lg border border-neutral-border dark:border-white/30 bg-white dark:bg-transparent text-neutral-text dark:text-white text-sm font-medium hover:bg-gray-50 dark:hover:bg-white/10 transition-colors"
                        >
                          <Image
                            alt={`${provider} logo`}
                            width={20}
                            height={20}
                            src={
                              provider === "Google"
                                ? "https://lh3.googleusercontent.com/aida-public/AB6AXuAJUsB5YRpDCR-e1d15_ABs598n_7ax7BsoKh_7da7h3MGvPwrVhrqGFqzQOO0w0Iv1QBJGB64kxObHSX38tjOPSX9GSlSTft8s2Ss_9w8LxESibzODYySew079QG6wTcPv3I96zoTySC_28gafWOXajaKFbZQbTIQcWXHey3anpUrggBobQ1ghS2cccnrEVbqapZnIEkVbyen3nDx_tfTpF3FqbQKqEvD6djAcDLtWC-MnO8BS2JQzIY_cFBD9EzBJmJd9iCa13bo"
                                : "https://lh3.googleusercontent.com/aida-public/AB6AXuCP76t-ABU3oyqAcw0eNkTX8GaWzLLnPfq_0ZiAyfQe_fA8-5Ib1NwUdilNc9wzYiy33AzUEGNwdFV0CQ5EGHKermzDwuGANUiAE64QekRheupiNXFRvxJc5mH98MOvZeoe58enDT9F5DkwE9TO61rQzMHzxgbqkFV7PUSgJjrErGOt-wNlU7UlYEjE3m3fxFMoVW9BiSd8oaV_6c7zrQJXis5SbRegPhPrdbEl50ulHSCaDQyoiLbRnI_T1IAwmhjCFuins7itJ_Q"
                            }
                          />
                          <span>Sign in with {provider}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                  <div id="register" className="sr-only" />
                  <div id="forgot" className="sr-only" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

