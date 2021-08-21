import { Switch, Route, Redirect } from 'react-router'
import { UserCrud } from '../../components/user/UserCrud'
import { Home } from '../../components/home/Home'

export const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home}></Route>
      <Route path="/users" component={UserCrud}></Route>
      <Redirect from="*" to="/" />
    </Switch>
  )
}