
export type GetCustomerUsersListResponse = {
    customerUsers: CustomerUser[]
    total: number
}

export type Filter = {
    purchasedProducts: string
    purchaseChannel: Array<string>
}

export type CustomerUser = {
    id?:number
    
customerId?: number 


CustomerTitle?: string

userId?: number 


UserTitle?: string
    createDate?:string    
    latestEditDate?:string
}

