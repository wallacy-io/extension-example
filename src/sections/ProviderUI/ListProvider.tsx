import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { useProviderActive } from '@/context/ProviderSelectCtx';
import { useEffect, useState } from 'react';

const ListProvider = () => {
  const [providers, setProviders] = useState<EIP6963ProviderDetail[]>([]);
  const { setProvider } = useProviderActive();

  useEffect(() => {
    function onAnnounceProvider(e: any) {
      const event = e as EIP6963AnnounceProviderEvent;

      setProviders((providers) => {
        const isExist = providers.find(
          (p) => p.info.uuid === event.detail.info.uuid
        );
        if (!isExist) {
          return [...providers, event.detail];
        }

        return providers;
      });
    }
    window.addEventListener('eip6963:announceProvider', onAnnounceProvider);

    window.dispatchEvent(new Event('eip6963:requestProvider'));

    return () =>
      window.addEventListener('eip6963:announceProvider', onAnnounceProvider);
  }, []);

  const handleSelectProvider = (provider: EIP6963ProviderDetail) => {
    setProvider(provider);
  };

  return (
    <Card className='flex flex-col w-full lg:w-2/3'>
      <CardHeader>
        <CardTitle>EIP 6963</CardTitle>
      </CardHeader>
      <CardContent>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-2'>
          {providers.map((provider) => (
            <Card key={provider.info.uuid}>
              <CardContent className='bg-gray-300 m-3 pt-5'>
                <p>"uuid": {provider.info.uuid}</p>
                <p>"name": {provider.info.name}</p>
                <p>"rdns": {provider.info.rdns}</p>
              </CardContent>
              <CardFooter>
                <Button onClick={() => handleSelectProvider(provider)}>
                  Use {provider.info.name}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default ListProvider;
