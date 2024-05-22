import SideBar from "@/components/SideBar";
import CardInput from "@/components/CardInput";
import Image from "next/image";

export default function Inspiration() {
  return (
    <main className="flex flex-row min-h-screen items-start justify-start bg-gradient-to-bl from-blue-500 to-blue-950">
      <div className="flex w-fit">
        <SideBar />
      </div>
      <CardInput
        title="Inspiração de TCC"
        description="Adicione aqui o trecho do seu TCC para fornecermos inspirações e orientação para torná-lo mais impactante e significativo."
      />
    </main>
  );
}
