
import AdaptiveCard from '@/components/shared/AdaptiveCard'
import Container from '@/components/shared/Container'
import CustomerFollowupListTable from './components/CustomerFollowupListTable'
import CustomerFollowupListActionTools from './components/CustomerFollowupListActionTools'
import CustomerFollowupsListTableTools from './components/CustomerFollowupListTableTools'
import CustomerFollowupListSelected from './components/CustomerFollowupListSelected'

const CustomerFollowupList = () => {
    return (
        <>
            <Container>
                <AdaptiveCard>
                    <div className="flex flex-col gap-4">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                            <h3>پیگیری های مشتری</h3>
                            <CustomerFollowupListActionTools />
                        </div>
                        <CustomerFollowupsListTableTools />
                        <CustomerFollowupListTable />
                    </div>
                </AdaptiveCard>
            </Container>
            <CustomerFollowupListSelected />
        </>
    )
}

export default CustomerFollowupList

