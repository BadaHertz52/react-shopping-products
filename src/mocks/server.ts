import { setupServer } from 'msw/node';

import handlers from './handlers/index';

const server = setupServer(...handlers);

export default server;
