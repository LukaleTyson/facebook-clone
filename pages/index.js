import { getSession } from 'next-auth/react'
import Head from 'next/head'
import Image from 'next/image'
import Feed from '../components/Feed'
import Header from '../components/Header'
import Login from '../components/Login'
import Sidebar from '../components/Sidebar'


export default function Home({ session }) {
  if (!session) return <Login />;
  return (
    <div className='h-screen bg-gray-100 overflow-hidden'>
      <Head>
        <title>Tyson Facebook Clone</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/fb.jpghttps://github.com/LukaleTyson/facebook-clone.git" />
      </Head>
      <Header />
      <main className='flex'>
        {/* sidebar */}
        <Sidebar />
        <Feed/> 
      </main>
  
    </div>
  )
}
export async function getServerSideProps(ctx) {
  const session = await getSession(ctx)
  return {
    props: {
      session
    }
  }
}
