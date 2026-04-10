import { createClient } from '@sanity/client'

export const client = createClient({
  projectId: 'f160mhij',
  dataset: 'production',
  useCdn: true,
  apiVersion: '2024-01-01',
})