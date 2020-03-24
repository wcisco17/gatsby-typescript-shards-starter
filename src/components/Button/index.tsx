import { theme } from "@config/theme";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as React from "react";
import { Button } from "shards-react";
import styled from "styled-components";

interface IProps {
    title: string;

    // Optional
    onClick?: () => void;
    classes?: any;
    size?: string;

    // with ICON
    withIcon?: boolean;
    icon?: IconProp;
}

const Buttons = styled(Button)`
  border-radius: 5px !important;
  background-color: ${theme.colors.primay_dark_blue} !important;
  border-color: ${theme.colors.primay_light_pink};
  border-width: 3px;
    color: white;
  &:hover {
    border-color: ${theme.colors.primay_dark_blue};
    color: white;
  }
`;

export default ({ title, onClick, withIcon, icon, classes, size }: IProps) => {
    return (
        <Buttons size={size} className={classes} theme={theme.colors.primay_dark_blue} onClick={onClick}>
            {withIcon && (
                <span>
                    <FontAwesomeIcon icon={icon} />
                </span>
            )}
            {title}
        </Buttons>
    );
};
