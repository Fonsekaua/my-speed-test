import TrocarTema from "@/src/views/teste01";
import GaleriaImagens from "@/src/views/teste02";
import ContadorHistorico from "@/src/views/teste03";
import BuscarCEP from "@/src/views/teste04";
import Adivinhe from "@/src/views/teste05";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex gap-10 *:bg-zinc-900 *:p-10 *:text-white *:rounded-lg">

      <Link href={'/teste01'}>
        teste01
      </Link>
      <Link href={'/teste02'}>
        teste02
      </Link>
      <Link href={'/teste03'}>
        teste03
      </Link>
      <Link href={'/teste04'}>
        teste04
      </Link>
      <Link href={'/teste05'}>
        teste05
      </Link>
        <Link href={'/teste06'}>
        teste06
      </Link>
    </div>
  );
}
