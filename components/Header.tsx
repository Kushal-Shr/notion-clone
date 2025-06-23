'use client'

import React from 'react'
import { useUser } from '@clerk/nextjs';
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs';

const Header = () => {

    const {user} = useUser();
    
  return (
    <div className='flex-col items-center justify-between p-5'>
        {user && (
            <h1>{user?.firstName}{`'s`} Space</h1>
        )}

        <div>
            <SignedOut>
                <SignInButton />
            </SignedOut>
            <SignedIn>
                <UserButton />
            </SignedIn>
        </div>
    </div>
  )
}

export default Header
