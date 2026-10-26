import { createRootRoute, Outlet } from '@tanstack/react-router'

import Sidebar from '@/components/Sidebar'

const RootLayout = () => (
  <div className='absolute inset-0 flex bg-black'>
    <main className='absolute inset-y-0 right-0 left-0 bg-black sm:left-[200px]'>
      <Sidebar />
      <Outlet />
    </main>
  </div>
)

export const Route = createRootRoute({ component: RootLayout })
