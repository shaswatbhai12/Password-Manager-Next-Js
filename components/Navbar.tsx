"use client"
import React from 'react'
import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'
import { Button } from '@/components/ui/button'
import { SignInButton, Show, UserButton} from '@clerk/nextjs'

const Navbar = () => {
    const { theme, setTheme } = useTheme()
    const toggleTheme = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark');
    };
  return (
    <nav className='flex justify-between items-center px-4 h-16 bg-primary/20 text-foreground'>
        <span className='font-bold text-xl'>NoPass</span>
      <ul className='flex gap-5 justify-start items-center'>
        <li>Home</li>
        <li>About</li>
        <li>Services</li>
      </ul>
      <div className='flex justify-center gap-2 items-center'>
            <Button className="relative" variant="outline" size="icon" onClick={toggleTheme}>
                    <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"/>
                    <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"/>
                    <span className="sr-only">Toggle Theme</span>
            </Button>
            
        <Show when="signed-out">
            <SignInButton mode='modal'> 
                <Button  variant="default">
                    Sign In
                </Button>
            </SignInButton>
        </Show>
        <Show when="signed-in">
            <UserButton />
        </Show>
      </div>
    </nav>
  )
}

export default Navbar
