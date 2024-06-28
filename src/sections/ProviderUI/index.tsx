import ActiveProvider from "./ActiveProvider"
import ListProvider from "./ListProvider"

const ProviderUI = () => {
  return (
    <div className="flex items-start gap-3 max-lg:flex-col w-full">
      <ListProvider />
      <ActiveProvider />
    </div>
  )
}

export default ProviderUI