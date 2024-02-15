/**
 * @prettier
 */
import type { LogEventType } from 'src/constants/LogEventType';

export type UiLogEvent = {
    logEventType: LogEventType;
    message?: string;
    details?: string;
    data?: Record<string, any>;
    offline?: boolean;
    occurredAt?: Date;
};
