import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useProviderActive } from '@/context/ProviderSelectCtx';
import { BrowserProvider, formatEther } from 'ethers';
import { useEffect, useState } from 'react';

const InfoWallet = () => {
  const [balance, setBalance] = useState('');
  const [chainId, setChainId] = useState('');
  const { provider: providerActive, addressWallet } = useProviderActive();

  useEffect(() => {
    async function getBalance() {
      if(!providerActive?.provider) return;
      const provider = new BrowserProvider(providerActive.provider);
      const balance = await provider.getBalance(addressWallet);
      const network = await provider.getNetwork();
      const balanceInEther = formatEther(balance);
      setChainId(network.chainId + '');
      setBalance(balanceInEther);
    }
    getBalance();
  }, [providerActive, addressWallet]);

  return (
    <Card className='self-stretch'>
      <CardHeader>
        <CardTitle>Information Wallet</CardTitle>
      </CardHeader>
      <CardContent>
        {addressWallet ? (
          <>
            <p>ChainId: {chainId}</p>
            <p className='break-words'>Address: {addressWallet}</p>
            <p>Balance: {balance} ETH</p>
          </>
        ) : (
          <p>No data</p>
        )}
      </CardContent>
    </Card>
  );
};

export default InfoWallet;
