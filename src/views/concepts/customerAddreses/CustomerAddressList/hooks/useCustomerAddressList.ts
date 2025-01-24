
import { apiGetCustomerAddresesList } from '@/services/CustomerAddresesService'
import useSWR from 'swr'
import { useCustomerAddressListStore } from '../store/customerAddressListStore'
import type { GetCustomerAddresesListResponse } from '../types'
import type { TableQueries } from '@/@types/common'

export default function useCustomerAddressList() {
    const {
        tableData,
        filterData,
        setTableData,
        selectedCustomerAddress,
        setSelectedCustomerAddress,
        setSelectAllCustomerAddress,
        setFilterData,
    } = useCustomerAddressListStore((state) => state)

    const { data, error, isLoading, mutate } = useSWR(
        ['CustomerAddress/list', { ...tableData, ...filterData }],
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        ([_, params]) =>
            apiGetCustomerAddresesList<GetCustomerAddresesListResponse, TableQueries>(params),
        {
            revalidateOnFocus: false,
        },
    )

    const customerAddressList = data?.customerAddreses || []

    const customerAddressListTotal = data?.total || 0

    return {
        customerAddressList,
        customerAddressListTotal,
        error,
        isLoading,
        tableData,
        filterData,
        mutate,
        setTableData,
        selectedCustomerAddress,
        setSelectedCustomerAddress,
        setSelectAllCustomerAddress,
        setFilterData,
    }
}
