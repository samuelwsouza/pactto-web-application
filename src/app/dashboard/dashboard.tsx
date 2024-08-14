import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { Plus, Search } from "lucide-react";
import { useSidebar } from "@/context/SidebarContext";
import { useState } from "react";

export function Dashboard() {
  const [videoSrc, setVideoSrc] = useState<string | null>(null);

  const handleButtonClick = () => {
    const fileInput = document.getElementById("video-upload") as HTMLInputElement;
    fileInput.click();
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setVideoSrc(url);
    }
  };
  const { isOpen } = useSidebar()

  return (
    <div className={`w-full h-full ${isOpen ? 'p-8 md:p-8' : 'p-10 md:p-14'}`}>
      <div className="flex flex-col">
        <h1 className="text-white text-lg md:text-2xl font-semibold">Hey Samuel, welcome to Pactto!</h1>

        <ul className="mt-5 space-y-1.5">
          <li>
            <span className="bg-cement rounded-full text-white text-xxs md:text-xs font-bold uppercase py-0.5 px-1.5">TO DO</span>
            <span className="text-silver text-sm md:text-base font-semibold pl-2">Open your inbox and verify your email</span>
          </li>
          <li>
            <span className="bg-cement rounded-full text-white text-xxs md:text-xs font-bold uppercase py-0.5 px-1.5">TO DO</span>
            <span className="text-silver text-sm md:text-base font-semibold pl-2">Check the <u className="text-special cursor-pointer">short video of Pactto in action</u></span>
          </li>
          <li>
            <span className="bg-cement rounded-full text-white text-xxs md:text-xs font-bold uppercase py-0.5 px-1.5">TO DO</span>
            <span className="text-silver text-sm md:text-base font-semibold pl-2">Wanna record your computer screen or review files? Download Pactto for <u className="text-special cursor-pointer">Mac</u> or <u className="text-special cursor-pointer">Windows</u></span>
          </li>
          <li>
            <span className="bg-cement rounded-full text-white text-xxs md:text-xs font-bold uppercase py-0.5 px-1.5">TO DO</span>
            <span className="text-silver text-sm md:text-base font-semibold pl-2">Wanna record videos, images or audio files with your phone or tablet? Download Pactto for <u className="text-special cursor-pointer">iOS</u> or <u className="text-special cursor-pointer">Android</u></span>
          </li>
        </ul>
      </div>

      <div className="mt-12 md:mt-20">
        <div className="flex flex-row items-start justify-between">
          <h1 className="text-3xl text-white font-bold">My uploads</h1>
          <button onClick={handleButtonClick}>
            <Button variant="primary" icon={<Plus />} >
              UPLOAD NEW VIDEO
            </Button>
          </button>
          <input
            id="video-upload"
            type="file"
            accept="video/*"
            className="hidden"
            onChange={handleFileChange}
          />
        </div>

        <div className="mt-8 md:mt-12">
          <Input placeholder="Search" icon={<Search color="white" className="relative right-10" />} variant="big" />
        </div>

        {videoSrc && (
          <div className="mt-10 w-full max-w-md">
            <video controls className="w-full h-auto rounded-lg shadow-lg">
              <source src={videoSrc} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        )}
      </div>
    </div>
  )
}
