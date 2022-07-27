import Link from 'next/link';
import styles from '../styles/Home.module.css';
import React, { Component, Fragment } from 'react';


class posts extends Component {
    constructor() {
        super();

        this.state = {
            posts: [
                {
                    key: 1, headersrc: "https://www.newsbtc.com/wp-content/uploads/2020/06/mesut-kaya-LcCdl__-kO0-unsplash-scaled.jpg",
                    userinfosrc: "https://s6.uupload.ir/files/20220609_180625_lnox.jpg"
                },
                {
                    key: 2, headersrc: "https://www.newsbtc.com/wp-content/uploads/2020/06/mesut-kaya-LcCdl__-kO0-unsplash-scaled.jpg",
                    userinfosrc: "https://s6.uupload.ir/files/20220609_180625_lnox.jpg"
                },
                {
                    key: 3, headersrc: "https://www.newsbtc.com/wp-content/uploads/2020/06/mesut-kaya-LcCdl__-kO0-unsplash-scaled.jpg",
                    userinfosrc: "https://s6.uupload.ir/files/20220609_180625_lnox.jpg"
                },
                {
                    key: 4, headersrc: "https://www.newsbtc.com/wp-content/uploads/2020/06/mesut-kaya-LcCdl__-kO0-unsplash-scaled.jpg",
                    userinfosrc: "https://s6.uupload.ir/files/20220609_180625_lnox.jpg"
                },
                {
                    key: 5, headersrc: "https://www.newsbtc.com/wp-content/uploads/2020/06/mesut-kaya-LcCdl__-kO0-unsplash-scaled.jpg",
                    userinfosrc: "https://s6.uupload.ir/files/20220609_180625_lnox.jpg"
                },
                {
                    key: 6, headersrc: "https://www.newsbtc.com/wp-content/uploads/2020/06/mesut-kaya-LcCdl__-kO0-unsplash-scaled.jpg",
                    userinfosrc: "https://s6.uupload.ir/files/20220609_180625_lnox.jpg"
                },
                {
                    key: 7, headersrc: "https://www.newsbtc.com/wp-content/uploads/2020/06/mesut-kaya-LcCdl__-kO0-unsplash-scaled.jpg",
                     userinfosrc: "https://s6.uupload.ir/files/20220609_180625_lnox.jpg"
                },
                {
                    key: 8, headersrc: "https://www.newsbtc.com/wp-content/uploads/2020/06/mesut-kaya-LcCdl__-kO0-unsplash-scaled.jpg",
                     userinfosrc: "https://s6.uupload.ir/files/20220609_180625_lnox.jpg"
                },
                {
                    key: 9, headersrc: "https://www.newsbtc.com/wp-content/uploads/2020/06/mesut-kaya-LcCdl__-kO0-unsplash-scaled.jpg",
                     userinfosrc: "https://s6.uupload.ir/files/20220609_180625_lnox.jpg"
                },
                {
                    key: 10, headersrc: "https://www.newsbtc.com/wp-content/uploads/2020/06/mesut-kaya-LcCdl__-kO0-unsplash-scaled.jpg",
                     userinfosrc: "https://s6.uupload.ir/files/20220609_180625_lnox.jpg"
                },
                {
                    key: 11, headersrc: "https://www.newsbtc.com/wp-content/uploads/2020/06/mesut-kaya-LcCdl__-kO0-unsplash-scaled.jpg",
                     userinfosrc: "https://s6.uupload.ir/files/20220609_180625_lnox.jpg"
                },
                {
                    id: 12, headersrc: "https://www.newsbtc.com/wp-content/uploads/2020/06/mesut-kaya-LcCdl__-kO0-unsplash-scaled.jpg",
                     userinfosrc: "https://s6.uupload.ir/files/20220609_180625_lnox.jpg"
                },
                {
                    id: 13, headersrc: "https://www.newsbtc.com/wp-content/uploads/2020/06/mesut-kaya-LcCdl__-kO0-unsplash-scaled.jpg",
                     userinfosrc: "https://s6.uupload.ir/files/20220609_180625_lnox.jpg"
                },
                {
                    key: 14, headersrc: "https://www.newsbtc.com/wp-content/uploads/2020/06/mesut-kaya-LcCdl__-kO0-unsplash-scaled.jpg",
                     userinfosrc: "https://s6.uupload.ir/files/20220609_180625_lnox.jpg"
                },
                {
                    key: 15, headersrc: "https://www.newsbtc.com/wp-content/uploads/2020/06/mesut-kaya-LcCdl__-kO0-unsplash-scaled.jpg",
                     userinfosrc: "https://s6.uupload.ir/files/20220609_180625_lnox.jpg"
                },
                {
                    key: 16, headersrc: "https://www.newsbtc.com/wp-content/uploads/2020/06/mesut-kaya-LcCdl__-kO0-unsplash-scaled.jpg",
                     userinfosrc: "https://s6.uupload.ir/files/20220609_180625_lnox.jpg"
                },
                {
                    key: 17, headersrc: "https://www.newsbtc.com/wp-content/uploads/2020/06/mesut-kaya-LcCdl__-kO0-unsplash-scaled.jpg",
                     userinfosrc: "https://s6.uupload.ir/files/20220609_180625_lnox.jpg"
                },
            ]
        };
    }
    render() {
        const { posts } = this.state;
        return (
            <Fragment>
                {posts.map(post => (
                    <div className={styles.card}>
                        <div className={styles.card_header}>
                            <img src={post.headersrc}
                                alt="ballons" />
                        </div>
                        <div className={styles.card_body}>
                            <h4>
                                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است
                            </h4>
                            <div className={styles.card_footer}>

                                <div className={styles.body_user}>
                                    <img src={post.userinfosrc}
                                        alt="user" />
                                    <div className={styles.body_userInfo}>
                                        <h5>مجتبی حسن زاده</h5>
                                        <small>front-end</small>
                                    </div>
                                </div>
                                <Link href="/firstpage" >
                                    <span className={styles.body_tag} >ورود به صفحه</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </Fragment>
        );
    }
}

export default posts;


