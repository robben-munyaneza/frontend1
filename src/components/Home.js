import React from 'react';

function Home() {
  return (
    <div className="p-8 grid gap-8">
      {/* Section for Primary Button */}
      <div className="space-y-4">
        <h1 className="text-xl font-bold mb-4 text-black">Primary Button</h1>
        <div className="flex justify-center">
          <button className="bg-blue-600 hover:bg-blue-400 text-white font-semibold py-2 px-4 rounded-md transition-colors">
            Click Me
          </button>
        </div>
      </div>

      {/* Section for State Buttons */}
      <div className="space-y-4">
        <h2 className="text-xl font-bold mb-4">State Buttons</h2>
        <div className="grid grid-cols-3 gap-4">
          <div className="flex justify-center">
            <button className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-md transition-colors">
              Success Button
            </button>
          </div>
          <div className="flex justify-center">
            <button className="bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded-md transition-colors">
              Danger Button
            </button>
          </div>
          <div className="flex justify-center">
            <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-2 px-4 rounded-md transition-colors">
              Warning Button
            </button>
          </div>
        </div>
      </div>
     <div>
        <h1 className='font first-letter:marker:after:selection:first-line'>grid application</h1>
     
      <div className=' grid grid-cols-3 bg-orange-500 px-2'>
        <div>munyaneza robben</div>
        <div>munyaneza robben</div>
        <div>munyaneza robben</div>
        <div>munyaneza robben</div>
        <div>munyaneza robben</div>
        <div>munyaneza robben</div>
        
      </div>
      <h1 className='text-2xl text-black '>
      flex
      </h1>
      <div className='flex flex-row gap-5 bg-yellow-200'>
      <div>munyaneza robben</div>
        <div>munyaneza robben</div>
        <div>munyaneza robben</div>
        <div>munyaneza robben</div>
        <div>munyaneza robben</div>
        <div>munyaneza robben</div>

      </div>
</div>

    </div>




  );
}

export default Home;
