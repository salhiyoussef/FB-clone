import { getSession} from 'next-auth/client'
import Head from 'next/head'
import Header from '../components/Header'
import Login from '../components/Login'
import Sidebare from "../components/Sidebar";
import Feed from "../components/Feed";
import Wideget from "../components/Wideget";
export default function Home({session}) {
  if (!session){
    return (
      <Login/>
    )
  }
  else { return (
    <div>
      <Head>
        <title>facebook</title>
      </Head>
      {/* HEADER */}
      <Header session = {session}/>
      <main className="flex items-center p-2">
        {/* sidebar */}
          <div className="flex ml-2 items-center">
            <Sidebare/>
          </div>
        {/* feed */}
        <div className="flex justify-center flex-grow">
          <Feed/>
        </div>
        {/* wideget */}
        <div className="flex item-center sm:space-x-2 justify-end">
          <Wideget/>
        </div>
      </main>
    </div>
  )
  }
}
export async function getServerSideProps(context) {
  const session = await getSession(context)
  return{
    props:{
      session
    }
  }
}