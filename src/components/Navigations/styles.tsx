import { theme } from '@config/theme';
import { Nav } from 'shards-react';
import styled from 'styled-components';

export const Navs = styled(Nav)`
    float: right;
    margin-top: 2rem;
    margin-right: 2rem;  
    .nav-link {
        color: white;
        font-size: 1.04rem;
    }

    @media ${theme.media.phone} {
        
    }
`;

export const Img = styled.img`
    width: 67.32px;
    margin-top: 1.5rem;
`;

export const NavContent = styled.div`
    margin-left: 8rem;
`;