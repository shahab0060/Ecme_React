
import AdaptiveCard from '@/components/shared/AdaptiveCard'
import Container from '@/components/shared/Container'
import CustomerPhoneListTable from './components/CustomerPhoneListTable'
import CustomerPhoneListActionTools from './components/CustomerPhoneListActionTools'
import CustomerPhonesListTableTools from './components/CustomerPhoneListTableTools'
import CustomerPhoneListSelected from './components/CustomerPhoneListSelected'

const CustomerPhoneList = () => {
    return (
        <>
            <Container>
                <AdaptiveCard>
                    <div className="flex flex-col gap-4">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                            <h3>تلفن های مشتری</h3>
                            <CustomerPhoneListActionTools />
                        </div>
                        <CustomerPhonesListTableTools />
                        <CustomerPhoneListTable />
                    </div>
                </AdaptiveCard>
            </Container>
            <CustomerPhoneListSelected />
        </>
    )
}

export default CustomerPhoneList

