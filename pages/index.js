import Head from 'next/head'
import Image from 'next/image'
import requests from '../utils/requests'
import Header from "../components/Header"
import Nav from "../components/Navbar"
import Results from "../components/Results"

export default function Home({result}) {
  // console.log(props);
    return (
    <>
    <Head>
      <title>Hulu 2.0</title>
    </Head>
{/* Header */}

<Header/>

{/* Nav */}
<Nav/>



{/* Results */}
<Results results={result}/> 

    </>
  )
}

export async function getServerSideProps(context){
  const genre=context.query.genre;
  const request=await fetch(`https://api.themoviedb.org/3${
    requests[genre]?.url || requests.fetchTrending.url
  }`).then((res)=>(
    res.json()
  ))
  return{
    props:{
      result:request.results
    }
}
}