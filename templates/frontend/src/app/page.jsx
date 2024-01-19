import Link from "next/link";

export default function Home() {
  return (
    <main className="flex h-[calc(100vh-64px)] flex-col items-center justify-center">
      <p>Welcome to 3np Stack</p>
      <Link
        href={"https://nextjs.org/docs/"}
        target="_blank"
        className="bg-gray-700 text-white px-8 py-3 rounded-lg hover:bg-gray-900 cursor-pointer transition mt-2"
      >
        Get Started
      </Link>
      <br />
      <p>
        Created by
        <Link
          href={"https://github.com/NH-Shohan"}
          target="_blank"
          className="text-blue-600"
        >
          {" "}
          Nahim Hossain Sohan
        </Link>
      </p>
    </main>
  );
}
