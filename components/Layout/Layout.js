import styles from "./Layout.module.css"

export default function Layout({ children, isActive }) {
  return <main className={isActive?`${styles.layout} ${styles.active}`: styles.layout}>{children}</main>;
}
