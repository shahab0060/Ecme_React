
export type GetProductsListResponse = {
    products: Product[]
    total: number
}

export type Filter = {
    purchasedProducts: string
    purchaseChannel: Array<string>
}

export type Product = {
    id?:number
    
name?: string


    createDate?:string    
    latestEditDate?:string
}

