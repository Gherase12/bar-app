import { createCurrentUserHook, createClient } from 'next-sanity'
import createImageUrlBuilder from '@sanity/image-url'

export const config = {
    projectId: process.env.NEXT_PUBLIC_SAINTY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SAINTY_DATASET || 'production',
  apiVersion: '2021-03-25',
  userCdn: true,
}

export const sanityClient = createClient(config)
export const urlFor = (source) => createImageUrlBuilder(config).image(source)
