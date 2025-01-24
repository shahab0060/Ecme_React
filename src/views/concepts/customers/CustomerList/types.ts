
export type GetCustomersListResponse = {
    customers: Customer[]
    total: number
}

export type Filter = {
    purchasedProducts: string
    purchaseChannel: Array<string>
}

export type Customer = {
    id?:number
    
customerTitleId?: number 


CustomerTitleTitle?: string

displayName?: string



locationId?: number 


LocationTitle?: string

phoneNumber?: string



securityStamp?: string



otp?: string



activationCode?: string



activationCodeExpirationTime?: Date



jobStart?: number 



jobEnd?: number 



jobInterval?: number 



securityStampExpirationDate?: Date



tokenId?: string



activityFieldId?: number 


ActivityFieldTitle?: string

firstName?: string



lastName?: string



legalName?: string


    createDate?:string    
    latestEditDate?:string
}

