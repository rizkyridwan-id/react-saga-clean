import { Link, RouteObject, matchRoutes } from 'react-router-dom';
import {
  Breadcrumb,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from './ui/breadcrumb';
import { CustomRouteObject, routes } from '@/setup/router/router';
import { Fragment } from 'react/jsx-runtime';

export interface BreadcrumbRouterProps {
  className: string;
}

export default function BreadcrumbRouter({ className }: BreadcrumbRouterProps) {
  const pathName = location.pathname;
  const matchedRoute = matchRoutes(routes as RouteObject[], pathName) || [];

  return (
    <Breadcrumb className={className}>
      <BreadcrumbList>
        {matchedRoute.map((mRoute, i) => {
          const route = mRoute.route as CustomRouteObject;
          const next = matchedRoute[i + 1];
          const separator = next && <BreadcrumbSeparator />;

          return (
            <Fragment key={i}>
              <BreadcrumbLink asChild>
                <Link to={mRoute.pathname}>{route.breadcrumb}</Link>
              </BreadcrumbLink>
              {separator}
            </Fragment>
          );
        })}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
