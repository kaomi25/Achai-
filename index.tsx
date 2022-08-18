import type { NextPage } from 'next'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle, faFacebook } from '@fortawesome/free-brands-svg-icons';
import Link from 'next/link';

const Home: NextPage = () => {
  return (
    <>
      <div className="w-full h-screen flex">
        <div className='mx-auto my-auto w-full'>
         
          <div className='px-12'>
          <Link href={'/register'}>
            <button className='w-full h-12 bg-white mt-5 border-b-4 rounded-2xl'>
              <p className='text-center text-slate-600'>Registra-se</p>
            </button>
          </Link>
            <Link href={'/login'}>
            <button className='w-full h-12 bg-wite mt-5 rounded-2xl border-b-4 '>
              <p className='text-center text-slate-600'>Login</p>
            </button>
            </Link>
          </div>


          {/* <div className='w-full'>
            <p className='text-slate-600 text-center text-[14px] mt-6'>Quer colocar seu serviço ?<a href='register' className='text-sky-800'>Registra-se</a></p>
          </div> */}
          <div className='text-center'>
            <p className='mt-3 text-sm'>OU</p>
            <p className='mt-2 text-lg'>Entre com</p>
            <p className='mt-4'><FontAwesomeIcon size="2x" className='pr-4 text-red-600' icon={faGoogle} /><FontAwesomeIcon className='ml-4 text-sky-700' size="2x" icon={faFacebook} /></p>
            
            <div className='px-12 mt-40'>
              <p className='text-sm text-slate-500'>By Horn</p>
            </div>
          </div>


            
        </div>


        
      </div>
    
    </>
    
  )
}

export default Home
