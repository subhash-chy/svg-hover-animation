import { CircleStackIcon } from '@heroicons/react/24/outline';
import StackIcon from './components/StackIcon';

function App() {
  return (
    <div className='flex flex-col items-center justify-center px-4 py-10'>
      <h1 className='text-3xl font-bold mb-5'>Hover SVG Animation</h1>

      <div className='bg-neutral-900 p-10 rounded-lg border-2 border-neutral-800 flex items-center justify-center'>
        <div className='space-y-10'>
          <div className='bg-orange-500/10 w-min p-2 text-orange-500'>
            <CircleStackIcon className='size-6' />
          </div>

          <div className='max-w-[350px]'>
            <h2 className='text-4xl font-bold mb-5'>The Card</h2>
            <p className='text-sm opacity-45'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat,
              dolor voluptates! Magnam cum enim dolores earum! Id omnis nemo
              voluptates voluptatibus qui labore, sit mollitia in iure quaerat
              cupiditate magnam!
            </p>
          </div>
        </div>

        <div>
          <StackIcon className='size-96 stroke-[0.15] hover:stroke-[0.22] stroke-white fill-neutral-700/10' />
        </div>
      </div>
    </div>
  );
}

export default App;
