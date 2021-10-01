import React from "react";

import { Button } from "components";

import style from "./style.module.scss";

type ConnectProps = {
  onConnect: () => void;
};

const Connect: React.FC<ConnectProps> = ({ onConnect }: ConnectProps) => {
  return (
    <div className={style.container}>
      <h2>StormX Shrug NFT is now LIVE!</h2>
      <p>
        Start by connect your wallet to reserve your spot and join the queue!
      </p>
      <div className={style.active}>
        <div>
          <span className={style.badge}>1</span>
          <span>Connect a wallet</span>
        </div>
        <div className={style.connect}>
          <p>
            Make sure you select the correct wallet before connecting it.
            Otherwise you'll lose your spot.
          </p>
          <Button appearance="round" color="secondary" onClick={onConnect}>
            Connect Wallet
          </Button>
        </div>
      </div>
      <div>
        <span className={style.badge}>2</span>
        <span>Reserve your spot</span>
      </div>
      <div>
        <span className={style.badge}>3</span>
        <span>Purchase a NFT</span>
      </div>
    </div>
  );
};

export default Connect;
