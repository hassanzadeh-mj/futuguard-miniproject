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
                    userinfosrc: "https://lh3.googleusercontent.com/ogw/ADGmqu8sn9zF15pW59JIYiLgx3PQ3EyZLFp5Zqao906l=s32-c-mo"
                },
                {
                    key: 2, headersrc: "https://www.newsbtc.com/wp-content/uploads/2020/06/mesut-kaya-LcCdl__-kO0-unsplash-scaled.jpg",
                    userinfosrc: "https://lh3.googleusercontent.com/ogw/ADGmqu8sn9zF15pW59JIYiLgx3PQ3EyZLFp5Zqao906l=s32-c-mo"
                },
                {
                    key: 3, headersrc: "https://www.newsbtc.com/wp-content/uploads/2020/06/mesut-kaya-LcCdl__-kO0-unsplash-scaled.jpg",
                    userinfosrc: "https://lh3.googleusercontent.com/ogw/ADGmqu8sn9zF15pW59JIYiLgx3PQ3EyZLFp5Zqao906l=s32-c-mo"
                },
                {
                    key: 4, headersrc: "https://www.newsbtc.com/wp-content/uploads/2020/06/mesut-kaya-LcCdl__-kO0-unsplash-scaled.jpg",
                    userinfosrc: "https://lh3.googleusercontent.com/ogw/ADGmqu8sn9zF15pW59JIYiLgx3PQ3EyZLFp5Zqao906l=s32-c-mo"
                },
                {
                    key: 5, headersrc: "https://www.newsbtc.com/wp-content/uploads/2020/06/mesut-kaya-LcCdl__-kO0-unsplash-scaled.jpg",
                    userinfosrc: "https://lh3.googleusercontent.com/ogw/ADGmqu8sn9zF15pW59JIYiLgx3PQ3EyZLFp5Zqao906l=s32-c-mo"
                },
                {
                    key: 6, headersrc: "https://www.newsbtc.com/wp-content/uploads/2020/06/mesut-kaya-LcCdl__-kO0-unsplash-scaled.jpg",
                    userinfosrc: "https://lh3.googleusercontent.com/ogw/ADGmqu8sn9zF15pW59JIYiLgx3PQ3EyZLFp5Zqao906l=s32-c-mo"
                },
                {
                    key: 7, headersrc: "https://www.newsbtc.com/wp-content/uploads/2020/06/mesut-kaya-LcCdl__-kO0-unsplash-scaled.jpg",
                    userinfosrc: "https://lh3.googleusercontent.com/ogw/ADGmqu8sn9zF15pW59JIYiLgx3PQ3EyZLFp5Zqao906l=s32-c-mo"
                },
                {
                    key: 8, headersrc: "https://www.newsbtc.com/wp-content/uploads/2020/06/mesut-kaya-LcCdl__-kO0-unsplash-scaled.jpg",
                    userinfosrc: "https://lh3.googleusercontent.com/ogw/ADGmqu8sn9zF15pW59JIYiLgx3PQ3EyZLFp5Zqao906l=s32-c-mo"
                },
                {
                    key: 9, headersrc: "https://www.newsbtc.com/wp-content/uploads/2020/06/mesut-kaya-LcCdl__-kO0-unsplash-scaled.jpg",
                    userinfosrc: "https://lh3.googleusercontent.com/ogw/ADGmqu8sn9zF15pW59JIYiLgx3PQ3EyZLFp5Zqao906l=s32-c-mo"
                },
                {
                    key: 10, headersrc: "https://www.newsbtc.com/wp-content/uploads/2020/06/mesut-kaya-LcCdl__-kO0-unsplash-scaled.jpg",
                    userinfosrc: "https://lh3.googleusercontent.com/ogw/ADGmqu8sn9zF15pW59JIYiLgx3PQ3EyZLFp5Zqao906l=s32-c-mo"
                },
                {
                    key: 11, headersrc: "https://www.newsbtc.com/wp-content/uploads/2020/06/mesut-kaya-LcCdl__-kO0-unsplash-scaled.jpg",
                    userinfosrc: "https://lh3.googleusercontent.com/ogw/ADGmqu8sn9zF15pW59JIYiLgx3PQ3EyZLFp5Zqao906l=s32-c-mo"
                },
                {
                    id: 12, headersrc: "https://www.newsbtc.com/wp-content/uploads/2020/06/mesut-kaya-LcCdl__-kO0-unsplash-scaled.jpg",
                    userinfosrc: "https://lh3.googleusercontent.com/ogw/ADGmqu8sn9zF15pW59JIYiLgx3PQ3EyZLFp5Zqao906l=s32-c-mo"
                },
                {
                    id: 13, headersrc: "https://www.newsbtc.com/wp-content/uploads/2020/06/mesut-kaya-LcCdl__-kO0-unsplash-scaled.jpg",
                    userinfosrc: "https://lh3.googleusercontent.com/ogw/ADGmqu8sn9zF15pW59JIYiLgx3PQ3EyZLFp5Zqao906l=s32-c-mo"
                },
                {
                    key: 14, headersrc: "https://www.newsbtc.com/wp-content/uploads/2020/06/mesut-kaya-LcCdl__-kO0-unsplash-scaled.jpg",
                    userinfosrc: "https://lh3.googleusercontent.com/ogw/ADGmqu8sn9zF15pW59JIYiLgx3PQ3EyZLFp5Zqao906l=s32-c-mo"
                },
                {
                    key: 15, headersrc: "https://www.newsbtc.com/wp-content/uploads/2020/06/mesut-kaya-LcCdl__-kO0-unsplash-scaled.jpg",
                    userinfosrc: "https://lh3.googleusercontent.com/ogw/ADGmqu8sn9zF15pW59JIYiLgx3PQ3EyZLFp5Zqao906l=s32-c-mo"
                },
                {
                    key: 16, headersrc: "https://www.newsbtc.com/wp-content/uploads/2020/06/mesut-kaya-LcCdl__-kO0-unsplash-scaled.jpg",
                    userinfosrc: "https://lh3.googleusercontent.com/ogw/ADGmqu8sn9zF15pW59JIYiLgx3PQ3EyZLFp5Zqao906l=s32-c-mo"
                },
                {
                    key: 17, headersrc: "https://www.newsbtc.com/wp-content/uploads/2020/06/mesut-kaya-LcCdl__-kO0-unsplash-scaled.jpg",
                    userinfosrc: "https://lh3.googleusercontent.com/ogw/ADGmqu8sn9zF15pW59JIYiLgx3PQ3EyZLFp5Zqao906l=s32-c-mo"
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
                                        <h5>امین اصغری</h5>
                                        <small>فروشنده</small>
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


