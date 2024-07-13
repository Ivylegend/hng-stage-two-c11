import Loader from "@/components/Loader";
import { Loader2 } from "lucide-react";
import Link from "next/link";

const HomePage = () => {
  return (
    <div className="flex items-center justify-center flex-col gap-4 h-[50vh]">
      <p>Nothing here yet</p>
      {/* <Loader />
      <Loader2 /> */}
      <Link href="/" className="font-semibold underline">
        Return Home
      </Link>
    </div>
  );
};

export default HomePage;
