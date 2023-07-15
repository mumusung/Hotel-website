import React from 'react'
import './Aboutus.css'
import logo from '../images/mumu.jpg'

function Aboutus() {
  return (
    <div className='Head'>
        <img src={logo} alt='mumunarak' className='mumulogo'/>
        <h1>About us</h1>
        <h2>บ้านพักกายพักใจของคุณ</h2>
        <div className='resortpicture'>
            <div className='pic1'>
            <img src="https://images.unsplash.com/photo-1592921710055-bbf038e8f4ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80"width={300}height={400}/>
            </div>
            <div className='pic2'>
            <img src="https://images.unsplash.com/photo-1590523277543-a94d2e4eb00b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80"width={260}height={380}/>
        </div>
        <p>ยกระดับวันพักผ่อนของคุณให้สบายขึ้นมากกว่าเดิมเหมือนได้กลับมาพักผ่อนที่บ้านด้วยบริการจาก <span>Mumuhouse</span>
        ที่จะพาคุณไปสัมผัสบรรยากาศการพักผ่อนสุดพิเศษฉบับ Maldives ที่ถูกยกย่องว่าเป็นหนึ่งในทะเลที่สวยที่สุดในโลก ไม่ว่าจะ
        กิน เล่น เที่ยว หรือนอน อีกทั้งยังมีบริการสุดพิเศษที่จะให้คุณได้สัมผัสกิจกรรมทางน้ำอีกมากมายตั้งแต่การดำน้ำ Scuba diving ดำน้ำตื่นชมปะการัง เจ็ทสกี หรือไป
        ดำน้ำทะเลลึกเพื่อพบกับประสบการณ์สุดพิเศษ ตามความตั้งใจแรกเริ่มของพวกเรา ที่อยากให้คุณคิดถึงเราเสมอเมื่อยากพักผ่อน </p>
        </div>
        </div>
  )
}

export default Aboutus