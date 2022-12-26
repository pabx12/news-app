import '../styles/globals.css'
import Head from './head'
import Header from './Header'
import Provider from './Provider'
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <Head/>
      <Provider>
          <body className='bg-gray-100 dark:bg-zinc-900 transition-all'>
            <Header/>
            <div className='max-w-6xl mx-auto'>
                {children}  
            </div>
          </body>
      </Provider>
    </html>
  )
}
