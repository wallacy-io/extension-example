import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useProviderActive } from '@/context/ProviderSelectCtx';

const ActiveProvider = () => {
  const { provider: providerActive } = useProviderActive();

  return (
    <Card className='w-full lg:w-1/3 self-stretch'>
      <CardHeader>
        <CardTitle>Active Provider</CardTitle>
      </CardHeader>
      <CardContent className='bg-gray-300 m-3 pt-5'>
        {providerActive && (
          <>
            <p>Uuid: {providerActive?.info.uuid}</p>
            <p>Name: {providerActive?.info.name}</p>
            <div className='flex items-center gap-2'>
              Icon:{' '}
              <img
                src={providerActive?.info.icon}
                alt='icon'
                className='w-12 h-12 object-cover'
              />
            </div>
          </>
        )}
      </CardContent>
    </Card>
  );
};

export default ActiveProvider;
