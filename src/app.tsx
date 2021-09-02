import { lazy, Suspense } from 'react'
import { Switch, Route } from 'react-router-dom'

const LoginPage = lazy(() => import('./pages/login'))
const RegisterPage = lazy(() => import('./pages/register'))

export const App = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        <Route exact path='/login' component={LoginPage} />
        <Route exact path='/register' component={RegisterPage} />
      </Switch>
    </Suspense>
  )
}
