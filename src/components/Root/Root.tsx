import React, { Suspense } from "react";
import { Redirect, Route, RouteComponentProps, Switch, useRouteMatch } from "react-router";
import { ApplicationRoutes, getRoutes } from "./routerConfig";

interface RootComponentProps extends Partial<RouteComponentProps<any>> {}

export const COMPONENT_NAME = "Root";

export const Root: React.FunctionComponent<RootComponentProps> = (props) => {
    const match = useRouteMatch();

    const routes = getRoutes();

    return (
        <Suspense fallback={"~~~~"}>
            <Switch>
                <Redirect exact from={match.url} to={`/${routes[0].defaultPath}`} />
                {routes.map((route, i) => (
                    <Route key={i} path={`/${route.path}`} component={route.component} />
                ))}
                <Redirect from="*" to={`/${ApplicationRoutes.Home}`} />
            </Switch>
        </Suspense>
    );
};
