
export type GetProfileDatasListResponse = {
    profileDatas: ProfileData[]
    total: number
}

export type Filter = {
    purchasedProducts: string
    purchaseChannel: Array<string>
}

export type ProfileData = {
    id?:number
    
parentId?: number 


ParentTitle?: number 

profileDataTypeId?: number 


ProfileDataTypeTitle?: string

profileId?: number 


ProfileTitle?: string

name?: string



fetchCode?: string


    createDate?:string    
    latestEditDate?:string
}

