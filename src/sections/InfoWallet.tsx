import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  useWeb3ModalAccount,
  useWeb3ModalProvider,
} from '@web3modal/ethers/react';
import { BrowserProvider, formatEther } from 'ethers';
import { useEffect, useState } from 'react';

const InfoWallet = () => {
  const [balance, setBalance] = useState('0');
  const { isConnected, address, chainId } = useWeb3ModalAccount();
  const { walletProvider } = useWeb3ModalProvider();

  useEffect(() => {
    async function getBalance() {
      const provider = new BrowserProvider(walletProvider!);
      const balance = await provider.getBalance(address!);
      const balanceInEther = formatEther(balance);
      setBalance(balanceInEther);
    }
    getBalance();
  }, []);

  return (
    <Card className='self-stretch'>
      <CardHeader>
        <CardTitle>Information Wallet</CardTitle>
      </CardHeader>
      <CardContent>
        {isConnected ? (
          <>
            <p>ChainId: {chainId}</p>
            <p className='break-words'>Address: {address}</p>
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
