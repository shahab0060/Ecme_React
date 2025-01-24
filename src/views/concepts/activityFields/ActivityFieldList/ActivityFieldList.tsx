
import AdaptiveCard from '@/components/shared/AdaptiveCard'
import Container from '@/components/shared/Container'
import ActivityFieldListTable from './components/ActivityFieldListTable'
import ActivityFieldListActionTools from './components/ActivityFieldListActionTools'
import ActivityFieldsListTableTools from './components/ActivityFieldListTableTools'
import ActivityFieldListSelected from './components/ActivityFieldListSelected'

const ActivityFieldList = () => {
    return (
        <>
            <Container>
                <AdaptiveCard>
                    <div className="flex flex-col gap-4">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                            <h3>حوزه های کاری</h3>
                            <ActivityFieldListActionTools />
                        </div>
                        <ActivityFieldsListTableTools />
                        <ActivityFieldListTable />
                    </div>
                </AdaptiveCard>
            </Container>
            <ActivityFieldListSelected />
        </>
    )
}

export default ActivityFieldList

