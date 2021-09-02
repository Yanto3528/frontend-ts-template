import React, { HTMLAttributes } from 'react'

import { SkeletonLoading } from './styles'

export interface SkeletonProps extends HTMLAttributes<HTMLDivElement> {
  width?: string
  height?: string
  count?: number
  circle?: boolean
  spacing?: string
  duration?: string
}

export const Skeleton: React.FC<SkeletonProps> = ({ count, ...otherProps }) => {
  const skeletonCountArray = count && count > 0 ? new Array(count).fill(null) : []
  return (
    <>
      {skeletonCountArray.length > 0 ? (
        skeletonCountArray.map((_, index) => (
          // eslint-disable-next-line
          <SkeletonLoading {...otherProps} key={`skeleton-${index}`} count={count} />
        ))
      ) : (
        <SkeletonLoading {...otherProps} />
      )}
    </>
  )
}
