/**
 * 禁止背景滑动的确认弹窗
 */
import ReactDOM from "react-dom";
import style from './index.module.css'

interface ButtonListParams {
  text: string;
  handleClick: () => void;
}

export interface ConfirmModalProps {
  header?: string;
  description?: string;
  buttonList?: ButtonListParams[];
  handleClose: () => void;
}

const ConfirmModal = ({
  header = "",
  description = "",
  buttonList = [],
  handleClose = () => {},
}: ConfirmModalProps) => (
  <article className={style.mask}>
    <article className={style.container}>
      {!!header && <header className={style.header}>{header}</header>}
      {!!description && <section className={style.description}>{description}</section>}
      {!!buttonList?.length && (
        <footer className={style.footer}>
          {buttonList.map((item) => (
            <button
              className={style.confirmBtn}
              onClick={() => {
                if (item?.handleClick) {
                  item.handleClick();
                }
                handleClose();
              }}
            >
              {item?.text}
            </button>
          ))}
        </footer>
      )}
    </article>
  </article>
);

const container = document.createElement("div");

const Confirm = {
  show: (params: ConfirmModalProps) => {
    // 禁止背景滚动
    const stopScroll = () => {
      const topVal = document.body.scrollTop || document.documentElement.scrollTop;
      console.log('禁止滚动', topVal)
      document.body.style.position = "fixed";
      document.body.style.top = `${-topVal}px`;
    }

    // 恢复背景滚动
    const recoverScroll = () => {
      const topVal = -parseInt(document.body.style.top)
      console.log('恢复滚动', topVal)
      document.body.style.position = "static";
      document.body.style.top = '0';
      window.scrollTo(0, topVal);
    }
    
    const handleClose = () => {
      document.body.removeChild(container);
      recoverScroll();
    }

    ReactDOM.render(<ConfirmModal {...params} handleClose={handleClose} />, container);

    document.body.appendChild(container);

    stopScroll();

  },
};

export default Confirm;
