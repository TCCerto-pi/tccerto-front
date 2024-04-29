import SideBar from "@/components/SideBar";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-start justify-start bg-white">
      <SideBar />
    </main>
  );
}
