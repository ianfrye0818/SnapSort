'use client';
import React from 'react';
import { ModeToggle } from './ui/dark-mode-toggle';
import { Button } from './ui/button';
import { signIn, signOut, useSession } from 'next-auth/react';
import { Avatar, AvatarImage } from './ui/avatar';
import { AvatarFallback } from '@radix-ui/react-avatar';

export default function Header() {
  const session = useSession();
  const { image } = session.data?.user || {};
  return (
    <header className=' dark:border border-b-[1px] shadow-lg mb-4'>
      <div className='md:container flex justify-between items-center py-5'>
        <h1>SnapSort</h1>
        <div className='flex items-center gap-3'>
          {session ? (
            <div className='flex gap-3 items-center'>
              <Avatar className='p-3 rounded-full bg-pink-400 flex items-center justify-center'>
                <AvatarImage src={image!} />
                <AvatarFallback className='text-2xl text-white'>
                  {(session.data?.user.email as string)[0].toUpperCase()}
                </AvatarFallback>
              </Avatar>
              <Button onClick={() => signOut()}>Sign Out</Button>
            </div>
          ) : (
            <Button onClick={() => signIn()}>Sign In</Button>
          )}
          <ModeToggle />
        </div>
      </div>
    </header>
  );
}
