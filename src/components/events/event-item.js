import Link from "next/link";
import classes from "./event-item.module.css";
export default function EventItem(props) {
  const { title, image, date, description, id } = props;

  console.log(props);

  const exploreLink = `/events/${id}`;
  return (
    <li className={classes.item}>
      <img src={"/" + image} />
      <div className={classes.content}>
        <div className={classes.summery}>
          <h2>{title}</h2>

          <div className={classes.date}>
            <time>{date}</time>
          </div>
          <div className={classes.address}>
            <address>{description}</address>
          </div>
        </div>
        <div className={classes.actions}>
          <Link href={exploreLink}>Explore Event</Link>
        </div>

        <div>{id}</div>
      </div>
    </li>
  );
}
