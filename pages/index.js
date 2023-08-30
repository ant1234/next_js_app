import MeetUpList from '../components/meetups/MeetupList';
import { Fragment } from 'react';

const DUMMY_MEETUPS = [
    {
        id: 0,
        image: 'https://cdn.eventfinda.co.nz/uploads/events/transformed/1882720-809600-35.jpg?v=2',
        title: 'Utilize The Remains | Psychotic Abyss Album Release | Dunedin',
        address: 'The Crown Hotel',
    },
    {
        id: 1,
        image: 'https://cdn.eventfinda.co.nz/uploads/events/transformed/1863447-804063-35.png?v=2',
        title: 'Dimmer | Dunedin',
        address: 'Hanover Hall, 65 Hanover St, Dunedin',
    },
];

const HomePage = (props) => {

    return (
    <Fragment>
        <h1>The Home Page.</h1>
        <section>
            <MeetUpList meetups={props.meetups}/>
        </section>
    </Fragment>
    );
};

export async function getStaticProps() {

    return {
        props: {
            meetups: DUMMY_MEETUPS
        },
        revalidate: 10
    };
}

export default HomePage;