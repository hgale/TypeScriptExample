/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import { Component } from 'react';
import Hello from './src/components/Hello';

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <Hello name={"Harry"} enthusiasmLevel={3} />
    );
  }
}

