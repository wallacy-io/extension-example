import { ethersConfig, mainnet, projectId } from '@/configs/wallet-connect';
import { ProviderActive } from '@/context/ProviderSelectCtx';
import { ConnectActions, InfoWallet, ProviderUI, Sign } from '@/sections';
import { createWeb3Modal } from '@web3modal/ethers';
import './App.css';

const modal = createWeb3Modal({
  ethersConfig,
  chains: [mainnet],
  projectId,
  enableAnalytics: true, // Optional - defaults to your Cloud configuration
});

function App() {
  return (
    <main className='flex flex-col justify-center items-center pt-12 gap-5 px-12 pb-10'>
      <h1 className='text-2xl font-bold'>E2E Test Dapp</h1>
      <ProviderActive>
        <ProviderUI />
        <div className='flex gap-3 items-stretch w-full max-lg:flex-col'>
          <div className='w-full lg:w-2/5'>
            <InfoWallet />
          </div>
          <div className='flex max-lg:flex-col items-center gap-3 w-full lg:w-3/5'>
            <ConnectActions open={() => modal.open()} />
            <Sign />
          </div>
        </div>
      </ProviderActive>
{/* 
      <h1 className='text-2xl font-bold my-5'>Guides</h1>
      <Guides /> */}
    </main>
  );
}

export default App;
