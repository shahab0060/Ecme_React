
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
import dateTime from '@/utils/dateTime'
import { TbArrowAutofitLeft, TbArrowBack, TbTrash } from 'react-icons/tb'
import { useNavigate } from 'react-router-dom'
import type { CustomerFormSchema } from '../CustomerForm'
import type { Customer } from '../CustomerList/types'
import Input from '@/components/ui/Input'
import { FormItem } from '@/components/ui/Form'
import type { FormSectionBaseProps } from '../CustomerForm/types'
import { Controller } from 'react-hook-form'
import NumericInput from '@/components/shared/NumericInput'
import toShamsi from '@/utils/dateTime'
import NoUserFound from '@/assets/svg/NoUserFound'

type OverviewSectionProps = FormSectionBaseProps

const CustomerDetails = ({ control, errors }: OverviewSectionProps) => {
    const { id } = useParams()

    const navigate = useNavigate()

    const { data, isLoading } = useSWR(
        [`/api/customer{id}`, { id: id as string }],
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        ([_, params]) => apiGetCustomer<Customer>(id),
        {
            revalidateOnFocus: false,
            revalidateIfStale: false,
        },
    )
    const handleDiscard = () => {
        navigate('/concepts/customers/customer-list')
    }

    return (
        <>
            {!isLoading && !data && (
                <div className="h-full flex flex-col items-center justify-center">
                    <NoUserFound height={280} width={280} />
                    <h3 className="mt-8">مشتری پیدا نشد!</h3>
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
                                            <span className="font-semibold">عنوان</span>
                                            <p className="heading-text font-bold">{data?.customerTitleTitle}</p>
                                        </div>

                                        <div>
                                            <span className="font-semibold">نام نمایشی</span>
                                            <p className="heading-text font-bold">{data?.displayName}</p>
                                        </div>

                                        <div>
                                            <span className="font-semibold">لوکیشن</span>
                                            <p className="heading-text font-bold">{data?.locationTitle}</p>
                                        </div>

                                        <div>
                                            <span className="font-semibold">شماره تلفن</span>
                                            <p className="heading-text font-bold">{data?.phoneNumber}</p>
                                        </div>

                                        <div>
                                            <span className="font-semibold">مهر امنیتی</span>
                                            <p className="heading-text font-bold">{data?.securityStamp}</p>
                                        </div>

                                        <div>
                                            <span className="font-semibold">Otp</span>
                                            <p className="heading-text font-bold">{data?.otp}</p>
                                        </div>

                                        <div>
                                            <span className="font-semibold">کد تایید</span>
                                            <p className="heading-text font-bold">{data?.activationCode}</p>
                                        </div>

                                        <div>
                                            <span className="font-semibold">تاریخ انقضا کد تایید</span>

                                            <p className="heading-text font-bold">{toShamsi(data?.activationCodeExpirationTime)}</p>
                                        </div>

                                        <div>
                                            <span className="font-semibold">ساعت شروع سرویس</span>
                                            <p className="heading-text font-bold">{data?.jobStart}</p>
                                        </div>

                                        <div>
                                            <span className="font-semibold">ساعت پایان سرویس</span>
                                            <p className="heading-text font-bold">{data?.jobEnd}</p>
                                        </div>

                                        <div>
                                            <span className="font-semibold">بازه زمانی اجرا (دقیقه)</span>
                                            <p className="heading-text font-bold">{data?.jobInterval}</p>
                                        </div>

                                        <div>
                                            <span className="font-semibold">تاریخ انقضا مهر تایید</span>

                                            <p className="heading-text font-bold">{toShamsi(data?.securityStampExpirationDate)}</p>
                                        </div>

                                        <div>
                                            <span className="font-semibold">توکن</span>
                                            <p className="heading-text font-bold">{data?.tokenId}</p>
                                        </div>

                                        <div>
                                            <span className="font-semibold">حوزه کاری</span>
                                            <p className="heading-text font-bold">{data?.activityFieldTitle}</p>
                                        </div>

                                        <div>
                                            <span className="font-semibold">نام</span>
                                            <p className="heading-text font-bold">{data?.firstName}</p>
                                        </div>

                                        <div>
                                            <span className="font-semibold">نام خانوادگی</span>
                                            <p className="heading-text font-bold">{data?.lastName}</p>
                                        </div>

                                        <div>
                                            <span className="font-semibold">نام قانونی</span>
                                            <p className="heading-text font-bold">{data?.legalName}</p>
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

export default CustomerDetails

