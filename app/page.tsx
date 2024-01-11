import { Button } from '@/components/ui/button'
import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
    <SignedIn>
      <UserButton afterSignOutUrl='/'/>
    </SignedIn>
    <SignedOut>
        <Button asChild>
            <Link href="/sign-in">
                Login
            </Link>
        </Button>
       </SignedOut>
    </main>
  )
}
