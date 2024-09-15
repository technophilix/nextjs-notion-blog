import React from 'react';
import styles from "../latest.module.css"

const Latest = () => {
    return (
        <article className={`${styles.postcard} ${styles.dark} ${styles.blue}`}>
           <div className={`${styles.postcard__text}`}>
                <h1 className={`${styles.postcard__title} ${styles.blue}`}>
                    <a href="#">Podcast Title</a>
                </h1>
                <div className={`${styles.postcard__subtitle} ${styles.small}`}>
                    <time dateTime="2020-05-25 12:00:00">
                        <i className="fas fa-calendar-alt mr-2"/>
                        Mon, May 25th 2020
                    </time>
                </div>
                <div className={`${styles.postcard__bar}`}/>
                <div className={`${styles.postcard__preview_txt}`}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, fugiat
                    asperiores inventore beatae accusamus odit minima enim, commodi quia,
                    doloribus eius! Ducimus nemo accusantium maiores velit corrupti tempora
                    reiciendis molestiae repellat vero. Eveniet ipsam adipisci illo iusto
                    quibusdam, sunt neque nulla unde ipsum dolores nobis enim quidem
                    excepturi, illum quos!
                </div>
                {/*<ul className="postcard__tagbox">*/}
                {/*    <li className="tag__item">*/}
                {/*        <i className="fas fa-tag mr-2"/>*/}
                {/*        Podcast*/}
                {/*    </li>*/}
                {/*    <li className="tag__item">*/}
                {/*        <i className="fas fa-clock mr-2"/>*/}
                {/*        55 mins.*/}
                {/*    </li>*/}
                {/*    <li className="tag__item play blue">*/}
                {/*        <a href="#">*/}
                {/*            <i className="fas fa-play mr-2"/>*/}
                {/*            Play Episode*/}
                {/*        </a>*/}
                {/*    </li>*/}
                {/*</ul>*/}
            </div>
        </article>

    );
};

export default Latest;