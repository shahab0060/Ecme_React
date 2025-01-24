
import AdaptiveCard from '@/components/shared/AdaptiveCard'
import Container from '@/components/shared/Container'
import ProfileDataTypeListTable from './components/ProfileDataTypeListTable'
import ProfileDataTypeListActionTools from './components/ProfileDataTypeListActionTools'
import ProfileDataTypesListTableTools from './components/ProfileDataTypeListTableTools'
import ProfileDataTypeListSelected from './components/ProfileDataTypeListSelected'

const ProfileDataTypeList = () => {
    return (
        <>
            <Container>
                <AdaptiveCard>
                    <div className="flex flex-col gap-4">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                            <h3>نوع دیتا پروفایل ها</h3>
                            <ProfileDataTypeListActionTools />
                        </div>
                        <ProfileDataTypesListTableTools />
                        <ProfileDataTypeListTable />
                    </div>
                </AdaptiveCard>
            </Container>
            <ProfileDataTypeListSelected />
        </>
    )
}

export default ProfileDataTypeList

