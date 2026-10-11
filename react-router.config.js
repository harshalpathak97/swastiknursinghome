import { paths } from './src/data/paths.js'

// Static site: every URL is prerendered to real HTML at build time (no server).
export default {
  appDirectory: 'src',
  ssr: false,
  prerender: () => [...paths, '/404'],
}
