import React from 'react'
import logo from '../images/mumu.jpg'
import './Footer.css'
import {FaFacebookF,FaTiktok,FaInstagramSquare} from 'react-icons/fa'
import {GrPhone} from 'react-icons/gr'
import {BsLine} from 'react-icons/bs'
import {MdEmail} from 'react-icons/md'

function Footer() {
  return (<div className='footerbg'>
    <div className='footertext'>
        <div>
        <img className='mumugo' src={logo} alt='logomu'/>
        <h1>Mumuhouse</h1>
        <p>บ้านพักกายพักใจของคุณ</p>
        <div style={{ width: '250px', height: '2px', backgroundColor: 'black' }}></div>
        <h3>Follow Me</h3>
        <div className='icondisplay'>
        <div className='contacticon'><FaFacebookF size={30}/></div>
        <div className='contacticon'><FaInstagramSquare size={30}/></div >
        <div className='contacticon'><FaTiktok size={30}/></div>
        </div>
        </div>
        <div className='footertext2'>
            <h1>Contact Us</h1>
            <h4>383 M.4 Soi Phatthana,Sawasdee road, Chatuchak,<br></br> Bangkok 10500 Thailand</h4>
            <div className='calldigit'><p>
                <GrPhone size={30} /><span>0123-456789</span></p>
            <div><p><BsLine size={30}/><span>@mumuhouse</span></p></div>
            <div><p><MdEmail size={30}/><span>mumuhouse@hotmail.com</span></p></div>
            </div>
        </div>
        </div>
        </div>
  )
}

export default Footer