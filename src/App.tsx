import './App.css';

function App() {
  return (
    <>
      {/* Header */}
      <div className='flex w-full px-20 py-5 fixed justify-between items-center bg-black/20'>
        <img src="Haybreakers-logo.png" alt="Logo" className='h-10' />
        <div className='flex items-center gap-10'>
          <button>What I Do</button>
          <button>What I Don't Do</button>
        </div>
      </div>
      {/* Main Content */}
      <div className='px-20 pt-20'>
        <h1 className='font-bold'>Test</h1>
      </div>
      {/* Footer */}
    </>
  );
}

export default App;
