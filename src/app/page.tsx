"use client"
import { Heading, HomeIcon, ListItem, OrderedList, Pane, Text } from "evergreen-ui";

export default function Home() {
  return (
    <>
      <div className="mb-5">
        <div className="flex flex-1 items-center gap-4 mb-3">
          <HomeIcon />
          <Heading size={600}> Home</Heading>
        </div>
        <Pane padding={16} background="tint2" borderRadius={3}>
          <Pane className="flex flex-col gap-4">
            <Text>
              Estou aprendendo Nest e Next, assim pensei, pq não criar um caso de uso muito simples?
            </Text>


            <ListItem>Então o que esperar desse estudo? (front/back)</ListItem>
            <OrderedList>
              <ListItem>Cadastro de empresa</ListItem>
              <ListItem>Cadastro de funcionário</ListItem>
              <ListItem>Cadastro das tabelas com as aliquotas dos impostos</ListItem>
              <ListItem>Gerar calculos de acordo com salarios definidos no cadastro do funcionário</ListItem>
            </OrderedList>

            <ListItem>Então o que esperar desse estudo? (back)</ListItem>
            <OrderedList>
              <ListItem>JWT</ListItem>
              <ListItem>Rotas</ListItem>
              <ListItem>Prisma</ListItem>
              <ListItem>Rotas seguras</ListItem>
            </OrderedList>

          </Pane>
        </Pane>
      </div>
    </>
  );
}
