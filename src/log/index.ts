import * as nest from '../lib/logger/nest';
export { setGlobalLogger } from './wrapper';
export { Logger } from './logger';

export * from './wrapper';

export function initLogger() {
  nest.initLogger();
}
