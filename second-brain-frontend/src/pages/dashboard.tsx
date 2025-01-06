import { Button } from '../components/Button';
import { ShareIcon } from '../icons/ShareIcon';
import { PlusIcon } from '../icons/PlusIcon';
import { Card } from '../components/Card';
import { CreateContentModal } from '../components/CreateContentModal';
import { useState } from 'react';
import { Sidebar } from '../components/Sidebar';
import { useContent } from '../hooks/useContent';

function Dashboard() {
    const [modalOpen, setModalOpen] = useState(false)
    const contents = useContent();
    return (<div>
        <Sidebar />
        <div className='p-4 ml-72 min-h-screen bg-gray-100 border-2'>
            <CreateContentModal open={modalOpen} onClose={() => { setModalOpen(false) }} />
            <div className='flex justify-end gap-4'>< Button varient='primary' text="Add content" startIcon={<PlusIcon />} onClick={() => setModalOpen(true)} /> < Button varient='secondary' text="Share brain" startIcon={<ShareIcon />} /></div>
            <div className='flex gap-4'>
                {contents?.map((content) => <Card key={content._id} title={content.title} type={content.type} link={content.link} />)}
            </div>
        </div>
    </div>
    )
}

export default Dashboard
