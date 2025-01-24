
export type GetProfileDataTypesListResponse = {
    profileDataTypes: ProfileDataType[]
    total: number
}

export type Filter = {
    purchasedProducts: string
    purchaseChannel: Array<string>
}

export type ProfileDataType = {
    id?:number
    
name?: string


    createDate?:string    
    latestEditDate?:string
}

