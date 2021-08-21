import React from 'react'
import { Main } from '../template/Main'

// eslint-disable-next-line import/no-anonymous-default-export
export const Home = props =>
  <Main icon="home" title="Início" subtitle="Crud Project React">
    <div className="display-4">Hello</div>
    <hr />
    <p className="mb-0">Aplicação CRUD com react</p>
  </Main>