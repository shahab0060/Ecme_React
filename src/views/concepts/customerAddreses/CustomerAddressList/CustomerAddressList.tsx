
import AdaptiveCard from '@/components/shared/AdaptiveCard'
import Container from '@/components/shared/Container'
import CustomerAddressListTable from './components/CustomerAddressListTable'
import CustomerAddressListActionTools from './components/CustomerAddressListActionTools'
import CustomerAddresesListTableTools from './components/CustomerAddressListTableTools'
import CustomerAddressListSelected from './components/CustomerAddressListSelected'

const CustomerAddressList = () => {
    return (
        <>
            <Container>
                <AdaptiveCard>
                    <div className="flex flex-col gap-4">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                            <h3>آدرس مشتری ها</h3>
                            <CustomerAddressListActionTools />
                        </div>
                        <CustomerAddresesListTableTools />
                        <CustomerAddressListTable />
                    </div>
                </AdaptiveCard>
            </Container>
            <CustomerAddressListSelected />
        </>
    )
}

export default CustomerAddressList

