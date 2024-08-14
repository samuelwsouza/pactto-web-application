import { Button } from "@/components/Button";
import { Input } from "@/components/Input";
import { Plus, Search } from "lucide-react";

export function VideoLibrary() {
  return (
    <div className="w-full h-full p-8">
      <div className="flex justify-between">
        <h1 className="text-3xl font-bold text-white">Select a video</h1>

        <Button icon={<Plus className="w-4 h-4" />}>
          UPLOAD NEW VIDEO
        </Button>
      </div>

      <div className="mt-10 space-y-3">
        <h3 className="text-[#6E6E6E] text-sm tracking-tighter">Videos uploaded to the reference video library can be used in syde-by-side comparisons, or can be shared with learners directly.</h3>

        <div className="">
          <Input placeholder="Search" icon={<Search color="white" className="relative right-10" />} variant="big" />
        </div>
      </div>
    </div>
  )
}