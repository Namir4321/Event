import { getAllEvents } from "../../dummy-data";
import EventList from "../../components/event/EventList";
import EventSearch from "../../components/event/EventSearch";
import { useRouter } from "next/router";
const AllEventsPage = () => {
  const events = getAllEvents();
  const router=useRouter();

  function findEventsHandler(year,month){
  const fullPath=`/events/${year}/${month}/`
    router.push(fullPath)
  } 
  return (
    <div>
      <EventSearch onSearch={findEventsHandler}/>
      <EventList items={events} />
    </div>
  );
};

export default AllEventsPage;
