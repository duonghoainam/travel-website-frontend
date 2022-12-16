import MoreLink from '@components/more-link/more-link';
import Link from 'next/link';
import React, { useEffect, useState, useRef } from 'react';

class CardHeader extends React.Component {
   render() {
      const { image } = this.props;
      return (
         <div id={image} className="card-header">
            <img src={image} alt="" />
         </div>
      );
   }
}

class CardBody extends React.Component {
   render() {
      return (
         <div className="card-body">
            <p className="date">23/12/2022</p>

            <h2>{this.props.title}</h2>

            <p className="body-content">{this.props.fromTo}</p>

            <p className="body-content">- Time: {this.props.time}</p>

            <p className="body-content">- Vehicle: {this.props.vehicle}</p>

            <p className="body-content card-description">- Description: {this.props.text}</p>

            <div className="view-more">
               <MoreLink text={'Price: From 3.000.000'} href={'/tour/1'} />
            </div>
         </div>
      );
   }
}

export default function TourCard({ url, banner, className = '' }) {
   return (
      <a href={url} target="_blank" rel="noreferrer">
         <article className={'tour-card' + className}>
            <CardHeader image={banner} />
            <CardBody
               title={'New Joint Venture Fund'}
               text={
                  'Global grain trading CJ Internationale Asia (CJIA) and Singapore-based KK Fund have launched Hiven, a joint venture fund to invest in startups developing breakthrough technologies in "food, agriculture, and bio" in Southeast Asia.'
               }
               time={'3 Days 2 Nights'}
               fromTo={'HCM -> Sapa'}
               vehicle={'VietNam airline'}
            />
         </article>
      </a>
   );
}
