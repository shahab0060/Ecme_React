
export type GetCustomerProfilesListResponse = {
    customerProfiles: CustomerProfile[]
    total: number
}

export type Filter = {
    purchasedProducts: string
    purchaseChannel: Array<string>
}

export type CustomerProfile = {
    id?:number
    
customerId?: number 


CustomerTitle?: string

profileId?: number 


ProfileTitle?: string

dbServer?: string



dbUserId?: string



dbPassword?: string



dbName?: string



dbOptions?: string


    createDate?:string    
    latestEditDate?:string
}

