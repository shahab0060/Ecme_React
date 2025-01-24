
import AdaptiveCard from '@/components/shared/AdaptiveCard'
import Container from '@/components/shared/Container'
import CustomerUserListTable from './components/CustomerUserListTable'
import CustomerUserListActionTools from './components/CustomerUserListActionTools'
import CustomerUsersListTableTools from './components/CustomerUserListTableTools'
import CustomerUserListSelected from './components/CustomerUserListSelected'

const CustomerUserList = () => {
    return (
        <>
            <Container>
                <AdaptiveCard>
                    <div className="flex flex-col gap-4">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                            <h3>کاربر های مشتری</h3>
                            <CustomerUserListActionTools />
                        </div>
                        <CustomerUsersListTableTools />
                        <CustomerUserListTable />
                    </div>
                </AdaptiveCard>
            </Container>
            <CustomerUserListSelected />
        </>
    )
}

export default CustomerUserList

