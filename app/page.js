import Image from "next/image";
import Content from "./components/Content";

export default function Home() {
  return (
    <main className="flex flex-col items-center py-10">
      <Image src="/logo.png" alt="" width={250} height={50} />
      <p className="text-off-white">by Charmaine Eunice Rabano</p>
      <Content />
    </main>
  );
}
