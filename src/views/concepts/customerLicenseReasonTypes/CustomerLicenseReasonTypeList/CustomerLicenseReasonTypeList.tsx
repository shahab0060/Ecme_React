
import AdaptiveCard from '@/components/shared/AdaptiveCard'
import Container from '@/components/shared/Container'
import CustomerLicenseReasonTypeListTable from './components/CustomerLicenseReasonTypeListTable'
import CustomerLicenseReasonTypeListActionTools from './components/CustomerLicenseReasonTypeListActionTools'
import CustomerLicenseReasonTypesListTableTools from './components/CustomerLicenseReasonTypeListTableTools'
import CustomerLicenseReasonTypeListSelected from './components/CustomerLicenseReasonTypeListSelected'

const CustomerLicenseReasonTypeList = () => {
    return (
        <>
            <Container>
                <AdaptiveCard>
                    <div className="flex flex-col gap-4">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                            <h3>نوع دلیل مجوز های کاربر</h3>
                            <CustomerLicenseReasonTypeListActionTools />
                        </div>
                        <CustomerLicenseReasonTypesListTableTools />
                        <CustomerLicenseReasonTypeListTable />
                    </div>
                </AdaptiveCard>
            </Container>
            <CustomerLicenseReasonTypeListSelected />
        </>
    )
}

export default CustomerLicenseReasonTypeList

