
export type GetCustomerLicenseTypesListResponse = {
    customerLicenseTypes: CustomerLicenseType[]
    total: number
}

export type Filter = {
    purchasedProducts: string
    purchaseChannel: Array<string>
}

export type CustomerLicenseType = {
    id?:number
    
name?: string


    createDate?:string    
    latestEditDate?:string
}

