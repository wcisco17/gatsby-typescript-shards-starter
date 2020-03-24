/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: Navigations
// ====================================================

export interface Navigations_allImageSharp_edges_node_fluid {
  __typename: "ImageSharpFluid";
  src: string;
}

export interface Navigations_allImageSharp_edges_node {
  __typename: "ImageSharp";
  fluid: Navigations_allImageSharp_edges_node_fluid | null;
}

export interface Navigations_allImageSharp_edges {
  __typename: "ImageSharpEdge";
  node: Navigations_allImageSharp_edges_node;
}

export interface Navigations_allImageSharp {
  __typename: "ImageSharpConnection";
  edges: Navigations_allImageSharp_edges[];
}

export interface Navigations {
  allImageSharp: Navigations_allImageSharp;
}
