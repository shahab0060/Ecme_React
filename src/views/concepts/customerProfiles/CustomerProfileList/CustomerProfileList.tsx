
import AdaptiveCard from '@/components/shared/AdaptiveCard'
import Container from '@/components/shared/Container'
import CustomerProfileListTable from './components/CustomerProfileListTable'
import CustomerProfileListActionTools from './components/CustomerProfileListActionTools'
import CustomerProfilesListTableTools from './components/CustomerProfileListTableTools'
import CustomerProfileListSelected from './components/CustomerProfileListSelected'

const CustomerProfileList = () => {
    return (
        <>
            <Container>
                <AdaptiveCard>
                    <div className="flex flex-col gap-4">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                            <h3>پروفایل های مشتری</h3>
                            <CustomerProfileListActionTools />
                        </div>
                        <CustomerProfilesListTableTools />
                        <CustomerProfileListTable />
                    </div>
                </AdaptiveCard>
            </Container>
            <CustomerProfileListSelected />
        </>
    )
}

export default CustomerProfileList

