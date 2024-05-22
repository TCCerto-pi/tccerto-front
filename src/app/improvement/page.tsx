import SideBar from "@/components/SideBar";
import CardInput from "@/components/CardInput";

export default function Improvement() {
  return (
    <main className="flex flex-row min-h-screen items-start justify-start bg-gradient-to-bl from-blue-500 to-blue-950">
      <div className="flex w-fit">
        <SideBar />
      </div>
      <CardInput
        title="Melhora de escrita"
        description="Digite seu texto aqui para receber melhorias e refinamentos na escrita."
      />
    </main>
  );
}
