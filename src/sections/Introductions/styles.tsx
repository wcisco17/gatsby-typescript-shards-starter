import { theme } from '@config/theme';
import { Col, Container } from 'shards-react';
import styled from 'styled-components';

export const Containe = styled(Container)`
    max-width: 1360px;

    @media ${theme.media.phone} {
        max-width: 370px !important;
    }
`;

export const Content = styled(Col)`
  margin-top: 7.5rem;

  .content-button01 {
    margin-top: 3rem;
  }

  .small-text {
      font-size: 20px;
      line-height: 1rem;
      @media ${theme.media.tablet} {
        line-height: 0.7rem;
      }
  }

  .big-text {
    font-size: 4.5rem !important;
    @media ${theme.media.tablet} {
            font-size: 3rem !important;

        }
    @media ${theme.media.phone} {
            font-size: 2rem !important;

        }
            .op1 {
                line-height: 0rem;

            }
    }
    
    @media ${theme.media.tablet} {
            font-size: 2rem !important;
            line-height: 3rem;
        }
`;