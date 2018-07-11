import React, { Component } from 'react';
import { View, StyleSheet, Platform } from 'react-native';

class SingleCardView extends Component {
	static defaultProps = {
		backgroundColor: '#ebebeb',
		marginTop: 100,
		width: 350,
		height: 350,
		shadowColor: 'rgb(50,50,50)',
		shadowOpacity: 0.5,
		shadowRadius: 5,
		elevation: 3
	};

	render() {
		return (
			<View style={styles.container}>
				<View
					style={[
						styles.cardView,
						{
							backgroundColor: this.props.backgroundColor,
							marginTop: this.props.marginTop,
							width: this.props.width,
							height: this.props.height,
							...Platform.select({
								ios: {
									shadowColor: this.props.shadowColor,
									shadowOpacity: this.props.shadowOpacity,
									shadowRadius: this.props.shadowRadius,
									shadowOffset: {
										height: -1,
										width: 0
									}
								},
								android: {
									elevation: this.props.elevation
								}
							})
						}
					]}
				/>
				{this.props.children}
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center'
	},
	cardView: {
		// width: 350,
		// height: 350,
		position: 'absolute',
		zIndex: 3,
		top: 0,
		opacity: 1,
		transform: [{ scale: 1.0 }],
		borderBottomLeftRadius: 10,
		borderBottomRightRadius: 10,
		borderTopLeftRadius: 10,
		borderTopRightRadius: 10
	}
});

export default SingleCardView;
