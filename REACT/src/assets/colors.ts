
export type ColorName = 'cyan' | 'sky' | 'yellow' | 'pastelOrange' | 'red' | 'lavender' | 'mountain' | 'apple' | 'pastelGreen';

function isRGBColor(str: string): boolean {
  const rgbColorRegex = /^rgb\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*\)$/;
  return rgbColorRegex.test(str);
}


const colors:Record<ColorName, string> = {

    cyan:'rgb(44, 210, 219)',
    sky:'rgb(80, 203, 253)',
    yellow:'rgb(252, 197, 55)',
    pastelOrange:'rgb(253, 130, 100)',
    red:'rgb(226, 29, 72)',
    lavender:'rgb(186, 161, 239)',
    mountain:' rgb(0, 127, 127)',
    apple:'rgb(182, 202, 81)',
    pastelGreen:'rgb(155, 233, 133)'
    
  }


  export  {colors, isRGBColor};