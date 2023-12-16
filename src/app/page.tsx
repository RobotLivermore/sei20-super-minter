import Minter from "@/components/Minter";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center space-x-48 p-24">
      <div className="flex flex-col">
        <h1 className="text-4xl font-bold">欢迎加入科学家的队伍</h1>
        <p className="text-xs mt-2 text-gray-400">进群免费领工具</p>
        <Image src="/shareQrcode.jpeg" width={360} alt="" height={400} />
      </div>
      <Minter />
    </main>
  );
}
