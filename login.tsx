import type { NextPage } from 'next'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from 'next/link';
import { faArrowAltCircleLeft, faArrowAltCircleRight, faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';

const Home: NextPage = () => {
  return (
    <>

      <div className="w-full h-screen flex">
        <div className='mx-auto my-auto w-full'>
          <h1 className='px-12 p-16 text-4xl'>Qual seu E-mail? 📧</h1>
          <div className='px-12'>
            <label className='text-xl font-light text-slate-700'>E-mail</label>

            <input className='w-full text-left border-b-2 text-xl border-x-gray-500 h-14' type={'text'}></input>

            <div className='flex'>

              <Link href={'/'}>
                <FontAwesomeIcon icon={faArrowLeft} className='text-[60px] w-full mt-9 text-sky-500 ' />
              </Link>
              <Link href={'/login2'}>
                <FontAwesomeIcon icon={faArrowRight} className='text-[60px] w-full mt-9 text-sky-500 ' />
              </Link>
            </div>

            
            <div>
              <p className='text-sm mt-8'>Problemas com o login ?<Link href={'/termos'}><button className=' text-blue border-b-4'>Clique aqui</button></Link></p>
            </div>
          </div>
        </div>
      </div>

    </>

  )
}

export default Home
