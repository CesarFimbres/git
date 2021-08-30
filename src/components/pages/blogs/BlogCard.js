import React from 'react'
import moment from 'moment';
import styled from 'styled-components'

export const BlogCard = ({
	children,
	category,
	date,
	imageAlt,
	imageHeight,
	imageWidth,
	imageUrl,
	title,
}) => {

	const blogDate = moment(date);

	return (


		<Container >

			<Category>
				<i className="fas fa-angle-double-right"> </i>
				{category}
			</Category>

			{
				imageUrl &&
				<img src={imageUrl} alt={imageAlt} loading="lazy" />
			}

			<BlogWrapper>

				<TitleWrapper>
					<BlogDate>
						<h4>{blogDate.format('D')}</h4>
						<h5>{blogDate.format('MMM')}</h5>
						<h6>{blogDate.format('YYYY')}</h6>
					</BlogDate>
					<BlogTitle>{title}</BlogTitle>
				</TitleWrapper>

				{children}

			</BlogWrapper>

		</Container >
	)
}


// * This is the styled component section
const Container = styled.div`
	margin-bottom: 40px;
	img{
		border: 0;
		border-top: 2px solid #23548a;
		border-left: 2px solid #23548a;
		border-right: 2px solid #23548a;
		border-radius: 0 12px 0 0;
		height: 35vh;
		left: 0;
		object-fit: cover;
		overflow: hidden;
		position: relative;
		top: 5px;
		width: 100%;
		z-index: 101;
	}
`
const Category = styled.span`
    background: #23548a;
    border-radius: 16px 16px 0 0;
    color: #fff;
	cursor: pointer;
    display: block;
    left: 0px;
    top: 5px;
    padding: 5px 10px 6px 15px;
    position: relative;
    width: 12rem;
    z-index: 100;
	i{
		margin-right: 5px;
		animation: bouncing 1.2s ease-in alternate infinite ;
		
	}
	@keyframes bouncing{
		0%  {
			transform: translateX(0%);
		}
		80%  {
			transform: translateX(0%);
		}
		90% {
			transform: translateX(10%);
		}
		100% {
			transform: translateX(0%);
		}
	}
`
const BlogWrapper = styled.div`
	align-items: flex-start;
	background: #fafafa;
	border: 0;
	border-bottom: 2px solid #23548a;
	border-left: 2px solid #23548a;
	border-right: 2px solid #23548a;
	border-top: 2px solid #23548a;
	display: flex;
	flex-flow: column;
	justify-content: center;


`
const BlogDate = styled.span`
	background: #23548a;
	align-items: center;
	display: flex;
	flex-flow: column;
	font-size: 0.75em;
	justify-content: center;
	color: #b2b2b2;
	padding: 10px;
	h4{
		font-family: fantasy, tahoma, sans-serif;
		font-size: 1.5rem;
		line-height: 2rem;
		font-weight: 500;	}
	h5{
		font-size: 1rem;font-size: 0.7rem;
		font-weight: 400;
		letter-spacing: 2px;
		text-transform: uppercase;
	}
	h6{
		font-family: 'Roboto', sans-serif;
		font-size: 0.75rem;
		font-weight: 400;
		letter-spacing: 1px;
		text-transform: uppercase;
	}
`
const BlogTitle = styled.h2`
	color: #23548a;
	font-size: 1.7rem;
	font-weight: 400;
	flex-grow: 1;
	margin: 20px;
`

const TitleWrapper = styled.div`
	align-items: stretch;
	display: flex;
	justify-content: center;
`