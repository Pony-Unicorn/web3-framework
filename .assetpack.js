import { compress } from '@assetpack/core/image'

// see https://pixijs.io/assetpack/docs/guide/pipes/compress/
const config = {
  entry: './raw-assets',
  output: './public/images/',
  cache: false,
  pipes: [compress()],
}

export default config
