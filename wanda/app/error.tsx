'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function Error({error, reset, }: {error: Error; reset: () => void;}) {
   const router = useRouter()

  useEffect(() => {
    if(error && typeof(window === undefined)){
        // router.replace('/login')
    }
  }, [error, router]);

  return (
    <div>
      <p>Something went wrong! {error.message.includes("not authenticated") && <h1> Not Authenticated </h1>} </p>
      <button onClick={() => reset()}>Reset error boundary</button>
    </div>
  );
}