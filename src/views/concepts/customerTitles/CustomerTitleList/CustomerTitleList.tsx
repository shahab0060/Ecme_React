
import AdaptiveCard from '@/components/shared/AdaptiveCard'
import Container from '@/components/shared/Container'
import CustomerTitleListTable from './components/CustomerTitleListTable'
import CustomerTitleListActionTools from './components/CustomerTitleListActionTools'
import CustomerTitlesListTableTools from './components/CustomerTitleListTableTools'
import CustomerTitleListSelected from './components/CustomerTitleListSelected'

const CustomerTitleList = () => {
    return (
        <>
            <Container>
                <AdaptiveCard>
                    <div className="flex flex-col gap-4">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                            <h3>عنوان های مشتری</h3>
                            <CustomerTitleListActionTools />
                        </div>
                        <CustomerTitlesListTableTools />
                        <CustomerTitleListTable />
                    </div>
                </AdaptiveCard>
            </Container>
            <CustomerTitleListSelected />
        </>
    )
}

export default CustomerTitleList

