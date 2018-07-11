# react-native-simple-card

[![npm](https://img.shields.io/npm/dt/react-native-simple-card.svg?style=flat-square)](https://www.npmjs.com/package/react-native-simple-card)
[![license](https://img.shields.io/github/license/mashape/apistatus.svg)](https://github.com/amandeepmittal/eslint-config-amanhimself)
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
				<Text>Open up App.js to start working on your app!</Text>
				<SingleCardView
					elevation={1}
					shadowColor="rgb(50,50,50)"
					shadowOpacity={1}
					marginTop={100}
				>
					<Text>This is a simple card!</Text>
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

![ss]()

Note: it will not render correctly until you provide a `backgroundColor` prop. It accepts children props so you can manipulate and style the text inside accordingly.

![ss1](https://i.imgur.com/ilsnYB7.png)

## Properties

## License
