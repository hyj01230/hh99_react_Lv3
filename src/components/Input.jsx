import React, { useState } from 'react'
import { styled } from 'styled-components'

const InputStyle = styled.input`
  width: 180px;
  height: 40px;
  border: 1px solid;
  border-radius: 5px;
  margin-right: 20px;
  padding: 0px 10px;

  // CSS에서 ::는 가상 요소를 나타내는 문법
  // 가상 요소: 실제로 HTML 문서에 존재하지 않지만 CSS를 사용하여 그들의 스타일을 제어할 수 있는 요소
  &::-webkit-inner-spin-button{
  -webkit-appearance: none; 
  margin: 0; 
  }

  &::-webkit-outer-spin-button{
  -webkit-appearance: none; 
  margin: 0; 
  }    
`

const InputBtn = styled.button`
  width: 80px;
  height: 35px;
  background-color: green;
  border: 1px solid green;
  border-radius: 5px;
  color: white;
  cursor: pointer;
`
// 📍구현 예정
// 가격 인풋에 콤마 찍기
// 가격 인풋에 +-입력 안되게 하기
// 가격 입력되면 초기값 사라지기

const Input = () => {

  const [name, setName] = useState('');
  const [price, setPrice] = useState('0');

  const onChangeName = (evet) => { setName(evet.target.value) }
  const onChangePrice = (evet) => { setPrice(evet.target.value) }

  const onClickInputBtn = () => {
    if (name.length === 0 || price.length === 0) {
      alert('이름과 가격 모두 입력하세요.')
    } else {
      alert(`{ name: ${name}, price: ${price} }`)
      setName('');
      setPrice('');
    }
  }

  return (
    <div>
      <h1>Input</h1>
      이름 <InputStyle type="text"
        value={name}
        onChange={onChangeName} />
      가격 <InputStyle type="number"
        value={price}
        onChange={onChangePrice} />
      <InputBtn onClick={onClickInputBtn}>저장</InputBtn>
    </div>
  )
}

export default Input