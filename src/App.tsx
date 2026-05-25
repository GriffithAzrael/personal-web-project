import './App.css';

function App() {
  return (
    <>
      {/* Header */}
      <div className='flex w-full px-20 py-5 fixed justify-between items-center bg-black/20 z-50'>
        <img src='Haybreakers-logo.png' alt='Logo' className='h-10' />
        <div className='flex items-center gap-10 text-white tracking-wide '>
          <button className='hover:text-shadow-[0px_0px_10px_rgba(255,255,255,0.5)]'>
            About
          </button>
          <button className='hover:text-shadow-[0px_0px_10px_rgba(255,255,255,0.5)]'>
            Skill
          </button>
          <button className='hover:text-shadow-[0px_0px_10px_rgba(255,255,255,0.5)]'>
            Projects
          </button>
          <button className='hover:text-shadow-[0px_0px_10px_rgba(255,255,255,0.5)]'>
            FAQ
          </button>
          <button className='hover:text-shadow-[0px_0px_10px_rgba(255,255,255,0.5)]'>
            Contact
          </button>
        </div>
      </div>
      {/* Main Content */}
      <div className="min-h-screen overflow-x-hidden bg-[url('desert.jpg')] bg-cover bg-center bg-fixed">
        <div className='min-h-screen bg-black/25'>
          <div className='px-20 pt-24 z-10 text-white'>
            {/* Hero */}
            <section className='flex items-center justify-between'>
              <div className='flex flex-col gap-2'>
                <h1 className='font-bold text-3xl'>Hero</h1>
                <p className='text-lg'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Libero, veniam!
                </p>
              </div>
              <img className='w-1/4' src='hero-image.png' alt='Hero image' />
            </section>
          </div>
        </div>
      </div>
      {/* Footer */}
    </>
  );
}

export default App;
