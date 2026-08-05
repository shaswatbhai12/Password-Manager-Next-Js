"use client"
import React from 'react'
import { Moon, MoonIcon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'
import { Button } from '@/components/ui/button'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger} from "@/components/ui/dropdown-menu"

const Navbar = () => {
    const { setTheme } = useTheme()
  return (
    <nav className='flex justify-between items-center px-4 h-16 bg-border text-foreground'>
        <span className='font-bold text-xl'>NoPass</span>
      <ul className='flex gap-5 justify-start items-center'>
        <li>Home</li>
        <li>About</li>
        <li>Services</li>
      </ul>
      <div>
        <DropdownMenu>
            <DropdownMenuTrigger className="inline-flex h-9 w-9 items-center justify-center rounded-md border bg-background hover:bg-accent">
                    <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"/>
                    <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"/>
                    <span className="sr-only">Toggle Theme</span>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={()=> setTheme("light")}>
                    Light
                </DropdownMenuItem>
                <DropdownMenuItem onClick={()=> setTheme("dark")}>
                    Dark
                </DropdownMenuItem>
                <DropdownMenuItem onClick={()=> setTheme("system")}>
                    System
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </nav>
  )
}

export default Navbar
