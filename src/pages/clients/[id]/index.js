import { useRouter } from "next/router"
import styles from '@/styles/Home.module.css'
 
export default function ClientProjectPage(){

    const router=useRouter();

 

    function loadProjectHandler(){
        router.push('/clients/hamed/projectA')
    }


    console.log(router.query)   
    return (
        <div   className={styles.main}>
        
        
            <h1> The Clients   project page</h1>
             
 <button onClick={loadProjectHandler}>Load Project A</button>
        </div>
    )
}