import SideBar from "@/components/SideBar";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-row min-h-screen items-start justify-start bg-white">
      <div className="flex w-fit">
        <SideBar />
      </div>
      <div className="flex flex-col w-full items-center justify-center mt-24">
        <Image src={"/logoBlue.svg"} alt="Logo azul" width={300} height={300} />
        <div className="font-medium text-3xl text-shadow-blue text-center mt-8">
          Navegue entre as sessões para ser <br /> auxiliado na escrita do seu
          TCC!
        </div>
        <Image
          src={"/book.svg"}
          alt="Caderno e lapis"
          width={500}
          height={400}
          className="mt-10 ml-8"
        />
      </div>
    </main>
  );
}
