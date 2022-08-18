
import type { NextPage } from 'next'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from 'next/link';
import { faArrowAltCircleLeft, faArrowAltCircleRight, faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';

const Home: NextPage = () => {
  return (
    <>

      <div className="w-full h-screen flex">
        <div className='mx-auto my-auto w-full'>
          <h1 className='px-12 p-16 text-4xl'>Agora coloque o serviço que você presta ? 👷‍♀️ 👷</h1>
          <div className='px-12'>
            <label className='text-xl font-light text-slate-700'>Serviço</label>
            <p className='text-sm mt-1 text-slate-500 font-light'>"Caso seja um contratante selecione a opção contratante"</p>
             <select className='w-full text-left border-b-2 text-xl border-x-gray-500 h-14'>
               <option>Babá/Cuidador</option>
               <option>Carga/Mudança</option>
               <option>Condução/Delivery</option>
               <option>Consultor</option>
               <option>Cuidador de pets/Pet Shop</option>
               <option>Elétrica de auto</option>
               <option>Eletricista</option>
               <option>Encanador</option>
               <option>Hotelaria</option>
               <option>Jardinagem</option>
               <option>Limpeza</option>
               <option>Manutenção de computadores</option>
               <option>Marketing/Design</option>
               <option>Mecânico</option>
               <option>Mercado/Adegas/Tabacarias</option>
               <option>Montador</option>
               <option>Organizador de festa</option>
               <option>Pedreiro</option>
               <option>Piscineiro</option>
               <option>Professor particular</option>
               <option>Restaurante/Lanchonetes</option>
               <option>Serviços gerais</option>
               <option>Vendedor de doces/Bolos</option>
               <option>Web</option>
               <option>Contratante</option>
             </select>
            <div className='flex'>
              <Link href={'/senha'}>
                <FontAwesomeIcon icon={faArrowLeft} className='text-[60px] w-full mt-9  text-sky-500 ' />
              </Link>
              <Link href={'/atendimento'}>
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