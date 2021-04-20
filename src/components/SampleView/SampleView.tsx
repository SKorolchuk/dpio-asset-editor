import React from "react";
import logo from "./logo.svg";
import "./SampleView.scss";

export const COMPONENT_NAME = "SampleView";

export const SampleView: React.FunctionComponent = () => {
    return (
        <div className={`${COMPONENT_NAME}`}>
            <header className={`${COMPONENT_NAME}-header`}>
                <img src={logo} className={`${COMPONENT_NAME}-logo`} alt="logo" />
                <p>
                    Edit <code>{COMPONENT_NAME}.tsx</code> and save to reload.
                </p>
                <a
                    className={`${COMPONENT_NAME}-link`}
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer">
                    Learn React
                </a>
            </header>
        </div>
    );
};
