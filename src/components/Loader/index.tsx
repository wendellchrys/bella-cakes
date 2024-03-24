import React from 'react'
import * as LoaderStyles from './styled'
import { PacmanLoader } from 'react-spinners'

const Loader = () => {
  return (
    <LoaderStyles.Container>
      <PuffLoader color="#ffffff" />
    </LoaderStyles.Container>
  )
}

export default Loader
