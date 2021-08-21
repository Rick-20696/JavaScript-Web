import { Main } from '../template/Main';

const headerProps = {
  icon: 'users',
  title: 'Usuários',
  subtitle: 'Cadastro de usuários'
}

export const UserCrud = (props) => {
  return (
    <Main {...headerProps}></Main>
  )
}