import { useRouter } from "next/router";
import styles from "@/styles/Home.module.css";

export default function Id() {
  const router = useRouter();

  console.log(router);

  return (
    <div className={styles.main}>
      <h1>id page </h1>
    </div>
  );
}
