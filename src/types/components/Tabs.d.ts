import * as React from 'react';

export type TabsProp = {
    tabs: Array<Tab>;
    loading?: boolean;
    classes?: {
        container?: string;
        tab?: string;
        tabs?: string;
        tabContent?: string;
        selectedTab?: string;
        badge?: string;
        selectedBadge?: string;
        headerTabs?: string;
    };
    defaultValue?: string;
    tabsHeader?: React.ReactNode;
    children?: React.ReactNode;
    onChangeTab?: () => boolean | void | Promise<void>;
};

export type Tab = {
    label: string;
    value: string;
    hidden?: boolean;
    content?: React.ReactNode | (({ isTabSelected: boolean }) => React.ReactNode);
    badge?: React.ReactNode;
    onClick?: Function;
};

export type Tabs = React.FunctionComponent<TabsProp>;
