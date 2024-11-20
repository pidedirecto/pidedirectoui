import * as React from 'react';
import { useState } from 'react';
import { createStore } from 'src/hooks/createStore';

export function CreatePersistStoreBenchmark(): React.ReactElement {
    const [clicks, setClicks] = useState(0);
    const ordersLength = usePersistStore((state) => state.orders.length);

    const addOrder = usePersistActions((actions) => actions.addOrder);
    const clearStore = usePersistActions((actions) => actions.clearStore);

    return (
        <div>
            <h1>CreatePersistStoreBenchmark</h1>
            <h3>Added orders are {ordersLength}</h3>
            <button
                onClick={async () => {
                    console.clear();
                    clearStore();
                }}
            >
                Clear Store
            </button>
            <button
                onClick={async () => {
                    setClicks(clicks + 1);
                    for (let j = 0; j < 1; j++) {
                        const amountOfOrdersToAdd = 100;
                        for (let i = 0; i < amountOfOrdersToAdd; i++) {
                            if (i % amountOfOrdersToAdd === 0) console.time(`button click ${clicks} - add order no ${ordersLength} took`);
                            addOrder(anyOrder);
                            if (i % amountOfOrdersToAdd === 0) console.timeEnd(`button click ${clicks} - add order no ${ordersLength} took`);
                        }
                    }
                }}
            >
                Add Order
            </button>
        </div>
    );
}

const [usePersistStore, usePersistActions] = createStore<RegularState, RegularActions>({
    initialState: {
        orders: [],
    },
    actions: {
        addOrder(state, order) {
            state.orders.push(order);
        },
        clearStore(state) {
            state.orders = [];
        },
    },
    persist: true,
    storeName: 'ordersStore',
});

const anyOrder = {
    _id: {
        $binary: {
            base64: 'O9MyEx1rRg2GDdZOTpl2SA==',
            subType: '04',
        },
    },
    restaurantId: {
        $binary: {
            base64: 'S3ZgBgIzSymuCLDL3h5H0g==',
            subType: '04',
        },
    },
    cashRegisterId: {
        $binary: {
            base64: '6nWAapXsS3qlF3t3yk84Uw==',
            subType: '04',
        },
    },
    posBusinessDayId: {
        $binary: {
            base64: 'C91mmdQGSryWR2lTIdCYIQ==',
            subType: '04',
        },
    },
    shortOrderId: '3BD332',
    consecutiveOrderId: '15809',
    firstName: '',
    orderType: 'TAKE_AWAY_ORDER',
    orderStatus: 'COMPLETE',
    trackingUrl: 'https://talcafe.ambit.la/paymentlink/8otmXDU6HWc9aJmZi61ihm',
    appTrackingUrl: 'https://api.ambit.la/track/8otmXDU6HWc9aJmZi61ihm',
    restaurant: {
        name: 'TALCAFÉ',
        street: 'Maldonado 1827',
        phoneNumber: '+59899217555',
        location: {
            type: 'Point',
            coordinates: [-56.1757614, -34.908415],
        },
    },
    urlSubdomain: 'talcafe',
    urlPathname: 'paymentlink',
    paymentMethod: 'CREDIT_CARD',
    posPayments: [
        {
            amount: '90.00',
            paymentMethod: 'Débito',
        },
    ],
    payments: [
        {
            amount: '90.00',
            customPaymentMethod: 'Débito',
            paymentMethod: 'CREDIT_CARD',
        },
    ],
    partiallyPaidByCash: true,
    externalCardPayment: true,
    paymentStatus: 'PAYED',
    pickupTimeType: 'ASAP',
    pickupTime: {
        $date: '2024-11-18T13:12:22.105Z',
    },
    preparationTime: 15,
    orderItems: [
        {
            menuItemId: {
                $binary: {
                    base64: 'tLgaKW82STyT+YwtIwBcWw==',
                    subType: '04',
                },
            },
            menuId: {
                $binary: {
                    base64: 'vSVBYFnJQ5yOcAm3jIx4rg==',
                    subType: '04',
                },
            },
            menuCategoryId: {
                $binary: {
                    base64: 'hH6bRCIOSeGwCn70pMENSA==',
                    subType: '04',
                },
            },
            orderItemId: {
                $binary: {
                    base64: '6HUQqgzpSYWbltSR29DEJQ==',
                    subType: '04',
                },
            },
            menuItemType: 'ITEM',
            name: 'Filtrado del día',
            unitPrice: '90',
            quantity: 1,
            modifierGroups: [],
            options: [],
            addedAt: {
                $date: '2024-11-18T13:12:08.985Z',
            },
        },
    ],
    discount: '0',
    amountWithDiscount: '90',
    subtotal: '90',
    subtotalAfterDiscount: '90',
    posOrder: true,
    total: '90',
    restaurantNetTotal: '90',
    restaurantGrossTotal: '90',
    country: 'UY',
    countryCode: 'UY',
    city: 'UY_MONTEVIDEO',
    zone: 'Uruguay',
    timeZone: 'America/Montevideo',
    currency: 'UYU',
    app: 'PIDEDIRECTOPOS',
    serverVersion: '1.258.0',
    createdAt: {
        $date: '2024-11-18T13:12:22.103Z',
    },
    completedAt: {
        $date: '2024-11-18T13:12:22.103Z',
    },
    servedBy: '859d8b41-01e6-4be6-b44e-cd2e18a35d45',
    modifiedAt: {
        $date: '2024-11-18T13:12:22.103Z',
    },
};

type RegularState = {
    orders: Array<any>;
};

type RegularActions = {
    addOrder: (order: any) => void;
    clearStore: () => void;
};
