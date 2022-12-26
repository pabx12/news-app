'use client';
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import { SunIcon, MoonIcon } from "@heroicons/react/24/solid";
type Props = {}

export default function DarkModeButton({}: Props) {
  const [mounted, setMounted ]= useState(false);
  const {systemTheme, theme,setTheme} = useTheme();
  //const [color, setColor] = useState('blue')
  useEffect(()=>{
    setMounted(true)
  },[])
  if(!mounted){
    return null;
  }
  const currentTheme = theme === "systheme" ? systemTheme : theme
  //useEffect(() => setColor('red'), [])
  return (
    <div>
        {currentTheme === "dark" ? (
            <SunIcon 
                className="h-8 w-8 text-yellow-500 cursor-pointer"
                onClick={() => setTheme("light")}
            />
        ) : (
            <MoonIcon
                className="h-8 w-8 text-yellow-500 cursor-pointer"
                onClick={() => setTheme("dark")}
            />
        )}
    </div>
  )
}