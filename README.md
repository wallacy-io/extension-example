# Connect to Wallacy Wallet from your dApps

Wallacy Wallet supports [EIP-6963](https://eips.ethereum.org/EIPS/eip-6963) standard, so you can connect to Wallacy using any libraries that support EIP-6963. Ex:

- [WalletConnect](https://docs.walletconnect.com/)
- [Web3js](https://web3js.org)
- [Wagmi](https://wagmi.sh)
- [MIPD Store](https://github.com/wevm/mipd)
- [RainbowKit](https://www.rainbowkit.com)
- [Web3-Onboard](https://onboard.blocknative.com)

You can visit our website to check wallet connection at: [E2E Test Dapp](https://wallacy-io.github.io/extension-example/).

## Connect to Wallacy using WalletConnect
You can visit [CodeSanbox](https://codesandbox.io/p/sandbox/stoic-boyd-887d7n) to see full example.

### Installation

```sh
yarn add @web3modal/ethers ethers
```

### Implementation

```ts
import { createWeb3Modal, defaultConfig } from '@web3modal/ethers';

// 1. Get projectId from https://cloud.walletconnect.com
const projectId = 'YOUR_PROJECT_ID';

// 2. Set chains
const mainnet = {
  chainId: 1,
  name: 'Ethereum',
  currency: 'ETH',
  explorerUrl: 'https://etherscan.io',
  rpcUrl: 'https://cloudflare-eth.com',
};

// 3. Create your application's metadata object
const metadata = {
  name: 'My Website',
  description: 'My Website description',
  url: 'https://mywebsite.com', // url must match your domain & subdomain
  icons: ['https://avatars.mywebsite.com/'],
};

// 4. Create Ethers config
const ethersConfig = defaultConfig({
  metadata,
  enableEIP6963: true,
  enableInjected: true,
});

// 5. Create a Web3Modal instance
const modal = createWeb3Modal({
  ethersConfig,
  chains: [mainnet],
  projectId,
});

// 6. Show modal when clic connect button
const btn = document.getElementById('connect-wallet-btn');
btn.addEventListener('click', () => modal.open());
```

You can follow the WalletConnect documentation for implementation example for React, Vue, Svelte...


## Connect to Wallacy manually

You can visit [CodeSanbox](https://codesandbox.io/p/sandbox/pedantic-banach-cjy8lp) to see full example.

```ts
interface EIP6963ProviderInfo {
  rdns: string;
  uuid: string;
  name: string;
  icon: string;
}

interface EIP6963ProviderDetail {
  info: EIP6963ProviderInfo;
  provider: EIP1193Provider;
}

type EIP6963AnnounceProviderEvent = {
  detail: {
    info: EIP6963ProviderInfo;
    provider: Readonly<EIP1193Provider>;
  };
};

interface EIP1193Provider {
  isStatus?: boolean;
  host?: string;
  path?: string;
  sendAsync?: (
    request: { method: string; params?: Array<unknown> },
    callback: (error: Error | null, response: unknown) => void
  ) => void;
  send?: (
    request: { method: string; params?: Array<unknown> },
    callback: (error: Error | null, response: unknown) => void
  ) => void;
  request: (request: { method: string; params?: Array<unknown> }) => Promise<unknown>;
}

declare global {
  interface WindowEventMap {
    'eip6963:announceProvider': CustomEvent;
  }
}

// Connect to the selected provider using eth_requestAccounts.
const connectWithProvider = async provider => {
  try {
    await provider.request({ method: 'eth_requestAccounts' });
  } catch (error) {
    console.error('Failed to connect to provider:', error);
  }
};

// Display detected providers as connect buttons.
export function listProviders(element: HTMLDivElement) {
  window.addEventListener('eip6963:announceProvider', (event: EIP6963AnnounceProviderEvent) => {
    const button = document.createElement('button');

    button.innerHTML = `
        <img src="${event.detail.info.icon}" alt="${event.detail.info.name}" />
        <div>${event.detail.info.name}</div>
      `;

    // Call connectWithProvider when a user selects the button.
    button.onclick = () => connectWithProvider(event.detail.provider);
    element.appendChild(button);
  });

  // Notify event listeners and other parts of the dapp that a provider is requested.
  window.dispatchEvent(new Event('eip6963:requestProvider'));
}
```

## Connect to Wallacy using Web3js and React

You can visit [CodeSanbox](https://codesandbox.io/p/sandbox/quirky-jang-7lw7ls) to see full example.

```tsx
import { Web3 } from 'web3';

interface ConnectButtonProps {
  wallet: EIP6963ProviderDetail;
}

const ConnectButton = ({ wallet }: ConnectButtonProps) => {
  const { info, provider } = wallet;

  const connect = () => {
    provider.request({ method: 'eth_requestAccounts' });
  };

  return <button onClick={connect}>Connect to {info.name}</button>;
};

const App = () => {
  const [providers, setProviders] = useState<EIP6963ProviderDetail[]>([]);

  useEffect(() => {
    (async () => {
      const providers = await Web3.requestEIP6963Providers();
      const arrProvider = Array.from(
        providers.values()
      ) as EIP6963ProviderDetail[];
      setProviders(arrProvider);
    })();
  });

  return (
    <div>
      {providers.map(p => (
        <ConnectButton key={p.info.uuid} wallet={w} />
      ))}
    </div>
  );
};
```

## Installation Reponsitory

1. Clone the repository:
    ```sh
    git clone https://github.com/wallacy-io/extension-example.git
    cd extension-example
    ```

2. Install dependencies:
    ```sh
    npm install
    # or
    yarn install
    ```

## Usage Reponsitory

### Development Server

To start the development server:
```sh
npm run dev
# or
yarn dev