
import Button from '@/components/ui/Button'
import { TbCloudDownload, TbUserPlus } from 'react-icons/tb'
import { useNavigate } from 'react-router-dom'
import useLocationList from '../hooks/useLocationList'
import { CSVLink } from 'react-csv'

const LocationListActionTools = () => {
    const navigate = useNavigate()

    const { locationList } = useLocationList()

    return (
        <div className="flex flex-col md:flex-row gap-3">
            <CSVLink
                className="w-full"
                filename="locationList.csv"
                data={locationList}
            >
                <Button
                    icon={<TbCloudDownload className="text-xl" />}
                    className="w-full"
                >
                    دانلود کنید
                </Button>
            </CSVLink>
            <Button
                variant="solid"
                icon={<TbUserPlus className="text-xl" />}
                onClick={() => navigate('/concepts/locations/location-create')}
            >
               جدید اضافه کنید
            </Button>
        </div>
    )
}

export default LocationListActionTools

