import Image from "next/image";

interface Props {
  title: string;
  description: string;
}

export default function CardInput({ title, description }: Props) {
  return (
    <div className="flex flex-col w-full items-center justify-center mt-24">
      <Image src={"/logoBlue.svg"} alt="Logo azul" width={180} height={180} />
      <div className="flex flex-col w-2/6 h-2/4 shadow-lg shadow-main items-center justify-center rounded-xl mt-14">
        <div className="font-bold text-main text-4xl mt-9 items-center justify-center flex w-full">
          {title}
        </div>
        <div className="font-normal text-black text-xl mt-5 w-2/3 text-center flex ">
          {description}
        </div>
        <div className="flex w-full px-7">
          <input
            className="flex font-bl mt-24 shadow-md shadow-black/35 mb-6 h-12 w-full text-black px-2 rounded-md outline-none"
            placeholder="Dígite seu texto aqui"
          ></input>
        </div>
      </div>
    </div>
  );
}
