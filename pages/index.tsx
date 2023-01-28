import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import AddTodo from '../components/AddTodo/AddTodo'
import PrimaryLayout from '../components/Layouts/PrimaryLayout'
import Navbar from '../components/Navbar/Navbar'
import TodoItem from '../components/TodoItem/TodoItem'
import TodosList from '../components/TodosList/TodosList'
import { NextPageWithLayout } from './page'

const Home: NextPageWithLayout = () => {

  const someTodos: any = [
    <TodoItem name="Taxes" isDone={false} />,
    <TodoItem name="Walk the dogs" isDone={true} />,
    <TodoItem name="Get milk" isDone={false} />,
  ]

  return (
    <div className='text-2xl flex flex-col items-center px-2 md:px-0'>
      <AddTodo />
      <TodosList todos={someTodos}/>
    </div>
  )
}

export default Home

Home.getLayout = (page) => {
  return <PrimaryLayout>{page}</PrimaryLayout>;
};
