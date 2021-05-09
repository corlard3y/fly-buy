import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React,{Fragment,useState} from 'react';
import {Link} from 'react-router-dom'

const Footer = () => {
    
    const [data, setData] = useState(faChevronDown);
    const [data2, setData2] = useState(faChevronDown);
    const [data3, setData3] = useState(faChevronDown);
    const [data4, setData4] = useState(faChevronDown);
    const [data5, setData5] = useState(faChevronDown);
    const [data6, setData6] = useState(faChevronDown);

    const toggleFooterSection = (e) => {
        const list = e.target.parentElement.parentElement.querySelector(
          "article"
        );

        if (list.classList.contains("h-0")) {
          list.classList.remove("h-0");
          setData(faChevronUp);
      
        } else {
          list.classList.add("h-0");
          setData(faChevronDown);
        }
      }

      const toggleFooterSection2 = (e) => {
        const list = e.target.parentElement.parentElement.querySelector(
          "article"
        );

        if (list.classList.contains("h-0")) {
          list.classList.remove("h-0");
          setData2(faChevronUp);
      
        } else {
          list.classList.add("h-0");
          setData2(faChevronDown);
        }
      }
      const toggleFooterSection3 = (e) => {
        const list = e.target.parentElement.parentElement.querySelector(
          "article"
        );

        if (list.classList.contains("h-0")) {
          list.classList.remove("h-0");
          setData3(faChevronUp);
      
        } else {
          list.classList.add("h-0");
          setData3(faChevronDown);
        }
      }
      const toggleFooterSection4 = (e) => {
        const list = e.target.parentElement.parentElement.querySelector(
          "article"
        );

        if (list.classList.contains("h-0")) {
          list.classList.remove("h-0");
          setData4(faChevronUp);
      
        } else {
          list.classList.add("h-0");
          setData4(faChevronDown);
        }
      }
      const toggleFooterSection5 = (e) => {
        const list = e.target.parentElement.parentElement.querySelector(
          "article"
        );

        if (list.classList.contains("h-0")) {
          list.classList.remove("h-0");
          setData5(faChevronUp);
      
        } else {
          list.classList.add("h-0");
          setData5(faChevronDown);
        }
      }
      const toggleFooterSection6 = (e) => {
        const list = e.target.parentElement.parentElement.querySelector(
          "article"
        );

        if (list.classList.contains("h-0")) {
          list.classList.remove("h-0");
          setData6(faChevronUp);
      
        } else {
          list.classList.add("h-0");
          setData6(faChevronDown);
        }
      }


    return (
        <Fragment>
        
<footer className="mt-16 font-muli">
      <div className="border-t md:px-4 md:pt-10 md:pb-5">
        <div className="flex flex-wrap md:max-w-screen-lg mx-auto">
          <section
            className="relative text-gray-700  font-light font-light border-b px-4 pb-4 md:py-3 w-full md:border-none md:w-1/4"
          >
            <div className="md:hidden flex flex-row">
              <button
                onClick={toggleFooterSection}
                className="uppercase text-xs font-bold tracking-wider  text-gray-700 focus:outline-none border-t border-white py-4 w-full text-left"
                type="button"
              >
                Lorem 
              </button>
              
              <FontAwesomeIcon icon={data} onClick={toggleFooterSection} className='relative top-4'/>
            </div>
            <a
              className="uppercase text-xs font-bold tracking-wider text-gray-700 hover:underline hidden md:block"
              href="#!"
            >
              Lorem 
            </a>
            <article className="h-0 md:h-auto -mt-4 md:mt-0 overflow-hidden">
              <ul className="my-5 text-sm tracking-wide">
                <li className="my-3 tracking-wide">
                  <a href="#!">Fusce vel sem</a>
                </li>
                <li className="my-3 tracking-wide">
                  <a href="#!">Ut venenatis tellus</a>
                </li>
                <li className="my-3 tracking-wide">
                  <a href="#!">Vestibulum</a>
                </li>
                <li className="my-3 tracking-wide">
                  <a href="#!">Nunc at ipsum</a>
                </li>
              </ul>
            </article>
          </section>
          <section
            className="relative text-gray-700 font-light font-light border-b px-4 pb-4 md:py-3 w-full md:border-none md:w-1/4"
          >
            <div className="md:hidden flex flex-row">
              <button
                onClick={toggleFooterSection2}
                className="uppercase text-xs font-bold tracking-wider text-gray-700 focus:outline-none border-t border-white py-4 w-full text-left"
                type="button"
              >
                Ut porta
              </button>
              <FontAwesomeIcon icon={data2} onClick={toggleFooterSection2} className='relative top-4'/>
            </div>
            <a
              className="uppercase text-xs font-bold hover:underline tracking-wider text-gray-700 hidden md:block"
              href="#!"
            >
              Ut porta
            </a>
            <article className="h-0 md:h-auto -mt-4 md:mt-0 overflow-hidden">
              <ul className="my-5 text-sm tracking-wide">
                <li className="my-3 tracking-wide">
                  <a href="#!">Pellentesque rhoncus</a>
                </li>
                <li className="my-3 tracking-wide">
                  <a href="#!">Aenean</a>
                </li>
                <li className="my-3 tracking-wide">
                  <a href="#!">Curabitur bibendum</a>
                </li>
                <li className="my-3 tracking-wide">
                  <a href="#!">Phasellus non mi</a>
                </li>
                <li className="my-3 tracking-wide">
                  <a href="#!">Duis accumsa</a>
                </li>
                <li className="my-3 tracking-wide">
                  <a href="#!">Curabitur nec enim</a>
                </li>
                <li className="my-3 tracking-wide">
                  <a href="#!">Fusce ut augue</a>
                </li>
              </ul>
            </article>
          </section>
          <section
            className="relative text-gray-700 font-light font-light border-b px-4 pb-4 md:py-3 w-full md:border-none md:w-1/4"
          >
            <div className="md:hidden flex flex-row">
              <button
                onClick={toggleFooterSection3}
                className="uppercase text-xs font-bold tracking-wider text-gray-700 focus:outline-none border-t border-white py-4 w-full text-left"
                type="button"
              >
                Praesent elementum
              </button>
              <FontAwesomeIcon icon={data3} onClick={toggleFooterSection3} className='relative top-4'/>
            </div>
            <a
              className="uppercase text-xs font-bold hover:underline tracking-wider text-gray-700 hidden md:block"
              href="#!"
            >
              Praesent elementum
            </a>
            <article className="h-0 md:h-auto -mt-4 md:mt-0 overflow-hidden">
              <ul className="my-5 text-sm tracking-wide">
                <li className="my-3 tracking-wide">
                  <a href="#!">Mauris mattis nunc</a>
                </li>
                <li className="my-3 tracking-wide">
                  <a href="#!">Nunc viverra risus</a>
                </li>
                <li className="my-3 tracking-wide">
                  <a href="#!">Etiam a libero</a>
                </li>
              </ul>
            </article>
          </section>
          <section
            className="relative text-gray-700 font-light font-light border-b px-4 pb-4 md:py-3 w-full md:border-none md:w-1/4"
          >
            <div className="md:hidden flex flex-row">
              <button
                onClick={toggleFooterSection4}
                className="uppercase text-xs font-bold tracking-wider text-gray-700 focus:outline-none border-t border-white py-4 w-full text-left"
                type="button"
              >
                Aenean gravida orci in sem varius
              </button>
              <FontAwesomeIcon icon={data4} onClick={toggleFooterSection4} className='relative top-4'/>
            </div>
            <a
              className="uppercase text-xs font-bold hover:underline tracking-wider text-gray-700 hidden md:block"
              href="#!"
            >
              Aenean gravida orci in sem varius
            </a>
            <article className="h-0 md:h-auto -mt-4 md:mt-0 overflow-hidden">
              <ul className="my-5 text-sm tracking-wide">
                <li className="my-3 tracking-wide">
                  <a href="#!">Cras id ipsum</a>
                </li>
              </ul>
            </article>
          </section>
          <section
            className="relative text-gray-700 font-light font-light border-b px-4 pb-4 md:py-3 w-full md:border-none md:w-1/4"
          >
            <div className="md:hidden flex flex-row">
              <button
                onClick={toggleFooterSection5}
                className="uppercase text-xs font-bold tracking-wider text-gray-700 focus:outline-none border-t border-white py-4 w-full text-left"
                type="button"
              >
                Donec a lorem
              </button>
              <FontAwesomeIcon icon={data5} onClick={toggleFooterSection5} className='relative top-4'/>
            </div>
            <a
              className="uppercase text-xs font-bold hover:underline tracking-wider text-gray-700 hidden md:block"
              href="#!"
            >
              Donec a lorem
            </a>
            <article className="h-0 md:h-auto -mt-4 md:mt-0 overflow-hidden">
              <ul className="my-5 text-sm tracking-wide">
                <li className="my-3 tracking-wide">
                  <a href="#!">Sed a diam</a>
                </li>
                <li className="my-3 tracking-wide">
                  <a href="#!">Nullam luctus felis</a>
                </li>
                <li className="my-3 tracking-wide">
                  <a href="#!">Sed euismod</a>
                </li>
              </ul>
            </article>
          </section>
          <section
            className="relative text-gray-700 font-light font-light border-b px-4 pb-4 md:py-3 w-full md:border-none md:w-1/4"
          >
            <div className="md:hidden flex flex-row">
              <button
                onClick={toggleFooterSection6}
                className="uppercase text-xs font-bold tracking-wider text-gray-700 focus:outline-none border-t border-white py-4 w-full text-left"
                type="button"
              >
                Integer interdum
              </button>
              <FontAwesomeIcon icon={data6} onClick={toggleFooterSection6} className='relative top-4'/>
            </div>
            <a
              className="uppercase text-xs font-bold hover:underline tracking-wider text-gray-700 hidden md:block"
              href="#!"
            >
              Integer interdum
            </a>
            <article className="h-0 md:h-auto -mt-4 md:mt-0 overflow-hidden">
              <ul className="my-5 text-sm tracking-wide">
                <li className="my-3 tracking-wide">
                  <Link to='/admin'>Admin</Link>
                </li>
                <li className="my-3 tracking-wide">
                  <a href="#!">Eu mollis elit</a>
                </li>
                <li className="my-3 tracking-wide">
                  <a href="#!">Hendrerit purus id</a>
                </li>
                <li className="my-3 tracking-wide">
                  <a href="#!">Ut luctus dui tincidunt</a>
                </li>
                <li className="my-3 tracking-wide">
                  <a href="#!">Pellentesque at ligula</a>
                </li>
              </ul>
            </article>
          </section>
    
        </div>
      </div>
      <div className="max-w-screen-lg mx-auto border-none px-4">
        <section
          className="flex flex-col md:flex-row md:justify-between md:border-solid md:border-t text-gray-700 font-light text-sm pt-4 pb-6 md:pt-5 md:pb-6 w-full"
        >
          <div>
            <p className="leading-8 tracking-wide">
              &copy; corlardey., 2021
            </p>
          </div>
          <div>
            <p className="leading-8 tracking-wide">Privacy Policy</p>
          </div>
        </section>
      </div>
    </footer>
        </Fragment>
    )
}

export default Footer;
