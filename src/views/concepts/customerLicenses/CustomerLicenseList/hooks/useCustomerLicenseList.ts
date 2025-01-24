
import { apiGetCustomerLicensesList } from '@/services/CustomerLicensesService'
import useSWR from 'swr'
import { useCustomerLicenseListStore } from '../store/customerLicenseListStore'
import type { GetCustomerLicensesListResponse } from '../types'
import type { TableQueries } from '@/@types/common'

export default function useCustomerLicenseList() {
    const {
        tableData,
        filterData,
        setTableData,
        selectedCustomerLicense,
        setSelectedCustomerLicense,
        setSelectAllCustomerLicense,
        setFilterData,
    } = useCustomerLicenseListStore((state) => state)

    const { data, error, isLoading, mutate } = useSWR(
        ['CustomerLicense/list', { ...tableData, ...filterData }],
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        ([_, params]) =>
            apiGetCustomerLicensesList<GetCustomerLicensesListResponse, TableQueries>(params),
        {
            revalidateOnFocus: false,
        },
    )

    const customerLicenseList = data?.customerLicenses || []

    const customerLicenseListTotal = data?.total || 0

    return {
        customerLicenseList,
        customerLicenseListTotal,
        error,
        isLoading,
        tableData,
        filterData,
        mutate,
        setTableData,
        selectedCustomerLicense,
        setSelectedCustomerLicense,
        setSelectAllCustomerLicense,
        setFilterData,
    }
}
