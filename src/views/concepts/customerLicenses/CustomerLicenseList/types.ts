
export type GetCustomerLicensesListResponse = {
    customerLicenses: CustomerLicense[]
    total: number
}

export type Filter = {
    purchasedProducts: string
    purchaseChannel: Array<string>
}

export type CustomerLicense = {
    id?:number
    
customerId?: number 


CustomerTitle?: string

customerLicenseTypeId?: number 


CustomerLicenseTypeTitle?: number 

expirationDate?: Date



description?: string



customerLicenseReasonTypeId?: number 


CustomerLicenseReasonTypeTitle?: string
    createDate?:string    
    latestEditDate?:string
}

