
export type GetWorkerEventsListResponse = {
    workerEvents: WorkerEvent[]
    total: number
}

export type Filter = {
    purchasedProducts: string
    purchaseChannel: Array<string>
}

export type WorkerEvent = {
    id?:number
    
customerProfileId?: number 


CustomerProfileTitle?: number 

transferCount?: number 



transferDateTime?: Date



isSucceed?: boolean


    createDate?:string    
    latestEditDate?:string
}

