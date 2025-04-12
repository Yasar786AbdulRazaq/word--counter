import Head from 'next/head'
import Header from '@/app/componnent/Header'
import Footer from '@/app/componnent/Footer'
import TextArea from '@/app/componnent/TextArea'

export default function Home() {
  return (
    <>
      <Head>
        <title>Word Counter</title>
        <meta name="description" content="Count words and characters easily!" />
      </Head>

      <div className="flex flex-col min-h-screen bg-blue-50 text-blue-900">
        <Header />
        <main className="flex-grow flex flex-col items-center justify-center px-4 py-8">
          <TextArea />
        </main>
        <Footer />
      </div>
    </>
  )
}
