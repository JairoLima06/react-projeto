import React from "react";
import style from './Botao.module.scss';



type Props = {
  type?: "submit" | "reset" | "button";
  onClick?: () => void;
  children: React.ReactNode;
};

class Botao extends React.Component<Props> {
  render() {
    const { type = "button", onClick, children } = this.props;
    return (
      <button type={type} onClick={onClick} className={style.botao}>
        {children}
      </button>
    );
  }
}

export default Botao;
