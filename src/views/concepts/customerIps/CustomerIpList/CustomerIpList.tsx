
import AdaptiveCard from '@/components/shared/AdaptiveCard'
import Container from '@/components/shared/Container'
import CustomerIpListTable from './components/CustomerIpListTable'
import CustomerIpListActionTools from './components/CustomerIpListActionTools'
import CustomerIpsListTableTools from './components/CustomerIpListTableTools'
import CustomerIpListSelected from './components/CustomerIpListSelected'

const CustomerIpList = () => {
    return (
        <>
            <Container>
                <AdaptiveCard>
                    <div className="flex flex-col gap-4">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                            <h3>آیپی های مشتری</h3>
                            <CustomerIpListActionTools />
                        </div>
                        <CustomerIpsListTableTools />
                        <CustomerIpListTable />
                    </div>
                </AdaptiveCard>
            </Container>
            <CustomerIpListSelected />
        </>
    )
}

export default CustomerIpList

