"use client";
import Link from "next/link";

import {
  Card,
  Category,
  ClipboardExport,
  ClipboardTick,
  Cup,
  Flash,
  Home2,
  LogoutCurve,
  Note,
  Personalcard,
  Rank,
  TagUser,
} from "iconsax-react";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import CardSideBar from "./CardSideBar";

export default function SideBar() {
  const cardSideBar = [
    {
      href: "/dashboard",
      icon1: <ClipboardTick size="20" color="main" variant="Bold" />,
      icon2: <ClipboardTick size="22" color="#FFFFFF" variant="Bold" />,
      label: "Início",
    },
    {
      href: "/personal",
      icon1: <ClipboardTick size="22" color="main" variant="Bold" />,
      icon2: <ClipboardTick size="22" color="#FFFFFF" variant="Bold" />,
      label: "Formatação ABNT",
    },
    {
      href: "/student",
      icon1: <ClipboardTick size="22" color="main" variant="Bold" />,
      icon2: <ClipboardTick size="22" color="#FFFFFF" variant="Bold" />,
      label: "Referências ABNT",
    },
    {
      href: "/exercises",
      icon1: <ClipboardTick size="22" color="main" variant="Bold" />,
      icon2: <ClipboardTick size="22" color="#FFFFFF" variant="Bold" />,
      label: "Correção de texto",
    },
    {
      href: "/categorias",
      icon1: <ClipboardTick size="22" color="main" variant="Bold" />,
      icon2: <ClipboardTick size="22" color="#FFFFFF" variant="Bold" />,
      label: "Melhora de escrita",
    },
    {
      href: "/payment",
      icon1: <ClipboardTick size="22" color="main" variant="Bold" />,
      icon2: <ClipboardTick size="22" color="#FFFFFF" variant="Bold" />,
      label: "Coerência de TCC",
    },
    {
      href: "/payment",
      icon1: <ClipboardTick size="22" color="main" variant="Bold" />,
      icon2: <ClipboardTick size="22" color="#FFFFFF" variant="Bold" />,
      label: "Inspiração de TCC",
    },
  ];

  return (
    <main className="flex flex-1 flex-row bg-main w-fit rounded-r-xl shadow-2xl shadow-main">
      <div className="flex h-full min-h-screen w-fit flex-col items-center justify-start rounded-xl px-8">
        <div className="">
          <Link href={"/dashboard"}>
            <Image
              src="logoWhite.svg"
              alt="Logo"
              width={100}
              height={96}
              className="mt-12 mb-16 flex"
            />
          </Link>
        </div>

        <div className="flex h-full w-72 flex-col xl:gap-3 2xl:gap-6">
          {cardSideBar.map((cardSideBarItem, index) => (
            <CardSideBar
              key={index}
              name={cardSideBarItem.label}
              iconOff={cardSideBarItem.icon1}
              iconOn={cardSideBarItem.icon2}
              nav={cardSideBarItem.href}
              isActive={cardSideBarItem.href}
            />
          ))}
        </div>
      </div>
    </main>
  );
}
