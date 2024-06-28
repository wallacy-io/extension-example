import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useProviderActive } from '@/context/ProviderSelectCtx';
import { BrowserProvider } from 'ethers';
import { useState } from 'react';

const SignMessage = () => {
  const { provider } = useProviderActive();
  const [signature, setSignature] = useState('');
  const walletProvider = provider?.provider;

  const handleSignMessage = async () => {
    if(!walletProvider) return;
    const provider = new BrowserProvider(walletProvider);
    const signer = await provider.getSigner();
    const _signature = await signer?.signMessage('Hello World <3');
    setSignature(_signature);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Sign </CardTitle>
      </CardHeader>
      <CardContent>
        <Button onClick={handleSignMessage}>Sign Message</Button>
        <div className='min-h-10  bg-yellow-400 items-start pl-3 mt-2 w-full flex flex-col'>
          <p className='mb-0'> Result:</p>
          <p className='break-all text-wrap'>{signature}</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default SignMessage;
