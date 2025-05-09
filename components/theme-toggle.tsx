"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Moon, Sun } from "lucide-react"

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(true)

  // Note: In a real implementation, this would toggle between light and dark themes
  // For this demo, we're keeping the dark theme as the default and only theme

  return (
    <Button
      variant="ghost"
      size="icon"
      className="text-gray-300 hover:text-white hover:bg-white/10"
      onClick={() => setIsDark(!isDark)}
    >
      {isDark ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
    </Button>
  )
}
