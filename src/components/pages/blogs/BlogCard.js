import React from 'react'
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
	return (
		<Container>

			<Category>
				<i className="fas fa-angle-double-right"> </i>
				{category}
			</Category>

			<img src={imageUrl} alt={imageAlt} loading="lazy" />

			<BlogWrapper>

				<TitleWrapper>
					<BlogDate>{date}</BlogDate>
					<BlogTitle>{title}</BlogTitle>
				</TitleWrapper>

				{children}

			</BlogWrapper>

		</Container>
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
    top: 6px;
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
	background: #fafafa;
	border: 0;
	border-bottom: 2px solid #23548a;
	border-left: 2px solid #23548a;
	border-right: 2px solid #23548a;
	align-items: flex-start;
	display: flex;
	flex-flow: column;
	justify-content: center;
`
const BlogDate = styled.span`
	background: #f0f0f0;
	align-items: center;
	display: flex;
	flex-flow: column;
	font-size: 0.75em;
	justify-content: center;
	color: #dc143c;
	padding: 10px;
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