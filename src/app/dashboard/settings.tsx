import { Button } from "@/components/Button";
import { ColorOption } from "@/components/ColorOptions";
import { SliderDemo } from "@/components/SliderDemo";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export function Settings() {
  return (
    <div className="w-full h-full p-8 ">
      <div className="flex justify-between gap-5">
        <h1 className="text-3xl text-white font-bold">Review Settings</h1>

        <div className="flex gap-3">
          <Button color="subscription">
            RESET CHANGES
          </Button>

          <Button state="unavailable" color="subscription">
            SAVE CHANGES
          </Button>
        </div>
      </div>

      <div className="space-y-5 mt-16 text-white">
        <div className="flex items-center gap-3">
          <Checkbox className="
            bg-transparent
            border-2 
            border-gray-400 
            rounded 
            w-5 
            h-5 
            text-special 
            focus:ring-transparent 
            checked:bg-special 
            checked:border-transparent" 
          />
          <label className="text-white font-semibold" htmlFor="">Show logo</label>
        </div>
        <div className="flex items-center gap-3">
          <Checkbox className="
            bg-transparent
            border-2 
            border-gray-400 
            rounded 
            w-5 
            h-5 
            text-special 
            focus:ring-transparent 
            checked:bg-special 
            checked:border-transparent" 
          />
          <label className="text-white font-semibold" htmlFor="">Start with microphone enabled</label>
        </div>
        <div className="flex items-center gap-3">
          <Checkbox className="
            bg-transparent
            border-2 
            border-gray-400 
            rounded 
            w-5 
            h-5 
            text-special 
            focus:ring-transparent 
            checked:bg-special 
            checked:border-transparent" 
          />
          <label className="text-white font-semibold" htmlFor="">Start with camera enabled</label>
        </div>
        <div className="flex items-center gap-3">
          <Checkbox className="
            bg-transparent
            border-2 
            border-gray-400 
            rounded 
            w-5 
            h-5 
            text-special 
            focus:ring-transparent 
            checked:bg-special 
            checked:border-transparent" 
          />
          <label className="text-white font-semibold" htmlFor="">Videos loaded start muted</label>
        </div>
        <div className="flex items-center gap-3">
          <Checkbox className="
            bg-transparent
            border-2 
            border-gray-400 
            rounded 
            w-5 
            h-5 
            text-special 
            focus:ring-transparent 
            checked:bg-special 
            checked:border-transparent" 
          />
          <label className="text-white font-semibold" htmlFor="">Notes disappear after 1 second</label>
        </div>
        <div className="flex items-center gap-3">
          <Checkbox className="
            bg-transparent
            border-2 
            border-gray-400 
            rounded 
            w-5 
            h-5 
            text-special 
            focus:ring-transparent 
            checked:bg-special 
            checked:border-transparent" 
          />
          <label className="text-white font-semibold" htmlFor="">Trackpad: pinch to zoom</label>
        </div>
        <div className="flex items-center gap-3">
          <Checkbox className="
            bg-transparent
            border-2 
            border-gray-400 
            rounded 
            w-5 
            h-5 
            text-special 
            focus:ring-transparent 
            checked:bg-special 
            checked:border-transparent" 
          />
          <label className="text-white font-semibold" htmlFor="">Trackpad: reposition with 2-finger swipe</label>
        </div>
      </div>

    <div className="w-full flex items-center gap-3 mt-8">
      <label className="text-white tracking-tight font-semibold" htmlFor="">Brush size for tools</label>
      <SliderDemo />
    </div>

    
    <div className="mt-7">
      <label className="text-white tracking-wider" htmlFor="">Note color options</label>
      <div className="flex items-center gap-5 mt-3">
        <ColorOption label="Color 1" color="#008000" hex="#008000" />
        <ColorOption label="Color 2" color="#ff0000" hex="#ff0000" />
        <ColorOption label="Color 3" color="#ffffff" hex="#ffffff" />
        <ColorOption label="Color 4" color="#000000" hex="#000000" />
      </div>  
    </div>
    
    <div className="flex gap-5 mt-10">
      <div>
        <label className="text-white tracking-wider mb-5" htmlFor="">Camera</label>
        <Select>
          <SelectTrigger className="w-[180px] h-12 border-silver rounded bg-transparent text-white"> 
            <SelectValue />
          </SelectTrigger>
          <SelectContent className="bg-silver">
            <SelectItem value="cameraasus">Camera ASUS</SelectItem>
            <SelectItem value="cameralenovo">Camera Lenovo</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div>
        <label className="text-white tracking-wider" htmlFor="">Microphone</label>
        <Select>
          <SelectTrigger className="w-[180px] h-12 border-silver rounded bg-transparent text-white"> 
            <SelectValue className="text-white" />
          </SelectTrigger>
          <SelectContent className="bg-silver">
            <SelectItem value="microasus">Microphone ASUS</SelectItem>
            <SelectItem value="microhyperx">Microphone HyperX</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div>
        <label className="text-white tracking-wider" htmlFor="">Speakers</label>
        <Select >
          <SelectTrigger className="w-[180px] h-12 border-silver rounded bg-transparent text-white"> 
            <SelectValue />
          </SelectTrigger>
          <SelectContent className="bg-silver">
            <SelectItem value="speakasus">Speakers ASUS</SelectItem>
            <SelectItem value="spaekhyper">Speakers HyperX</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
    </div>
  )
}