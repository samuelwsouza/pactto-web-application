import { Search } from "lucide-react";
import { Input } from "../../components/Input";

export function ReviewItems() {
  return (
    <div className="w-full h-full p-8 space-y-10">
      <h1 className="text-3xl text-white font-bold">There are no review requests sent to you</h1>

      <Input placeholder="Search" icon={<Search color="white" className="relative right-10" />} variant="big" />
    </div>
  )
}