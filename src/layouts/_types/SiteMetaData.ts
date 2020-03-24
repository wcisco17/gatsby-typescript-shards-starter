/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: SiteMetaData
// ====================================================

export interface SiteMetaData_site_siteMetadata_author {
  __typename: "SiteSiteMetadataAuthor";
  name: string | null;
}

export interface SiteMetaData_site_siteMetadata {
  __typename: "SiteSiteMetadata";
  title: string | null;
  author: SiteMetaData_site_siteMetadata_author | null;
}

export interface SiteMetaData_site {
  __typename: "Site";
  siteMetadata: SiteMetaData_site_siteMetadata | null;
}

export interface SiteMetaData {
  site: SiteMetaData_site | null;
}
