interface routeInterface {
  path: string,
  component: any,
  exact: boolean,
  routes?: Array<any>
}

export type RouteInterface = routeInterface