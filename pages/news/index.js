import Link from "next/link";
import { Fragment } from "react";

const NewsPage = () => {
    return (        
    <Fragment>
        <h1>The News Detail</h1>
        <ul>
            <li><Link href="/news/nextjs-is-a-great-framework">Next is a great framework.</Link></li>
        </ul>
    </Fragment>);
};

export default NewsPage;