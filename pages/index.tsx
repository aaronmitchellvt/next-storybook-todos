import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import PrimaryLayout from '../components/Layouts/PrimaryLayout'
import Navbar from '../components/Navbar/Navbar'
import { NextPageWithLayout } from './page'

const Home: NextPageWithLayout = () => {
  return (
    <div className='text-2xl'>Home Page</div>
  )
}

export default Home

Home.getLayout = (page) => {
  return <PrimaryLayout>{page}</PrimaryLayout>;
};
