import React from "react";
import { useWeb3React } from "@web3-react/core";

import { Header } from "components";

import Purchase from "views/Purchase";
import Connect from "views/Connect";

import { injected } from "utils/connectors";

import style from "./app.module.scss";

const App: React.FC = () => {
  const { active, account, activate } = useWeb3React();

  const handleConnect = async () => {
    if (!window.ethereum) {
      window.alert("Please install MetaMask");
      return;
    }
    try {
      await activate(injected);
    } catch (e) {
      console.log(e);
    }
  };

  // const handleDisconnect = async () => {
  //   try {
  //     deactivate();
  //   } catch (e) {
  //     console.log(e);
  //   }
  // }

  return (
    <div className={style.container}>
      <Header active={active} account={account || ""} />

      {active ? (
        <Purchase account={account || ""} />
      ) : (
        <Connect onConnect={handleConnect} />
      )}
    </div>
  );
};

export default App;
