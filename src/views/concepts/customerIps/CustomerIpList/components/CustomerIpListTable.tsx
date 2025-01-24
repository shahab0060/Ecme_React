
import { useMemo } from 'react'
import { useState } from 'react'
import Avatar from '@/components/ui/Avatar'
import Tag from '@/components/ui/Tag'
import Tooltip from '@/components/ui/Tooltip'
import DataTable from '@/components/shared/DataTable'
import useCustomerIpList from '../hooks/useCustomerIpList'
import { Link, useNavigate } from 'react-router-dom'
import cloneDeep from 'lodash/cloneDeep'
import { TbPencil, TbEye, TbTrash } from 'react-icons/tb'
import type { OnSortParam, ColumnDef, Row } from '@/components/shared/DataTable'
import type { CustomerIp } from '../types'
import type { TableQueries } from '@/@types/common'
import { apiDeleteCustomerIp, apiGetCustomerIp, apiGetCustomerIpsList } from '@/services/CustomerIpsService'
import Notification from '@/components/ui/Notification'
import toast from '@/components/ui/toast'

const NameColumn = ({ row }: { row: CustomerIp }) => {
    return (
        <div className="flex items-center">
            <Link
                className={`hover:text-primary ml-2 rtl:mr-2 font-semibold text-gray-900 dark:text-gray-100`}
                to={`/concepts/customerIps/customerIp-details/${row.id}`}
            >
                {row.iP}
            </Link>
        </div>
    )
}

const ActionColumn = ({
    onEdit,
    onViewDetail,
    onDelete,
}: {
    onEdit: () => void
    onViewDetail: () => void
    onDelete: () => void
}) => {
    return (
        <div className="flex items-center gap-3">
            <Tooltip title="ویرایش کنید">
                <div
                    className={`text-xl cursor-pointer select-none font-semibold`}
                    role="button"
                    onClick={onEdit}
                >
                    <TbPencil />
                </div>
            </Tooltip>
            <Tooltip title="مشاهده کنید">
                <div
                    className={`text-xl cursor-pointer select-none font-semibold`}
                    role="button"
                    onClick={onViewDetail}
                >
                    <TbEye />
                </div>
            </Tooltip>
            <Tooltip title="حذف کنید">
                <div
                    className={`text-xl cursor-pointer select-none font-semibold`}
                    role="button"
                    onClick={onDelete}
                >
                    <TbTrash />
                </div>
            </Tooltip>
        </div>
    )
}

const CustomerIpListTable = () => {
    const navigate = useNavigate()

    const {
        customerIpList,
        customerIpListTotal,
        tableData,
        isLoading,
        setTableData,
        setSelectAllCustomerIp,
        setSelectedCustomerIp,
        selectedCustomerIp,
    } = useCustomerIpList()

    const handleEdit = (customerIp: CustomerIp) => {
        navigate(`/concepts/customerIps/customerIp-edit/${customerIp.id}`)
    }

    const handleViewDetails = (customerIp: CustomerIp) => {
        navigate(`/concepts/customerIps/customerIp-details/${customerIp.id}`)
    }
    const [isSubmiting, setIsSubmiting] = useState(false)

    const handleDelete = async (customerIp: CustomerIp) => {
        if (customerIp.id) {
            try {
                const response = await apiDeleteCustomerIp(customerIp.id);
                setIsSubmiting(false)

                if (response.status === 200) {
                    toast.push(
                        <Notification type="success">آیپی مشتری حذف شد!</Notification>,
                        { placement: 'top-center' },
                    )
                    navigate('/concepts/customerIps/customerIp-list')
                    return;
                }
                if (response.status === 400) {
                    toast.push(
                        <Notification type="danger">${response.data}</Notification>,
                        { placement: 'top-center' },
                    )
                }
                return;
            }
            catch {

            }
        }
        toast.push(
            <Notification type="danger">مشکلی در انجام عملیات پیش آمد</Notification>,
            { placement: 'top-center' },
        )
    }

    const columns: ColumnDef<CustomerIp>[] = useMemo(
        () => [
            {
                header: 'آیپی',
                accessorKey: 'iP',
                cell: (props) => {
                    const row = props.row.original
                    return <NameColumn row={row} />
                },
            },
            
{
                header: 'مشتری',
                accessorKey: 'customerTitle',
            },
            {
                header: '',
                id: 'action',
                cell: (props) => (
                    <ActionColumn
                        onEdit={() => handleEdit(props.row.original)}
                        onViewDetail={() =>
                            handleViewDetails(props.row.original)
                        }
                        onDelete={() =>
                            handleDelete(props.row.original)
                        }
                    />
                ),
            },
        ],
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [],
    )

    const handleSetTableData = (data: TableQueries) => {
        setTableData(data)
        if (selectedCustomerIp.length > 0) {
            setSelectAllCustomerIp([])
        }
    }

    const handlePaginationChange = (page: number) => {
        const newTableData = cloneDeep(tableData)
        newTableData.pageId = page
        handleSetTableData(newTableData)
    }

    const handleSelectChange = (value: number) => {
        const newTableData = cloneDeep(tableData)
        newTableData.takeEntity = Number(value)
        newTableData.pageId = 1
        handleSetTableData(newTableData)
    }

    const handleSort = (sort: OnSortParam) => {
        var key = sort.key;
        var order = sort.order;
        if (key == null || key == "" || key == '')
            key = '0';
        if (order == null || order == "")
            order = 'ascending';
        const newTableData = cloneDeep(tableData)
        newTableData.sort = key as string;
        newTableData.sortType = order;

        handleSetTableData(newTableData)
    }

    const handleRowSelect = (checked: boolean, row: CustomerIp) => {
        setSelectedCustomerIp(checked, row)
    }

    const handleAllRowSelect = (checked: boolean, rows: Row<CustomerIp>[]) => {
        if (checked) {
            const originalRows = rows.map((row) => row.original)
            setSelectAllCustomerIp(originalRows)
        } else {
            setSelectAllCustomerIp([])
        }
    }

    return (
        <DataTable
            selectable
            columns={columns}
            data={customerIpList}
            noData={!isLoading && customerIpList.length === 0}
            skeletonAvatarColumns={[0]}
            skeletonAvatarProps={{ width: 28, height: 28 }}
            loading={isLoading}
            pagingData={{
                total: customerIpListTotal,
                pageId: tableData.pageId as number,
                takeEntity: tableData.takeEntity as number,
            }}
            checkboxChecked={(row) =>
                selectedCustomerIp.some((selected) => selected.id === row.id)
            }
            onPaginationChange={handlePaginationChange}
            onSelectChange={handleSelectChange}
            onSort={handleSort}
            onCheckBoxChange={handleRowSelect}
            onIndeterminateCheckBoxChange={handleAllRowSelect}
        />
    )
}

export default CustomerIpListTable
