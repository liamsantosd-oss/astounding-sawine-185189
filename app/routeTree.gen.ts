import { Route as RootRoute } from './routes/__root'
import { Route as IndexRoute } from './routes/index'

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexRoute
      parentRoute: typeof RootRoute
    }
  }
}

export const routeTree = RootRoute.addChildren([IndexRoute])

