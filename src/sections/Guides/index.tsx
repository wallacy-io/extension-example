import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const LIST_LINK_CODESANBOX = [
  {
    src: 'https://codesandbox.io/embed/cjy8lp?view=editor+%2B+preview&module=%2Fsrc%2Fproviders.ts',
    title: 'Wallacy connect use Vanilla ts',
  },
  {
    src: 'https://codesandbox.io/embed/7lw7ls?view=editor+%2B+preview&module=%2Fsrc%2FApp.tsx',
    title: 'Wallacy connect use Web3 + React Js',
  },
  {
    src: "https://codesandbox.io/embed/887d7n?view=editor+%2B+preview&module=%2Fsrc%2FApp.tsx",
    title: "Wallacy connect Use Wallet Connect + React JS"
  }
];

const Guides = () => {
  return (
    <div className='flex w-full flex-col gap-10'>
      {LIST_LINK_CODESANBOX.map((item, key) => (
        <Card key={key}>
          <CardHeader>
            <CardTitle>{item.title}</CardTitle>
          </CardHeader>
          <CardContent className='h-[300px] sm:h-[600px]'>
            <iframe
              src={item.src}
              title={item.title}
              allow='accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking'
              sandbox='allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts'
              style={{
                width: '100%',
                height: '100%',
              }}
            ></iframe>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default Guides;
