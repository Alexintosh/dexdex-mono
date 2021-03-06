import { Address } from '@dexdex/model/lib/base';
import { EthNet } from './model/wallets';

const once = <A>(f: () => A) => {
  let called = false;
  let cache: A;
  return () => {
    if (!called) {
      cache = f();
      called = true;
    }
    return cache;
  };
};

const validateOperations = (operations: string) => {
  return ['buy', 'sell', 'buy_sell'].indexOf(operations) > -1;
};

const validateTokens = (tokens: string) => {
  return /^0x[a-fA-F0-9]{40}(?:,0x[a-fA-F0-9]{40})*$/.test(tokens);
};

function readConfig() {
  const searchParams = new URLSearchParams(window.location.hash.slice(1));
  // parent window, search for div
  const div = document.getElementById('dexdex-root');
  if (div === null) {
    console.error('<div id="dexdex-root"> is missing>');
    throw new Error('Bad Config');
  }

  let net: EthNet;
  if (process.env.NODE_ENV === 'production') {
    net =
      (searchParams.get('net') as EthNet) || (div.getAttribute('data-net') as EthNet) || 'mainnet';
    if (['mainnet', 'kovan'].indexOf(net) < 0) {
      throw new Error(`Invalid net param: ${net}`);
    }
    if (net === 'kovan') {
      console.log('Using kovan network');
    }
  } else {
    net = 'devnet';
  }

  const widgetId = searchParams.get('widgetId') || div.getAttribute('data-dexdex-id');
  if (widgetId == null) {
    console.error('Missing widgetId (url param widgetId or data-dexdex-id attr');
    throw new Error('Bad Config');
  }

  let operations = searchParams.get('operations') || div.getAttribute('data-operations');
  operations = operations !== null && validateOperations(operations) ? operations : null;

  let tokens = searchParams.get('tokens') || div.getAttribute('data-tokens');
  tokens = tokens !== null && validateTokens(tokens) ? tokens : null;

  return {
    widgetId,
    operations,
    tokens,
    network: net,
    ApiBase: getAPIBase(net),
    ContractAddress: getContractAddress(net),
    EtherscanUrl: net === 'kovan' ? 'https://kovan.etherscan.io' : 'https://etherscan.io',
  };
}

function getAPIBase(ethNet: EthNet) {
  if (process.env.NODE_ENV === 'production') {
    return ethNet === 'kovan' ? 'https://beta-api.dexdex.io' : 'https://api.dexdex.io';
  } else {
    return 'http://localhost:8000';
  }
}

function getContractAddress(ethNet: EthNet) {
  const Contracts: Record<string, string> = {
    kovan: '0x7cdb67d0bdad0244dc2580678dfc09d84f81d163',
    mainnet: '0x0c577fbf29f8797d9d29a33de59001b872a1d4dc',
  };

  if (process.env.NODE_ENV === 'production') {
    return Contracts[ethNet];
  } else {
    return process.env.DEXDEX_CONTRACT!;
  }
}

export const appConfig = once(readConfig);

export const etherscanAddressUrl = (address: Address) =>
  `${appConfig().EtherscanUrl}/address/${address}`;
export const etherscanTxUrl = (txhash: string) => `${appConfig().EtherscanUrl}/tx/${txhash}`;

function computeIsMobile() {
  const ua = window.navigator.userAgent;
  return ua.includes('iPhone') || ua.includes('Android');
}

export const isMobile = computeIsMobile();

const tokenImage = (size: 23 | 32, name: string) =>
  `https://firebasestorage.googleapis.com/v0/b/easytrade-00001.appspot.com/o/` +
  encodeURIComponent(`tokens/${size}/${name}.png`) +
  '?alt=media';

export const tokenDefaultSmallImg = tokenImage(23, '_default');
export const tokenDefaultBigImg = tokenImage(32, '_default');
export const tokenSmallImg = (address: string) => tokenImage(23, address.toLowerCase());
export const tokenBigImg = (address: string) => tokenImage(32, address.toLowerCase());
