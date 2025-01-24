
export type GetActivityFieldsListResponse = {
    activityFields: ActivityField[]
    total: number
}

export type Filter = {
    purchasedProducts: string
    purchaseChannel: Array<string>
}

export type ActivityField = {
    id?:number
    
parentId?: number 


ParentTitle?: string

type?: string



name?: string


    createDate?:string    
    latestEditDate?:string
}

