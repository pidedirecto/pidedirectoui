import * as moment from 'moment';
import momentDurationFormatSetup from 'moment-duration-format';
import 'moment/locale/es';
import 'moment/locale/sv';

momentDurationFormatSetup(moment);
moment.locale(navigator.language);
