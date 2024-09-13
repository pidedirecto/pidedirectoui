import { CountryCode } from 'src/constants/CountryCode';
import { Currencies, Currency } from 'src/constants/Currency';
import { isArgentina } from 'src/utils/country/isArgentina';
import { isBolivia } from 'src/utils/country/isBolivia';
import { isBrazil } from 'src/utils/country/isBrazil';
import { isColombia } from 'src/utils/country/isColombia';
import { isCostaRica } from 'src/utils/country/isCostaRica';
import { isCuba } from 'src/utils/country/isCuba';
import { isDominicanRepublic } from 'src/utils/country/isDominicanRepublic';
import { isEcuador } from 'src/utils/country/isEcuador';
import { isElSalvador } from 'src/utils/country/isElSalvador';
import { isGuatemala } from 'src/utils/country/isGuatemala';
import { isHonduras } from 'src/utils/country/isHonduras';
import { isMexico } from 'src/utils/country/isMexico';
import { isNicaragua } from 'src/utils/country/isNicaragua';
import { isPanama } from 'src/utils/country/isPanama';
import { isParaguay } from 'src/utils/country/isParaguay';
import { isPeru } from 'src/utils/country/isPeru';
import { isSweden } from 'src/utils/country/isSweden';
import { isUnitedStates } from 'src/utils/country/isUnitedStates';
import { isUruguay } from 'src/utils/country/isUruguay';

export function doesCurrencyBelongsToCountry(currency: Currency, country: CountryCode): boolean {
    switch (currency) {
        case Currencies.MXN:
            return isMexico(country);
        case Currencies.SEK:
            return isSweden(country);
        case Currencies.USD:
            return isUnitedStates(country) || isEcuador(country) || isElSalvador(country);
        case Currencies.UYU:
            return isUruguay(country);
        case Currencies.ARS:
            return isArgentina(country);
        case Currencies.BRL:
            return isBrazil(country);
        case Currencies.PEN:
            return isPeru(country);
        case Currencies.CLP:
            return isColombia(country);
        case Currencies.PYG:
            return isParaguay(country);
        case Currencies.COP:
            return isColombia(country);
        case Currencies.BOB:
            return isBolivia(country);
        case Currencies.CRC:
            return isCostaRica(country);
        case Currencies.CUP:
            return isCuba(country);
        case Currencies.GTQ:
            return isGuatemala(country);
        case Currencies.NIO:
            return isNicaragua(country);
        case Currencies.PAB:
            return isPanama(country);
        case Currencies.DOP:
            return isDominicanRepublic(country);
        case Currencies.HNL:
            return isHonduras(country);
        default:
            return true;
    }
}
