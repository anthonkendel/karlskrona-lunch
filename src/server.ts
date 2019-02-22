import { exists } from '@server/utils/utils';

// tslint:disable-next-line no-console
console.log('server is executed', exists(['1', '2'], '1'));
