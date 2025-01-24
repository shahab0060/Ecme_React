
export type GetCustomerFollowupTypesListResponse = {
    customerFollowupTypes: CustomerFollowupType[]
    total: number
}

export type Filter = {
    purchasedProducts: string
    purchaseChannel: Array<string>
}

export type CustomerFollowupType = {
    id?:number
    
name?: string


    createDate?:string    
    latestEditDate?:string
}

