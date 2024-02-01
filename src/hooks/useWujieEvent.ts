// hooks/useWujieEvent.ts
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

const useWujieEvent = () => {
  const navigate = useNavigate()

  useEffect(() => {
    const handleRouteChange = (path: string) => {
      navigate(`/${path}`)
    }

    // 确保 window.$wujie 存在并且类型正确
    const wujie = (window as any).$wujie
    if (wujie?.bus) {
      // 子应用监听事件
      wujie.bus.$on("onAdminRouteChange", handleRouteChange)

      // 子应用发送事件
      wujie.bus.$emit("onSubLoaded")
    }

    // 清理事件监听器
    return () => {
      if (wujie?.bus) {
        wujie.bus.$off("onAdminRouteChange", handleRouteChange)
      }
    }
  }, [navigate])
}

export default useWujieEvent
