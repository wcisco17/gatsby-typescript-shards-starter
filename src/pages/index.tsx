import GlobalLayout from '@layouts/index'
import Introduction from '@sections/Introductions'
import * as React from 'react'

const IndexPage = (props: any) => {
  return (
    <GlobalLayout {...props}>
      <Introduction name='Gastby Starter' />
    </GlobalLayout>
  )
}

export default IndexPage
