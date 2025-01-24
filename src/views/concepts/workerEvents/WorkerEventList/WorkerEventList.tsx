
import AdaptiveCard from '@/components/shared/AdaptiveCard'
import Container from '@/components/shared/Container'
import WorkerEventListTable from './components/WorkerEventListTable'
import WorkerEventListActionTools from './components/WorkerEventListActionTools'
import WorkerEventsListTableTools from './components/WorkerEventListTableTools'
import WorkerEventListSelected from './components/WorkerEventListSelected'

const WorkerEventList = () => {
    return (
        <>
            <Container>
                <AdaptiveCard>
                    <div className="flex flex-col gap-4">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                            <h3>ایونت های ورکر</h3>
                            <WorkerEventListActionTools />
                        </div>
                        <WorkerEventsListTableTools />
                        <WorkerEventListTable />
                    </div>
                </AdaptiveCard>
            </Container>
            <WorkerEventListSelected />
        </>
    )
}

export default WorkerEventList

