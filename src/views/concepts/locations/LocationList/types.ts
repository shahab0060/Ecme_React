
export type GetLocationsListResponse = {
    locations: Location[]
    total: number
}

export type Filter = {
    purchasedProducts: string
    purchaseChannel: Array<string>
}

export type Location = {
    id?:number
    
parentId?: number 


ParentTitle?: string

type?: string



name?: string


    createDate?:string    
    latestEditDate?:string
}

