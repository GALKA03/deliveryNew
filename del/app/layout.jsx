"use client"
import './styles/globals.css'
import { Inter } from 'next/font/google'
import { wrapper } from '../app/redux/store';
import Header from './components/Header'
import { Providers } from './redux/Providers'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <div className='w-full h-full'>
            <header><Header /></header>
            <div className='flex justify-around flex-wrap grow py-10'>
              {children}
            </div>
            <footer />
          </div>
        </Providers>
      </body>
    </html>
  )
}

export default RootLayout;
// export default function RootLayout({ children}) {
  
  
//   return (
//     <html lang="en">
    
//       <body className={inter.className}>
//         <Providers>
//         <div className='w-full h-full'>
//           <header><Header/></header>
//          <div className='flex justify-around flex-wrap grow py-10'>

            
//             {children}
//           </div>
//           <footer />
//         </div>
//         </Providers>
//       </body>
//     </html>
//   )
// }
