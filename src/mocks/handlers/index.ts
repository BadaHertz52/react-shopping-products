import cartHandler from './cart';
import productsHandler from './products';

const handlers = [...productsHandler, ...cartHandler];

export default handlers;
