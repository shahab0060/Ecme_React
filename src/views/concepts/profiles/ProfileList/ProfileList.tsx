
import AdaptiveCard from '@/components/shared/AdaptiveCard'
import Container from '@/components/shared/Container'
import ProfileListTable from './components/ProfileListTable'
import ProfileListActionTools from './components/ProfileListActionTools'
import ProfilesListTableTools from './components/ProfileListTableTools'
import ProfileListSelected from './components/ProfileListSelected'

const ProfileList = () => {
    return (
        <>
            <Container>
                <AdaptiveCard>
                    <div className="flex flex-col gap-4">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                            <h3>پروفایل ها</h3>
                            <ProfileListActionTools />
                        </div>
                        <ProfilesListTableTools />
                        <ProfileListTable />
                    </div>
                </AdaptiveCard>
            </Container>
            <ProfileListSelected />
        </>
    )
}

export default ProfileList

