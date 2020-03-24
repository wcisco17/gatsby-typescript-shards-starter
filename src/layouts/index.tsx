import Naviations from '@components/Navigations'
import { graphql, useStaticQuery } from 'gatsby'
import * as React from 'react'
import Helmet from 'react-helmet'
import { GlobalStyles } from './styles'
import { SiteMetaData } from './_types/SiteMetaData'

interface IGlobalProps {
    propsData: any
}

const GlobalLayout: React.FC<IGlobalProps> = (props: any) => {
    const data = useStaticQuery<SiteMetaData>(SiteMeta)

    return (
        <React.Fragment>
            <GlobalStyles />
            <Helmet title={data.site.siteMetadata.title} />
            <Naviations>
                <div style={{ marginTop: '1.4rem' }} className="page-content">
                    {props.children}
                </div>
            </Naviations>
        </React.Fragment>
    )
}

export default GlobalLayout;

export const SiteMeta = graphql`
query SiteMetaData {
  site {
    siteMetadata {
      title
      author {
        name
      }
    }
  }
}

`;