"use client";
import Link from "next/link";

import { ClipboardTick } from "iconsax-react";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import CardSideBar from "./CardSideBar";

export default function SideBar() {
  const pathname = usePathname();
  const cardSideBar = [
    {
      href: "/",
      icon1: <ClipboardTick size="20" color="#FFFFFF" variant="Bold" />,
      icon2: <ClipboardTick size="22" color="#FFFFFF" variant="Bold" />,
      label: "Início",
    },
    {
      href: "/formatting",
      icon1: <ClipboardTick size="22" color="#FFFFFF" variant="Bold" />,
      icon2: <ClipboardTick size="22" color="#FFFFFF" variant="Bold" />,
      label: "Formatação ABNT",
    },
    {
      href: "/references",
      icon1: <ClipboardTick size="22" color="#FFFFFF" variant="Bold" />,
      icon2: <ClipboardTick size="22" color="#FFFFFF" variant="Bold" />,
      label: "Referências ABNT",
    },
    {
      href: "/correction",
      icon1: <ClipboardTick size="22" color="#FFFFFF" variant="Bold" />,
      icon2: <ClipboardTick size="22" color="#FFFFFF" variant="Bold" />,
      label: "Correção de texto",
    },
    {
      href: "/improvement",
      icon1: <ClipboardTick size="22" color="#FFFFFF" variant="Bold" />,
      icon2: <ClipboardTick size="22" color="#FFFFFF" variant="Bold" />,
      label: "Melhora de escrita",
    },
    {
      href: "/coherence",
      icon1: <ClipboardTick size="22" color="#FFFFFF" variant="Bold" />,
      icon2: <ClipboardTick size="22" color="#FFFFFF" variant="Bold" />,
      label: "Coerência de TCC",
    },
    {
      href: "/inspiration",
      icon1: <ClipboardTick size="22" color="#FFFFFF" variant="Bold" />,
      icon2: <ClipboardTick size="22" color="#FFFFFF" variant="Bold" />,
      label: "Inspiração de TCC",
    },
  ];

  return (
    <main className="flex w-72 flex-col bg-main rounded-r-xl shadow-2xl">
      <div className="flex h-full w-full min-h-screen flex-col items-center justify-start rounded-xl px-8">
        <div className="">
          <Link href={"/dashboard"}>
            <Image
              src="logoWhite.svg"
              alt="Logo"
              width={100}
              height={96}
              className="mt-12 mb-12 flex"
            />
          </Link>
        </div>

        <div className="flex h-full w-full flex-col gap-y-4 ">
          {cardSideBar.map((cardSideBarItem, index) => (
            <CardSideBar
              key={index}
              name={cardSideBarItem.label}
              iconOff={cardSideBarItem.icon1}
              iconOn={cardSideBarItem.icon2}
              nav={cardSideBarItem.href}
              isActive={pathname === cardSideBarItem.href}
            />
          ))}
        </div>
      </div>
    </main>
  );
}
