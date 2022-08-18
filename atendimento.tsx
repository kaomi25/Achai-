import type { NextPage } from 'next'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from 'next/link';
import { faArrowAltCircleLeft, faArrowAltCircleRight, faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';

const Home: NextPage = () => {
  return (
    <>

      <div className="w-full h-screen flex">
        <div className='mx-auto my-auto w-full'>
          <h1 className='px-12 p-16 text-4xl'>Agora em qual cidade você deseja atender ? 👷‍♀️ 👷</h1>
          <div className='px-12'>
            <label className='text-xl font-light text-slate-700'>Raio</label>
            <p className='text-sm mt-1 text-slate-500 font-light'>"Caso queira atender somente sua cidade selecione cidade"</p>
             <select className='w-full text-left border-b-2 text-xl border-x-gray-500 h-14'>
               <option>Somente em minha cidade</option>
               <option>Raio de 30km</option>
               <option>Raio de 40km</option>
               <option>Raio de 50km</option>
               <option>Raio de 100km</option>
             </select>
             <label className='text-xl font-light text-slate-700 mt-4'>Cidade</label>
             <select className='w-full text-left border-b-2 text-xl border-x-gray-500 h-14'>
               <option>Águas de Santa Bárbara </option>
               <option>Arandu </option>
               <option>Barão de Antonina </option>
               <option>Cerqueira César </option>
               <option>Coronel Macedo</option>
               <option>Fartura</option>
               <option>Iaras</option>
               <option>Itaí</option>
               <option>Itaporanga</option>
               <option>Manduri </option>
               <option>Paranapanema</option>
               <option>Piraju </option>
               <option>Sarutaiá </option>
               <option>Taguaí </option>
               <option>Taquarituba</option>
             </select>
               
            <div className='flex'>
              <Link href={'/servicos'}>
                <FontAwesomeIcon icon={faArrowLeft} className='text-[60px] w-full mt-9  text-sky-500 ' />
              </Link>
              <Link href={'/fim'}>
                <FontAwesomeIcon icon={faArrowRight} className='text-[60px] w-full mt-9 text-sky-500 ' />
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
