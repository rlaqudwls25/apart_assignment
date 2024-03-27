import type { AppProps } from 'next/app'
import { Global } from '@emotion/react'
import globalStyles from '@styles/globalStyles'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { RecoilRoot } from 'recoil'
import Layout from '@components/shared/Layout'
import Navbar from '@/components/navbar/Navbar'

export default function App({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient({})

  return (
    <Layout>
      <Global styles={globalStyles} />
      <QueryClientProvider client={queryClient}>
        <RecoilRoot>
          <Navbar />
          <Component {...pageProps} />
        </RecoilRoot>
      </QueryClientProvider>
    </Layout>
  )
}
