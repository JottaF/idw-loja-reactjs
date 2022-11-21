import styles from './styles.module.scss'

export function Sobre() {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <h1>IDW - React</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa veritatis, libero dolorem aliquam amet asperiores quo doloribus atque molestias iure suscipit sit quis mollitia iusto, rerum voluptatum! Eum, deleniti adipisci!</p>
                <div className={styles.wrapper}>
                    <div>
                        <img src="https://cdn-icons-png.flaticon.com/512/4825/4825076.png" alt="" />
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa veritatis,</p>
                    </div>
                    <div>
                        <img src="https://cdn-icons-png.flaticon.com/512/4825/4825076.png" alt="" />
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa veritatis,</p>
                    </div>
                    <div>
                        <img src="https://cdn-icons-png.flaticon.com/512/4825/4825076.png" alt="" />
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa veritatis,</p>
                    </div>
                </div>
                <img src="https://afipeasindical.org.br/content/uploads/2020/05/Promo%C3%A7%C3%A3oEletr%C3%B4nicos.jpg" alt="" />
                <p className={styles.finalText}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam odit excepturi aspernatur, error consequatur a at est doloribus possimus provident necessitatibus soluta neque quidem quae quo nostrum molestiae quis asperiores?</p>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam odit excepturi aspernatur, error consequatur a at est doloribus possimus provident necessitatibus soluta neque quidem quae quo nostrum molestiae quis asperiores?</p>
            </div>
        </div>
    )
}