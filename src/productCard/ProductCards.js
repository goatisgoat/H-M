import React from 'react'
import { useNavigate } from 'react-router-dom'

const ProductCards = ( {item, userlogin, index}) => {
  const navigate = useNavigate()
  const gotodetail = () => {
    userlogin === true ? navigate(`/detail/${index}`) : navigate('/login')
    
  }
  return (
    <div className='eachProductCard' onClick={() => gotodetail()}>
      <img src={item?.img}/>
      <div>{item?.choice === true ? 'consicous choice' : <br/>}</div>
      <p>{item?.title}</p>
      <div>₩{item?.price}</div>
      <div>{item?.new === true ? '신제품' : <br/>}</div>
    </div>
  )
}

export default ProductCards
