
export type GetCustomerAddresesListResponse = {
    customerAddreses: CustomerAddress[]
    total: number
}

export type Filter = {
    purchasedProducts: string
    purchaseChannel: Array<string>
}

export type CustomerAddress = {
    id?:number
    
customerId?: number 


CustomerTitle?: string

address?: string


    createDate?:string    
    latestEditDate?:string
}

