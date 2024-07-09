import { UserButton } from '@clerk/nextjs';
import { auth,currentUser } from '@clerk/nextjs/server';
import React from 'react'

export default async function page() {
  const { userId } = auth();
  const user  = await currentUser();
  return (
    <div>
      <UserButton />
    </div>
  )
}
