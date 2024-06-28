import { Button } from '@/components/ui/button';
import { useProviderActive } from '@/context/ProviderSelectCtx';

const Connect = () => {
  const { provider: providerSelect } = useProviderActive();
  const handleConnect = async () => {
    if (!providerSelect?.provider) return;
    try {
      providerSelect?.provider.request({
        method: 'eth_requestAccounts',
      });
    } catch (error) {
      console.error('Failed to connect to provider:', error);
    }
  };

  return <Button onClick={handleConnect}>Connect</Button>;
};

export default Connect;
