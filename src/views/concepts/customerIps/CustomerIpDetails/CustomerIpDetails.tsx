
import Card from '@/components/ui/Card'
import Tabs from '@/components/ui/Tabs'
import Loading from '@/components/shared/Loading'
import { apiGetCustomerIp } from '@/services/CustomerIpsService'
import useSWR from 'swr'
import { useParams } from 'react-router-dom'
import isEmpty from 'lodash/isEmpty'
import React, { useEffect, useState } from 'react';
import Container from '@/components/shared/Container'
import Button from '@/components/ui/Button'
import Notification from '@/components/ui/Notification'
import toast from '@/components/ui/toast'
import CustomerIpForm from '../CustomerIpForm'
import ConfirmDialog from '@/components/shared/ConfirmDialog'
import sleep from '@/utils/sleep'
import dateTime from '@/utils/dateTime'
import { TbArrowAutofitLeft, TbArrowBack, TbTrash } from 'react-icons/tb'
import { useNavigate } from 'react-router-dom'
import type { CustomerIpFormSchema } from '../CustomerIpForm'
import type { CustomerIp } from '../CustomerIpList/types'
import Input from '@/components/ui/Input'
import { FormItem } from '@/components/ui/Form'
import type { FormSectionBaseProps } from '../CustomerIpForm/types'
import { Controller } from 'react-hook-form'
import NumericInput from '@/components/shared/NumericInput'
import toShamsi from '@/utils/dateTime'
import NoUserFound from '@/assets/svg/NoUserFound'

type OverviewSectionProps = FormSectionBaseProps

const CustomerIpDetails = ({ control, errors }: OverviewSectionProps) => {
    const { id } = useParams()

    const navigate = useNavigate()

    const { data, isLoading } = useSWR(
        [`/api/customerIp{id}`, { id: id as string }],
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        ([_, params]) => apiGetCustomerIp<CustomerIp>(id),
        {
            revalidateOnFocus: false,
            revalidateIfStale: false,
        },
    )
    const handleDiscard = () => {
        navigate('/concepts/customerIps/customerIp-list')
    }

    return (
        <>
            {!isLoading && !data && (
                <div className="h-full flex flex-col items-center justify-center">
                    <NoUserFound height={280} width={280} />
                    <h3 className="mt-8">آیپی مشتری پیدا نشد!</h3>
                </div>
            )}
            {!isLoading && data && (
                <>
                    <Container>
                        <div className="flex flex-col md:flex-row gap-4">
                            <div className="gap-4 flex flex-col flex-auto">
                                <Card>
                                    <h4 className="mb-6">نمای کلی</h4>
                                    <div className="grid md:grid-cols-2 gap-4">
                                        
                                        <div>
                                            <span className="font-semibold">مشتری</span>
                                            <p className="heading-text font-bold">{data?.customerTitle}</p>
                                        </div>

                                        <div>
                                            <span className="font-semibold">آیپی</span>
                                            <p className="heading-text font-bold">{data?.iP}</p>
                                        </div>
                                        <div>
                                            <span className="font-semibold">تاریخ ساخت</span>

                                            <p className="heading-text font-bold">{toShamsi(data?.createDate)}</p>
                                        </div>
                                        <div>
                                            <span className="font-semibold">تاریخ آخرین ویرایش</span>

                                            <p className="heading-text font-bold">{toShamsi(data?.latestEditDate)}</p>
                                        </div>
                                    </div>

                                </Card>
                                <div className="flex items-center">
                                    <Button
                                        className="ltr:mr-3 rtl:ml-3"
                                        type="button"
                                        customColorClass={() =>
                                            'border-error ring-1 ring-error text-error hover:border-error hover:ring-error hover:text-error bg-transparent'
                                        }
                                        icon={<TbArrowBack />}
                                        onClick={handleDiscard}
                                    >
                                        بازگشت
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </Container>
                </>
            )}

        </>
    )
}

export default CustomerIpDetails

