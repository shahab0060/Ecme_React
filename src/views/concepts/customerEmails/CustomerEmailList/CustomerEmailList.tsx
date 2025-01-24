
import AdaptiveCard from '@/components/shared/AdaptiveCard'
import Container from '@/components/shared/Container'
import CustomerEmailListTable from './components/CustomerEmailListTable'
import CustomerEmailListActionTools from './components/CustomerEmailListActionTools'
import CustomerEmailsListTableTools from './components/CustomerEmailListTableTools'
import CustomerEmailListSelected from './components/CustomerEmailListSelected'

const CustomerEmailList = () => {
    return (
        <>
            <Container>
                <AdaptiveCard>
                    <div className="flex flex-col gap-4">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                            <h3>ایمیل های مشتری</h3>
                            <CustomerEmailListActionTools />
                        </div>
                        <CustomerEmailsListTableTools />
                        <CustomerEmailListTable />
                    </div>
                </AdaptiveCard>
            </Container>
            <CustomerEmailListSelected />
        </>
    )
}

export default CustomerEmailList

