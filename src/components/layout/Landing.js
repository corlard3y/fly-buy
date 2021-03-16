import  {FontAwesomeIcon}  from '@fortawesome/react-fontawesome';
import React, { Fragment,
    //  useState
     } from 'react';
import {  faCheckCircle, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import Lucas from '../../assets/img/lucas.jpg';
import Binara from '../../assets/img/binara.jpg';
import { Link } from 'react-router-dom';
// import WOW from 'wow.js/dist/wow.js';
// import Carousel from 're-carousel';
import SearchIcon from '@material-ui/icons/Search';
import Footer from './Footer';

const Landing = () => {
    // const [count, setCount] = useState(0);
    // const [data, setData] = useState('');

    return (
        <Fragment>
             <div className='h-auto bg-pink-900 p-6 pt-36 md:flex md:flex-col md:pt-36 md:pb-24 md:pb-0 
                font-bold text-white '>
                        <span className='text-3xl text-center sm:text-left sm:text-3xl md:text-5xl'>
                                Find the Perfect <i>Freelance</i> <br className='hidden sm:block'></br> services for your business
                        </span>
                


                            <div className='w-full block flex mt-8 bg-white rounded-3xl sm:w-2/3 md:w-1/2 xl:w-1/3 p-2'>
                                <input type='search' name='search' placeholder='Search' className='flex-auto focus:outline-none text-black px-1 sm:px-2'/>
                                <button className='bg-gray-400 hover:bg-green-400 p-1 rounded-2xl focus:outline-none'><SearchIcon style={{color:'white'}} /></button>
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


                        <div className="mt-8 flex flex-col sm:flex-row">
          <div
            className="flex-1 text-gray-700 text-center border border-gray-300 bg-white hover:bg-gray-100 hover:border-gray-100 xs:px-5 xs:py-5 px-2 py-2 m-2 rounded"
          >
            <div className="lg:flex">
              <div className="lg:flex-shrink-0">
                <img className="rounded-lg lg:w-64 lg:h-64" src={Lucas} alt="" />
              </div>
              <div className="flex flex-col items-center lg:items-start mt-4 lg:mt-0 lg:ml-4">
                <div
                  className="uppercase tracking-wide text-sm text-gray-800 font-bold lg:text-lg"
                >
                  PhotoGraphy Tools
                </div>
                <div
                  className="block mt-1 lg:my-4 text-md leading-tight text-gray-900"
                  >$5,350</div>
                  <small className='hidden lg:block lg:text-left'>
                        lorem hknm fjfnk jknf j bjkbf f ff f bfj f fj bf bjc j f bjf fn j c jc bjc bm jfnkf,n db  bbjdb kb  bn bnjgsxbbsuiygbr yht the e
                  </small>

                <div className='w-40 border-none bg-green-400 text-white hover:bg-green-600 p-1 mt-2 lg:mt-auto object-center rounded-md'>
                  <span>Add to Cart</span>{'   '}
                  <FontAwesomeIcon icon={faShoppingCart}/>
              </div>
              </div>
            </div>
          </div>
          <div
            className="flex-1 text-gray-700 text-center border border-gray-300 bg-white xs:px-5 xs:py-5 px-2 py-2 m-2 rounded hover:bg-gray-100 hover:border-gray-100"
          >
            <div className="lg:flex">
              <div className="lg:flex-shrink-0">
                <img className="rounded-lg lg:w-64 lg:h-64" src={Binara} alt="" />
              </div>
              <div className="flex flex-col items-center lg:items-start mt-4 lg:mt-0 lg:ml-4">
                <div
                  className="uppercase tracking-wide text-sm text-gray-800 font-bold lg:text-lg"
                >
                  Mercedes Benz CLA
                </div>

                <div
                  className="block mt-1 text-md leading-tight text-gray-900 lg:my-4"
                  >$45,000</div>
                    <small className='hidden lg:block lg:text-left'>
                        lorem hknm fjfnk jknf j bjkbf f ff f bfj f fj bf bjc j f bjf fn j c jc bjc bm jfnkf,n db  bbjdb kb  bn bnjgsxbbsuiygbr yht the e
                  </small>

                  <div className='w-40 border-none text-white hover:bg-green-600 bg-green-400 g p-1 mt-2 object-center lg:mt-auto rounded-md'>
                  <span>Add to Cart</span>{'   '}
                  <FontAwesomeIcon icon={faShoppingCart}/>
              </div>
              </div>
              
            </div>
          </div>
        </div>

            </div>


            <div className='w-full mt-2 p-4 flex justify-center'>
             <Link to='/products' target='_top'>   
            <button className='relative left-auto border border-gray-200 p-2 rounded-lg text-gray-600 bg-white hover:border-none hover:bg-gray-500 hover:text-white focus:outline-none'>Check More{'        '}
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
