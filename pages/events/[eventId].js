import { useRouter } from "next/router";
import { getEventById } from "../../dummy-data";
import EventSummary from "../../components/EventDetails/EventSummary"
import  EventLogistics  from "../../components/EventDetails/event-logistics";
import  EventContent  from "../../components/EventDetails/event-content";
import  LogisticsItem  from "../../components/EventDetails/logistics-item";
import { Fragment } from "react";
import ErrorAlert from "../../components/event/error-alert";

const EventDetailPage = () => {
  const router = useRouter();
console.log({
  EventSummary
})
  const eventId = router.query.eventId;
  if(!eventId){
    return <p>Loading...</p>
  }
  const event = getEventById(eventId);
  if (!event) {
    return (
      <ErrorAlert>
        <p>No Event Found</p>;
      </ErrorAlert>
    );
  }
  return (
    <Fragment>
      {console.log(event)}
      <EventSummary title={event.title} />
      <EventLogistics
        date={event.date}
        address={event.location}
        image={event.image}
        imageAlt={event.title}
      />
      <EventContent>
      <p>{event.description}</p>
      </EventContent>
    </Fragment>
  );
};

export default EventDetailPage;
