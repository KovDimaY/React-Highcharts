import React from 'react';


export default function NotFound () {
  return (
    <div className='not-found-page'>
      <div className="not-found-page__text">
        <h1 className='not-found-page__title'>
          <b className='not-found-page__status-code'>404</b>
          Page not found
        </h1>
        <div className='not-found-page__description'>
          If you see this page, probably you have typed the incorrect address.
        </div>
        <div>
          You can go to <a href="/">main page</a> or select chart in main menu.
        </div>
      </div>
    </div>
  )
}