import React from 'react';
import PlaceholderLoading from 'react-placeholder-loading'


const Loading = () => {
    return (
        <div>
            <PlaceholderLoading shape="rect" width={600} height={30} />
            <div
                className="row text-justify mt-4">
            <PlaceholderLoading shape="rect" width={'100%'} height={800} />

            </div>


        </div>
    );
};

export default Loading;