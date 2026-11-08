import { createRootRoute, Outlet } from '@tanstack/react-router'
export const Route = createRootRoute({
  component: () => (
    <html>
      <head><title>Interactive App</title></head>
      <body><Outlet /></body>
    </html>
  )
})
