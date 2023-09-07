import React from 'react'
import { styled } from 'styled-components'
import { useState } from 'react'
import { BiSolidDownArrow } from "react-icons/bi";

const Select = () => {

  const [selectDrop1, setSelectDrop1] = useState(false)
  const [selectDrop2, setSelectDrop2] = useState(false)

  const clickDrop1 = () => { setSelectDrop1(true), setSelectDrop2(false) }
  const clickDrop2 = () => { setSelectDrop1(false), setSelectDrop2(true) }

  const [barTitle1, setBarTitle1] = useState('리액트')
  const [barTitle2, setBarTitle2] = useState('리액트')

  const closeDrop1 = (name) => {
    setSelectDrop1(false);
    setBarTitle1(name);
  }

  const closeDrop2 = (name) => {
    setSelectDrop2(false);
    setBarTitle2(name);
  }

  // 📍구현 예정
  // 두번째 셀렉트바 뒤로 숨겨지기!

  return (
    <Slectwrap>
      <h1>Select</h1>
      <SelectDivOut>
        <SelectDivIn>
          <SelectBar onClick={clickDrop1}>{barTitle1} <BiSolidDownArrow /></SelectBar>
          {selectDrop1 && (
            <DropDiv1>
              <LiTop onClick={() => closeDrop1('리액트')}>리액트</LiTop>
              <LiMiddle onClick={() => closeDrop1('자바')}>자바</LiMiddle>
              <LiMiddle onClick={() => closeDrop1('스프링')}>스프링</LiMiddle>
              <LiBottom onClick={() => closeDrop1('리액트네이티브')}>리액트네이티브</LiBottom>
            </DropDiv1>
          )}
        </SelectDivIn>
        <SelectDivIn>
          <SelectBar onClick={clickDrop2}>{barTitle2} <BiSolidDownArrow /></SelectBar>
          {selectDrop2 && (
            <DropDiv2>
              <LiTop onClick={() => closeDrop2('리액트')}>리액트</LiTop>
              <LiMiddle onClick={() => closeDrop2('자바')}>자바</LiMiddle>
              <LiMiddle onClick={() => closeDrop2('스프링')}>스프링</LiMiddle>
              <LiBottom onClick={() => closeDrop2('리액트네이티브')}>리액트네이티브</LiBottom>
            </DropDiv2>
          )}
        </SelectDivIn>
      </SelectDivOut>
    </Slectwrap>

  )
}

export default Select

const Slectwrap = styled.div`
  border: 2px solid lightgray;
  margin: 40px 5px 5px 5px;
  padding: 0px 3px;
  position: relative;
`

const SelectDivOut = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  position: relative;
`

const SelectDivIn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`

const SelectBar = styled.div`
  border: 1px solid lightgray;
  border-radius: 10px;
  width: 250px;
  height: 40px;
  margin-right: 5px;
  margin-bottom: 50px;

  display: flex;
  justify-content: space-between;
  align-items: center;
  // padding값이 박스 크기(width, height)에 영향을 주지 않음
  box-sizing: border-box;
  padding: 0px 30px;
`

const DropDiv1 = styled.div`
	margin-right: 10px;
	position: absolute;
	margin-top: 50px;
`

const DropDiv2 = styled.div`
	margin-right: 10px;
	position: absolute;
	margin-top: 50px;
`

const LiTop = styled.li`
	list-style: none;
	width: 210px;
  	height: 30px;
	padding: 10px 18px;
	background-color: white;
	border-radius: 10px 10px 0px 0px;
	border-color: #e8e8e8;
	border-width: 1px 1px 1px 1px;
	border-style: solid solid none solid;

	&:hover {
    background-color: #e8e8e8;
  }
`

const LiMiddle = styled.li`
	list-style: none;
	width: 210px;
  height: 30px;
	padding: 10px 18px;
	background-color: white;
	border-color: #e8e8e8;
	border-width: 1px 1px 1px 1px;
	border-style: none solid none solid;

	&:hover {
    background-color: #e8e8e8;
  }
`

const LiBottom = styled.li`
	list-style: none;
	width: 210px;
  height: 30px;
	padding: 10px 18px;
	background-color: white;
	border-radius: 0px 0px 10px 10px;
	border-color: #e8e8e8;
	border-width: 1px 1px 1px 1px;
	border-style: none solid solid solid;

	&:hover {
    background-color: #e8e8e8;
  }
`