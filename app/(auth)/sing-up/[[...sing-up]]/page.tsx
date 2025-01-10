import { SignUp, ClerkLoaded, ClerkLoading } from '@clerk/nextjs'
import Image from "next/image"
import { Loader2 } from 'lucide-react';

export default function Page() {
    return (
        <div className="min-h-screen grid grid-cols-1 lg:grid-cols-2">
            <div className="h-full lg:flex flex-col items-center
            justify-center px-4">
                <div className="text-center space-y-4 pt-16">
                    <h1 className="text-4xl font-bold text-black">
                        Welcome to our website!
                    </h1>
                    <p className='text-base text-muted-foreground'>
                        Create account to get to your dashboard
                    </p>
                </div>
                <div className="flex items-venter justify-center mt-8">
                    <ClerkLoaded>
                        <SignUp path="/sign-up" />
                    </ClerkLoaded>
                    <ClerkLoading>
                        <Loader2 className="animate-spin text-muted-foreground" />
                    </ClerkLoading>
                </div>
            </div>
            <div className='h-full bg-[#096A2E] hidden lg:flex items-center justify-center'>
                <Image src="/logo.svg" width={500} height={500} alt="logo" />
            </div>
        </div>
    );
}