import Mapsection from "@/components/Home/Mapsection";
import Searchsection from "@/components/Home/searchsection";
import { UserButton } from "@clerk/nextjs";
import Image from "next/image";

export default function Home() {
  return (
    <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-5">
      <div>
        <Searchsection/>
      </div>
      <div className="col-span-2">
        <Mapsection/>    
      </div>
    </div>
  );
}
