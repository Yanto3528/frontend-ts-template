import React, { useEffect } from 'react'
import { Mail, Lock } from 'react-feather'
import { useForm, Controller } from 'react-hook-form'
import { RouteComponentProps } from 'react-router-dom'
import toast from 'react-hot-toast'

import { Auth } from '@/components'
import { Button, Input } from '@/ui-components'
import { theme } from '@/constants'
import { useAuth, RegisterUserData } from '@/contexts/auth'
import { validateConfirmPassword, validateEmail, validatePassword } from '@/utils/validator'
import { getErrorMessage } from '@/utils/get-error-message'

const Register: React.FC<RouteComponentProps> = ({ history }) => {
  const { register, isLoading, user } = useAuth()
  const {
    control,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm<RegisterUserData>()

  useEffect(() => {
    if (user && !isLoading) {
      history.push('/app/feed')
    }
    // eslint-disable-next-line
  }, [])

  const onSubmit = async (data: RegisterUserData) => {
    try {
      await register(data)
      history.push('/app/feed')
    } catch (error) {
      const message = getErrorMessage(error)
      toast.error(message)
    }
  }

  return (
    <Auth>
      <Auth.Card>
        <Auth.Header title='Welcome' subtitle='Create a free account today and connect with people around the world.' />
        <form onSubmit={handleSubmit(onSubmit)}>
          <Controller
            render={({ field }) => (
              <Input
                type='text'
                placeholder='Enter your name'
                label='Name'
                leftIcon={<Mail size='1.8rem' color={theme.colors.gray} />}
                {...field}
                error={!!errors?.name}
                errorMessage={errors?.name?.message}
              />
            )}
            name='name'
            control={control}
            rules={{ required: 'Name is required' }}
            defaultValue=''
          />
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
          <Controller
            render={({ field }) => (
              <Input
                type='password'
                placeholder='Confirm your password'
                label='Confirm password'
                leftIcon={<Lock size='1.8rem' color={theme.colors.gray} />}
                error={!!errors?.passwordConfirm}
                errorMessage={errors?.passwordConfirm?.message}
                {...field}
              />
            )}
            control={control}
            name='passwordConfirm'
            rules={{
              required: 'Confirm password is required',
              validate: (value: string) => validateConfirmPassword(value, getValues('password')),
            }}
            defaultValue=''
          />
          <Button fluid loading={isLoading}>
            Sign up
          </Button>
        </form>
      </Auth.Card>
      <Auth.Footer description='Already have an account?' link='/login' linkText='Login here' />
    </Auth>
  )
}

export default Register
