import Link from "next/link";
import { type ReactNode } from "react";

interface CardSideBarProps {
  name: string;
  iconOff: ReactNode;
  iconOn: ReactNode;
  nav: string;
  isActive: boolean;
}

export default function CardSideBar({
  name,
  iconOff,
  iconOn,
  nav,
  isActive,
}: CardSideBarProps) {
  return (
    <Link href={nav}>
      <div>
        <button
          className={`flex h-14 w-full flex-row items-center justify-start rounded-2xl pl-3 ${
            isActive
              ? "shadow-lg bg-white text-main"
              : "shadow-white/30  shadow-md"
          }`}
        >
          {isActive ? (
            <div className="h-max w-max items-center justify-center rounded-xl bg-main p-1">
              {iconOn}
            </div>
          ) : (
            <div>{iconOff}</div>
          )}

          <p className="ml-4 text-sm font-semibold">{name}</p>
        </button>
      </div>
    </Link>
  );
}
