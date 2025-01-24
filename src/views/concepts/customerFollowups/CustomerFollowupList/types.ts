
export type GetCustomerFollowupsListResponse = {
    customerFollowups: CustomerFollowup[]
    total: number
}

export type Filter = {
    purchasedProducts: string
    purchaseChannel: Array<string>
}

export type CustomerFollowup = {
    id?:number
    
customerFollowupTypeId?: number 


CustomerFollowupTypeTitle?: string

customerId?: number 


CustomerTitle?: string

userId?: number 


UserTitle?: string

result?: string



referredUserId?: number 


ReferredUserTitle?: string

referredDescription?: string


    createDate?:string    
    latestEditDate?:string
}

