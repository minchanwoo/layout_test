import styles from './index.module.css';

const Index = ({children}) => {
  return <div className={styles.wrapper}>
    <header>
        <div className={styles.first}>
            <div className={styles.first_line}>
                <div className={styles.logo}>LOGOS</div>
                <div className={styles.require_user}>
                    <ul>
                        <li>회원가입</li>
                        <li>로그인</li>
                        <li>마이페이지</li>
                        <li>고객센터</li>
                    </ul>
                </div>
            </div>
        </div>
        <div className={styles.second}>
            <div>
                <div className={styles.second_one}>SECOND</div>
                <div className={styles.second_two}>THIRD</div>
            </div>
        </div>
    </header>
    <main>
        <div className={styles.section}>
            {children}
        </div>
    </main>
    <footer className={styles.footer}>
        footer
    </footer>
  </div>
}

export default Index;