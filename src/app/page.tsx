import Minter from "@/components/Minter";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center space-x-48 p-24">
      <div className="flex flex-col">
        <h1 className="text-4xl font-bold">欢迎加入科学家的队伍</h1>
        <p className="text-xs mt-2 text-gray-400">进群免费领工具</p>
        <Image src="/shareQrcode.jpeg" width={360} alt="" height={400} />
        <Link href={`https://twitter.com/LewisLLL1`} target="_blank" className="flex items-center justify-center">
          <svg
            className="w-4 h-4 mr-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              fill="currentColor"
              d="M12.186 8.672 18.743.947h-2.927l-5.005 5.9-4.44-5.9H0l7.434 9.876-6.986 8.23h2.927l5.434-6.4 4.82 6.4H20L12.186 8.672Zm-2.267 2.671L8.544 9.515 3.2 2.42h2.2l4.312 5.719 1.375 1.828 5.731 7.613h-2.2l-4.699-6.237Z"
            />
          </svg>
          <span className="underline">关注科学家</span>
        </Link>
      </div>
      <Minter />
    </main>
  );
}
