import './App.css';
import Button from "./components/Button"
import Input from "./components/Input"
import Modal from "./components/Modal"
import Select from "./components/Select"
import { styled } from 'styled-components'

const AppDiv = styled.div`
margin : 0px 8px;
`

function App() {
  return (
    <AppDiv>
      <Button />
      <Input />
      <Modal />
      <Select />
    </AppDiv>
  )

}

export default App;
