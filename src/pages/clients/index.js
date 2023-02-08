import Link from "next/link"
import styles from '@/styles/Home.module.css'

import { useRouter } from "next/router"
 
export default function Clients(){

const clients=[
    {id:'hamed',name:'hamed'},
    {id:'sara',name:'sara'},
    {id:'ali',name:'ali'},
]

const router=useRouter();
console.log(router)
    return (
        <div  className={styles.main}>
        
      <ul>
        {clients.map((client)=>(

            <li key={client.id}>
                <Link href={`/clients/${client.id}`}>{client.name}</Link>
            </li>
        ))}
      </ul>


        </div>
    )
}