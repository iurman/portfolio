import withMDX from '@next/mdx'
import type { NextConfig } from 'next'

const mdx = withMDX({
  extension: /\.mdx?$/
})

const nextConfig: NextConfig = {
  // Allow MDX and markdown files as pages/components
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
}

export default mdx(nextConfig)
