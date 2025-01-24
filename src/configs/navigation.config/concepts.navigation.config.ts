import { CONCEPTS_PREFIX_PATH } from '@/constants/route.constant'
import {
    NAV_ITEM_TYPE_TITLE,
    NAV_ITEM_TYPE_COLLAPSE,
    NAV_ITEM_TYPE_ITEM,
} from '@/constants/navigation.constant'
import { ADMIN, USER } from '@/constants/roles.constant'
import type { NavigationTree } from '@/@types/navigation'

const conceptsNavigationConfig: NavigationTree[] = [
    {
        key: 'concepts',
        path: '',
        title: 'مدیریت',
        translateKey: 'nav.concepts',
        icon: 'concepts',
        type: NAV_ITEM_TYPE_TITLE,
        authority: [ADMIN, USER],
        meta: {
            horizontalMenu: {
                layout: 'columns',
                columns: 4,
            },
        },
        subMenu: [
           
            {
                key: 'concepts.customers',
                path: '',
                title: 'مشتریان',
                translateKey: 'nav.conceptsCustomers.customers',
                icon: 'customers',
                type: NAV_ITEM_TYPE_COLLAPSE,
                authority: [ADMIN, USER],
                meta: {
                    description: {
                        translateKey: 'nav.conceptsCustomers.customersDesc',
                        label: 'مدیریت مشتریان',
                    },
                },
                subMenu: [
                    {
                        key: 'concepts.customers.customerList',
                        path: `${CONCEPTS_PREFIX_PATH}/customers/customer-list`,
                        title: 'لیست مشتریان',
                        translateKey: 'nav.conceptsCustomers.customerList',
                        icon: 'customerList',
                        type: NAV_ITEM_TYPE_ITEM,
                        authority: [ADMIN, USER],
                        meta: {
                            description: {
                                translateKey: 'nav.conceptsCustomers.customerListDesc',
                                label: 'لیست تمام مشتریان',
                            },
                        },
                        subMenu: [],
                    },
                  
                    {
                        key: 'concepts.customers.customerCreate',
                        path: `${CONCEPTS_PREFIX_PATH}/customers/customer-create`,
                        title: 'افزودن مشتری',
                        translateKey: 'nav.conceptsCustomers.customerCreate',
                        icon: 'customerCreate',
                        type: NAV_ITEM_TYPE_ITEM,
                        authority: [ADMIN, USER],
                        meta: {
                            description: {
                                translateKey: 'nav.conceptsCustomers.customerCreateDesc',
                                label: 'افزودن مشتری جدید',
                            },
                        },
                        subMenu: [],
                    },
                ],
            },
            {
                key: 'concepts.workerEvents',
                path: '',
                title: 'ایونت ورکر ها',
                translateKey: 'nav.conceptsWorkerEvents.workerEvents',
                icon: 'workerEvents',
                type: NAV_ITEM_TYPE_COLLAPSE,
                authority: [ADMIN, USER],
                meta: {
                    description: {
                        translateKey: 'nav.conceptsWorkerEvents.workerEventsDesc',
                        label: 'مدیریت ایونت ورکر ها',
                    },
                },
                subMenu: [
                    {
                        key: 'concepts.workerEvents.workerEventList',
                        path: `${CONCEPTS_PREFIX_PATH}/workerEvents/workerEvent-list`,
                        title: 'لیست ایونت ورکر ها',
                        translateKey: 'nav.conceptsWorkerEvents.workerEventList',
                        icon: 'workerEventList',
                        type: NAV_ITEM_TYPE_ITEM,
                        authority: [ADMIN, USER],
                        meta: {
                            description: {
                                translateKey: 'nav.conceptsWorkerEvents.workerEventListDesc',
                                label: 'لیست تمام ایونت ورکر ها',
                            },
                        },
                        subMenu: [],
                    },
                    {
                        key: 'concepts.workerEvents.workerEventCreate',
                        path: `${CONCEPTS_PREFIX_PATH}/workerEvents/workerEvent-create`,
                        title: 'افزودن ایونت ورکر',
                        translateKey: 'nav.conceptsWorkerEvents.workerEventCreate',
                        icon: 'workerEventCreate',
                        type: NAV_ITEM_TYPE_ITEM,
                        authority: [ADMIN, USER],
                        meta: {
                            description: {
                                translateKey: 'nav.conceptsWorkerEvents.workerEventCreateDesc',
                                label: 'افزودن ایونت ورکر جدید',
                            },
                        },
                        subMenu: [],
                    },
                ],
            },            
            {
                key: 'concepts.customerLicenseReasonTypes',
                path: '',
                title: 'نوع دلایل مجوز های کاربر',
                translateKey: 'nav.conceptsCustomerLicenseReasonTypes.customerLicenseReasonTypes',
                icon: 'customerLicenseReasonTypes',
                type: NAV_ITEM_TYPE_COLLAPSE,
                authority: [ADMIN, USER],
                meta: {
                    description: {
                        translateKey: 'nav.conceptsCustomerLicenseReasonTypes.customerLicenseReasonTypesDesc',
                        label: 'مدیریت نوع دلایل مجوز های کاربر',
                    },
                },
                subMenu: [
                    {
                        key: 'concepts.customerLicenseReasonTypes.customerLicenseReasonTypeList',
                        path: `${CONCEPTS_PREFIX_PATH}/customerLicenseReasonTypes/customerLicenseReasonType-list`,
                        title: 'لیست نوع دلایل مجوز های کاربر',
                        translateKey: 'nav.conceptsCustomerLicenseReasonTypes.customerLicenseReasonTypeList',
                        icon: 'customerLicenseReasonTypeList',
                        type: NAV_ITEM_TYPE_ITEM,
                        authority: [ADMIN, USER],
                        meta: {
                            description: {
                                translateKey: 'nav.conceptsCustomerLicenseReasonTypes.customerLicenseReasonTypeListDesc',
                                label: 'لیست تمام نوع دلایل مجوز های کاربر',
                            },
                        },
                        subMenu: [],
                    },
                    {
                        key: 'concepts.customerLicenseReasonTypes.customerLicenseReasonTypeCreate',
                        path: `${CONCEPTS_PREFIX_PATH}/customerLicenseReasonTypes/customerLicenseReasonType-create`,
                        title: 'افزودن نوع دلیل مجوز کاربر',
                        translateKey: 'nav.conceptsCustomerLicenseReasonTypes.customerLicenseReasonTypeCreate',
                        icon: 'customerLicenseReasonTypeCreate',
                        type: NAV_ITEM_TYPE_ITEM,
                        authority: [ADMIN, USER],
                        meta: {
                            description: {
                                translateKey: 'nav.conceptsCustomerLicenseReasonTypes.customerLicenseReasonTypeCreateDesc',
                                label: 'افزودن نوع دلیل مجوز کاربر جدید',
                            },
                        },
                        subMenu: [],
                    },
                ],
            },
            {
                key: 'concepts.customerLicenseTypes',
                path: '',
                title: 'نوع مجوزهای کاربران',
                translateKey: 'nav.conceptsCustomerLicenseTypes.customerLicenseTypes',
                icon: 'customerLicenseTypes',
                type: NAV_ITEM_TYPE_COLLAPSE,
                authority: [ADMIN, USER],
                meta: {
                    description: {
                        translateKey: 'nav.conceptsCustomerLicenseTypes.customerLicenseTypesDesc',
                        label: 'مدیریت نوع مجوزهای کاربران',
                    },
                },
                subMenu: [
                    {
                        key: 'concepts.customerLicenseTypes.customerLicenseTypeList',
                        path: `${CONCEPTS_PREFIX_PATH}/customerLicenseTypes/customerLicenseType-list`,
                        title: 'لیست نوع مجوزهای کاربران',
                        translateKey: 'nav.conceptsCustomerLicenseTypes.customerLicenseTypeList',
                        icon: 'customerLicenseTypeList',
                        type: NAV_ITEM_TYPE_ITEM,
                        authority: [ADMIN, USER],
                        meta: {
                            description: {
                                translateKey: 'nav.conceptsCustomerLicenseTypes.customerLicenseTypeListDesc',
                                label: 'لیست تمام نوع مجوزهای کاربران',
                            },
                        },
                        subMenu: [],
                    },
                    {
                        key: 'concepts.customerLicenseTypes.customerLicenseTypeCreate',
                        path: `${CONCEPTS_PREFIX_PATH}/customerLicenseTypes/customerLicenseType-create`,
                        title: 'افزودن نوع مجوز کاربر',
                        translateKey: 'nav.conceptsCustomerLicenseTypes.customerLicenseTypeCreate',
                        icon: 'customerLicenseTypeCreate',
                        type: NAV_ITEM_TYPE_ITEM,
                        authority: [ADMIN, USER],
                        meta: {
                            description: {
                                translateKey: 'nav.conceptsCustomerLicenseTypes.customerLicenseTypeCreateDesc',
                                label: 'افزودن نوع مجوز کاربر جدید',
                            },
                        },
                        subMenu: [],
                    },
                ],
            },
            {
                key: 'concepts.activityFields',
                path: '',
                title: 'حوزه های کاری',
                translateKey: 'nav.conceptsActivityFields.activityFields',
                icon: 'activityFields',
                type: NAV_ITEM_TYPE_COLLAPSE,
                authority: [ADMIN, USER],
                meta: {
                    description: {
                        translateKey: 'nav.conceptsActivityFields.activityFieldsDesc',
                        label: 'مدیریت حوزه های کاری',
                    },
                },
                subMenu: [
                    {
                        key: 'concepts.activityFields.activityFieldList',
                        path: `${CONCEPTS_PREFIX_PATH}/activityFields/activityField-list`,
                        title: 'لیست حوزه های کاری',
                        translateKey: 'nav.conceptsActivityFields.activityFieldList',
                        icon: 'activityFieldList',
                        type: NAV_ITEM_TYPE_ITEM,
                        authority: [ADMIN, USER],
                        meta: {
                            description: {
                                translateKey: 'nav.conceptsActivityFields.activityFieldListDesc',
                                label: 'لیست تمام حوزه های کاری',
                            },
                        },
                        subMenu: [],
                    },
                    {
                        key: 'concepts.activityFields.activityFieldCreate',
                        path: `${CONCEPTS_PREFIX_PATH}/activityFields/activityField-create`,
                        title: 'افزودن حوزه کاری',
                        translateKey: 'nav.conceptsActivityFields.activityFieldCreate',
                        icon: 'activityFieldCreate',
                        type: NAV_ITEM_TYPE_ITEM,
                        authority: [ADMIN, USER],
                        meta: {
                            description: {
                                translateKey: 'nav.conceptsActivityFields.activityFieldCreateDesc',
                                label: 'افزودن حوزه کاری جدید',
                            },
                        },
                        subMenu: [],
                    },
                ],
            },
            {
                key: 'concepts.locations',
                path: '',
                title: 'مکان ها',
                translateKey: 'nav.conceptsLocations.locations',
                icon: 'locations',
                type: NAV_ITEM_TYPE_COLLAPSE,
                authority: [ADMIN, USER],
                meta: {
                    description: {
                        translateKey: 'nav.conceptsLocations.locationsDesc',
                        label: 'مدیریت مکان ها',
                    },
                },
                subMenu: [
                    {
                        key: 'concepts.locations.locationList',
                        path: `${CONCEPTS_PREFIX_PATH}/locations/location-list`,
                        title: 'لیست مکان ها',
                        translateKey: 'nav.conceptsLocations.locationList',
                        icon: 'locationList',
                        type: NAV_ITEM_TYPE_ITEM,
                        authority: [ADMIN, USER],
                        meta: {
                            description: {
                                translateKey: 'nav.conceptsLocations.locationListDesc',
                                label: 'لیست تمام مکان ها',
                            },
                        },
                        subMenu: [],
                    },
                    {
                        key: 'concepts.locations.locationCreate',
                        path: `${CONCEPTS_PREFIX_PATH}/locations/location-create`,
                        title: 'افزودن مکان',
                        translateKey: 'nav.conceptsLocations.locationCreate',
                        icon: 'locationCreate',
                        type: NAV_ITEM_TYPE_ITEM,
                        authority: [ADMIN, USER],
                        meta: {
                            description: {
                                translateKey: 'nav.conceptsLocations.locationCreateDesc',
                                label: 'افزودن مکان جدید',
                            },
                        },
                        subMenu: [],
                    },
                ],
            },
            {
                key: 'concepts.profileDataTypes',
                path: '',
                title: 'انواع دیتا پروفایل',
                translateKey: 'nav.conceptsProfileDataTypes.profileDataTypes',
                icon: 'profileDataTypes',
                type: NAV_ITEM_TYPE_COLLAPSE,
                authority: [ADMIN, USER],
                meta: {
                    description: {
                        translateKey: 'nav.conceptsProfileDataTypes.profileDataTypesDesc',
                        label: 'مدیریت انواع دیتا پروفایل',
                    },
                },
                subMenu: [
                    {
                        key: 'concepts.profileDataTypes.profileDataTypeList',
                        path: `${CONCEPTS_PREFIX_PATH}/profileDataTypes/profileDataType-list`,
                        title: 'لیست انواع دیتا پروفایل',
                        translateKey: 'nav.conceptsProfileDataTypes.profileDataTypeList',
                        icon: 'profileDataTypeList',
                        type: NAV_ITEM_TYPE_ITEM,
                        authority: [ADMIN, USER],
                        meta: {
                            description: {
                                translateKey: 'nav.conceptsProfileDataTypes.profileDataTypeListDesc',
                                label: 'لیست تمام انواع دیتا پروفایل',
                            },
                        },
                        subMenu: [],
                    },
                    {
                        key: 'concepts.profileDataTypes.profileDataTypeCreate',
                        path: `${CONCEPTS_PREFIX_PATH}/profileDataTypes/profileDataType-create`,
                        title: 'افزودن نوع دیتا پروفایل',
                        translateKey: 'nav.conceptsProfileDataTypes.profileDataTypeCreate',
                        icon: 'profileDataTypeCreate',
                        type: NAV_ITEM_TYPE_ITEM,
                        authority: [ADMIN, USER],
                        meta: {
                            description: {
                                translateKey: 'nav.conceptsProfileDataTypes.profileDataTypeCreateDesc',
                                label: 'افزودن نوع دیتا پروفایل جدید',
                            },
                        },
                        subMenu: [],
                    },
                ],
            },
            {
                key: 'concepts.profiles',
                path: '',
                title: 'پروفایل ها',
                translateKey: 'nav.conceptsProfiles.profiles',
                icon: 'profiles',
                type: NAV_ITEM_TYPE_COLLAPSE,
                authority: [ADMIN, USER],
                meta: {
                    description: {
                        translateKey: 'nav.conceptsProfiles.profilesDesc',
                        label: 'مدیریت پروفایل ها',
                    },
                },
                subMenu: [
                    {
                        key: 'concepts.profiles.profileList',
                        path: `${CONCEPTS_PREFIX_PATH}/profiles/profile-list`,
                        title: 'لیست پروفایل ها',
                        translateKey: 'nav.conceptsProfiles.profileList',
                        icon: 'profileList',
                        type: NAV_ITEM_TYPE_ITEM,
                        authority: [ADMIN, USER],
                        meta: {
                            description: {
                                translateKey: 'nav.conceptsProfiles.profileListDesc',
                                label: 'لیست تمام پروفایل ها',
                            },
                        },
                        subMenu: [],
                    },
                    {
                        key: 'concepts.profiles.profileCreate',
                        path: `${CONCEPTS_PREFIX_PATH}/profiles/profile-create`,
                        title: 'افزودن پروفایل',
                        translateKey: 'nav.conceptsProfiles.profileCreate',
                        icon: 'profileCreate',
                        type: NAV_ITEM_TYPE_ITEM,
                        authority: [ADMIN, USER],
                        meta: {
                            description: {
                                translateKey: 'nav.conceptsProfiles.profileCreateDesc',
                                label: 'افزودن پروفایل جدید',
                            },
                        },
                        subMenu: [],
                    },
                ],
            },
            {
                key: 'concepts.products',
                path: '',
                title: 'محصولات',
                translateKey: 'nav.conceptsProducts.products',
                icon: 'products',
                type: NAV_ITEM_TYPE_COLLAPSE,
                authority: [ADMIN, USER],
                meta: {
                    description: {
                        translateKey: 'nav.conceptsProducts.productsDesc',
                        label: 'مدیریت محصولات',
                    },
                },
                subMenu: [
                    {
                        key: 'concepts.products.productList',
                        path: `${CONCEPTS_PREFIX_PATH}/products/product-list`,
                        title: 'لیست محصولات',
                        translateKey: 'nav.conceptsProducts.productList',
                        icon: 'productList',
                        type: NAV_ITEM_TYPE_ITEM,
                        authority: [ADMIN, USER],
                        meta: {
                            description: {
                                translateKey: 'nav.conceptsProducts.productListDesc',
                                label: 'لیست تمام محصولات',
                            },
                        },
                        subMenu: [],
                    },
                    {
                        key: 'concepts.products.productCreate',
                        path: `${CONCEPTS_PREFIX_PATH}/products/product-create`,
                        title: 'افزودن محصول',
                        translateKey: 'nav.conceptsProducts.productCreate',
                        icon: 'productCreate',
                        type: NAV_ITEM_TYPE_ITEM,
                        authority: [ADMIN, USER],
                        meta: {
                            description: {
                                translateKey: 'nav.conceptsProducts.productCreateDesc',
                                label: 'افزودن محصول جدید',
                            },
                        },
                        subMenu: [],
                    },
                ],
            },
            {
                key: 'concepts.brands',
                path: '',
                title: 'برند ها',
                translateKey: 'nav.conceptsBrands.brands',
                icon: 'brands',
                type: NAV_ITEM_TYPE_COLLAPSE,
                authority: [ADMIN, USER],
                meta: {
                    description: {
                        translateKey: 'nav.conceptsBrands.brandsDesc',
                        label: 'مدیریت برند ها',
                    },
                },
                subMenu: [
                    {
                        key: 'concepts.brands.brandList',
                        path: `${CONCEPTS_PREFIX_PATH}/brands/brand-list`,
                        title: 'لیست برند ها',
                        translateKey: 'nav.conceptsBrands.brandList',
                        icon: 'brandList',
                        type: NAV_ITEM_TYPE_ITEM,
                        authority: [ADMIN, USER],
                        meta: {
                            description: {
                                translateKey: 'nav.conceptsBrands.brandListDesc',
                                label: 'لیست تمام برند ها',
                            },
                        },
                        subMenu: [],
                    },
                    {
                        key: 'concepts.brands.brandCreate',
                        path: `${CONCEPTS_PREFIX_PATH}/brands/brand-create`,
                        title: 'افزودن برند',
                        translateKey: 'nav.conceptsBrands.brandCreate',
                        icon: 'brandCreate',
                        type: NAV_ITEM_TYPE_ITEM,
                        authority: [ADMIN, USER],
                        meta: {
                            description: {
                                translateKey: 'nav.conceptsBrands.brandCreateDesc',
                                label: 'افزودن برند جدید',
                            },
                        },
                        subMenu: [],
                    },
                ],
            },
          
                   ],
    },
]

export default conceptsNavigationConfig
