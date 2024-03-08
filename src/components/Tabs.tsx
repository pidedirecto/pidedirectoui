/**
 * @prettier
 */
import * as React from 'react';
import { Children, useContext, useState } from 'react';
import { LinearProgress } from 'src/components/LinearProgress';
import { UiLogEventTrackerContext } from 'src/components/UiLogEventTracker';
import { UiLogEventTypes } from 'src/constants/UiLogEventType';
import { normalizeUiStackTrace } from 'src/services/logEvent/normalizeUiStackTrace';
import { useCreateUserClickedTabLogEvent } from 'src/services/logEvent/useCreateUserClickedTabLogEvent';
import classes from 'src/styles/tabs.module.css';
import { Tab, TabsProp } from 'src/types/components/Tabs';
import { classNames } from 'src/utils/css/classNames';

export function Tabs({ tabs, loading, classes: classesProp, defaultValue, onChangeTab, tabsHeader, children }: TabsProp): React.ReactElement {
    const createUserClickedTabLogEvent = useCreateUserClickedTabLogEvent();

    const { addElementToStackTrace } = useContext(UiLogEventTrackerContext);

    const [currentTab, setCurrentTab] = useState(defaultValue ?? tabs[0].value);

    const existsTabForChildren = (index: number) => {
        return tabs[index];
    };

    const handleClickTab = (tab: Tab) => {
        createUserClickedTabLogEvent(tab.label);
        setCurrentTab(tab.value);
        tab.onClick?.(tab.value);
    };

    const addTabToStackTrace = (tab: Tab) => {
        addElementToStackTrace({
            element: normalizeUiStackTrace(`tab_${tab.label}`),
            uiLogEventType: UiLogEventTypes.USER_CLICKED_TAB,
        });
    };

    const tabsToShow = tabs.filter((tab) => !tab.hidden);
    const childrenArray = Children.toArray(children);

    return (
        <div className={classNames(classes.container, classesProp?.container)}>
            <div className={classNames(classes.header, classesProp?.headerTabs)}>
                <div className={classNames(classes.tabs, classesProp?.tabs)} role='tablist'>
                    {tabsToShow.map((tab) => {
                        const isTabSelected = currentTab === tab.value;
                        return (
                            <button
                                key={tab.label}
                                data-selected={isTabSelected}
                                className={classNames(classes.tab, classesProp?.tab)}
                                onClick={() => handleClickTab(tab)}
                                role='tab'
                                aria-selected={isTabSelected}
                                aria-controls={`tabpanel-${tab.value}`}
                                id={`tab-${tab.value}`}
                            >
                                <span>{tab.label}</span>
                                {!!tab?.badge && (
                                    <span
                                        className={classNames(classes.badge, classesProp?.badge, isTabSelected && classes.selectedBadge, isTabSelected && classesProp?.selectedBadge)}
                                        aria-selected={isTabSelected}
                                    >
                                        {tab?.badge}
                                    </span>
                                )}
                            </button>
                        );
                    })}
                </div>
                {loading && <LinearProgress />}
            </div>
            {tabsHeader}
            {childrenArray.map((child, idx) => {
                const isTabSelected = currentTab === tabsToShow[idx]?.value;
                if (!existsTabForChildren(idx) || !isTabSelected) {
                    return null;
                }

                return (
                    <section
                        className={classNames(classes.tabContainer, classesProp?.tabContent)}
                        key={tabsToShow[idx].value}
                        role='tabpanel'
                        id={`tabpanel-${tabsToShow[idx].value}`}
                        aria-labelledby={`tab-${tabsToShow[idx].value}`}
                        onClickCapture={() => addTabToStackTrace(tabsToShow[idx])}
                    >
                        {child}
                    </section>
                );
            })}
        </div>
    );
}
