"use client";
import SideBar from "@/components/SideBar";
import Image from "next/image";

export default function Formatting() {
  return (
    <main className="flex flex-row min-h-screen items-start justify-start bg-gradient-to-bl from-blue-500 to-blue-950">
      <div className="flex w-fit">
        <SideBar />
      </div>

      <div className="flex w-full flex-col">
        <div className="flex justify-center items-center">
          <Image
            src={"/logoWhite.svg"}
            alt="Logo azul"
            width={180}
            height={180}
            className="flex justify-center items-center mt-16 2xl:mt-20 w-32"
          />
        </div>
        <div className="flex ml-24 flex-col">
          <h3 className="font-extrabold text-white text-3xl mt-16 flex 2xl:text-5xl">
            Formação ABNT
          </h3>
          <p className="font-semibold text-lg mt-3 2xl:text-2xl">
            Seu documento deve cumprir os seguintes itens listados abaixo:
          </p>
          <ul className="list-disc flex gap-y-3 font-normal text-base mt-7 flex-col 2xl:text-xl">
            <li>
              <span className="font-bold">Margem superior e esquerda:</span> 3
              centimetros;
            </li>
            <li>
              <span className="font-bold">Margem inferior e direira: </span>2
              centimetros;
            </li>
            <li>
              {" "}
              <span className="font-bold">Fonte: </span>
              Arial ou Times New Roman (tamanho 12)
            </li>
            <li>
              <span className="font-bold">Itálico: </span>
              usa-se em palavras e expressões de outros idiomas;
            </li>
            <li>
              <span className="font-bold">Espaçamento: </span>
              1,5 no texto e 1,0 para citações com mais de três linhas;
            </li>
            <li>
              <span className="font-bold">Alinhamento: </span>
              Justificado;
            </li>
            <li>
              <span className="font-bold">Sumário: </span>
              (NBR 6027);
            </li>
            <li>
              <span className="font-bold"> Paginação: </span>
              (NBR 14724);
            </li>
            <li>
              <span className="font-bold">Citações e Referências: </span>
              (NBR 6023 e NBR 10520);
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
}
