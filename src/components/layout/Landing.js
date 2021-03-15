import  {FontAwesomeIcon}  from '@fortawesome/react-fontawesome';
import React, { Fragment, useState } from 'react';
import { faSearch, faCheckCircle, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import Lucas from '../../assets/img/lucas.jpg';
import Binara from '../../assets/img/binara.jpg';
import { Link } from 'react-router-dom';
// import WOW from 'wow.js/dist/wow.js';
// import Carousel from 're-carousel';
import SearchIcon from '@material-ui/icons/Search';
import Footer from './Footer';

const Landing = () => {
    const [count, setCount] = useState(0);
    const [data, setData] = useState('');

    return (
        <Fragment>
             <div className='h-96 bg-pink-900 p-6 pt-36  md:flex md:flex-col font-bold text-white md:pt-48 md:pb-80 '>
                        <span className='text-3xl sm:text-5xl'>
                                Find the Perfect <i>Freelance</i> <br/>services for your business
                        </span>
                


                            <div className='w-full block flex mt-8 bg-white rounded-3xl sm:w-1/2 p-2'>
                                <input type='search' name='search' placeholder='Search' className='flex-auto focus:outline-none text-black px-2'/>
                                <button className='bg-gray-400 hover:bg-green-400 p-1 rounded-2xl focus:outline-none'><SearchIcon style={{color:'white'}} /></button>
                                {/* <button className='bg-red-500 focus:outline-none p-0'>Search</button> */}
                            </div>
                

        
            </div>


            
        <div className='flex flex-row items-center w-screen bg-gray-200 text-gray-900 justify-around'>
                    <div className='text-xs font-bold w-full p-0 py-2 sm:p-6 text-gray-700 text-center hover:bg-gray-300 duration-1000'>
                        <span className='hidden'>FACEBOOK</span>
                        <i className='fa fa-facebook-f fa-2x'></i>
                        {/* <FontAwesomeIcon icon={}/> */}
                    </div>
                    <div className='text-xs font-bold w-full p-0 py-2 sm:p-6 text-gray-700 text-center hover:bg-gray-300 duration-1000'>
                        <span className='hidden'>INSTAGRAM</span>
                        <i className='fa fa-instagram fa-2x'></i>

                    </div>
                    <div className='text-xs font-bold w-full p-0 py-2 sm:p-6 text-gray-700 text-center hover:bg-gray-300 duration-1000'>
                        <span className='hidden'>TWITTER</span>
                        <i className='fa fa-twitter fa-2x'></i>
                    </div>
                    <div className='text-xs font-bold w-full p-0 py-2 sm:p-6 text-gray-700 text-center hover:bg-gray-300 duration-1000'>
                        <span className='hidden'>GOOGLE</span>
                        <i className='fa fa-google fa-2x'></i>
                    </div>
        </div>


         <div className='w-screen pt-10 p-4'>
            <div className='text-gray-800 font-bold text-center text-xl sm:text-3xl'>
                Professional Services we offer</div>


                <div className='mt-8 flex flex-row flex-wrap justify-around sm:px-10'>
            
                <div className='flex-auto h-80 w-60  bg-gray-300  rounded-md text-white border m-4'>
                    <div className='flex flex-col p-4'>
                        <span className='text-xl font-bold'>
                                Content
                            </span>
                        <span>
                            Sell your products
                        </span>
                    </div>
                </div>


                <div className='flex-auto h-80 w-60 flex-shrink-0  bg-gray-400 rounded-md text-white border  m-4'>
                <div className='flex flex-col p-4'>
                        <span className='text-xl font-bold'>
                                Content
                            </span>
                        <span>
                            Sell your products
                        </span>
                    </div>
                </div>


                <div className='flex-auto h-80 w-60  flex-shrink-0  bg-gray-500 rounded-md text-white border m-4'>
                <div className='flex flex-col p-4'>
                        <span className='text-xl font-bold'>
                                Content
                            </span>
                        <span>
                            Sell your products
                        </span>
                    </div>
                </div>


                <div className='flex-auto h-80 w-60  flex-shrink-0 bg-gray-600 rounded-md text-white border m-4'>
                <div className='flex flex-col p-4'>
                        <span className='text-xl font-bold'>
                                Content
                            </span>
                        <span>
                            Sell your products
                        </span>
                    </div>
                </div>  
            </div>

            </div>

            <div className='w-full bg-green-50 mt-8'>
                    <div className='text-3xl font-bold text-center text-gray-800 pt-4'>
                        A whole world of freelance talent at your fingertips
                      </div> 


                      <div className='flex flex-col p-4 sm:flex-row'>
                      <div className='p-4'>
                            <h3 className='text-xl font-bold text-gray-800'>
                            <FontAwesomeIcon icon={faCheckCircle}/>{'  '}
                                The best for your budget
                            </h3>
                            <span className='text-xs text-gray-800 mb-4'>
                                lorem bvhjsbc ehcbshc chscbshcascgsavcac ahgac abncacb yhabn sjnvs hj bjs vsn vsujbs ujsb vjsvb shjv sbsbshb vshbcvshbv sshbvsh vbsj  vbujv sjnsj gsurvb sbvsuvjgn  ejvb b jbg wugbjsbvjsb sy cvb hgejhfbjyas f abv asuyafbsa fef adv auv b kauvbv`s vaw jgbwu ke e  hu ru gbadbj wejgaw  guvakgujegbjkamwgjw  urbfa wejbhjewmgbjbvuy`s vw bhwgbuawehvushu bwuebguwe gwuvi
                            </span>
                      </div> 


                      <div className='p-4'>
                            <h3 className='text-xl font-bold text-gray-800 mb-4'>
                            <FontAwesomeIcon icon={faCheckCircle}/>{'  '}
                                The best for your budget
                            </h3>
                            <span className='text-xs text-gray-800'>
                                lorem bvhjsbc ehcbshc chscbshcascgsavcac ahgac abncacb yhabn sjnvs hj bjs vsn vsujbs ujsb vjsvb shjv sbsbshb vshbcvshbv sshbvsh vbsj  vbujv sjnsj gsurvb sbvsuvjgn  ejvb b jbg wugbjsbvjsb sy cvb hgejhfbjyas f abv asuyafbsa fef adv auv b kauvbv`s vaw jgbwu ke e  hu ru gbadbj wejgaw  guvakgujegbjkamwgjw  urbfa wejbhjewmgbjbvuy`s vw bhwgbuawehvushu bwuebguwe gwuvi
                            </span>
                      </div>


                      <div className='p-4'>
                            <h3 className='text-xl font-bold text-gray-800 mb-4'>
                            <FontAwesomeIcon icon={faCheckCircle}/>{'  '}
                                The best for your budget
                            </h3>
                            <span className='text-xs text-gray-800'>
                                lorem bvhjsbc ehcbshc chscbshcascgsavcac ahgac abncacb yhabn sjnvs hj bjs vsn vsujbs ujsb vjsvb shjv sbsbshb vshbcvshbv sshbvsh vbsj  vbujv sjnsj gsurvb sbvsuvjgn  ejvb b jbg wugbjsbvjsb sy cvb hgejhfbjyas f abv asuyafbsa fef adv auv b kauvbv`s vaw jgbwu ke e  hu ru gbadbj wejgaw  guvakgujegbjkamwgjw  urbfa wejbhjewmgbjbvuy`s vw bhwgbuawehvushu bwuebguwe gwuvi
                            </span>
                      </div>


                      <div className='p-4'>
                            <h3 className='text-xl font-bold text-gray-800 mb-4'>
                            <FontAwesomeIcon icon={faCheckCircle}/>{'  '}
                                The best for your budget
                            </h3>
                            <span className='text-xs text-gray-800'>
                                lorem bvhjsbc ehcbshc chscbshcascgsavcac ahgac abncacb yhabn sjnvs hj bjs vsn vsujbs ujsb vjsvb shjv sbsbshb vshbcvshbv sshbvsh vbsj  vbujv sjnsj gsurvb sbvsuvjgn  ejvb b jbg wugbjsbvjsb sy cvb hgejhfbjyas f abv asuyafbsa fef adv auv b kauvbv`s vaw jgbwu ke e  hu ru gbadbj wejgaw  guvakgujegbjkamwgjw  urbfa wejbhjewmgbjbvuy`s vw bhwgbuawehvushu bwuebguwe gwuvi
                            </span>
                      </div>
                      </div>
            </div>

            {/* <div className='wow slideInLeft'>
                    <p>Clicked {count} times ,welcome {data}</p>
                    <p>
                        <button onClick={()=>setCount(count + 1)}>increment</button>
                    </p>
                    <input type='text' placeholder='koko' onChange={(e)=>setData( e.target.value)}/>
            </div> */}


            <div className='w-full p-4 mt-8'>
                        <div className='text-xl sm:text-3xl text-center font-bold text-gray-900
                        '>
                            Our Products
                        </div>



            <div className="mt-8 flex flex-row">
          <div
            className="flex-1 text-gray-700 text-center border border-gray-300 bg-white hover:bg-gray-100 hover:border-gray-100 px-5 py-5 m-2 rounded"
          >
            <div className="lg:flex lg:items-center">
              <div className="lg:flex-shrink-0">
                <img className="rounded-lg lg:w-64 lg:h-64" src={Lucas} alt="" />
              </div>
              <div className="flex flex-col items-center mt-4 lg:mt-0 lg:ml-6">
                <div
                  className="uppercase tracking-wide text-sm text-indigo-600 font-bold"
                >
                  PhotoGraphy Tools
                </div>
                <span
                  href="#!"
                  className="block mt-1 text-md leading-tight text-gray-900"
                  >$5,350</span>
                <div className='w-40 border border-gray-300 hover:border-none bg-yellow-400 p-1 mt-2 object-center rounded-md'>
                  <span>Add to Cart</span>{'   '}
                  <FontAwesomeIcon icon={faShoppingCart}/>
              </div>
              </div>
            </div>
          </div>
          <div
            className="flex-1 text-gray-700 text-center border border-gray-300 bg-white px-5 py-5 m-2 rounded hover:bg-gray-100 hover:border-gray-100"
          >
            <div className="lg:flex lg:items-center">
              <div className="lg:flex-shrink-0">
                <img className="rounded-lg lg:w-64 lg:h-64" src={Binara} alt="" />
              </div>
              <div className="flex flex-col mt-4 sm:items-left items-center lg:mt-0 lg:ml-6">
                <div
                  className="uppercase tracking-wide text-sm text-indigo-600 font-bold"
                >
                  Mercedes Benz CLA
                </div>

                <span
                  href="#!"
                  className="block mt-1 text-md leading-tight text-gray-900"
                  >$45,000</span>

                  <div className='w-40 border border-gray-300 hover:border-none bg-yellow-400 p-1 mt-2 object-center rounded-md'>
                  <span>Add to Cart</span>{'   '}
                  <FontAwesomeIcon icon={faShoppingCart}/>
              </div>
              </div>
              
            </div>
          </div>
        </div>

            </div>

            <div className='w-full mt-2 p-4 flex justify-center'>
             <Link to='/products'>   
            <button className='relative left-auto border border-gray-200 p-2 rounded-lg text-gray-600 bg-gray-50 hover:bg-gray-500 hover:text-white focus:outline-none'>Check More{'        '}
            <FontAwesomeIcon icon={faChevronRight} />
            </button>
            </Link>
        </div>

        <div>
            <Footer />
        </div>

</Fragment>
        
    )
}

export default Landing
