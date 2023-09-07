import React, { useState } from 'react'
import { styled } from 'styled-components'

const Input = () => {

  const [name, setName] = useState('');
  const [price, setPrice] = useState('0');

  const onChangeName = (evet) => { setName(evet.target.value) }
  const onChangePrice = (evet) => {
    const value = evet.target.value;
    // removeCommaValue: comma를 제거하고 type을 number로 변경
    // number로 변경하는 이유 : toLocaleString은 Number의 prototype이기 때문
    // number로 타입을 변경하기 이전에 콤마를 제거해야 Number()로 타입을 변경할 수 있음
    // 참고 : https://velog.io/@quack777/React-input-%EC%88%AB%EC%9E%90%EC%97%90-%EC%BD%A4%EB%A7%88-%EC%B0%8D%EC%96%B4%EC%84%9C-%EB%82%98%ED%83%80%EB%82%B4%EB%8A%94-%EB%B2%95
    const removeCommaValue = Number(value.replaceAll(",", ""));
    const commaNum = removeCommaValue.toLocaleString();
    // isNaN : 주어진 값이 NaN이면 true, 아니면 false!
    if (isNaN(removeCommaValue)) {
      setPrice("0")
    } else {
      setPrice(commaNum);
    }
  };

  const onClickInputBtn = () => {
    if (name.length === 0 || price === "0") {
      alert('이름과 가격 모두 입력하세요.')
    } else {
      alert(`name: ${name}, price: ${price}`)
      setName('');
      setPrice('0');
    }
  }

  return (
    <div>
      <h1>Input</h1>
      이름 <InputStyle type="text"
        value={name}
        onChange={onChangeName} />

      {/* input 태그에 type이 number가 아니라 text인 이유는 숫자에 콤마를 찍은 값의 타입은 string이기 때문 */}
      가격 <InputStyle type="text"
        value={price}
        onChange={onChangePrice} />
      <InputBtn onClick={onClickInputBtn}>저장</InputBtn>
    </div>
  )
}

export default Input

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