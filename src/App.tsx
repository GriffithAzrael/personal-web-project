import './App.css';

function App() {
  return (
    <>
      {/* Header */}
      <div className='flex w-full px-20 py-5 fixed justify-between items-center bg-black/20 z-50'>
        <img src='Haybreakers-logo.png' alt='Logo' className='h-10' />
        <div className='flex items-center gap-10 text-white'>
          <button>About</button>
          <button>Skill</button>
          <button>Projects</button>
          <button>FAQ</button>
          <button>Contact</button>
        </div>
      </div>
      {/* Main Content */}
      <div className="min-h-screen bg-[url('desert.jpg')] bg-cover bg-center bg-fixed">
        <div className='min-h-screen bg-black/25'>
        <div className='px-20 pt-24 z-10 text-white'>
          <h1 className='font-bold'>Test</h1>
        </div>
        </div>
      </div>
      {/* Footer */}
    </>
  );
}

export default App;
