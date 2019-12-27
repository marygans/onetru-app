import React from 'react';

import {ReviewerAvatar, ReviewerRate, ReviewsStyle} from './Reviews.style';

const Reviews = ({reviews}) => {

	return (
		<ReviewsStyle>
			<div className="title">Reviews</div>
			{
				reviews ? reviews.map((review, i) => (
					<div key={i + review.name} className="review-wrapper">
						<div className="wrapper-title">

							<ReviewerAvatar icon="user" src={review.img}/>

							<div className="details">

								<ul className="name-wrapper">
									<li className="name">{review.name}</li>
									<li className="date">{review.date}</li>
								</ul>

								<ReviewerRate disabled
								              className="rating"
								              defaultValue={+review.rating}
								/>

							</div>

						</div>

						<div className="body">
							{review.description}
						</div>

					</div>
				)) : null
			}
		</ReviewsStyle>
	);

};

export default Reviews;
export {Reviews};
