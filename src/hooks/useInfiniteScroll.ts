import { RefObject, useEffect, useRef, useState } from 'react'

export const useInfiniteScroll = (fetchMoreProduct: RefObject<HTMLElement>) => {
  const [intersect, setIntersect] = useState<boolean>(false)
  const observeRef = useRef<IntersectionObserver>()

  useEffect(() => {
    if (!fetchMoreProduct.current) {
      return
    }

    getObserver().observe(fetchMoreProduct.current)

    return () => {
      getObserver().disconnect()
    }
  }, [fetchMoreProduct])

  const getObserver = () => {
    if (!observeRef.current) {
      observeRef.current = new IntersectionObserver((entries) => {
        let isIntersect = entries.some((entry) => entry.isIntersecting)

        setIntersect(isIntersect)
      })
    }

    return observeRef.current
  }

  return intersect
}
