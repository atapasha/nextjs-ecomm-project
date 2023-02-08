import { useRouter } from "next/router";
import styles from "@/styles/Home.module.css";

export default function SelectedClientProjectPage() {
  const router = useRouter();

  console.log(router.query);
  return (
    <div className={styles.main}>
      <h1> the SelectedClientProject page project</h1>
    </div>
  );
}
