
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

import { apiGetCustomersCombo } from '@/services/CustomersService'

import { apiGetCustomerLicensesCombo } from '@/services/CustomerLicensesService'

import { apiGetCustomerLicenseReasonTypesCombo } from '@/services/CustomerLicenseReasonTypesService'
import type { ComboDto } from '@/@types/common'

type InputsSectionProps = FormSectionBaseProps
var params;

const customers = await apiGetCustomersCombo<ComboDto[], any>(params);

const customerLicenses = await apiGetCustomerLicensesCombo<ComboDto[], any>(params);

const customerLicenseReasonTypes = await apiGetCustomerLicenseReasonTypesCombo<ComboDto[], any>(params);
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
                    label="مشتری"
                    invalid={Boolean(errors.customerId)}
                    errorMessage={errors.customerId?.message}
                    className="w-full"
                >
                    <Controller
                        name="customerId"
                        control={control}
                        render={({ field }) => (
                            <Select
                                placeholder="مشتری"
                                componentAs={CreatableSelect}
                                options={customers.map((title) => ({
                                    value: title.value, label: title.title,
                                }))}

                                onChange={(option) => { option != null && option.value != undefined ? field.onChange(option.value.toString()) : 0; }}
                            />
                        )}
                    />
                </FormItem>

                <FormItem
                    label="نوع"
                    invalid={Boolean(errors.customerLicenseTypeId)}
                    errorMessage={errors.customerLicenseTypeId?.message}
                    className="w-full"
                >
                    <Controller
                        name="customerLicenseTypeId"
                        control={control}
                        render={({ field }) => (
                            <Select
                                placeholder="نوع"
                                componentAs={CreatableSelect}
                                options={customerLicenses.map((title) => ({
                                    value: title.value, label: title.title,
                                }))}

                                onChange={(option) => { option != null && option.value != undefined ? field.onChange(option.value.toString()) : 0; }}
                            />
                        )}
                    />
                </FormItem>


 <FormItem
                    label="توضیحات"
                    invalid={Boolean(errors.description)}
                    errorMessage={errors.description?.message}
                >
                    <Controller
                        name="description"
                        control={control}
                        render={({ field }) => (
                            <Input
                                type="text"
                                autoComplete="off"
                                placeholder="توضیحات"
                                {...field}
                            />
                        )}
                    />
                </FormItem>

                <FormItem
                    label="دلیل"
                    invalid={Boolean(errors.customerLicenseReasonTypeId)}
                    errorMessage={errors.customerLicenseReasonTypeId?.message}
                    className="w-full"
                >
                    <Controller
                        name="customerLicenseReasonTypeId"
                        control={control}
                        render={({ field }) => (
                            <Select
                                placeholder="دلیل"
                                componentAs={CreatableSelect}
                                options={customerLicenseReasonTypes.map((title) => ({
                                    value: title.value, label: title.title,
                                }))}

                                onChange={(option) => { option != null && option.value != undefined ? field.onChange(option.value.toString()) : 0; }}
                            />
                        )}
                    />
                </FormItem>
            </div>
        </Card>
    )
}

export default InputsSection

