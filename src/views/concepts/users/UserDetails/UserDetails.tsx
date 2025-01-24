
import Card from '@/components/ui/Card'
import Tabs from '@/components/ui/Tabs'
import Loading from '@/components/shared/Loading'
import { apiGetUser } from '@/services/UsersService'
import useSWR from 'swr'
import { useParams } from 'react-router-dom'
import isEmpty from 'lodash/isEmpty'
import React, { useEffect, useState } from 'react';
import Container from '@/components/shared/Container'
import Button from '@/components/ui/Button'
import Notification from '@/components/ui/Notification'
import toast from '@/components/ui/toast'
import UserForm from '../UserForm'
import ConfirmDialog from '@/components/shared/ConfirmDialog'
import sleep from '@/utils/sleep'
import dateTime from '@/utils/dateTime'
import { TbArrowAutofitLeft, TbArrowBack, TbTrash } from 'react-icons/tb'
import { useNavigate } from 'react-router-dom'
import type { UserFormSchema } from '../UserForm'
import type { User } from '../UserList/types'
import Input from '@/components/ui/Input'
import { FormItem } from '@/components/ui/Form'
import type { FormSectionBaseProps } from '../UserForm/types'
import { Controller } from 'react-hook-form'
import NumericInput from '@/components/shared/NumericInput'
import toShamsi from '@/utils/dateTime'
import NoUserFound from '@/assets/svg/NoUserFound'

type OverviewSectionProps = FormSectionBaseProps

const UserDetails = ({ control, errors }: OverviewSectionProps) => {
    const { id } = useParams()

    const navigate = useNavigate()

    const { data, isLoading } = useSWR(
        [`/api/user{id}`, { id: id as string }],
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        ([_, params]) => apiGetUser<User>(id),
        {
            revalidateOnFocus: false,
            revalidateIfStale: false,
        },
    )
    const handleDiscard = () => {
        navigate('/concepts/users/user-list')
    }

    return (
        <>
            {!isLoading && !data && (
                <div className="h-full flex flex-col items-center justify-center">
                    <NoUserFound height={280} width={280} />
                    <h3 className="mt-8">کاربر پیدا نشد!</h3>
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
                                            <span className="font-semibold">شماره تلفن</span>
                                            <p className="heading-text font-bold">{data?.phoneNumber}</p>
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
                                            <span className="font-semibold">ادمین کل هست / نیست</span>
                                            <p className="heading-text font-bold">{data?.isSuperAdmin}</p>
                                        </div>

                                        <div>
                                            <span className="font-semibold">کد تایید شماره تلفن</span>
                                            <p className="heading-text font-bold">{data?.phoneNumberActivationCode}</p>
                                        </div>

                                        <div>
                                            <span className="font-semibold">تاریخ انقضا کد تایید شماره تلفن</span>

                                            <p className="heading-text font-bold">{toShamsi(data?.phoneNumberActivationCodeExpirationTime)}</p>
                                        </div>

                                        <div>
                                            <span className="font-semibold">رمز عبور</span>
                                            <p className="heading-text font-bold">{data?.password}</p>
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

export default UserDetails

