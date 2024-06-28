import { Button } from '@/components/ui/button';
import { useProviderActive } from '@/context/ProviderSelectCtx';

const Connect = () => {
  const { provider: providerSelect, setAddressWallet } = useProviderActive();
  const handleConnect = async () => {
    if (!providerSelect?.provider) return;
    try {
      const accounts = await providerSelect?.provider.request({
        method: 'eth_requestAccounts',
      }) as string[];
      console.info('accounts', accounts);
      setAddressWallet(accounts[0]);
    } catch (error) {
      console.error('Failed to connect to provider:', error);
    }
  };

  return <Button disabled={!providerSelect} onClick={handleConnect}>Connect</Button>;
};

export default Connect;
