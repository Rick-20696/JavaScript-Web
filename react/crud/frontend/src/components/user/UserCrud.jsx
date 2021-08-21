import { useEffect, useState } from 'react';
import { Main } from '../template/Main';
import { Table } from '../table/Table';
import { Form } from '../form/Form';
import axios from 'axios'

const headerProps = {
  icon: 'users',
  title: 'Usuários',
  subtitle: 'Cadastro de usuários'
}

const BASE_URL = 'http://localhost:3001/users'

export const UserCrud = (props) => {
  const [user, setUser] = useState({ name: '', email: '' })
  const [refreshList, setRefreshList] = useState(false)
  const [usersList, setUsersList] = useState([])
  
  useEffect(() => {
    async function newList() {
      const response = await axios.get(BASE_URL)
      setUsersList(response.data)
    }
    newList()
  }, [refreshList])

  const clear = () => {
    setUser({ name: '', email: '' })
  }

  const removeUser = async (user) => {
    await axios.delete(`${BASE_URL}/${user.id}`)
    
    setRefreshList(!refreshList)
  }
  
  const getUser = async (userId) => {
    const response = await axios.get(`${BASE_URL}/${userId}`)
    setUser(response.data)
  }

  const updateField = (event) => {
    const newUser = {...user }
    newUser[event.target.name] = event.target.value
    setUser(newUser)
  }

  const save = async () => {
    const method = user.id ? 'put' : 'post'
    const url = user.id ? `${BASE_URL}/${user.id}` : BASE_URL
    
    await axios[method](url, user)
    
    setUser({ name: '', email: '' })
    setRefreshList(!refreshList)
  }

  return (
    <Main {...headerProps}>
      <Form onCloseForm={clear} fields={user} onConfirmForm={save} updateField={updateField} />
      <Table list={usersList} onEdit={getUser} onRemove={removeUser}/>
    </Main>
  )
}