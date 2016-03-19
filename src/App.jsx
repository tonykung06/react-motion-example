import React from 'react';
import {Motion, spring} from 'react-motion';

export default class App extends React.Component {
	render() {
		return (
			<Motion
				defaultStyle={{
					spring1: 0,
					spring2: 500,
					spring3: 4
				}}
				style={{
					spring1: spring(360),
					spring2: spring(100, {
						stiffness: 100,
						damping: 5
					}),
					spring3: spring(1, {
						stiffness: 100,
						damping: 5
					})
				}}
			>
				{
					obj => {
						const {spring1, spring2, spring3} = obj;

						return (
							<div>
								<div style={{
									width: spring1,
									height: spring1,
									position: 'absolute',
									top: spring1 * 0.25,
									left: spring1 * 0.25,
									border: '1px solid red',
									transform: `rotate(${spring1}deg)`
								}}>{spring1}</div>

								<div style={{
									width: 50,
									height: 50,
									background: 'red',
									transform: `translate(100px, ${spring2}px) scale(${spring3})`
								}}></div>
							</div>
						)
					}
				}
			</Motion>
		);
	}
};