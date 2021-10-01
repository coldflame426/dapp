import React, { useState, useEffect } from "react";

import { Button, NumberPicker } from "components";

import { web3, shrugToken, shrugSale } from "utils/contracts";

import style from "./style.module.scss";

type PurchaseProps = {
  account: string;
};

enum PayOption {
  ETH = "ETH",
  STMX = "STMX",
}

const Currency = {
  [PayOption.ETH]: 0,
  [PayOption.STMX]: 2,
};

const Purchase: React.FC<PurchaseProps> = ({ account }: PurchaseProps) => {
  const [amount, setAmount] = useState(1);
  const [payOption, setPayOption] = useState<PayOption>(PayOption.ETH);
  const [price, setPrice] = useState("");
  const [userBalance, setUserBalance] = useState(0);

  useEffect(() => {
    getTotalSupplyAndBalance();
  }, []);

  useEffect(() => {
    if (account) {
      getUserBalance();
    } else {
      setUserBalance(0);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [account, payOption]);

  useEffect(() => {
    calculatePrice(amount, payOption);
  }, [amount, payOption]);

  const getTotalSupplyAndBalance = async () => {
    try {
      // const totalSupply = await shrugToken.methods.totalSupply().call();
      // console.log({ totalSupply });
    } catch (e) {
      console.log("Error :", e);
    }
  };

  const getUserBalance = async () => {
    let balance = "";
    if (payOption === PayOption.ETH) {
      const balanceInWei = await web3.eth.getBalance(account);
      balance = web3.utils.fromWei(balanceInWei);
    } else {
      const balanceInWei = await shrugToken.methods.balanceOf(account).call();
      balance = web3.utils.fromWei(balanceInWei);
    }

    setUserBalance(parseFloat(balance));
  };

  const calculatePrice = async (count: number, pType: PayOption) => {
    const currency = Currency[pType];
    try {
      const wei: string = await shrugSale.methods
        .getPrice(count, currency)
        .call();
        
      setPrice(web3.utils.fromWei(wei));
    } catch (e) {
      console.log("Error :", e);
      setPrice("0");
    }
  };

  const handlePurchase = async () => {
    try {
      if (payOption === PayOption.ETH) {
        await shrugSale.methods.buyInETH(amount).send({
          from: account,
          value: web3.utils.toWei(price),
        });
      } else if (payOption === PayOption.STMX) {
        await shrugSale.methods.buyInSTMX(amount).send({
          from: account,
          value: web3.utils.toWei(price),
        });
      }
    } catch (e) {
      console.log("Error :", e);
    }
  };

  return (
    <div className={style.container}>
      <h2>StormX Shrug NFT</h2>
      <p>
        Buy KyeongHyun Ryoo's first NFT representing creative ownership of the
        ¯\_(ツ)_/¯ emoticon.
      </p>
      <div className={style.price}>
        <label>
          {parseFloat(price).toFixed(5)} {payOption}
        </label>
      </div>
      <div className={style.supply}>
        <label>195/500</label>&nbsp;
        <span>available</span>
      </div>
      <div className={style.selectBox}>
        <label>How would you like to pay?</label>
        <select onChange={(e) => setPayOption(e.target.value as PayOption)}>
          <option value={PayOption.ETH}>Ethereum (ETH)</option>
          <option value={PayOption.STMX}>StormX Token (STMX)</option>
        </select>
      </div>
      <div className={style.numberPicker}>
        <NumberPicker
          decreaseDisabled={amount <= 1}
          value={amount}
          onDecrease={() => setAmount((prev) => prev - 1)}
          onIncrease={() => setAmount((prev) => prev + 1)}
        />
      </div>
      <Button
        appearance="round"
        color="secondary"
        disabled={!userBalance || userBalance < parseFloat(price)}
        onClick={handlePurchase}
      >
        Buy
      </Button>
    </div>
  );
};

export default Purchase;
