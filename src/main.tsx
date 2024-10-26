import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { App } from './App.tsx'
import { QueryClient, QueryClientProvider } from 'react-query'


const mainQueryClient = new QueryClient()

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<QueryClientProvider client={mainQueryClient}>
			<App/>
		</QueryClientProvider>
	</StrictMode>
)

