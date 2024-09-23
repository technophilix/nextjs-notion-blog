'use client'
import React from 'react';
import {FacebookIcon, FacebookShareButton, WhatsappShareButton, WhatsappIcon, EmailIcon, EmailShareButton} from "next-share";

const Share = ({data}) => {
    return (
        <div className="share row">

            <div className="d-flex justify-content-end gap-3">
            <FacebookShareButton
                url={data.url}
                quote={'next-share is a social share buttons for your next React apps.'}
                hashtag={'#nextshare'}
            >
                <FacebookIcon size={32} round/>
            </FacebookShareButton>

            <WhatsappShareButton
                url={data.url}
                quote={'next-share is a social share buttons for your next React apps.'}
                hashtag={'#nextshare'}
            >
            <WhatsappIcon size={32} round/>
            </WhatsappShareButton>


                <EmailShareButton url={data.url}
                                  quote={'next-share is a social share buttons for your next React apps.'}
                                  hashtag={'#nextshare'}>
                    <EmailIcon size={32} round/>
                </EmailShareButton>

        </div>


        </div>
    );
};

export default Share;