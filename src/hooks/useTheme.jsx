import { useEffect, useState } from "react"

export function useTheme() {
  const [mood , setMood] = useState(localStorage.getItem('theme') || "light");
  useEffect(() => {
    if(mood === "light") {
        localStorage.setItem("theme","light");
        document.documentElement.classList.remove("dark");
    } else {
        localStorage.setItem("theme","dark");
        document.documentElement.classList.add("dark"); 
    }
  },[mood])
  return (
    {mood , setMood}
  )
}

