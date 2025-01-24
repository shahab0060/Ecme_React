
export type GetCustomerLicenseReasonTypesListResponse = {
    customerLicenseReasonTypes: CustomerLicenseReasonType[]
    total: number
}

export type Filter = {
    purchasedProducts: string
    purchaseChannel: Array<string>
}

export type CustomerLicenseReasonType = {
    id?:number
    
name?: string


    createDate?:string    
    latestEditDate?:string
}

