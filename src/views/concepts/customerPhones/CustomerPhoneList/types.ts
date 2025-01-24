
export type GetCustomerPhonesListResponse = {
    customerPhones: CustomerPhone[]
    total: number
}

export type Filter = {
    purchasedProducts: string
    purchaseChannel: Array<string>
}

export type CustomerPhone = {
    id?:number
    
customerId?: number 


CustomerTitle?: string

phone?: string


    createDate?:string    
    latestEditDate?:string
}

