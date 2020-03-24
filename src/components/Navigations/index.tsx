import Button from '@components/Button';
import { theme } from '@config/theme';
import { graphql, useStaticQuery } from 'gatsby';
import * as React from 'react';
import { Fragment } from 'react';
import { Col, Container, NavItem, Row } from 'shards-react';
import styled from 'styled-components';
import { Img, Navs } from './styles';

const Containe = styled(Container)`
    max-width: 1360px;
    margin-bottom: 5rem;
    @media ${theme.media.phone} {
        max-width: 370px !important;
    }
`;

interface IProps { }

const Naviations: React.FC<IProps> = ({ children }) => {
    const { allImageSharp: { edges: nav } } = useStaticQuery(navigations)
    return (
        <Containe>
            <Row>
                <Col>
                    {
                        nav.map((n, key) => {
                            return (
                                <Fragment key={`${key}`}>
                                    <Img src={n.node.fluid.src} alt='...' />
                                    <Navs>
                                        <NavItem>
                                            <Button
                                                title='Download Resume'
                                            />
                                        </NavItem>
                                    </Navs>
                                    {children}
                                </Fragment>
                            )
                        })
                    }
                </Col>
            </Row>
        </Containe>
    )
}

export default Naviations

export const navigations = graphql`
query Navigations {
  allImageSharp {
    edges {
      node {
        fluid {
          src
        }
      }
    }
  }
}
`