"use client";
import SideBar from "@/components/SideBar";
import CardInput from "@/components/CardInput";
export default function Coherence() {
  return (
    <main className="flex flex-row min-h-screen w-full items-start justify-start bg-gradient-to-bl from-blue-500 to-blue-950">
      <div className="flex">
        <SideBar />
      </div>
      <CardInput
        title="Coerência de TCC"
        description="Adicione aqui seu TCC para varificar se ele está com uma boa coerência!"
      />
    </main>
  );
}
