import Button from "../ui/button";

import AddressIcon from "../icons/address-icon";
import DateIcon from "../icons/date-icon";
import ArrowRightIcon from "../../components/icons/arrow-right-icon";

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
            <DateIcon />
            <time>{date}</time>
          </div>
          <div className={classes.address}>
            <AddressIcon />
            <address>{description}</address>
          </div>
        </div>
        <div className={classes.actions}>
          <Button link={exploreLink}>
            <span>Explore Event</span>
            <span className={classes.icon}>
              <ArrowRightIcon />
            </span>
          </Button>
        </div>

        <div>{id}</div>
      </div>
    </li>
  );
}
