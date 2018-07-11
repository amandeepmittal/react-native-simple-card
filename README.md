# react-native-simple-card

[![npm](https://img.shields.io/npm/dt/react-native-simple-card.svg?style=flat-square)](https://www.npmjs.com/package/react-native-simple-card)
[![license](https://img.shields.io/github/license/mashape/apistatus.svg)](https://github.com/amandeepmittal/react-native-simple-card)
![code style expo](https://img.shields.io/badge/code%20style-expo-blue.svg)
![code style react-native](https://img.shields.io/badge/code%20style-react%20native-ff69b4.svg)

Simple Card View for React Native and Expo applications. ⚛️ + 📱

## Installation

**using Yarn**

```shell
yarn add react-native-simple-card
```

**using npm**

```shell
npm install --save react-native-simple-card
```

**react native link**

```shell
react-native link
```

## Usage

Example:

```javascript
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SingleCardView from 'react-native-simple-card';

export default class App extends React.Component {
	render() {
		return (
			<View style={styles.container}>
				<SingleCardView
					elevation={1}
					shadowColor="rgb(50,50,50)"
					shadowOpacity={1}
					marginTop={150}
					height={200}
				>
					<Text style={{ padding: 10, fontSize: 18 }}>
						This is a simple card!
					</Text>
				</SingleCardView>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center'
	}
});
```

Result:

![ss](https://i.imgur.com/mxmYOAB.png)

## Properties

Properties that you can customize using props:

```js
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
```

- `backgroundColor`
- `marginTop`
- `width`
- `height`

**for iOS:**

- `shadowColor`
- `shadowOpacity`
- `shadowRadius`

**for android**

- `elevation`

## License

This project is licensed under the MIT License - see the LICENSE file for more details.
