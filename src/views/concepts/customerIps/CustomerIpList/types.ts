
export type GetCustomerIpsListResponse = {
    customerIps: CustomerIp[]
    total: number
}

export type Filter = {
    purchasedProducts: string
    purchaseChannel: Array<string>
}

export type CustomerIp = {
    id?:number
    
customerId?: number 


CustomerTitle?: string

iP?: string


    createDate?:string    
    latestEditDate?:string
}

