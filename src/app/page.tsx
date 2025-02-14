function Logo(): React.ReactNode {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="60"
      height="30"
      fill="white"
      viewBox="0 0 30 15"
      className="fill-foreground"
    >
      <path
        fillRule="evenodd"
        d="M22.504 1.549a4.196 4.196 0 0 1 2.573-.887v.002a3.783 3.783 0 0 1 2.706 1.086 3.783 3.783 0 0 1 1.126 2.69 3.771 3.771 0 0 1-1.126 2.69 3.77 3.77 0 0 1-2.706 1.085l-4.794.011-2.533 3.467L8.203 15l2.881-3.335a9.829 9.829 0 0 1-4.663-1.68H3.185L0 7.163h3.934C4.263 3.165 8.187 0 12.96 0c2.24 0 4.489.696 6.175 1.909a7.423 7.423 0 0 1 1.882 1.919 4.194 4.194 0 0 1 1.487-2.28ZM7.05 3.249l3.91 3.915h1.505L7.89 2.584a7.773 7.773 0 0 0-.84.665Zm4.079-2.008 5.923 5.923h1.503l-6.086-6.087c-.45.023-.898.078-1.34.164ZM4.574 8.226h-1.77l.784.693h1.584a8.454 8.454 0 0 1-.598-.693Zm9.479 0H5.984c1.469 1.477 3.656 2.377 5.977 2.422l2.092-2.422Zm-2.458 4.472 5.492-1.902 1.878-2.569h-3.508l-3.862 4.47Zm10.361-5.552h3.265a2.714 2.714 0 0 0 1.747-4.648 2.711 2.711 0 0 0-1.888-.773 3.127 3.127 0 0 0-3.123 3.124v2.297Zm3.659-3.73a.677.677 0 1 1-.134 1.348.677.677 0 0 1 .134-1.348Z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Logo />
        <h1 className="text-4xl font-bold">Welcome!</h1>
        <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          <li className="mb-2">
            Get started by editing{" "}
            <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">
              src/app/report/page.tsx
            </code>
            .
          </li>
          <li>Everything is set up for you!</li>
        </ol>

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <a
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
            href="https://giskard.notion.site/fde-technical-test"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instructions
          </a>
          <a
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
            href="https://nextjs.org/docs"
            target="_blank"
            rel="noopener noreferrer"
          >
            NextJS docs
          </a>
        </div>
      </main>
    </div>
  );
}
