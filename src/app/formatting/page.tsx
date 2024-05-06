import CardInput from "@/components/CardInput";
import SideBar from "@/components/SideBar";

export default function Formatting() {
  return (
    <main className="flex flex-row min-h-screen items-start justify-start bg-white">
      <div className="flex w-fit">
        <SideBar />
      </div>
      <CardInput
        title="Correção de textos"
        description="Adicione aqui o trecho do seu TCC que deseja fazer a correção!"
      />
    </main>
  );
}
