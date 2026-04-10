import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import project from './src/schemas/project'
import skill from './src/schemas/skill'
import experience from './src/schemas/experience'

export default defineConfig({
  name: 'default',
  title: 'My Portfolio',
  projectId: 'f160mhij',
  dataset: 'production',
  plugins: [
    structureTool({
      name: 'studio',
      title: 'Studio',
    }),
    visionTool(),
  ],
  schema: {
    types: [project, skill, experience],
  },
})