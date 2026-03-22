import './App.css'
import Sidebar from './features/Sidebar';


function App() {
  return (
    <div className='flex'>
      <Sidebar />
      <main className='w-full h-full'>

        <h1 className="text-3xl font-bold text-address-free mb-2">
          Hello Tailwind World!
        </h1>

        <h1 className="text-3xl font-bold text-primary mb-6">
          System Theme Text
        </h1>
        <h1 className="text-status-info">This text is primary.200</h1>
      </main>
    </div>
  );
}



export default App
