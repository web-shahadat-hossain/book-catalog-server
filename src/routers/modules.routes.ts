import { bookRouters } from "../app/modules/book/book.router";

const modulesRoutes = [
  // user router start here
  {
    path: '/book',
    route: bookRouters.router,
  },
  
  
];

export default modulesRoutes;
