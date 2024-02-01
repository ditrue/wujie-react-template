import { useRequestInterceptorsRequest } from "@/hooks/useRequestInterceptorsRequest"
import { useRequestInterceptorsResponse } from "@/hooks/useRequestInterceptorsResponse"
import useWujieEvent from "@/hooks/useWujieEvent"
import { Outlet, ScrollRestoration } from "react-router-dom"
const Root: React.FC = () => {
  useWujieEvent()
  useRequestInterceptorsRequest()
  useRequestInterceptorsResponse()
  return (
    <>
      <ScrollRestoration
        getKey={(location, _matches) => {
          const paths: string[] = []
          return paths.includes(location.pathname)
            ? location.pathname
            : location.key
        }}
      />
      <Outlet />
    </>
  )
}

export default Root
