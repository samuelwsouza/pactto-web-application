import { Button } from "@/components/Button";
import { SecondaryInput } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { CircleHelp, Plus, X } from "lucide-react";
import Avatar from '../../../assets/avatar-placeholder.png'
import { useState } from "react";

export function PacttoWebsite() {
  const [showIcon, setShowIcon] = useState(false);

  return (
    <div className="w-screen h-screen p-8 text-white overflow-y-auto">
      <div className="w-[94vw] h-auto bg-[#232225] fixed -mt-8 p-2.5 z-50">
        <div className="flex items-center justify-between">
          <h2>Please edit your Pactto page below.</h2>

          <div className="flex items-center gap-5 pr-10">
            <Button size="large" color="subscription">
              LAUNCH
            </Button>

            <Button size="large" state="unavailable">
              SAVE
            </Button>
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-16 md:grid-cols-1">
        <div className="w-full">
          <div className="space-y-4 mt-10">
            <p>Hero</p>

            <div className="relative w-full">
              <SecondaryInput
                placeholder="Your name"
                defaultValue="Samuel Souza"
                onFocus={() => setShowIcon(true)}
                onBlur={() => setShowIcon(false)}
                className="placeholder-white/60 bg-dark border-none focus:ring-0 focus:border-transparent pr-10"
              />
              {showIcon && (
                <CircleHelp className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
              )}
            </div>
            
          <div className="relative w-full">
            <SecondaryInput 
              placeholder="Headline"
              onFocus={() => setShowIcon(true)}
              onBlur={() => setShowIcon(false)}
              className="placeholder-white/60 bg-dark border-none focus:ring-0 focus:border-transparent"
            />
            {showIcon && (
                <CircleHelp className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
              )}
          </div>
          </div>

          <div className="space-y-3 mt-7">
            <p>About me</p>
            <Textarea 
              placeholder="About Me"
              className="placeholder-white/60 bg-dark border-none focus:ring-0 focus:border-transparent" 
              rows={6}
            />
          </div>

          <SecondaryInput 
            placeholder="Expertise Title"
            className="placeholder-white/60 bg-dark border-none focus:ring-0 focus:border-transparent mt-12"
          />

          <button className="w-full flex items-center justify-between h-10 text-left px-3 placeholder-white bg-dark border-none focus:ring-0 focus:border-transparent mt-7">Expertise 1 <X className="w-4 h-4 text-silver" strokeWidth={4} /></button>
          <SecondaryInput 
            placeholder="Add expertise"
            className="placeholder-white/60 bg-dark border-none focus:ring-0 focus:border-transparent mt-px"
          />

          <SecondaryInput
            placeholder="Awards Title"
            className="placeholder-white/60 bg-dark border-none focus:ring-0 focus:border-transparent mt-7"
          />

          <button className="w-full flex items-center justify-between h-10 text-left px-3 placeholder-white bg-dark border-none focus:ring-0 focus:border-transparent mt-7">Award 1 <X className="w-4 h-4 text-silver" strokeWidth={4} /></button>
          <SecondaryInput 
            placeholder="Add award"
            className="placeholder-white/60 bg-dark border-none focus:ring-0 focus:border-transparent mt-px"
          />

          <p className="mt-7">Give me a follow</p>
          <button className="w-full flex items-center justify-between h-10 text-left px-3 placeholder-white/60 bg-dark border-none focus:ring-0 focus:border-transparent mt-3">www.pactto.com <X className="w-4 h-4 text-silver" strokeWidth={4} /></button>
          <SecondaryInput 
            placeholder="Add social media channel"
            className="placeholder-white/60 bg-dark border-none focus:ring-0 focus:border-transparent mt-px"
          />

          <p className="mt-7">YouTube video</p>
          <SecondaryInput 
            placeholder="YouTube video URL"
            className="placeholder-white/60 bg-dark border-none focus:ring-0 focus:border-transparent mt-3"
          />

          <p className="mt-7">Footer</p>
          <Textarea rows={5} placeholder="Quote" className="placeholder-white/60 bg-dark border-none focus:ring-0 focus:border-transparent mt-3" />

          <SecondaryInput
            placeholder="Quote Author"
            className="placeholder-white/60 bg-dark border-none focus:ring-0 focus:border-transparent mt-7"
          />
        </div>

        <div className="w-full space-y-3.5 mt-9">
          <p>Avatar</p>

          <div className="bg-[#00000033] p-3 w-full h-48 flex items-center justify-center">
            <button className="hover:bg-[#232225] rounded-full group relative">
              <img className="w-40 h-40 rounded-full" src={Avatar} alt="" />
              <span className="absolute inset-0 flex items-center justify-center text-black text-[1.5rem] transition-all font-semibold opacity-0 group-hover:opacity-90">
                Change
              </span>
            </button>
          </div>

          <p>Carousel</p>

          <Button icon={<Plus className="w-4 h-4" />}>
            ADD IMAGE
          </Button>
        </div>
      </div>
    </div>
  ) 
}