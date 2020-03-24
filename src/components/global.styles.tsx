import { theme } from '@config/theme';
import styled from 'styled-components';

export enum Colors {
    pink = 'pink',
    gray = 'gray',
    light_gray = 'light_gray'
}

export const Text = styled.span`
    color: ${(props: { colors: string }) => {
        if (Colors.pink === props.colors) {
            return theme.colors.primay_light_pink
        } else if (Colors.gray === props.colors) {
            return theme.colors.primary_light_gray
        } else if (Colors.light_gray === props.colors) {
            return theme.colors.primary_light_gray
        }
    }};
    margin-right: 0.51rem;
`;

export const Title = styled.h2`
    color: ${(props: { colors: string }) => {
        if (Colors.pink === props.colors) {
            return theme.colors.primay_light_pink
        } else if (Colors.gray === props.colors) {
            return theme.colors.primary_light_gray
        } else if (Colors.light_gray === props.colors) {
            return theme.colors.primary_light_gray
        }
    }};
    margin-right: 0.51rem;
    font-weight: 900;
`;

