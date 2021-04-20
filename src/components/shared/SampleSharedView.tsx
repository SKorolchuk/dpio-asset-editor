import React from "react";
import { faInfo } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTranslation } from "react-i18next";

export const SampleSharedView: React.FunctionComponent = () => {
    const { t } = useTranslation();

    return (
        <div className="d-flex flex-row justify-content-start align-items-center">
            <div className="d-flex h-100 ">
                <FontAwesomeIcon icon={faInfo} size="4x" />
            </div>
            <div className="d-flex flex-column align-items-center ">
                <p className="text-primary-accent">OK</p>
                <div className="h4 font-weight-normal text-primary-accent">{t("TEST_TRANSLATION")}</div>
            </div>
        </div>
    );
};
