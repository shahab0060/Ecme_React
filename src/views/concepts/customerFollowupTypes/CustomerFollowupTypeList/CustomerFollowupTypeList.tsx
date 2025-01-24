
import AdaptiveCard from '@/components/shared/AdaptiveCard'
import Container from '@/components/shared/Container'
import CustomerFollowupTypeListTable from './components/CustomerFollowupTypeListTable'
import CustomerFollowupTypeListActionTools from './components/CustomerFollowupTypeListActionTools'
import CustomerFollowupTypesListTableTools from './components/CustomerFollowupTypeListTableTools'
import CustomerFollowupTypeListSelected from './components/CustomerFollowupTypeListSelected'

const CustomerFollowupTypeList = () => {
    return (
        <>
            <Container>
                <AdaptiveCard>
                    <div className="flex flex-col gap-4">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                            <h3>انواع پیگیری مشتری</h3>
                            <CustomerFollowupTypeListActionTools />
                        </div>
                        <CustomerFollowupTypesListTableTools />
                        <CustomerFollowupTypeListTable />
                    </div>
                </AdaptiveCard>
            </Container>
            <CustomerFollowupTypeListSelected />
        </>
    )
}

export default CustomerFollowupTypeList

