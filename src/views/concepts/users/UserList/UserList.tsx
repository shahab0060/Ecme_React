
import AdaptiveCard from '@/components/shared/AdaptiveCard'
import Container from '@/components/shared/Container'
import UserListTable from './components/UserListTable'
import UserListActionTools from './components/UserListActionTools'
import UsersListTableTools from './components/UserListTableTools'
import UserListSelected from './components/UserListSelected'

const UserList = () => {
    return (
        <>
            <Container>
                <AdaptiveCard>
                    <div className="flex flex-col gap-4">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                            <h3>کاربر ها</h3>
                            <UserListActionTools />
                        </div>
                        <UsersListTableTools />
                        <UserListTable />
                    </div>
                </AdaptiveCard>
            </Container>
            <UserListSelected />
        </>
    )
}

export default UserList

