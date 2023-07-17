import React from 'react'
import './Room1reserv.css'
import {IoRestaurant,IoBoat} from 'react-icons/io5'
import {AiFillCar} from 'react-icons/ai'
import { BiWifi,BiSolidDrink } from 'react-icons/bi'
import { GiBathtub } from 'react-icons/gi'
import { IoSnowOutline } from 'react-icons/io5'
import {useState} from 'react'
import DatePicker from './DatePicker'
import Guestpicker from './Guestpicker'


function Room1reserv() {
  return (<div className='reserv1background'>
    <div className='room1text1'>
        <h4><span>“</span>ยกระดับประสบการณ์การพักผ่อนของคุณให้เหนือกว่า ด้วยห้องพักที่ตกแต่งหรูหราสไตล์โมเดิร์นแบบตะวันตก ด้วย</h4>
        <h4>อ่างอาบน้ำ ฝักบัวเรนชาวเวอร์ เตียงคิงไซส์ และหน้าต่างกระจกบานใหญ่ทอดยาวตลอดแนวกำแพงฝั่งติดทะเล</h4>
        <h4>เพื่อให้คุณดื่มด่ำกับบรรยากาศของเกาะล้านอย่างเต็มที่ ตั้งแต่เช้าจรดค่ำ<span>”</span></h4>
        <br></br>
        <div style={{ width: '300px', height: '2px', backgroundColor: 'black' }}></div>
        </div >
        <div className='room1text2'>
        <div style={{ width: '30px', height: '4px', backgroundColor: 'black' }}></div>
        <h3>บริการ</h3>
        <div style={{ width: '30px', height: '4px', backgroundColor: 'black' }}></div>
        </div>
        <div>
          <div className='icon1'>
            <IoRestaurant size={40}/>
            <AiFillCar size={40}/>
            <IoBoat size={40}/>
          </div>
          <p className='icon1-detail'><span>ชุดอาหารเช้า</span><span>รถกอล์ฟ/มอเตอร์ไซค์</span><span>เรือสปีดโบ๊ท</span></p>
        </div>
        <div className='line1' style={{ width: '300px', height: '2px', backgroundColor: 'black' }}></div>
        <div className='room1text2'>
        <div style={{ width: '30px', height: '4px', backgroundColor: 'black' }}></div>
        <h3>สิ่งอำนวยความสะดวก</h3>
        <div style={{ width: '30px', height: '4px', backgroundColor: 'black' }}></div>
        </div>
        <div className='displayicon'>
        <div className='icon3'>
          <BiWifi  size={70}className='iconradius1' style={{color:'orange'}}/>
          </div>
          <div className='icon3'>
          <BiSolidDrink size={70} className='iconradius' style={{color:'orange'}}/>
          </div>
          <div className='icon3'>
            <GiBathtub size={70} className='iconradius' style={{color:'orange'}}/>
          </div>
          <div className='icon3'>
            <IoSnowOutline size={70} className='iconradius' style={{color:'orange'}}/>
          </div>
          <div className='icon3'>
            <IoRestaurant size={70} className='iconradius' style={{color:'orange'}}/>
        </div>
        </div>
        <div>
            <h1 className='icondescribe2'>
            <span className='wifi'>Free WI-FI</span>
            <span className='welcome'>WELCOME DRINK</span>
            <span className='bathub'>BATHUB</span>
            <span className='air'>AIR CONDITIONER</span>
            <span className='breakfast'>BREAKFAST</span></h1>
        </div>
        <br></br>
        <div className='line1' style={{ width: '300px', height: '2px', backgroundColor: 'black' }}></div>
        <div className='room1text2'>
        <div style={{ width: '30px', height: '4px', backgroundColor: 'black' }}></div>
        <h3>รูปภาพภายในห้อง</h3>
        <div style={{ width: '30px', height: '4px', backgroundColor: 'black' }}></div>
        </div>
        <div className='reservpic'>
            <img src="https://media.istockphoto.com/id/1178604015/photo/sea-view-swimming-pool.webp?s=170667a&w=0&k=20&c=nFLEr40WFDYX3gRMhOE_QynvhrQdzF-x6Qz1ABsfTwc=" alt="reserv1" width={300} height={300}/>
            <img src="https://images.unsplash.com/photo-1593067222069-edcf99ed9cfa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDd8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60" alt='reserv2' width={300} height={300} />
            <img src="https://images.unsplash.com/photo-1592921710055-bbf038e8f4ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80" alt='reserv3' width={300} height={300} />
            <img src="https://images.unsplash.com/photo-1551918120-9739cb430c6d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTR8fGhvdGVsJTIwbWFsZGl2ZXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" alt='reserv4' width={300} height={300}/>
        </div>
        <div className='line1' style={{ width: '300px', height: '2px', backgroundColor: 'black' }}></div>
        <div className='textforreserv'>
            <h1>Reservation</h1>
            <div className='choosereserv1'>
            <label style={{fontSize:'30px'}}>Date <span>Number of guest</span></label>
            </div>
            <div className='reservdate1'>
            <DatePicker/>
            <Guestpicker/>
            </div>
            </div>
            <button className='confirmbutton1'>Confirm</button>
            <label htmlFor='date'>mumu</label>
    </div>
  )
}

export default Room1reserv