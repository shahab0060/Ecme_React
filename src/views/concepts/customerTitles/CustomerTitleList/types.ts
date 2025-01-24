
export type GetCustomerTitlesListResponse = {
    customerTitles: CustomerTitle[]
    total: number
}

export type Filter = {
    purchasedProducts: string
    purchaseChannel: Array<string>
}

export type CustomerTitle = {
    id?:number
    
title?: string


    createDate?:string    
    latestEditDate?:string
}

