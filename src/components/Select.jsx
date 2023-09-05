import React from 'react'
import { styled } from 'styled-components'

const SlectDiv = styled.div`
  border: 2px solid lightgray;
  margin: 40px 5px 5px 5px;
  padding: 0px 3px;
`

// 📍구현 예정
// 화살표 모양 바꾸기
// 옵션 디자인 변경하기

const SelectBox = styled.select`
  border: 1px solid lightgray;
  border-radius: 10px;
  width: 250px;
  height: 40px;
  margin-right: 5px;
  margin-bottom: 50px;
`

const Select = () => {
  return (
    <SlectDiv>
      <h1>Select</h1>
      <SelectBox>
        <option>리액트</option>
        <option>자바</option>
        <option>스프링</option>
        <option>리액트네이티브</option>
      </SelectBox>
      <SelectBox>
        <option>리액트</option>
        <option>자바</option>
        <option>스프링</option>
        <option>리액트네이티브</option>
      </SelectBox>
    </SlectDiv>

  )
}

export default Select