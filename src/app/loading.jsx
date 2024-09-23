import React from 'react';
import PlaceholderLoading  from 'react-placeholder-loading';

const Loading = () => {
    return (
        <div className="row">
            {/* Main content */}
            <div className="col-md-9">
                {/* Article title placeholder */}

                <div className="row mb-4">
                    <div className="col-9">
                        <PlaceholderLoading shape="rect" width="60%" height={15}/>
                        <PlaceholderLoading shape="rect" width="100%" height={180}/>
                    </div>
                    <div className="col-3">
                        <PlaceholderLoading shape="rect" width="100%" height={280} style={{borderRadius: '15px'}}/>
                    </div>

                </div>
                <div className="row">
                    {[1, 2, 3, 4, 5, 6].map((_, i) => (
                        <div className="col-4 mt-3">
                            <PlaceholderLoading key={i} shape="rect" width="100%" height={250} className="mb-2"/>
                        </div>
                    ))}
                </div>


            </div>

            {/* Sidebar */}
            <div className="col-md-3">
                <PlaceholderLoading shape="rect" width="100%" height={90}/>
                <p className={'mt-1'}></p>

                {/* Sidebar widget placeholders */}
                <PlaceholderLoading shape="rect" width="60%" height={20}/>
                <p className={'mt-05'}></p>
                {[1, 2, 3, 4, 5].map((_, i) => (
                    <>
                        <PlaceholderLoading key={i} shape="rect" width="100%" height={35}/>
                        <p className={'mt-5px'}></p>
                    </>
                ))}
            </div>
        </div>
    );
};

export default Loading;