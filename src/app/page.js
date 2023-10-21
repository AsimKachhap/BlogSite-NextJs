import Sidebar from "@/components/Sidebar";
import Image from "next/image";

export default function Home() {
  return (
    <main className=" px-16 py-4 flex items-start justify-between">
      <div>
        <Sidebar />
      </div>
      <div>Main Area</div>
    </main>
  );
}
