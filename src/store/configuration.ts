import { Action, configureStore, getDefaultMiddleware, ThunkAction } from "@reduxjs/toolkit";
import { enableES5 } from "immer";
import { load, save } from "redux-localstorage-simple";
import reduxLogger from "redux-logger";

enableES5();

const middlewareCollection = [reduxLogger, ...getDefaultMiddleware()];

const localStoragePath = "dpio-asset-editor";

export const createRootStore = () => {
    return configureStore({
        preloadedState: load({
            namespace: localStoragePath,
        }),
        reducer: {},
        middleware: [
            ...middlewareCollection,
            save({
                namespace: localStoragePath,
            }),
        ],
        devTools: true,
    });
};

export const rootStore = createRootStore();

export type RootState = ReturnType<typeof rootStore.getState>;
export type AppThunk<R, A extends Action<any>> = ThunkAction<R, RootState, void, A>;
