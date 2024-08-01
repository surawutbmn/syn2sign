import React from 'react'
import styled from 'styled-components'
import propTypes from "prop-types";

const CardPastExhibit = (props) => {
  const Link = props.href ? LinkExhibition : 'div';
  return (
    <Link href={props.href || '#'} target='_blank'>
      <div className='row mt-5'>
          <div className="col-4">
              <PosterExhibition  src={props.poster}/>
          </div>

          <div className="col-8 text-start">
            <h2 className='txt-head2 txt-bold'>
              <span className=" txt-dark-outline">20</span>
              <span className='sub-year' >{props.year}</span>
            </h2>

            <div className='d-flex align-items-center gap-4  mt-4 mb-4'>
              <LogoExhibition  src={props.logo}/>
              <div className='txt-head3 txt-bold'>{props.name}</div>
            </div>
            <div className='txt-body2 txt-grey'>{props.description}</div>

            
          </div>
          
      </div>
    </Link>
  )
}

CardPastExhibit.propTypes = {
  href: propTypes.string,
  poster: propTypes.string,
  year: propTypes.string,
  name: propTypes.string,
  description: propTypes.string,
  logo: propTypes.string,
};


export default CardPastExhibit

const PosterExhibition = styled.img`
  width: 100%;
  object-fit: cover;
`
const LogoExhibition = styled.img`
  width: 70px;
  height: 50px;
  object-fit: contain;
  /* background-color: rebeccapurple; */
`
const LinkExhibition = styled.a`
  text-decoration: none;
  color: inherit;
`