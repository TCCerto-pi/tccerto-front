"use client";
import Image from "next/image";
import { ChangeEventHandler } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowSquareUp } from "iconsax-react";

interface Props {
  title: string;
  description: string;
}

const schema = z.object({
  text: z.string(),
});

type FormData = z.infer<typeof schema>;

export default function CardInput({ title, description }: Props) {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  function onSubmit(data: FormData) {
    console.log(data);
    reset();
  }

  return (
    <div className="flex flex-col w-full items-center justify-center mt-24">
      <Image src={"/logoWhite.svg"} alt="Logo azul" width={180} height={180} />
      <div className="flex flex-col w-3/6 h-/4 shadow-lg shadow-main items-center justify-center rounded-xl mt-14 bg-white/10">
        <div className="font-extrabold text-white text-4xl mt-9 items-center justify-center flex w-full">
          {title}
        </div>
        <div className="font-medium text-white text-xl mt-8 w-2/3 text-center flex ">
          {description}
        </div>
        <form className="flex w-full " onSubmit={handleSubmit(onSubmit)}>
          <div className="flex mt-16 mb-10 h-12 w-full text-black rounded-md bg-white mx-7 justify-between items-center">
            <input
              type="text"
              {...register("text")}
              className="flex rounded-md outline-none px-4 w-full"
              placeholder="Dígite seu texto aqui"
            ></input>
            <button type="submit">
              <ArrowSquareUp
                size={32}
                color="#4965BF"
                variant="Bulk"
                className="mr-4"
              />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
