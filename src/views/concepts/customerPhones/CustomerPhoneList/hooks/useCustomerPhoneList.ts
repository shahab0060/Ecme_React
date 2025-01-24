
import { apiGetCustomerPhonesList } from '@/services/CustomerPhonesService'
import useSWR from 'swr'
import { useCustomerPhoneListStore } from '../store/customerPhoneListStore'
import type { GetCustomerPhonesListResponse } from '../types'
import type { TableQueries } from '@/@types/common'

export default function useCustomerPhoneList() {
    const {
        tableData,
        filterData,
        setTableData,
        selectedCustomerPhone,
        setSelectedCustomerPhone,
        setSelectAllCustomerPhone,
        setFilterData,
    } = useCustomerPhoneListStore((state) => state)

    const { data, error, isLoading, mutate } = useSWR(
        ['CustomerPhone/list', { ...tableData, ...filterData }],
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        ([_, params]) =>
            apiGetCustomerPhonesList<GetCustomerPhonesListResponse, TableQueries>(params),
        {
            revalidateOnFocus: false,
        },
    )

    const customerPhoneList = data?.customerPhones || []

    const customerPhoneListTotal = data?.total || 0

    return {
        customerPhoneList,
        customerPhoneListTotal,
        error,
        isLoading,
        tableData,
        filterData,
        mutate,
        setTableData,
        selectedCustomerPhone,
        setSelectedCustomerPhone,
        setSelectAllCustomerPhone,
        setFilterData,
    }
}
