import CardInput from "@/components/CardInput";
import SideBar from "@/components/SideBar";

export default function References() {
  return (
    <main className="flex flex-row min-h-screen items-start justify-start bg-gradient-to-bl from-blue-500 to-blue-950">
      <div className="flex w-fit">
        <SideBar />
      </div>
      <CardInput
        title="Referência ABNT"
        description="Iremos fazer sua referencia de acordo com a NBR 6023.
         Informe os autores, ano, título, local de publicação, o link de onde tem disponível e quando você acessou o mesmo."
      />
    </main>
  );
}
