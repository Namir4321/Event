import Link from "next/link";
import classes from "./event-item.module.css";
import Button from "../UI/button";
import DateIcon from "../icons/date-icon";
import AddressIcon from "../icons/address-icon";
import ArrowRightIcon from "../icons/arrow-right-icon";

const EventItem = (props) => {
  const { title, image, date, location, id } = props;
  const redabledate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  console.log(image);
  const formatAdress = location.replace(",", "\n ");
  const ExploreLink = `/events/${id}`;
  return (
    <li className={classes.item}>
      <img src={"/" + image} alt={title} />
      <div className={classes.content}>
        <div className={classes.summary}>
          <h2>{title}</h2>
        </div>
        <div className={classes.date}>
          <DateIcon />
          <time>{redabledate}</time>
        </div>
        <div className={classes.address}>
          <AddressIcon />
          <address>{formatAdress}</address>
        </div>
        <div className={classes.actions}>
          <Button link={ExploreLink}>
            <span>Explore Event</span>
            <span className={classes.icon}>
              <ArrowRightIcon />
            </span>
          </Button>

          {/* <Link href={ExploreLink}>Explore Events</Link> */}
        </div>
      </div>
    </li>
  );
};

export default EventItem;
