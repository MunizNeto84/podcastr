import format from 'date-fns/format'
import { enUS } from 'date-fns/locale'
import styles from './styles.module.scss'

export function Header(){
  const currentDate = format (new Date(), 'iii, d MMMM', {
    locale: enUS
  })

  return(
    <header className={styles.headerContainer}>
        <img src="/logo.svg" alt="Podcastr"/>

        <p>the best for you to hear always</p>
        <span>{currentDate}</span>
    </header>
  )
}