import React, { useCallback, useMemo } from 'react'
import debounce from 'debounce'
import { Search } from 'react-feather'

import { Dropdown } from '../dropdown'
import { Avatar } from '../avatar'
import { ErrorMessage } from '../error-message'
import { StyledInput, Label, InputContainer } from '../input/views'
import { InputProps } from '../input'
import { SearchIconContainer, Wrapper } from './views'

interface SearchInputProps extends InputProps {
  showAutoComplete: boolean
}

const tempImage =
  'https://images.unsplash.com/photo-1621570070325-dcf471675e35?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80'

export const SearchInput = React.forwardRef<HTMLInputElement, Partial<SearchInputProps>>(
  ({ name, label, errorMessage, error, showAutoComplete = true, onChange, m, mt, mb, mr, ml, ...otherProps }, ref) => {
    const handleChange = useCallback(
      (event: React.ChangeEvent<HTMLInputElement>) => {
        onChange?.(event)
      },
      [onChange]
    )

    const debouncedChange = useMemo(() => debounce(handleChange, 200), [handleChange])

    return (
      <Wrapper m={m} mt={mt} mb={mb} mr={mr} ml={ml}>
        <Label htmlFor={name}>
          {label}
          <InputContainer hasLabel={!!label}>
            <StyledInput
              id={name}
              autoComplete='off'
              ref={ref}
              error={error}
              {...otherProps}
              onChange={debouncedChange}
            />
            <SearchIconContainer>
              <Search size='1.8rem' color='white' />
            </SearchIconContainer>
          </InputContainer>
          <ErrorMessage>{errorMessage}</ErrorMessage>
        </Label>
        {showAutoComplete && (
          <Dropdown isOpen width='100%'>
            <Dropdown.Item>
              <Avatar src={tempImage} />
              <p>Yanto Lee</p>
            </Dropdown.Item>
            <Dropdown.Item>
              <Avatar src={tempImage} />
              <p>Yanto Lee</p>
            </Dropdown.Item>
          </Dropdown>
        )}
      </Wrapper>
    )
  }
)
