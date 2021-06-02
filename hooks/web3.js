import { useState } from 'react'
import { ethers } from "ethers";
import Web3Modal from "web3modal";
import WalletConnectProvider from "@walletconnect/web3-provider";

const providerOptions = {
  walletconnect: {
    package: WalletConnectProvider,
    options: {
      infuraId: '6d3abdf3d8e54645b5d1ef31088621b9',
    },
  },
};

const web3Modal = new Web3Modal({
  network: "mumbai",
  cacheProvider: true,
  providerOptions,
});

export function useWeb3Modal() {
  const [provider, setProvider] = useState(undefined);
  const [error, setError] = useState(null);

  // Automatically connect if the provider is cashed but has not yet
  // been set (e.g. page refresh)
  if (web3Modal.cachedProvider && !provider) {
    connectWallet();
  }

  async function connectWallet() {
    try {
      const externalProvider = await web3Modal.connect();
      const ethersProvider = new ethers.providers.Web3Provider(externalProvider);
      console.log(ethersProvider)
  
      setProvider(ethersProvider);
    } catch(e) {
      setError('NO_WALLET_CONNECTED');
      console.log('NO_WALLET_CONNECTED', e);
    }
  }

  function disconnectWallet() {
    web3Modal.clearCachedProvider();
    setProvider(undefined);
  }

  return { connectWallet, disconnectWallet, provider, error }
}
