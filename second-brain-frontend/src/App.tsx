import './App.css'
import { Button } from './components/Button';
import { ShareIcon } from './icons/ShareIcon';
import { PlusIcon } from './icons/PlusIcon';
import { Card } from './components/Card';
import { CreateContentModal } from './components/CreateContentModal';

function App() {
  return (
    <div className='p-4'>
      <CreateContentModal open={true} onClose={() => { }} />
      <div className='flex justify-end gap-4'>< Button varient='primary' text="Add content" startIcon={<PlusIcon />} /> < Button varient='secondary' text="Share brain" startIcon={<ShareIcon />} /></div>
      <div className='flex gap-4'>
        <Card title="My Tweet" type="twitter" link="https://x.com/Ankified/status/1874726633736970448" />
        <Card title="My YouTube Video" type="youtube" link="https://www.youtube.com/watch?v=xJaPrnI7LAA" />
      </div>
    </div>
  )
}

export default App
