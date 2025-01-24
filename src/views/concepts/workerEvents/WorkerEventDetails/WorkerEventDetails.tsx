
import Card from '@/components/ui/Card'
import Tabs from '@/components/ui/Tabs'
import Loading from '@/components/shared/Loading'
import { apiGetWorkerEvent } from '@/services/WorkerEventsService'
import useSWR from 'swr'
import { useParams } from 'react-router-dom'
import isEmpty from 'lodash/isEmpty'
import React, { useEffect, useState } from 'react';
import Container from '@/components/shared/Container'
import Button from '@/components/ui/Button'
import Notification from '@/components/ui/Notification'
import toast from '@/components/ui/toast'
import WorkerEventForm from '../WorkerEventForm'
import ConfirmDialog from '@/components/shared/ConfirmDialog'
import sleep from '@/utils/sleep'
import dateTime from '@/utils/dateTime'
import { TbArrowAutofitLeft, TbArrowBack, TbTrash } from 'react-icons/tb'
import { useNavigate } from 'react-router-dom'
import type { WorkerEventFormSchema } from '../WorkerEventForm'
import type { WorkerEvent } from '../WorkerEventList/types'
import Input from '@/components/ui/Input'
import { FormItem } from '@/components/ui/Form'
import type { FormSectionBaseProps } from '../WorkerEventForm/types'
import { Controller } from 'react-hook-form'
import NumericInput from '@/components/shared/NumericInput'
import toShamsi from '@/utils/dateTime'
import NoUserFound from '@/assets/svg/NoUserFound'

type OverviewSectionProps = FormSectionBaseProps

const WorkerEventDetails = ({ control, errors }: OverviewSectionProps) => {
    const { id } = useParams()

    const navigate = useNavigate()

    const { data, isLoading } = useSWR(
        [`/api/workerEvent{id}`, { id: id as string }],
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        ([_, params]) => apiGetWorkerEvent<WorkerEvent>(id),
        {
            revalidateOnFocus: false,
            revalidateIfStale: false,
        },
    )
    const handleDiscard = () => {
        navigate('/concepts/workerEvents/workerEvent-list')
    }

    return (
        <>
            {!isLoading && !data && (
                <div className="h-full flex flex-col items-center justify-center">
                    <NoUserFound height={280} width={280} />
                    <h3 className="mt-8">ایونت ورکر پیدا نشد!</h3>
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
                                            <span className="font-semibold">پروفایل مشتری</span>
                                            <p className="heading-text font-bold">{data?.customerProfileTitle}</p>
                                        </div>

                                        <div>
                                            <span className="font-semibold">تعداد انتقال</span>
                                            <p className="heading-text font-bold">{data?.transferCount}</p>
                                        </div>

                                        <div>
                                            <span className="font-semibold">تاریخ ارسال</span>

                                            <p className="heading-text font-bold">{toShamsi(data?.transferDateTime)}</p>
                                        </div>

                                        <div>
                                            <span className="font-semibold">موفقیت آمیز هست / نیست</span>
                                            <p className="heading-text font-bold">{data?.isSucceed}</p>
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

export default WorkerEventDetails

