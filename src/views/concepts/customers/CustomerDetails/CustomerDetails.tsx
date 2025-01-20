import Card from '@/components/ui/Card'
import Tabs from '@/components/ui/Tabs'
import Loading from '@/components/shared/Loading'
import { apiGetCustomer } from '@/services/CustomersService'
import useSWR from 'swr'
import { useParams } from 'react-router-dom'
import isEmpty from 'lodash/isEmpty'
import React, { useEffect, useState } from 'react';
import Container from '@/components/shared/Container'
import Button from '@/components/ui/Button'
import Notification from '@/components/ui/Notification'
import toast from '@/components/ui/toast'
import CustomerForm from '../CustomerForm'
import ConfirmDialog from '@/components/shared/ConfirmDialog'
import sleep from '@/utils/sleep'
import { TbTrash } from 'react-icons/tb'
import { useNavigate } from 'react-router-dom'
import type { CustomerFormSchema } from '../CustomerForm'
import type { Customer } from '../CustomerList/types'
import Input from '@/components/ui/Input'
import { FormItem } from '@/components/ui/Form'
import type { FormSectionBaseProps } from '../CustomerForm/types'
import { Controller } from 'react-hook-form'
import NumericInput from '@/components/shared/NumericInput'

type OverviewSectionProps = FormSectionBaseProps

const CustomerDetails = ({ control, errors }: OverviewSectionProps) => {
    const { id } = useParams()

    var isLoading = true;
    const [data, setData] = useState<Customer | null>(null);
    const navigate = useNavigate()
    useEffect(() => {
        const fetchData = async () => {
            const response = await apiGetCustomer<Customer>({ id });
            console.log(response);
            if(response===null)navigate("/concepts/customers/customer-list");
            toast.push(
                <Notification type="danger">مشتری مورد نظر یافت نشد!</Notification>,
                { placement: 'top-center' },
            )
            setData(response);
        }; 
        fetchData();
    }, [id]);

    const [discardConfirmationOpen, setDiscardConfirmationOpen] =
        useState(false)


    const handleConfirmDiscard = () => {
        setDiscardConfirmationOpen(true)
        toast.push(
            <Notification type="success">مشتری کنار گذاشته شد!</Notification>,
            { placement: 'top-center' },
        )
        navigate('/concepts/customers/customer-list')
    }

    const handleDiscard = () => {
        setDiscardConfirmationOpen(true)
    }

    const handleCancel = () => {
        setDiscardConfirmationOpen(false)
    }

    return (
        <>
            <Container>
                <div className="flex flex-col md:flex-row gap-4">
                    <div className="gap-4 flex flex-col flex-auto">
                        <Card>
                            <h4 className="mb-6">نمای کلی</h4>
                            <div className="grid md:grid-cols-2 gap-4">
                                <FormItem
                                    label="نام نمایشی"

                                >
                                    <Controller
                                        name="displayName"
                                        control={control}
                                        render={({ field }) => {
                                            return (
                                                <Input
                                                    type="text"
                                                    autoComplete="off"
                                                    placeholder="نام نمایشی"
                                                    {...field}
                                                    disabled={true}
                                                    value={data!=null? data.displayName:''} />
                                            )
                                        }}
                                    />
                                </FormItem>
                                <FormItem
                                    label="نام شرکت"
                                >
                                    <Controller
                                        name="legalName"
                                        control={control}
                                        render={({ field }) => {
                                            return (
                                                <Input
                                                    type="text"
                                                    autoComplete="off"
                                                    placeholder="نام شرکت"
                                                    {...field}
                                                    disabled={true}
                                                    value={data!=null? data.legalName:''} />
                                            )
                                        }}
                                    />
                                </FormItem>
                            </div>

                        </Card>

                    </div>
                </div>
            </Container>

            <Container>
                <div className="flex items-center justify-between px-8">
                    <span></span>
                    <div className="flex items-center">
                        <Button
                            className="ltr:mr-3 rtl:ml-3"
                            type="button"
                            customColorClass={() =>
                                'border-error ring-1 ring-error text-error hover:border-error hover:ring-error hover:text-error bg-transparent'
                            }
                            icon={<TbTrash />}
                            onClick={handleDiscard}
                        >
                            دور انداختن
                        </Button>
                        <Button
                            variant="solid"
                            type="submit"
                            loading={false}
                        >
                            ایجاد کنید
                        </Button>
                    </div>
                </div>
            </Container>
            <ConfirmDialog
                isOpen={discardConfirmationOpen}
                type="danger"
                title="تغییرات را کنار بگذارید"
                onClose={handleCancel}
                onRequestClose={handleCancel}
                onCancel={handleCancel}
                onConfirm={handleConfirmDiscard}
            >
                <p>
                    آیا مطمئنید که می خواهید این را کنار بگذارید؟ این اقدام نمی تواند
                    لغو شود.{' '}
                </p>
            </ConfirmDialog>
        </>
    )
}

export default CustomerDetails
