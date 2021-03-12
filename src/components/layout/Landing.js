import  {FontAwesomeIcon}  from '@fortawesome/react-fontawesome';
import React, { Fragment } from 'react';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
// import Carousel from 're-carousel';
// import SearchIcon from '@material-ui/icons/Search'

const Landing = () => {

    return (
        <Fragment>
             <div className='h-96 bg-pink-900 p-6 pt-36 text-3xl md:flex md:flex-col font-bold text-white md:pt-48 md:pb-80 sm:text-5xl'>
                        <span>
                                Find the Perfect <i>Freelance</i> <br/>services for your business
                        </span>
                
                        <div className='inline-block mt-8 text-gray-900 bg-white border rounded-lg sm:hidden w-full'>
            
                            <input
                                    className="border-width-0 px-4 h-10 w-9/12 text-sm focus:outline-none"
                                    type="search" name="search" placeholder="Search" />
                                    <button type="submit" className='border-width-0 p-2 bg-transparent focus:outline-none float-right'>
                                    <FontAwesomeIcon icon={faSearch} style={{color:'gray'}}/>
                                </button>
                            </div>
                

                            {/* <div className='hidden sm:inline-block sm:mt-8 sm:text-gray-900 sm:bg-white sm:border-none sm:rounded-l-lg sm:w-1/3'>
            
                            <input
                                    className="border-width-0 rounded-l-lg h-15px pt-0 px-4 w-9/12 text-sm focus:outline-none"
                                    type="search" name="search" placeholder="Search" />
                                    <button type="submit" className='border-width-0 bg-transparent focus:outline-none float-right'>
                                    <SearchIcon style={{color:'gray'}} />
                                </button>
                            </div> */}
        
            </div>


            
        <div className='flex flex-row items-center w-screen bg-gray-200 text-gray-900 justify-around'>
                    <div className='text-xs font-bold w-full p-1 sm:p-8 text-center hover:bg-gray-300 duration-1000'>
                        FACEBOOK
                    </div>
                    <div className='text-xs font-bold w-full p-1 sm:p-8 text-center hover:bg-gray-300 duration-1000'>
                        INSTAGRAM
                    </div>
                    <div className='text-xs font-bold w-full p-1 sm:p-8 text-center hover:bg-gray-300 duration-1000'>
                        TWITTER
                    </div>
                    <div className='text-xs font-bold w-full p-1 sm:p-8 text-center hover:bg-gray-300 duration-1000'>
                        WHATSAPP
                    </div>
        </div>


         <div className='w-screen pt-10 p-4'>
            <div className='text-gray-800 font-bold text-center text-xl sm:text-3xl'>
                Professional Services we offer</div>


                <div className='mt-8 flex flex- row justify-around sm:px-10'>
            
                <div className='h-80 w-60  bg-gray-300 rounded-md text-white'>
                    <div className='flex flex-col p-4'>
                        <span className='text-xl font-bold'>
                                Content
                            </span>
                        <span>
                            Sell your products
                        </span>
                    </div>
                </div>


                <div className='h-80 w-60 flex flex-col bg-gray-400 rounded-md text-white'>
                <div className='flex flex-col p-4'>
                        <span className='text-xl font-bold'>
                                Content
                            </span>
                        <span>
                            Sell your products
                        </span>
                    </div>
                </div>


                <div className='h-80 w-60 flex flex-col bg-gray-500 rounded-md text-white'>
                <div className='flex flex-col p-4'>
                        <span className='text-xl font-bold'>
                                Content
                            </span>
                        <span>
                            Sell your products
                        </span>
                    </div>
                </div>


                <div className='h-80 w-60 flex flex-col bg-gray-600 rounded-md text-white border'>
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

            <div>
                
            </div>

</Fragment>
        
    )
}

export default Landing
