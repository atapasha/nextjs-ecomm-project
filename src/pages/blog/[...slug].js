import { useRouter } from "next/router"
import styles from '@/styles/Home.module.css'

export default function BlogPostPage(){

    const router=useRouter();

    console.log(router.query)
    return (
        <div   className={styles.main}>
            <h1> the BlogPostPage page  </h1>
        </div>
    )
}