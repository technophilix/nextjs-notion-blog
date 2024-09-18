import React from 'react';
import PlaceholderLoading from 'react-placeholder-loading'

const Loading = () => {
    return (
        <div>
            <PlaceholderLoading shape="rect" width={200} height={10} />
            <div
                className="text-justify mt-4">
            <PlaceholderLoading shape="rect" width={1000} height={400} />
            </div>
        </div>
    );
};

export default Loading;