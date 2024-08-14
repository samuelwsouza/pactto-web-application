import * as Slider from '@radix-ui/react-slider';

export const SliderDemo = () => (
  <form>
    <Slider.Root
      className="relative flex items-center select-none touch-none w-[120px] h-5"
      defaultValue={[30]}
      max={70}
      step={1}
    >
      <Slider.Track className="bg-blackA7 relative grow rounded-full h-[3px] bg-[#335853]">
        <Slider.Range className="absolute bg-special rounded-full h-full" />
      </Slider.Track>
      <Slider.Thumb
        className="block w-5 h-5 bg-special shadow-[0_2px_10px] shadow-blackA4 rounded-[10px] hover:bg-violet3 focus:outline-none focus:shadow-[0_0_0_5px] focus:shadow-blackA5"
        aria-label="Volume"
      />
    </Slider.Root>
  </form>
);
