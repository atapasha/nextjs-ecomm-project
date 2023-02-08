import styles from "@/styles/Home.module.css";
import EventList from "@/components/events/event-list";

import { getAllEvents } from "../../dummy-data";

export default function HomePage() {
  const featuredEvents = getAllEvents();

  return (
    <div className={styles.main}>
      <EventList items={featuredEvents} />
    </div>
  );
}
