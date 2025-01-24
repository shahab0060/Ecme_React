
export type GetUsersListResponse = {
    users: User[]
    total: number
}

export type Filter = {
    purchasedProducts: string
    purchaseChannel: Array<string>
}

export type User = {
    id?:number
    
phoneNumber?: string



firstName?: string



lastName?: string



isSuperAdmin?: boolean



phoneNumberActivationCode?: string



phoneNumberActivationCodeExpirationTime?: Date



password?: string


    createDate?:string    
    latestEditDate?:string
}

