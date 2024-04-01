import { Outlet } from "react-router-dom";


import styles from './default-layout.module.scss';
import { Header } from "../../components/Header";

export function DefaultLayout() {
  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.content}>
        <Outlet />
      </main>
    </div>
  )
}