import { setupWorker } from 'msw';
import handlers from './msw_handlers/index';

export const worker = setupWorker(...handlers);
