import { Studio } from 'sanity'
import config from '../sanity.config'

export default function StudioPage() {
  return (
    <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0 }}>
      <Studio config={config} />
    </div>
  )
}