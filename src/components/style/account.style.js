import React, { Component } from 'react'
import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    flex: 1
   },
   item: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 4,
    marginRight:8,
    marginBottom:4,
    marginLeft:8,
    height: 120,
    backgroundColor: '#ffffff',
    shadowColor: '#000000',
    shadowOpacity: 0.3,
    shadowOffset: {
      height: 1,
      width: 0
    },
    shadowRadius: 1,
   },
})