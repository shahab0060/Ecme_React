
export type GetProfilesListResponse = {
    profiles: Profile[]
    total: number
}

export type Filter = {
    purchasedProducts: string
    purchaseChannel: Array<string>
}

export type Profile = {
    id?:number
    
name?: string



branch?: string



brandId?: number 


BrandTitle?: string

dbName?: string



productId?: number 


ProductTitle?: string
    createDate?:string    
    latestEditDate?:string
}

