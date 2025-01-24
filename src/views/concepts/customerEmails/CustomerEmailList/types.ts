
export type GetCustomerEmailsListResponse = {
    customerEmails: CustomerEmail[]
    total: number
}

export type Filter = {
    purchasedProducts: string
    purchaseChannel: Array<string>
}

export type CustomerEmail = {
    id?:number
    
customerId?: number 


CustomerTitle?: string

email?: string


    createDate?:string    
    latestEditDate?:string
}

