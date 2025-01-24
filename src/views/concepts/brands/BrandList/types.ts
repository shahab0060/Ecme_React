
export type GetBrandsListResponse = {
    brands: Brand[]
    total: number
}

export type Filter = {
    purchasedProducts: string
    purchaseChannel: Array<string>
}

export type Brand = {
    id?:number
    
name?: string


    createDate?:string    
    latestEditDate?:string
}

