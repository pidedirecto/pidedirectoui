/**
 * @prettier
 */
import type { TimeZoneName } from 'src/types/Id';

export const TimeZones = Object.freeze({
    AMERICA_MONTERREY: 'America/Monterrey' as TimeZoneName,
    AMERICA_TIJUANA: 'America/Tijuana' as TimeZoneName,
    EUROPE_STOCKHOLM: 'Europe/Stockholm' as TimeZoneName,
    ETC_UTC: 'Etc/UTC' as TimeZoneName,
    AMERICA_MONTEVIDEO: 'America/Montevideo' as TimeZoneName,
    AMERICA_BUENOSAIRES: 'America/Argentina/Buenos_Aires' as TimeZoneName,
    AMERICA_SAOPABLO: 'America/Sao_Paulo' as TimeZoneName,
    AMERICA_LIMA: 'America/Lima' as TimeZoneName,
    AMERICA_SANTIAGO: 'America/Santiago' as TimeZoneName,
    AMERICA_ASUNCION: 'America/Asuncion' as TimeZoneName,
});

export type TimeZone = (typeof TimeZones)[keyof typeof TimeZones];
