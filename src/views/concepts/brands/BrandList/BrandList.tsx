
import AdaptiveCard from '@/components/shared/AdaptiveCard'
import Container from '@/components/shared/Container'
import BrandListTable from './components/BrandListTable'
import BrandListActionTools from './components/BrandListActionTools'
import BrandsListTableTools from './components/BrandListTableTools'
import BrandListSelected from './components/BrandListSelected'

const BrandList = () => {
    return (
        <>
            <Container>
                <AdaptiveCard>
                    <div className="flex flex-col gap-4">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                            <h3>برند ها</h3>
                            <BrandListActionTools />
                        </div>
                        <BrandsListTableTools />
                        <BrandListTable />
                    </div>
                </AdaptiveCard>
            </Container>
            <BrandListSelected />
        </>
    )
}

export default BrandList

