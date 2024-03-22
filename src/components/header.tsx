'use client';
import React from 'react';
import { ModeToggle } from './ui/dark-mode-toggle';
import { Button } from './ui/button';
import { signIn, signOut, useSession } from 'next-auth/react';
import { Session } from 'next-auth';
import Image from 'next/image';
import { Avatar, AvatarImage } from './ui/avatar';

export default function Header() {
  const session = useSession();
  let user = session.data?.user as Session['user'];
  let image = session.data?.user?.image as string;
  return (
    <header className=' dark:border border-b-[1px] shadow-lg mb-4'>
      <div className='md:container flex justify-between items-center py-5'>
        <h1>SnapSort</h1>
        <div className='flex items-center gap-3'>
          {session.status === 'loading' && null}
          {session.status === 'authenticated' && (
            <div className='flex gap-3 items-center'>
              {/* <Image
                className='rounded-full'
                src={image}
                alt='avitar'
                width={40}
                height={40}
              /> */}
              <Avatar>
                <AvatarImage src={image} />
              </Avatar>
              <Button onClick={() => signOut()}>Sign Out</Button>
            </div>
          )}
          {session.status === 'unauthenticated' && (
            <Button onClick={() => signIn()}>Sign In</Button>
          )}

          <ModeToggle />
        </div>
      </div>
    </header>
  );
}
