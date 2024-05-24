import Link from "next/link";
import Image from "next/image";

export const HeaderLogo = () => {
  return (
    <Link href="/">
      <div className="items-center hidden lg:flex">
        <Image src="/logo.svg" alt="Logo" height={28} width={28} />
        <p className="font-semibold text-white text-2xl ml-2.5">
          Finance SaaS Platform
        </p>
      </div>
    </Link>
  );
};
