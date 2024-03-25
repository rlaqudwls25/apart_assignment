import type { AppProps } from 'next/app'
import { Global } from '@emotion/react'
import globalStyles from '@/styles/globalStyles'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { RecoilRoot } from 'recoil'

export default function App({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient({})

  return (
    <>
      <Global styles={globalStyles} />
      <QueryClientProvider client={queryClient}>
        <RecoilRoot>
          <Component {...pageProps} />
        </RecoilRoot>
      </QueryClientProvider>
    </>
  )
}
