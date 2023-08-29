import Link from "next/link";
import { Fragment } from "react";
import NewMeetupForm from '../../components/meetups/NewMeetupForm';

const NewMeetup = () => {

    const onAddMeetupHandler = event => {
        console.log(event);
    };

    return (        
    <Fragment>
        <h1>Submit a meetup</h1>
        <NewMeetupForm onAddMeetup={onAddMeetupHandler}/>
    </Fragment>);
};

export default NewMeetup;