import classes from './event-summary.module.css';

const EventSummary = ({title}) => {
console.log(title)
 
 return (
   <section className={classes.summary}>
     <h1>{title}</h1>
   </section>
 );
}

export default EventSummary;
