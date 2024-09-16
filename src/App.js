import React, { useState, useEffect } from 'react';

const TypewriterEffect = ({ names }) => {
const [text, setText] = useState('');
const [nameIndex, setNameIndex] = useState(0);
const [isDeleting, setIsDeleting] = useState(false);
const [typingSpeed, setTypingSpeed] = useState(150);
const [showCursor, setShowCursor] = useState(true);

useEffect(() => {
const currentName = names[nameIndex];

const typeEffect = () => {
if (isDeleting) {
setText(currentName.substring(0, text.length - 1));
setTypingSpeed(75);
      } else {
setText(currentName.substring(0, text.length + 1));
setTypingSpeed(150);
      }

if (!isDeleting && text === currentName) {
setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && text === '') {
setIsDeleting(false);
setNameIndex((prevIndex) => (prevIndex + 1) % names.length);
      }
    };

const timer = setTimeout(typeEffect, typingSpeed);
return () => clearTimeout(timer);
  }, [text, isDeleting, nameIndex, names, typingSpeed]);

useEffect(() => {
const cursorInterval = setInterval(() => {
setShowCursor((prev) => !prev);
    }, 530);
return () => clearInterval(cursorInterval);
  }, []);

return (
  
<span className="text-white">
    {text}
    <span className={`${showCursor ? 'opacity-100 text-purple-400' : 'opacity-0'} transition-opacity duration-100`}>|</span>
  </span>  
  );
};

const App = () => {
const workNames = ['founders', 'managers', 'teams', 'creators']; 

return (
<div className="bg-black text-white min-h-screen flex flex-col">
      <header className="p-4 flex justify-between items-center -mt-4">
        <div className="text-2xl font-bold flex items-center">
          <img src="/logo.png" alt="ziva" className="w-28 h-28 mr-2" />
        </div>
        <button 
        onClick={() => window.open('https://forms.gle/qZteRpUbHKMZKt3KA', '_blank')}
        className="bg-purple-500 tracking-tight mr-3 text-white px-4 py-2 rounded-full">
          Join waitlist
        </button>
      </header>
      <main className="flex-grow flex flex-col items-center justify-center text-center font-helvetica ">
      <h1 className="-mt-36 md:mt-0 text-4xl md:text-7xl leading-tight">
        <span className="text-white tracking-extra-tight">
          <span className="text-purple-400 px-1 ">❝</span><span className="italic">smarter </span>
          <span className="text-purple-400 px-1">❞</span>
        </span>
        <br />
        <span className="text-purple-400 text-8xl md:text-9xl tracking-extra-tight">
          email for <span className="font-bold"> <TypewriterEffect names={workNames} /></span>
        </span>
      </h1>
      <p className="text-xl md:text-3xl tracking-little-tight pt-5 pb-10 md:pt-3 pb-5 font-light">
        Fly through your inbox and get back to <span className="block md:inline -mt-8">
          <br className="md:hidden" />
          doing great work
        </span>
      </p>
        <p className="hidden md:block text-3xl mb-8 -mt-4 tracking-little-tight font-light">
          with a little help from <strong className="font-bold">AI</strong>.
        </p>
        <p className="hidden md:block text-xl mb-12 tracking-little-tight">
          ziva gives an <span className="bg-purple-500 text-white px-1">hour, everyday, for what matters most</span>.
        </p>
        <button
          className="bg-white text-black px-8 py-3 rounded-full text-2xl tracking-little-tight"
          onClick={() => window.open('https://forms.gle/qZteRpUbHKMZKt3KA', '_blank')}
        >
          Join waitlist
        </button>
      </main>
      <footer className="flex justify-center">
        <img 
          src="/brain.png" 
          alt="ziva" 
          className="hidden md:block w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 object-contain" 
        />
      </footer>
    </div>
  );
};

export default App;