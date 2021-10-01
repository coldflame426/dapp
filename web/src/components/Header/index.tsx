import React from "react";

import Logo from "assets/img/logo.png";

import style from "./style.module.scss";

type HeaderProps = {
  active: boolean;
  account: string;
};

export const Header: React.FC<HeaderProps> = ({ active, account }: HeaderProps) => {
  return (
    <div className={style.container}>
      <img width={200} alt="Logo" src={Logo} />

      {active && (
        <div className={style.account}>
          {`${account.substring(0, 6)}...${account.substring(
            account.length - 4
          )} 🟢`}
        </div>
      )}
    </div>
  );
};

export default Header;
