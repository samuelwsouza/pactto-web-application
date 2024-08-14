import { Search } from "lucide-react";
import { Input } from "../../components/Input";

export function WebLinks() {
  return (
    <div className="w-full h-full p-8 space-y-24">
      <div className="space-y-10">
        <h1 className="text-3xl text-white font-bold">There are no public web links you created</h1>

        <Input placeholder="Search" icon={<Search color="white" className="relative right-10" />} variant="big" />
      </div>

      <div className="space-y-10">
        <h1 className="text-3xl text-white font-bold">There are no private web links you created</h1>

        <Input placeholder="Search" icon={<Search color="white" className="relative right-10" />} variant="big" />
      </div>
    </div>
  )
}