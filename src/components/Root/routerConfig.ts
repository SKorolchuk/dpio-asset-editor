import { SampleSharedView } from "../shared/SampleSharedView";
import { SampleView } from "../SampleView/SampleView";
import { Root } from ".";

export enum ApplicationRoutes {
    Home = "home",
    SharedView = "sample-shared-view",
}

export interface IApplicationRoute {
    path: ApplicationRoutes;
    name: string;
    component: typeof Root | typeof SampleSharedView;
    defaultPath?: string;
}

export const getRoutes = (): IApplicationRoute[] => {
    return [
        {
            path: ApplicationRoutes.Home,
            name: "Home",
            component: SampleView,
            defaultPath: "home",
        },
        {
            path: ApplicationRoutes.SharedView,
            name: "Shared View",
            component: SampleSharedView,
        },
    ];
};
