import { useRouter } from "next/router";
import EventList from "../../components/event/EventList";
import { getFilteredEvents } from "../../dummy-data";
import { ResultTitle } from "../../components/event/results-title";
import Button from "../../components/UI/button";
import  ErrorAlert  from "../../components/event/error-alert";
const FilteredEventPage = () => {
  const router = useRouter();
  const filterData = router.query.slug;
  if (!filterData) {
    return <p className="centered">Loading...</p>;
  }

  const filteredYear = filterData[0];
  const filteredMonth = filterData[1];
  const numYear = +filteredYear;
  const numMonth = +filteredMonth;

  if (
    isNaN(
      numYear ||
        numMonth ||
        numYear > 2030 ||
        numYear < 2021 ||
        numMonth < 1 ||
        numMonth > 12
    )
  ) {
    return (
      <>
        <ErrorAlert>
          <p> Invalid Filters.Please Adjust your values!</p>
        </ErrorAlert>
        <div className="center">
          <Button link="/events">Show All Wvwnts</Button>
        </div>
      </>
    );
  }
  const filteredEvents = getFilteredEvents({
    year: numYear,
    month: numMonth,
  });
  if (!filteredEvents || filteredEvents.length === 0) {
    return (
      <>
        <ErrorAlert>
          <p>no events found for the chosen filter</p>
        </ErrorAlert>
        <div className="center">
          <Button link="/events">Show All Wvwnts</Button>
        </div>
      </>
    );
  }

  const date = new Date(numYear, numMonth - 1);
  return (
    <div>
      <ResultTitle date={date} />
      <EventList item={filteredEvents} />
    </div>
  );
};

export default FilteredEventPage;
