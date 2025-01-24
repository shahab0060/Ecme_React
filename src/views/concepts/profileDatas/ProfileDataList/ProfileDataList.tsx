
import AdaptiveCard from '@/components/shared/AdaptiveCard'
import Container from '@/components/shared/Container'
import ProfileDataListTable from './components/ProfileDataListTable'
import ProfileDataListActionTools from './components/ProfileDataListActionTools'
import ProfileDatasListTableTools from './components/ProfileDataListTableTools'
import ProfileDataListSelected from './components/ProfileDataListSelected'

const ProfileDataList = () => {
    return (
        <>
            <Container>
                <AdaptiveCard>
                    <div className="flex flex-col gap-4">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                            <h3>اطلاعات پروفایل ها</h3>
                            <ProfileDataListActionTools />
                        </div>
                        <ProfileDatasListTableTools />
                        <ProfileDataListTable />
                    </div>
                </AdaptiveCard>
            </Container>
            <ProfileDataListSelected />
        </>
    )
}

export default ProfileDataList

