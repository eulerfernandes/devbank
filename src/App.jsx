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
            <Input type="Nome" placeholder="Digite sdeu nome" />
          </div>

          <div>
            <InputLabel>
              Senha
            </InputLabel>
            <input type="Senha" placeholder="Type your password" />
          </div>

          <Button>Access</Button>
        </ContainerInput>

      </Form>
    </Container>
  )
}

export default App
