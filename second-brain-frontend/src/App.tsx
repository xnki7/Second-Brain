import './App.css'
import { Button } from './components/Button';
import { ShareIcon } from './icons/ShareIcon';
import { PlusIcon } from './icons/PlusIcon';

function App() {
  return (
    <div>< Button varient='primary' text="Hello" startIcon={<PlusIcon />} /> < Button varient='secondary' text="Share" startIcon={<ShareIcon />} /></div>
  )
}

export default App
