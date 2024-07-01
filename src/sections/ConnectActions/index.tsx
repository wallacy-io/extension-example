import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import WalletConnect from './WalletConnect';
import { Web3Modal } from '@web3modal/ethers';
import Connect from './Connect';

const ConnectActions = ({ open }: { open: Web3Modal['open'] }) => {
  return (
    <Card className='self-stretch flex-1'>
      <CardHeader>
        <CardTitle>Connect Actions</CardTitle>
      </CardHeader>
      <CardContent className='flex flex-col gap-2'>
        <Connect />
        <WalletConnect open={open} />
      </CardContent>
    </Card>
  );
};

export default ConnectActions;
