import type { Metadata } from 'next'
import {
  ClerkProvider,
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from '@clerk/nextjs'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import Footer from "../components/footer"
import Link from 'next/link'
const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Playmate',
  description: 'PLAYMTE APP',
  
  manifest: "/manifest.json",
}
export const viewport = {
  themeColor: "#317EFB",

}
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
          <header className="flex justify-between items-center h-16 sticky top-0 z-50 px-6 shadow-md bg-blue-900 text-white">
  {/* Logo section */}
  <div className="flex items-center gap-1">
    <img src="/icons/logoo.png" alt="Logo" className="h-10" />
    
    
  </div> 

  {/* Right side: nav + auth */}
  <div className="flex items-center gap-6">
    {/* Navigation Links */}
    <nav className="flex gap-4">
      <Link href="/profile">
        <button className="px-5 py-2 text-white rounded-lg hover:bg-blue-500">Profile</button>
      </Link>
      <Link href="/">
        <button className="px-5 py-2 text-white rounded-lg hover:bg-blue-500">Home</button>
      </Link>
      <Link href="/dashboard">
        <button className="px-5 py-2 text-white rounded-lg hover:bg-blue-500">Venues</button>
       
      </Link>
      <Link href="/tournaments">
        <button className="px-5 py-2 text-white rounded-lg hover:bg-blue-500">Tournaments</button>
      </Link>
      
      
    </nav>

    {/* Auth Section */}
    <div className="flex items-center gap-4">
      <SignedOut>
        <SignInButton />
        <SignUpButton />
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
    </div>
  </div>
</header>

          {children}
           <Footer/>
        </body>
       
      </html>
    </ClerkProvider>
  )
}