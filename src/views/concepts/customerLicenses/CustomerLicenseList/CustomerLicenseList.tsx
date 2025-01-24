
import AdaptiveCard from '@/components/shared/AdaptiveCard'
import Container from '@/components/shared/Container'
import CustomerLicenseListTable from './components/CustomerLicenseListTable'
import CustomerLicenseListActionTools from './components/CustomerLicenseListActionTools'
import CustomerLicensesListTableTools from './components/CustomerLicenseListTableTools'
import CustomerLicenseListSelected from './components/CustomerLicenseListSelected'

const CustomerLicenseList = () => {
    return (
        <>
            <Container>
                <AdaptiveCard>
                    <div className="flex flex-col gap-4">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                            <h3>مجوز کاربر ها</h3>
                            <CustomerLicenseListActionTools />
                        </div>
                        <CustomerLicensesListTableTools />
                        <CustomerLicenseListTable />
                    </div>
                </AdaptiveCard>
            </Container>
            <CustomerLicenseListSelected />
        </>
    )
}

export default CustomerLicenseList

