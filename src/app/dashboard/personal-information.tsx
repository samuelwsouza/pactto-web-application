import { SecondaryInput } from "@/components/ui/input";
import { Input } from "@/components/Input";
import { Button } from "../../components/Button";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";
import { Checkbox } from "@/components/ui/checkbox";

export function PersonalInfo() {
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);

  const handleMouseEnter = (index: number) => {
    setHoveredItem(index);
  };

  return (
    <div className="w-full h-full p-8 overflow-y-auto">
      <div className="fixed top-7 right-10 flex flex-row-reverse gap-3">
        <Button variant="primary" size="large">
          SAVE CHANGES
        </Button>

        <Button variant="secondary" size="large" color="darker">
          RESET CHANGES
        </Button>
      </div>

      <form className="mt-10 space-y-6">
        <SecondaryInput
          placeholder="Primeiro nome"
          defaultValue="Samuel"
          className="w-[45rem] text-white placeholder-white bg-dark border-none focus:ring-0 focus:border-transparent"
        />

        <SecondaryInput
          placeholder="Primeiro nome"
          defaultValue="Souza"
          className="w-[45rem] text-white placeholder-white bg-dark border-none focus:ring-0 focus:border-transparent"
        />

        <SecondaryInput
          placeholder="Seu e-mail"
          defaultValue="samuelwilliansdesouza15@gmail.com"
          className="w-[45rem] text-white placeholder-white bg-dark border-none focus:ring-0 focus:border-transparent"
        />

        <Select>
          <SelectTrigger className="w-[45rem] text-white bg-dark border-none focus:ring-0 focus:border-transparent">
            <SelectValue placeholder="Country" />
          </SelectTrigger>
          <SelectContent className="text-white bg-dark border-none focus:ring-0 focus:border-transparent max-h-60 overflow-y-auto">
            <SelectGroup>
              {['Australia', 'Austria', 'Belgium', 'Brazil', 'Bulgaria', 'Canada', 
              'Cyprus', 'Czech Republic', 'Denmark', 'Estonia', 'Finland', 'France', 
              'Germany', 'Greece', 'Honk Kong', 'Hungary', 'India', 'Ireland', 
              'Italy', 'Japan', 'Latvia', 'Lithuania', 'Luxembourg', 'Malaysia', 
              'Malta', 'Mexico', 'Netherlands', 'New Zeland', 'Norway', 'Poland', 
              'Portugal', 'Romania', 'Singapore', 'Slovakia', 'Slovenia', 'Span', 
              'Sweden', 'Switzerland', 'United Arab Emirates', 'United Kingdom', 
              'United States'].map((country, index) => (
                <SelectItem
                  key={index}
                  value={country.toLowerCase()}
                  style={{
                    backgroundColor: hoveredItem === index ? 'gray' : 'black',
                    color: 'white',
                    transition: 'background-color 0.1s, color 0.3s',
                  }}
                  onMouseEnter={() => handleMouseEnter(index)}
                  onMouseLeave={() => setHoveredItem(null)}
                >
                  {country}
                </SelectItem>
              ))}

            </SelectGroup>
          </SelectContent>
        </Select>
            
        <p className="text-white font-semibold">What is your main activity? Or activities</p>

        <div className="pl-3 space-y-7 text-white">
          <div className="flex items-center space-x-3">
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
            <label
              htmlFor="video"
              className="text-base font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Video
            </label>
          </div>

          <div className="flex items-center space-x-3">
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
            <label
              htmlFor="design"
              className="text-base font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Design
            </label>
          </div>

          <div className="flex items-center space-x-3">
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
            <label
              htmlFor="development"
              className="text-base font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Development
            </label>
          </div>

          <div className="flex items-center space-x-3">
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
            <label
              htmlFor="sports"
              className="text-base font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Sports
            </label>
          </div>

          <div className="flex items-center space-x-3">
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
            <label
              htmlFor="medical"
              className="text-base font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Medical
            </label>
          </div>

          <div className="flex items-center space-x-3">
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
            <label
              htmlFor="inspections"
              className="text-base font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Inspections
            </label>
          </div>
        </div> 

        <Input placeholder="Other" variant="small" />

        <p className="text-white font-semibold">User handle and password</p>

        <SecondaryInput
          placeholder="User handle"
          defaultValue="samuelwilliansdesouza15611"
          className="w-[45rem] text-white placeholder-white bg-dark border-none focus:ring-0 focus:border-transparent"
        />

        <SecondaryInput
          placeholder="Password"
          type="password"
          className="w-[45rem] text-white placeholder-white bg-dark border-none focus:ring-0 focus:border-transparent"
        />

        <SecondaryInput
          placeholder="Confirm password"
          type="password"
          className="w-[45rem] text-white placeholder-white bg-dark border-none focus:ring-0 focus:border-transparent"
        />

        <p className="text-xxs text-white font-semibold tracking-wider">To delete your Pactto account and remove your data permanently from all 
          Pactto apps and services, please <u className="cursor-pointer">click here</u>.</p>
      </form>
    </div>
  )
}