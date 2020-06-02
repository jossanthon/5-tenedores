import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Navigation from "./app/navigations/Navigation";
import {firebaseApp} from "./app/utils/firebase";

export default function App() {
  return (
    <Navigation />
  );
}
