
import AdaptiveCard from '@/components/shared/AdaptiveCard'
import Container from '@/components/shared/Container'
import ProductListTable from './components/ProductListTable'
import ProductListActionTools from './components/ProductListActionTools'
import ProductsListTableTools from './components/ProductListTableTools'
import ProductListSelected from './components/ProductListSelected'

const ProductList = () => {
    return (
        <>
            <Container>
                <AdaptiveCard>
                    <div className="flex flex-col gap-4">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                            <h3>محصول ها</h3>
                            <ProductListActionTools />
                        </div>
                        <ProductsListTableTools />
                        <ProductListTable />
                    </div>
                </AdaptiveCard>
            </Container>
            <ProductListSelected />
        </>
    )
}

export default ProductList

