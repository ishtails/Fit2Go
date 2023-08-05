import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import { schemaTypes } from "./sanity/schemas"

export const config = defineConfig({
  name: 'fit2go',
  title: 'fit2go',

  projectId: 'o19642js',
  dataset: 'production',
  apiVersion: '2023-08-04',

  basePath: '/admin',

  plugins: [deskTool()],
  schema: {types: schemaTypes}
})