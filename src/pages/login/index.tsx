import React, { useEffect } from 'react'
import { Mail, Lock } from 'react-feather'
import { useForm, Controller } from 'react-hook-form'
import { RouteComponentProps } from 'react-router-dom'
import toast from 'react-hot-toast'

import { Auth } from '@/components'
import { Button, Input } from '@/ui-components'
import { theme } from '@/constants'
import { useAuth, LoginUserData } from '@/contexts/auth'
import { validateEmail, validatePassword } from '@/utils/validator'
import { getErrorMessage } from '@/utils/get-error-message'

const Login: React.FC<RouteComponentProps> = ({ history }) => {
  const { login, isLoading, user } = useAuth()
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginUserData>()

  useEffect(() => {
    if (user && !isLoading) {
      history.push('/app/feed')
    }
    // eslint-disable-next-line
  }, [])

  const onSubmit = async (data: LoginUserData) => {
    try {
      await login(data)
      history.push('/app/feed')
    } catch (error) {
      const message = getErrorMessage(error)
      toast.error(message)
    }
  }

  return (
    <Auth>
      <Auth.Card>
        <Auth.Header title='Welcome back' subtitle='Login now and connect with your friends.' />
        <form onSubmit={handleSubmit(onSubmit)}>
          <Controller
            render={({ field }) => (
              <Input
                type='email'
                placeholder='Enter your email'
                label='Email'
                leftIcon={<Mail size='1.8rem' color={theme.colors.gray} />}
                {...field}
                error={!!errors?.email}
                errorMessage={errors?.email?.message}
              />
            )}
            name='email'
            control={control}
            rules={{ required: 'Email is required', validate: validateEmail }}
            defaultValue=''
          />
          <Controller
            render={({ field }) => (
              <Input
                type='password'
                placeholder='Enter your password'
                label='Password'
                leftIcon={<Lock size='1.8rem' color={theme.colors.gray} />}
                error={!!errors?.password}
                errorMessage={errors?.password?.message}
                {...field}
              />
            )}
            control={control}
            name='password'
            rules={{ required: 'Password is required', validate: validatePassword }}
            defaultValue=''
          />
          <Button fluid loading={isLoading}>
            Login
          </Button>
        </form>
      </Auth.Card>
      <Auth.Footer description="Don't have an account?" link='/register' linkText='Register here' />
    </Auth>
  )
}

export default Login
