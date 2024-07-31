import { Container, TopSite, Form, H1, ContainerInput, InputLabel, Input, Button } from "./styles"
import UserImag from './assets/bank.png'

function App() {


  return (
    <Container>
      <TopSite>
        <img src={UserImag} />
      </TopSite>

      <Form>
        <H1>Welcome</H1>

        <ContainerInput>

          <div>
            <InputLabel>
              CPF
            </InputLabel>
            <Input type="cpf" placeholder="type your cpf" />
          </div>

          <div>
            <InputLabel>
              Senha
            </InputLabel>
            <Input type="Senha" placeholder="Type your password" />
          </div>

        </ContainerInput>
        <Button>Access</Button>

      </Form>
    </Container>
  )
}

export default App
