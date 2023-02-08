import EventItem from "./event-item";
import classes from "./event-list.module.css";
export default function EventList(props) {
  const { items } = props;
  console.log("items", items);

  return (
    <ul className={classes.list}>
      {items.map((event) => (
        <EventItem
          key={event.id}
          id={event.id}
          title={event.title}
          image={event.image}
          description={event.description}
          date={event.date}
        />
      ))}
    </ul>
  );
}
