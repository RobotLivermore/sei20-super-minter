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
        <div className="flex justify-center mb-2">
          <Link
            href={`https://twitter.com/InscriptionBot`}
            target="_blank"
            className="flex items-center justify-center"
          >
            <svg
              className="w-6 h-6 mr-2"
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
          </Link>
          <Link href={`https://t.me/+hYSsEN9xutMwZTRl`} className="w-6 h-6" target="_blank">
            <svg
              viewBox="0 0 16 16"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
            >
              <linearGradient
                id="a"
                x1="66.67%"
                x2="41.67%"
                y1="16.67%"
                y2="75%"
              >
                <stop offset="0" stop-color="#37aee2" />
                <stop offset="1" stop-color="#1e96c8" />
              </linearGradient>
              <linearGradient
                id="b"
                x1="65.97%"
                x2="85.12%"
                y1="43.69%"
                y2="80.24%"
              >
                <stop offset="0" stop-color="#eff7fc" />
                <stop offset="1" stop-color="#fff" />
              </linearGradient>
              <circle cx="8" cy="8" fill="url(#a)" r="8" />
              <path
                d="m6.53333333 11.6666667c-.25917333 0-.21513333-.09786-.30452-.3446334l-.76214666-2.50830663 5.86666663-3.48039334"
                fill="#c8daea"
              />
              <path
                d="m6.53333333 11.6666667c.2 0 .28836667-.0914667.4-.2l1.06666667-1.0372-1.33053333-.80233337"
                fill="#a9c9dd"
              />
              <path
                d="m6.66933333 9.62733333 3.224 2.38193337c.36789997.2029933.63342667.0978933.72506667-.3415667l1.3123333-6.1842c.13436-.53868-.20534-.783-.5572933-.62321333l-7.706 2.9714c-.52600667.21098-.52294.50444-.09588.6352l1.97753333.61722 4.57819997-2.88833334c.2161267-.13106.4144867-.06059933.25168.08389334"
                fill="url(#b)"
              />
            </svg>
          </Link>
        </div>
        <Link
          href={`https://github.com/BohengLiu/sei20-super-minter`}
          target="_blank"
          className="flex items-center justify-center"
        >
          <svg
            className="w-6 h-6 text-gray-800 mr-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z"
              clipRule="evenodd"
            />
          </svg>
          <span className="underline">开源安全可直接下载代码</span>
        </Link>
      </div>
      <Minter />
    </main>
  );
}
