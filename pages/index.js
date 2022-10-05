import Head from 'next/head'
import { useState } from 'react'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { ArrowDownRightIcon, ArrowRightIcon, Bars3Icon, CheckCircleIcon, TicketIcon, XMarkIcon } from '@heroicons/react/24/solid'

export default function Home() {
  const [click, setClick] = useState(false)

  const handleClick = function () {
    console.log('clicked')
    setClick(!click)

  }
  return (
    <div className=' p-5 lg:mx-10 '>
      <div className='shadow-md sticky top-0 bg-white '>
        <div className='flex justify-between drop-shadow-md my-1  md:py-2'>
          <div className=''>
            <h1 className='text-2xl text-green-700 font-bold'>ODAA<span className='text-black'>bus</span></h1>
          </div>
          <div className='hidden md:block'>
            <ul className='md:flex justify-between'>
              <li className='mx-2 hover:border-b hover:border-green-600'>
                <a href='#'>Home</a>
              </li>
              <li className='mx-2 hover:border-b hover:border-green-600'>
                <a href='#'>About us</a>
              </li>
              <li className='mx-2 hover:border-b hover:border-green-600'>
                <a href='#'>Contact</a>
              </li>
            </ul>
          </div>
          {/* <div className='md:hidden'>
            

              <Bars3Icon className='text-green-700 w-8 h-8' />
            </button>
          </div> */}

          {!click ? (
            <div className='md:hidden' onClick={handleClick}>
              <button type=''>
                <Bars3Icon className='text-green-700 w-8 h-8' />
              </button>
            </div>
          ) : (

            <div className=' md:hidden absolute bg-slate-200 rounded-l-md h-62 right-0' onClick={handleClick}>
              <div className=''>
                <button type='' className='float-right '>
                  <XMarkIcon className='text-green-700 w-8 h-8 ' />
                </button>
              </div>
              <div className='md:hidden  my-8'>
                <ul className='mr-2'>
                  <li className='my-2 px-2'>
                    <a href='#'>Home</a>
                  </li>
                  <li className='my-2 px-2'>
                    <a href='#'>About us</a>
                  </li>
                  <li className='my-2 px-2'>
                    <a href='#'>Contact</a>
                  </li>
                </ul>

              </div>
            </div>

          )}



        </div>
      </div>
      <div className='mx-1 my-4 md:my-10'>
        <div className='flex justify-center'>
          <div className='md:my-10'>
            <h1 className='text-xl font-bold text-slate-600 md:flex md:justify-center md:text-3xl lg:text-4xl'>Trusted for Safe, Luxurious Travel</h1>
            <p className='text-slate-500 my-2 text-sm md:text-xl lg:text-3xl'>is a locally registered company whose primary purpose is benefiting a community of public shareholders from a private business it takes part in</p>

          </div>
          <div className='align-middle mt-10 '>
            <img src='/img/oda.png' className='w-full h-fit' />

          </div>
        </div>
        <div className='flex justify-between md:mx-10 my-5'>
          <button className='bg-green-400 px-2 py-1 font-bold text-white rounded-xl shadow-md md:text-xl md:px-2 md:py-2'>
            Book now
          </button>
          <div className='flex justify-center  shadow-md px-2 text-slate-500 font-semibold md:px-3 md:text-xl'>
            <button className=''>
              See more
            </button>
            <ArrowRightIcon className='w-4 h-4 m-3' />
          </div>

        </div>
      </div>
      <div className='my-8 md:my-10'>
        <h1 className='flex justify-center text-xl   font-bold text-slate-600 md:text-2xl'>Our Services</h1>
        <h6 className='flex justify-center font-bold text-slate-400 '>we have 3 main services</h6>
        <div className='py-2 '>
          <div className='md:flex md:justify-between'>
            <div>
              <h3 className=' text-xl py-2 flex font-semibold justify-center text-slate-600 md:text-2xl lg:text-3xl'>Odaa Transport</h3>
              <p className='text-slate-400 text-sm md:text-xl lg:text-2xl'>Odaa Transport has a vision of connecting the horn of Africa with a transport service that is uniquely known for its safety, comfort and reliability</p>

            </div>
            <img src='img/oda2.png' className='md:w-72 lg:w-96' />
          </div>
          <div className='md:flex md:justify-between'>
            <div>
              <h3 className='text-slate-600 text-xl py-2 flex font-semibold justify-center md:text-2xl lg:text-3xl'>Odaa Energy</h3>
              <p className='text-slate-400 text-sm md:text-xl lg:text-2xl'>Odaa Energy is primarily focused in the marketing and distribution of petroleum products.The portfolio of petroleum products include fuel, lubricants</p>

            </div>
            <img src='/img/petrol.png' className='md:w-72 flex justify-center lg:w-[40rem] ' />
          </div>
          <div className='md:flex md:justify-between'>

            <div>
              <h3 className='text-slate-600  text-xl py-2 flex font-semibold justify-center md:text-2xl lg:text-3xl'>Odaa Online</h3>
              <p className='text-slate-500 md:text-xl lg:text-2xl'>For Online Bus Ticket Booking</p>
            </div>
            <div className='bg-green-800 rounded-md text-white text-white text-2xl mt-4 py-5 md:p-3 lg:text-3xl'>
              <h3 className='flex justify-center'>Telephone : 09-93-94-96-93</h3>

              <h2 className='flex justify-center font-bold'>Account number</h2>
              <h3 className='flex justify-center '>Coop : 82 25 09</h3>
              <h3 className='flex justify-center'>CBE : 1000 4716 56 766</h3>


            </div>
          </div>
        </div>
      </div>

      <div className='my-8 md:my-10 md:mx-5'>
        <div className=''>
          <h1 className='flex justify-center text-xl text-slate-600 md:text-2xl font-bold lg:text-3xl'>News About our company</h1>
          <h6 className='flex justify-center text-slate-500'>recent news</h6>

        </div>
        <div className='my-4 '>
          <h2 className='font-bold text-slate-500 mb-2 md:text-2xl'>Gurgurtaa Dabalataa Qooda Aksiyyoon</h2>
          <p className='text-slate-500 md:text-xl'>Murtii yaa’ii waligalaa idilee 3ffaa darbee fi kallattii yaa’ii waliigalaa idilee 4ffaa irratti ka’aame bu’uura gudhachuun Waldaan Aksiyoona
            Geejjiba Qinda’aa ODAA abbootii aksiyoonaa hundaaaf qoodni aksiyoonaa dabalataan gatii ka’uumsaatiin akka gurguramu murteesee jira.</p>
        </div>
        <div className='my-4'>
          <h2 className='font-bold text-slate-500  mb-2 md:text-2xl'>W/A Geejiba Qindaa’a ODAA</h2>
          <p className='text-slate-500 md:text-xl'>Waldaa Aksiyoona Geejiba Qindaa’a ODAA Waldaan Aksiyoona Geejjiba Qindaa’aa ODAA yaa’ii waliigalaa
            idilee..</p>
        </div>
        <div className='my-4'>
          <h2 className='font-bold text-slate-500 mb-2 md:text-2xl'>ኦዳ ኢንተግሬትድ ትራንስፖርት አ/ማ</h2>
          <p className='text-slate-500 md:text-xl'>ኦዳ ኢንተግሬትድ አክሲዮን ማህበር ባካሄደው 3ኛ መደበኛ ጠቅላላ ጉባኤው የአክሲዮን ከፍያ ያላጠናቀቁ ባለአክሲዮኖች በሁለት ወር ጊዜ ውስጥ ከፍለው እንዲያጠናቅቁ ወስኗል..</p>
        </div>
        <div className='my-5 flex justify-between md:mx-5'>

          <div className='flex m-3 w-48 flex-none p-2 shadow-md font-semibold text-slate-600'>

            <button className='mr-3  font-semibold text-slate-500 md:text-xl'>See more news</button>
            <ArrowRightIcon className='w-4 h-4 mt-6' />
          </div>
          <div className=' my-5  md:mr-5'>
            <h2 className='text-green-400 text-lg font-semibold md:text-2xl'> call now</h2>
            <p className=' text-slate-500 text-sm md:text-xl'>09-93-94-96-93 </p>
          </div>

        </div>
      </div>

      <div className='my-8 md:my-10 flex justify-between bg-green-800 rounded-md p-4'>
        <div className='md:w-72 md:m-5 '>
          <h1 className='text-white text-2xl md:mb-2'>Our mission</h1>

          <p className='text-slate-300 md:text-xl'>To provide high quality services supported by leading technology to our esteemed customers with competitive price, safety, security standards, wealth using highly motivated, competent employees & state of the art technology</p>
          <button className='text-white float-right bg-lime-500 mt-2 py-1 px-2 rounded-md drop-shadow-md md:mt-5 md:text-2xl md:p-2'>See more</button>
          <div className='relative  md:mt-4'>
            <div className='flex absolute my-4'>
              <div className='w-2 h-2 mx-1 bg-white rounded-full'></div>
              <div className='w-2 h-2 mx-1 bg-slate-300 rounded-full'></div>
              <div className='w-2 h-2 mx-1 bg-slate-300 rounded-full'></div>
              <div className='w-2 h-2 mx-1 bg-slate-300 rounded-full'></div>
            </div>
          </div>

        </div>
        <div className='py-20'>
          <img src='/img/oda5.png' className='w-96' />
        </div>
      </div>
      <div className='my-8 md:my-10'>
        <div className=''>
          <h1 className='flex justify-center text-black font-bold text-2xl'>Partners who work with us</h1>
          <h4 className='flex justify-center text-slate-400 text-base font-bold '> Follow inscrunction for more</h4>
        </div>
        <div className='my-5 md:flex'>
          <div className='flex justify-between'>
            <div className='w-32 mx-2 mt-2'>
              <img src='/img/cbe.png' className='' />
            </div>
            <div className='w-48 mx-2'>
              <img src='/img/awash.png' className='' />
            </div>
            <div className='w-48'>
              <img src='/img/coop.png' />
            </div>


          </div>
          <div className='flex my-5 justify-start '>

            <div className='w-24'>
              <img src='/img/o-international.png' />
            </div>
            <div className='w-24'>
              <img src='/img/mela.png' />
            </div>
          </div>

        </div>
      </div>
      <div className='mt-8  md:my-10'>
        <div className='flex justify-between shadow-md rounded-lg px-2 md:p-4'>
          <div>
            <h1 className='text-2xl text-green-700 font-bold'>ODAA<span className='text-black'>bus</span></h1>
            <p className='text-sm text-slate-400  md:text-2xl'>Copy right 2022</p>
          </div>
          <div>
            <h1 className=' text-slate-600 font-bold text-lg flex justify-center'> location</h1>
            <p className='text-sm text-slate-500 md:text-2xl'>Oromia Tower 5th Floor, Addis Ababa, Ethiopia</p>
            <p className='text-sm text-slate-500  md:text-2xl'> 09-93-94-96-93</p>
          </div>
          <div>
            <h1 className=' text-slate-600 font-bold text-lg '>

              Helpful
            </h1>
            <p className='text-sm  md:text-2xl text-slate-500'>About us</p>
            <p className='text-sm  md:text-2xl text-slate-500'>Help</p>
            <p className='text-sm  md:text-2xl text-slate-500'>Service</p>
            <p className='text-sm  md:text-2xl text-slate-500'>Privacy</p>

          </div>


        </div>
      </div>
    </div>
  )
}
