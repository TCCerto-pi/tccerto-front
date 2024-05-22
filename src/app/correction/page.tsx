"use client";
import SideBar from "@/components/SideBar";
import CardInput from "@/components/CardInput";

export default function Correction() {
  return (
    <main className="flex flex-row min-h-screen w-full items-start justify-start bg-gradient-to-bl from-blue-500 to-blue-950">
      <div className="flex">
        <SideBar />
      </div>
      <CardInput
        title="Correção de textos"
        description="Adicione aqui o trecho do seu TCC que deseja fazer a correção!"
      />
    </main>
  );
}
