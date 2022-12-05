import { Input } from '@chakra-ui/react'
import React from 'react'
import { SiFacebook, SiInstagram, SiLinkedin, SiTwitter } from 'react-icons/si';

export default function FooterComponent() {
    return (
        <div>
            <div className='flex justify-around flex-col md:flex-row py-10'>
                <div className='space-y-1'>
                    <h1 className='font-bold font-zen'>POSTY</h1>
                    <p className='text-sm'>Individual Project</p>
                    <p className='text-sm'>Purwadhika Digital School </p>
                    <p className='text-sm'>© Vikri 2022</p>

                </div>
                <div className='space-y-1'>
                    <h1 className='font-bold font-zen'>Contacts</h1>
                    <p className='text-sm'>posty@online.com</p>
                    <p className='text-sm'>+6281256233</p>
                    <div className='flex space-x-2 py-4'>
                        <SiInstagram className='w-5 h-auto' color='#E1306C' />
                        <SiFacebook className='w-5 h-auto' color='#4267B2' />
                        <SiTwitter className='w-5 h-auto' color='#1DA1F2' />
                        <SiLinkedin className='w-5 h-auto' color='#0077b5' />
                    </div>
                </div>
                <div className='md:max-w-[25%] space-y-1'>
                    <h1 className='font-bold font-zen'>Subscribe</h1>
                    <p className='text-sm'>Subscribe to our newsletter and get updated
                        when there is a new feature</p>
                    <Input placeholder='Email' />

                    <div className='pt-1'>
                        <button className='w-[100px] h-[42px] rounded-lg bg-blue-500 text-white font-medium'>
                            Subscribe
                        </button>
                    </div>

                </div>
            </div>
        </div>
    )
}