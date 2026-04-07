import Link from "next/link";
import Image from "next/image";
import { ArrowLeft } from "@phosphor-icons/react/dist/ssr";

export default function NotFound() {
  return (
    <div className="flex min-h-[100dvh] flex-col items-center justify-center px-4">
      <Image
        src="/images/logo.png"
        alt="Jan Chmielewski"
        width={80}
        height={80}
        className="mb-8 opacity-40"
      />

      <p className="text-label mb-4">Błąd 404</p>

      <h1 className="text-display-sm mb-4 text-center text-4xl md:text-5xl">
        Strona nie znaleziona
      </h1>

      <p className="mb-8 max-w-md text-center text-muted-foreground">
        Przepraszam, ale strona której szukasz nie istnieje lub została
        przeniesiona.
      </p>

      <Link
        href="/"
        className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 font-medium text-primary-foreground transition-transform hover:scale-[1.02] active:scale-[0.98]"
      >
        <ArrowLeft size={20} weight="bold" />
        Wróć na stronę główną
      </Link>
    </div>
  );
}
