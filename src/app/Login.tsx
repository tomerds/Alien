'use client';

import { useState } from 'react';
import { toast } from 'react-hot-toast';
import supabaseClient from './utils/supabase-browser';

function IndexPage() {
  return (
    <div className="bg-gradient-to-tr from-red-800 to-orange-400 relative h-screen w-screen flex flex-row-reverse justify-center">
      <div className="w-1/2 hidden md:flex ">
        <img
          className=" inset-0 w-full h-full object-cover mix-blend-multiply filter brightness-100"
          alt="main background image"
          src="https://cdn.midjourney.com/ea7d13a0-64ab-4273-b9dd-1d5d476443b6/0_2.webp"
        />
      </div>

      <div className="md:w-1/2 justify-center items-center flex">
        <div className=" inset-0 flex flex-col justify-center items-center w-5/6 max-w-lg mx-auto text-center">
          <div className="space-y-8">
            <h1 className="font-primary font-extrabold text-white text-3xl sm:text-4xl md:text-5xl md:leading-tight">
              Create your own <br />
              <span className="text-black">AI influencer</span>
            </h1>
            <p className="font-secondary text-palette-light text-white md:text-lg lg:text-xl">
              Easily generate photos, voice, and text.
              <br /> Built for brands and influencers.
            </p>
            <Login />
          </div>
        </div>
      </div>
    </div>
  );
}

function Login() {
  const [email, setEmail] = useState('');

  const handleLogin = async (email) => {
    try {
      const { error } = await supabaseClient.auth.signInWithOtp({
        email,
        options: {
          emailRedirectTo: 'https://www.alienstudios.app/welcome',
        },
      });
      if (error) throw error;
      toast.success('Verify your email to join the waitlist', {
        id: '1',
        position: 'bottom-center',
        duration: 3000,
      });
    } catch (error) {
      toast.error('There was an error saving your email', {
        id: '2',
        position: 'bottom-center',
        duration: 3000,
      });
    }
  };

  return (
    <div className="container mx-auto flex space-x-5 place-content-center text-black">
      <input
        className="border-2 border-gray-100 rounded-lg p-4 w-full"
        type="email"
        placeholder="Your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button
        onClick={(e) => {
          e.preventDefault();
          handleLogin(email);
        }}
        className="px-10 bg-black text-gray-100 text-lg rounded-lg focus:border border-gray-100"
      >
        <span className="whitespace-nowrap	">Join Waitlist</span>
      </button>
    </div>
  );
}

export default IndexPage;
