import { createFileRoute } from '@tanstack/react-router'

import StackScreen from '@/Screens/Stack/StackScreen'

export const Route = createFileRoute('/stack')({ component: StackScreen })
