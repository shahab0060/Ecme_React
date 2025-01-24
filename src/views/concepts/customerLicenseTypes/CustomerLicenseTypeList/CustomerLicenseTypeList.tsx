
import AdaptiveCard from '@/components/shared/AdaptiveCard'
import Container from '@/components/shared/Container'
import CustomerLicenseTypeListTable from './components/CustomerLicenseTypeListTable'
import CustomerLicenseTypeListActionTools from './components/CustomerLicenseTypeListActionTools'
import CustomerLicenseTypesListTableTools from './components/CustomerLicenseTypeListTableTools'
import CustomerLicenseTypeListSelected from './components/CustomerLicenseTypeListSelected'

const CustomerLicenseTypeList = () => {
    return (
        <>
            <Container>
                <AdaptiveCard>
                    <div className="flex flex-col gap-4">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                            <h3>نوع مجوز کاربر ها</h3>
                            <CustomerLicenseTypeListActionTools />
                        </div>
                        <CustomerLicenseTypesListTableTools />
                        <CustomerLicenseTypeListTable />
                    </div>
                </AdaptiveCard>
            </Container>
            <CustomerLicenseTypeListSelected />
        </>
    )
}

export default CustomerLicenseTypeList

