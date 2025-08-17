import { SignIn } from '@clerk/nextjs'
import Image from 'next/image';
export default function Page() {
  return (
    <>
        <div>
            <Image src='/cab.png' width = {900} height={1000} alt='cab'
                className='object-contain w-full h-full'
            />
            <div className='absolute top-25 right-100 left-125'>
                <SignIn />
            </div>
            
        </div>
   </>
);
}