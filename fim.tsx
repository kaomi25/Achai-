import type { NextPage } from 'next'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from 'next/link';
import { faArrowAltCircleLeft, faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons';

const Home: NextPage = () => {
  return (
    <>

      <div className="w-full h-screen flex">
        <div className='mx-auto my-auto w-full'>
          <h1 className='px-12 p-16 text-4xl'>Prontinho cadastro realizado ! Agora só clicar no foguete e decolar ! 😄</h1>
          <div className='px-12'>
            <div className='flex'>
              <Link href={'/login'}>
                <button className='text-[60px] w-full mt-9  text-cyan-600 '>🚀</button>
              </Link>
            </div>

            <div>
              <p className='text-sm mt-8'></p>
            </div>
          </div>
        </div>
      </div>

    </>

  )
}

export default Home
