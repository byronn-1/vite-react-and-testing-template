import { setupServer } from 'msw/node';
import handlers from './msw_handlers';

export const server = setupServer(...handlers);
