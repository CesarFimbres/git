import React from 'react'
import styled from 'styled-components';

export const Modal = ({
	active,
	changeModalState,
	children,
	showHeader,
	showOverlay,
	title,
}) => {
	return (
		<>
			{active &&
				<Overlay
					showOverlay={showOverlay}
					onClick={() => {
						changeModalState(false)
					}}>
					<ModalContainer>
						{showHeader &&
							<ModalHeader>
								<h3>{title}</h3>
							</ModalHeader>
						}
						<ButtonClose><i class="fas fa-times"></i></ButtonClose>

						{children}

					</ModalContainer>
				</Overlay>
			}
		</>


		/* 		<div className='modal'>
					<div className='modal-frame'>
						<h1>
							Aqui va el video tipo modal
						</h1>
					</div>
				</div>
		*/
	)
}

// * This is the style component section
const Overlay = styled.div`
	background: ${props => props.showOverlay ? 'rgba(35, 84, 138, 0.75)' : 'tranparent'};
	height: 100vh;
	left: 0;
	padding: 40px;
	position: fixed;
	top: 0;
	width: 100vw;
	z-index: 1000;

	align-items: center;
	display: flex;
	justify-content: center;
`;

const ModalContainer = styled.div`
	background: #fff;
	border-radius: 4px;
	box-shadow: rgba(100, 100, 111, 0.2) 0 7px 29px 0;
	height: auto;
	max-width: 1024px;
	position: relative;
	padding: 10px;
	width: auto;
`;

const ModalHeader = styled.div`
	align-items: center;
	border-bottom: 1px solid #e8e8e8;
	display: flex;
	justify-content: space-between;
	margin-bottom: 20px;
	padding-bottom: 20px;

	h3{
		color: #1766dc;
		font-size: 1rem;
		font-weight: 500;
	}
`;

const ButtonClose = styled.button`
	background: none;
	border: none;
	border-radius: 4px;
	border-style: none;
	color: #1766dc;
	cursor: pointer;
	position: absolute;
	height: 30px;
	right: 20px;
	top: 15px;
	transition: .5s;
	width: 30px;
	&:hover{
		background: #f2f2f2;
	}
	i{
		font-size: 1.3rem;

	}

`;