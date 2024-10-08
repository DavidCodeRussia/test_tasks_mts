import { useNavigate, Outlet, useLocation } from "react-router-dom";
import Button from '@mui/material/Button';
import styles from './Layout.module.scss';
import { useLayoutEffect, useState } from "react";

function Layout() {
  const [step, setStep] = useState('');
  let navigate = useNavigate();
  const data = useLocation();
  const onBtnClick = () => {
    const condition = data?.pathname === '/task-2';
    navigate(condition ? '/' : '/task-2')
    setStep(condition ? '2' : '1')
  }
  useLayoutEffect(() => {
    if(data?.pathname === '/task-2') {
      setStep('1')
    } else {
      setStep('2')
    }
  }, [data?.pathname])
  return (
    <div className={styles.root}>
      <div className={styles.upperBorder} />
      <Outlet />
      <Button
        variant="contained"
        className={styles.btn}
        onClick={onBtnClick}
      >
        To {step} task
      </Button>
    </div>
  )
}

export default Layout