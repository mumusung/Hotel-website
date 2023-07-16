import React from 'react'
import './Roomsbooking.css'
import {IoRestaurant,IoSnowOutline,IoBoat} from 'react-icons/io5'
import {AiFillCar} from 'react-icons/ai'
import { Link } from 'react-router-dom'
import {BiWifi,BiSolidDrink} from 'react-icons/bi'
import {GiBathtub} from 'react-icons/gi'

function Roomsbooking() {
  return (<div className='background-image1'>
    <div className='rooms'>
      <br></br>
      <h1>OUR</h1>
      <h2>Room  &  Suites</h2>
      </div>
      <div className='Card-container'>
        <div className='Card1'>
        <img className='roomview' src="https://images.unsplash.com/photo-1593067222054-997bf880ad75?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1080&q=80" alt='roomservice' height={600}width={800}/>
        </div>
        <div className='Card2'>
          <h1 className='text2'>Room 1</h1>
          <p className='text2'>1ห้อง | 2 คน</p>
          <p className='text2'>เปลี่ยนเช้าวันใหม่ที่หันไปก็เจอแต่แฟนกรนใส่</p>
          <p className='text2'>เป็นเช้าที่ได้รับแสงแดดทะเลถึงข้างเตียง</p>
          <p className='text2'>ที่ "Room 1" รีสอร์ท Mumuhouse </p>
          <br></br>
          <p className='text2'>ห้องพักสุดหรูพร้อมมองเห็นทัศนียภาพอันงดงามของทะเล จากหน้าต่างขณะอาบน้ำ<br></br> ให้คุณได้สัมผัสคลื่นลมทะเลได้แบบใกล้แค่กระจกกั้นแถมยังมีอ่างอาบน้ำ jacuzzi <br></br>เพื่อดื่มด่ำกับบรรยากาศทั้งกายและใจให้คุณและคนที่คุณรักชุ่มฉ่ำหัวใจรับวันใหม่</p>
          <h1 className='text2'><span>บริการ</span></h1>
          <div className='icon1'>
            <IoRestaurant size={40}/>
            <AiFillCar size={40}/>
            <IoBoat size={40}/>
          </div>
          <p className='icon1-detail'><span>ชุดอาหารเช้า</span><span>รถกอล์ฟ/มอเตอร์ไซค์</span><span>เรือสปีดโบ๊ท</span></p>
          <Link to="/room1"><button className='buttonitem'>ดูรายละเอียดเพิ่มเติม</button></Link>
        </div>
      </div>
      <div className='Card-container2'>
        <div className='Card2'>
          <h1 className='text2'>Room 2</h1>
          <p className='text2'>1ห้อง | 2 คน</p>
          <p className='text2'>เปลี่ยนเช้าวันใหม่ที่หันไปก็เจอแต่สภาพจราจรแออัดในเมืองใหญ่</p>
          <p className='text2'>เป็นเช้าที่ได้รับแสงแดดและไออุ่นจากทะเลโดยตรง</p>
          <p className='text2'>ที่ "Room 2" รีสอร์ท Mumuhouse </p>
          <br></br>
          <p className='text2'>ห้องพักสุดหรูพร้อมมองเห็นทัศนียภาพอันงดงามของทะเล จากหน้าระเบียงห้องของคุณ<br></br> ให้คุณได้สัมผัสคลื่นลมทะเลได้แบบใกล้ชิดเพียงแค่เอื้อมมือออกไป <br></br>เพื่อดื่มด่ำกับบรรยากาศทั้งกายและใจให้คุณและคนที่คุณสดชื่นและรับพลังบวกพร้อมใช้ชีวิตในวันใหม่</p>
          <h1 className='text2'><span>บริการ</span></h1>
          <div className='icon1'>
            <IoRestaurant size={40}/>
            <AiFillCar size={40}/>
            <IoBoat size={40}/>
          </div>
          <p className='icon1-detail'><span>ชุดอาหารเช้า</span><span>รถกอล์ฟ/มอเตอร์ไซค์</span><span>เรือสปีดโบ๊ท</span></p>
          <Link to="/room2"><button className='buttonitem'>ดูรายละเอียดเพิ่มเติม</button></Link>
        </div>
        <div className='Card1'>
        <img className='roomview' src="https://images.unsplash.com/photo-1602693680528-56cf5d238b34?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80" alt='roomservice' height={600}width={800}/>
        </div>
      </div>
      <div className='displayicon'>
      <div className='icon2'>
          <BiWifi  size={70}className='iconradius1' style={{color:'orange'}}/>
          </div>
          <div className='icon2'>
          <BiSolidDrink size={70} className='iconradius' style={{color:'orange'}}/>
          </div>
          <div className='icon2'><GiBathtub size={70} className='iconradius' style={{color:'orange'}}/>
          </div>
          <div className='icon2'><IoSnowOutline size={70} className='iconradius' style={{color:'orange'}}/>
          </div>
          <div className='icon2'><IoRestaurant size={70} className='iconradius' style={{color:'orange'}}/>
      </div>
      </div>
      <div>
        <h1 className='icondescribe'>
          <span className='wifi'>Free WI-FI</span>
          <span className='welcome'>WELCOME DRINK</span>
          <span className='bathub'>BATHUB</span>
          <span className='air'>AIR CONDITIONER</span>
          <span className='breakfast'>BREAKFAST</span></h1>
      </div>
      </div>
  )
}

export default Roomsbooking