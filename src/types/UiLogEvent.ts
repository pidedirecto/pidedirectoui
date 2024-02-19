/**
 * @prettier
 */
import type { UiLogEventType } from 'src/constants/UiLogEventType';

export type UiLogEvent = {
    logEventType: UiLogEventType;
    message?: string;
    details?: string;
    data?: Record<string, any>;
    offline?: boolean;
    occurredAt?: Date;
};
