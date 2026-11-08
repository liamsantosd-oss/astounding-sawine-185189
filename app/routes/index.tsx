import { createFileRoute } from '@tanstack/react-router'
export const Route = createFileRoute('/')({
  component: () => (
    <div style={{ padding: '20px', fontFamily: 'sans-serif', backgroundColor: '#121214', color: '#fff', minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <h1>TanStack Workspace Active!</h1>
    </div>
  )
})
