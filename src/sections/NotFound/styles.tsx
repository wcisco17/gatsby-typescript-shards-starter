import { theme } from '@config/theme';
import styled from 'styled-components';

export const Container = styled.div`
    text-align: center;
    margin: auto;
     width: 50%;
    position: relative;
    top: 300px;
    padding: 10px;
    .four-title {
        font-size: 7rem !important;
        color: ${theme.colors.primay_light_pink} !important;
        padding-bottom: 4rem;
        @media ${theme.media.phone} {
            font-size: 6rem !important;
        }
    }

    .four-not {
        @media ${theme.media.phone} {
            font-size: 2rem !important;
        }
    }

        @media ${theme.media.tablet} {
            padding: 0px;
        }
`;
