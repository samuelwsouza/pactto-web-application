import { Search } from "lucide-react";
import { Input } from "../../components/Input";

export function PacttoChats() {
  return (
    <div className="flex flex-col w-full h-full p-8">
      <h1 className="text-3xl font-bold text-white">Pacttos (Chats)</h1>
      <span className="text-center text-white mt-6">No Pacttos found</span>
      <Input placeholder="Search" icon={<Search color="white" className="relative right-10" />} variant="big" />
    </div>
  )
}