import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {DetailPageWrapper} from './DetailPage.style';
import {activeImageSelector, detailsSelector} from '../../redux/detailPage/selectors';
import {detailActions} from '../../redux/detailPage/actions';
import Button from '../../lib/Button/Button';
import BigImage from './BigImage/BigImage';
import ImageList from './ImageList/ImageList';
import InfoTitle from './InfoTitle/InfoTitle';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import Highlights from './Highlights/Highlights';
import Reviews from './Reviews/Reviews';


const DetailPage = ({ match }) => {
	const {
		params: { id },
	} = match;

	const dispatch = useDispatch();
	const {
		images,
		name,
		smallInfo,
		highlights,
		description,
		reviews,
		responseRate,
		responseTime,
	} = useSelector(detailsSelector);
	const {activeImage} = useSelector(activeImageSelector);

	useEffect(() => {
		dispatch(detailActions.loadDetail(id));
	}, [dispatch, id]);

	const selectImage = (imagePath) => {
		dispatch(detailActions.selectImage(imagePath));
	};

	const onExportData = () => {
		console.log('Export data');
	};

	const onAddToFavorite = () => {
		console.log('Add to favorite: ', id);
	};

	const onSendMessage = () => {
		console.log('Send a message');
	};

	return (
		<DetailPageWrapper className='p-t'>

			<BigImage activeImage={activeImage} />

			<ImageList activeImage={activeImage} images={images} selectImage={selectImage} />

			<div className="info-wrapper">

				<InfoTitle  name={name}
				            smallInfo={smallInfo}
				            onExportData={onExportData}
				            onAddToFavorite={onAddToFavorite}
				            onSendMessage={onSendMessage}
				/>

				<div className="second-part-info">

					<ProfileInfo description={description} />

					<Highlights highlights={highlights} />

					<Reviews reviews={reviews} />

					<div className="statistic-wrapper">
						<div className="statistic">
							<span className="response">Response Rate:</span>
							<span className="value">{responseRate}</span>
						</div>

						<div className="statistic">
							<span className="response">Response Time:</span>
							<span className="value">{responseTime}</span>
						</div>
					</div>

					<Button className="btn send-message" onClick={() => onSendMessage()}>
						<span>Send a message</span>
					</Button>

				</div>

			</div>


		</DetailPageWrapper>
	)
};

export default DetailPage;
export { DetailPage };
