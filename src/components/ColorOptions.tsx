import React from 'react';

interface ColorOptionProps {
  label: string;
  hex: string;
  color: string;
}

export const ColorOption: React.FC<ColorOptionProps> = ({ label, hex, color }) => {
  return (
    <div className="relative flex items-center justify-between border border-gray-600 rounded p-2 w-32 h-16 hover:border-white transition-colors cursor-pointer">
      <span className="absolute -top-2.5 left-2 bg-gray-900 text-gray-400 text-xs px-1">
        {label}
      </span>
      <div className="flex flex-col">
        <span className="text-white font-mono text-sm">{hex}</span>
      </div>
      <div 
        className="w-4 h-4 rounded-full" 
        style={{ backgroundColor: color }} 
      />
    </div>
  );
};

export const App: React.FC = () => {
  const colors = [
    { label: 'Color 1', hex: '#008000', color: '#008000' },
    { label: 'Color 2', hex: '#FF0000', color: '#FF0000' },
    { label: 'Color 3', hex: '#FFFFFF', color: '#FFFFFF' },
    { label: 'Color 4', hex: '#000000', color: '#000000' },
  ];

  return (
    <div className="flex space-x-4 bg-gray-900 p-4">
      {colors.map((colorOption, index) => (
        <ColorOption 
          key={index} 
          label={colorOption.label} 
          hex={colorOption.hex} 
          color={colorOption.color} 
        />
      ))}
    </div>
  );
}
