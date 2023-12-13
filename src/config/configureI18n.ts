import { I18n } from 'aws-amplify';
import { en } from 'src/i18n/en';
import { es } from 'src/i18n/es';

// export const locale = navigator.language || navigator.userLanguage;
export const locale = 'es-MX';

I18n.setLanguage('es');
I18n.putVocabularies({
    es,
    en,
});

// export const locale = navigator.language || navigator.userLanguage;
//
// I18n.setLanguage(locale);
// I18n.putVocabularies({
//     en,
//     es,
// });
