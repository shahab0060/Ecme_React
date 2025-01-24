import { useMemo } from 'react'
import Card from '@/components/ui/Card'
import Input from '@/components/ui/Input'
import Select, { Option as DefaultOption } from '@/components/ui/Select'
import Avatar from '@/components/ui/Avatar'
import { FormItem } from '@/components/ui/Form'
import NumericInput from '@/components/shared/NumericInput'
import { countryList } from '@/constants/countries.constant'
import { Controller } from 'react-hook-form'
import { components } from 'react-select'
import type { FormSectionBaseProps } from './types'
import type { ControlProps, OptionProps } from 'react-select'
import CreatableSelect from 'react-select/creatable'
import { apiGetCustomerTitlesCombo } from '@/services/CustomersService'
import type { ComboDto } from '@/@types/common'

type InputsSectionProps = FormSectionBaseProps
var params;
const customerTitles = await apiGetCustomerTitlesCombo<ComboDto[], any>(params);
const InputsSection = ({ control, errors }: InputsSectionProps) => {
    return (
        <Card>
            <h4 className="mb-6">نمای کلی</h4>
            <div className="grid md:grid-cols-2 gap-4">
                <div style={{ display: 'none' }}>
                    <FormItem
                    >
                        <Controller
                            name="id"
                            control={control}
                            render={({ field }) => (
                                <Input
                                    type="hidden"
                                    autoComplete="off"
                                    placeholder="آیدی"
                                    {...field}
                                />
                            )}
                        />
                    </FormItem>
                </div>
                <FormItem
                    label="نام"
                    invalid={Boolean(errors.firstName)}
                    errorMessage={errors.firstName?.message}
                >
                    <Controller
                        name="firstName"
                        control={control}
                        render={({ field }) => (
                            <Input
                                type="text"
                                autoComplete="off"
                                placeholder="نام"
                                {...field}
                            />
                        )}
                    />
                </FormItem>
                <FormItem
                    label="نام خانوادگی"
                    invalid={Boolean(errors.lastName)}
                    errorMessage={errors.lastName?.message}
                >
                    <Controller
                        name="lastName"
                        control={control}
                        render={({ field }) => (
                            <Input
                                type="text"
                                autoComplete="off"
                                placeholder="نام خانوادگی"
                                {...field}
                            />
                        )}
                    />
                </FormItem>
            </div>

            <div className="flex items-end gap-4 w-full">
                <FormItem
                    className="w-full"
                    invalid={
                        Boolean(errors.phoneNumber)
                    }
                    errorMessage={errors.phoneNumber?.message}
                >
                    <Controller
                        name="phoneNumber"
                        control={control}
                        render={({ field }) => (
                            <NumericInput
                                autoComplete="off"
                                placeholder="شماره تلفن"
                                value={field.value}
                                onChange={field.onChange}
                                onBlur={field.onBlur}
                            />
                        )}
                    />
                </FormItem>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
                <FormItem
                    label="نام نمایشی"
                    invalid={Boolean(errors.displayName)}
                    errorMessage={errors.displayName?.message}
                >
                    <Controller
                        name="displayName"
                        control={control}
                        render={({ field }) => (
                            <Input
                                type="text"
                                autoComplete="off"
                                placeholder="نام نمایشی"
                                {...field}
                            />
                        )}
                    />
                </FormItem>
                <FormItem
                    label="نام شرکت"
                    invalid={Boolean(errors.legalName)}
                    errorMessage={errors.legalName?.message}
                >
                    <Controller
                        name="legalName"
                        control={control}
                        render={({ field }) => (
                            <Input
                                type="text"
                                autoComplete="off"
                                placeholder="نام شرکت"
                                {...field}
                            />
                        )}
                    />
                </FormItem>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
                <FormItem
                    label="عنوان مشتری"
                    invalid={Boolean(errors.activityFieldId)}
                    errorMessage={errors.activityFieldId?.message}
                    className="w-full"
                >
                    <Controller
                        name="customerTitleId"
                        control={control}
                        render={({ field }) => (
                            <Select
                                placeholder="عنوان مشتری را انتخاب کنید"
                                componentAs={CreatableSelect}
                                options={customerTitles.map((title) => ({
                                    value: title.value, label: title.title,
                                }))}

                                onChange={(option) => { option != null && option.value != undefined ? field.onChange(option.value.toString()) : 0; }}
                            />
                        )}
                    />
                </FormItem>
                <FormItem
                    label="منطقه"
                    invalid={Boolean(errors.locationId)}
                    errorMessage={errors.locationId?.message}
                >
                    <Controller
                        name="locationId"
                        control={control}
                        render={({ field }) => (
                            <Input
                                type="text"
                                autoComplete="off"
                                placeholder="منطقه"
                                {...field}
                            />
                        )}
                    />
                </FormItem>
            </div>
        </Card>
    )
}

export default InputsSection
