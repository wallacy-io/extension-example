import { Button } from '@/components/ui/button';
import { Web3Modal } from '@web3modal/ethers';

const WalletConnect = ({ open }: { open: Web3Modal['open'] }) => {
  return <Button onClick={() => open()}>Wallet Connect</Button>;
};

export default WalletConnect;
