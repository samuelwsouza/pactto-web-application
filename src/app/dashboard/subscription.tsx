import { Button } from "@/components/Button";
import { Check } from "lucide-react";

export function Subscription() {
  return (
    <div className="w-full h-full p-8">
      <div className="space-y-5">
        <span className="text-[#656565] tracking-tighter">
        You have access to <span className="text-white">PACTTO PRO</span> as a trial. <span className="text-white">10 days left</span>
        </span>

        <Button size="extralarge" color="subscription">
          SUBSCRIBE TO PACTTO PRO
        </Button>
      </div>

      <p className="text-[#E2E2E2] mt-5">The PACTTO PRO subscription allows you to:</p>

      <ul className="flex flex-col text-white mt-10 space-y-3"> 
        <li className="flex items-center gap-2 tracking-tight">
          <Check color="#1dbaa5" size={18} strokeWidth={4} />
          <span>Every feature on the FREE plan</span>
        </li>
        <li className="flex items-center gap-2 tracking-tight">
          <Check color="#1dbaa5" size={18} strokeWidth={4} />
          <span>Full access to the Pactto app on iPhones, iPads, Android, Mac, Windows, and Web</span>
        </li>
        <li className="flex items-center gap-2 tracking-tight">
          <Check color="#1dbaa5" size={18} strokeWidth={4} />
          <span>Max screen recording duration on Pactto Desktop: <span className="font-bold">unlimited</span></span>
        </li>
        <li className="flex items-center gap-2 tracking-tight">
          <Check color="#1dbaa5" size={18} strokeWidth={4} />
          <span>Max review duration on mobile: <span className="font-bold">unlimited</span></span>
        </li>
        <li className="flex items-center gap-2 tracking-tight">
          <Check color="#1dbaa5" size={18} strokeWidth={4} />
          <span>Max review duration on Pactto Web: 12 minutes</span>
        </li>
        <li className="flex items-center gap-2 tracking-tight">
          <Check color="#1dbaa5" size={18} strokeWidth={4} />
          <span>Max review duration on Pactto Desktop: 20 minutes</span>
        </li>
        <li className="flex items-center gap-2 tracking-tight">
          <Check color="#1dbaa5" size={18} strokeWidth={4} />
          <span>Manage and use your reference video library on the Web and Desktop</span>
        </li>
        <li className="flex items-center gap-2 tracking-tight">
          <Check color="#1dbaa5" size={18} strokeWidth={4} />
          <span>Review videos uploaded by you, using the browser</span>
        </li>
        <li className="flex items-center gap-2 tracking-tight">
          <Check color="#1dbaa5" size={18} strokeWidth={4} />
          <span>Add your own logo to create branded reviews</span>
        </li>
        <li className="flex items-center gap-2 tracking-tight">
          <Check color="#1dbaa5" size={18} strokeWidth={4} />
          <span>If you sell reviews, the Pactto take rate for paid reviews is 3%, instead of 12% for free users</span>
        </li>
        <li className="flex items-center gap-2 tracking-tight">
          <Check color="#1dbaa5" size={18} strokeWidth={4} />
          <span><u>Integrate Pactto to your website</u> so anyone can send, and pay, for your video feedback</span>
        </li>
        <li className="flex items-center gap-2 tracking-tight">
          <Check color="#1dbaa5" size={18} strokeWidth={4} />
          <span>Share your videos with others (no more sending video files around)</span>
        </li>
      </ul>
    </div>
  )
}