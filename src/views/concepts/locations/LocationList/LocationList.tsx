
import AdaptiveCard from '@/components/shared/AdaptiveCard'
import Container from '@/components/shared/Container'
import LocationListTable from './components/LocationListTable'
import LocationListActionTools from './components/LocationListActionTools'
import LocationsListTableTools from './components/LocationListTableTools'
import LocationListSelected from './components/LocationListSelected'

const LocationList = () => {
    return (
        <>
            <Container>
                <AdaptiveCard>
                    <div className="flex flex-col gap-4">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                            <h3>[object Object] ها</h3>
                            <LocationListActionTools />
                        </div>
                        <LocationsListTableTools />
                        <LocationListTable />
                    </div>
                </AdaptiveCard>
            </Container>
            <LocationListSelected />
        </>
    )
}

export default LocationList

