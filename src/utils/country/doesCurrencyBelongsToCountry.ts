/**
 * @prettier
 */
import { CountryCode } from 'src/constants/CountryCode';
import { Currencies, Currency } from 'src/constants/Currency';
import { isArgentina } from 'src/utils/country/isArgentina';
import { isBrazil } from 'src/utils/country/isBrazil';
import { isColombia } from 'src/utils/country/isColombia';
import { isMexico } from 'src/utils/country/isMexico';
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
            return isUnitedStates(country);
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
        default:
            return true;
    }
}
