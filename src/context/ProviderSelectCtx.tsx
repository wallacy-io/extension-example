import {
  useWalletInfo,
  useWeb3ModalAccount,
  useWeb3ModalProvider,
} from '@web3modal/ethers/react';
import {
  PropsWithChildren,
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react';

type TProviderActiveCtx = {
  provider: EIP6963ProviderDetail | null;
  addressWallet: string;
  setProvider: (provider: EIP6963ProviderDetail) => void;
  setAddressWallet: (address: string) => void;
};

export const ProviderActiveCtx = createContext<TProviderActiveCtx>({
  provider: null,
  addressWallet: '',
  setProvider: () => {},
  setAddressWallet: () => {},
});

export const ProviderActive = ({ children }: PropsWithChildren) => {
  const { walletProvider } = useWeb3ModalProvider();
  const { address, isConnected } = useWeb3ModalAccount();

  const [provider, setProvider] = useState<EIP6963ProviderDetail | null>(null);
  const [addressWallet, setAddressWallet] = useState<string>('');

  useEffect(() => {
    if(!isConnected){
      setProvider(null);
      setAddressWallet('');
      return;
    };
    setAddressWallet(address!);
    setProvider({
      info: {
        name: '',
        icon: '',
        rdns: '',
        uuid: '',
      },
      provider: walletProvider!
    })
  }, [isConnected]);

  return (
    <ProviderActiveCtx.Provider
      value={{
        provider,
        addressWallet,
        setProvider,
        setAddressWallet,
      }}
    >
      {children}
    </ProviderActiveCtx.Provider>
  );
};

export const useProviderActive = () => {
  const state = useContext(ProviderActiveCtx);
  if (typeof state === 'undefined') {
    throw new Error('useProviderActive must be wrap by provider');
  }
  return state;
};
