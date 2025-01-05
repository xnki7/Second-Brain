import { Button } from '../components/Button';
import { ShareIcon } from '../icons/ShareIcon';
import { PlusIcon } from '../icons/PlusIcon';
import { Card } from '../components/Card';
import { CreateContentModal } from '../components/CreateContentModal';
import { useState } from 'react';
import { Sidebar } from '../components/Sidebar';

function Dashboard() {
    const [modalOpen, setModalOpen] = useState(false)
    return (<div>
        <Sidebar />
        <div className='p-4 ml-72 min-h-screen bg-gray-100 border-2'>
            <CreateContentModal open={modalOpen} onClose={() => { setModalOpen(false) }} />
            <div className='flex justify-end gap-4'>< Button varient='primary' text="Add content" startIcon={<PlusIcon />} onClick={() => setModalOpen(true)} /> < Button varient='secondary' text="Share brain" startIcon={<ShareIcon />} /></div>
            <div className='flex gap-4'>
                <Card title="My Tweet" type="twitter" link="https://x.com/Ankified/status/1874726633736970448" />
                <Card title="My YouTube Video" type="youtube" link="https://www.youtube.com/watch?v=xJaPrnI7LAA" />
            </div>
        </div>
    </div>
    )
}

export default Dashboard
