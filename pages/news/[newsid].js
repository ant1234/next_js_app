import { useRouter } from "next/router";
import Link from "next/link";
import { Fragment } from "react";

const NewsDetail = () => {
    const router = useRouter();

    return (
        <Fragment>
            <h1>The News Detail url param is : {router.query.newsid}</h1>
            <ul>
                <li><Link href="/news/nextjs-is-a-great-framework">Next is a great framework.</Link></li>
            </ul>
        </Fragment>
        );
};

export default NewsDetail;