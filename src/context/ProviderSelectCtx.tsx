import { PropsWithChildren, createContext, useContext, useState } from 'react';

type TProviderActiveCtx = {
  provider: EIP6963ProviderDetail | null;
  setProvider: (provider: EIP6963ProviderDetail) => void;
};

export const ProviderActiveCtx = createContext<TProviderActiveCtx>({
  provider: null,
  setProvider: () => {},
});

export const ProviderActive = ({ children }: PropsWithChildren) => {
  const [provider, setProvider] = useState<EIP6963ProviderDetail | null>(null);

  return (
    <ProviderActiveCtx.Provider
      value={{
        provider,
        setProvider,
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
