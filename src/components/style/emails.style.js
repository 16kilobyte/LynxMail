import React, { Component } from 'react'
import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    flex: 1
  },
  listEmails:{
    flex: 1
  },
  loader: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  listFooter: {
    paddingVertical: 20,
    borderTopWidth: 1,
    borderColor: "#CED0CE"
  },
  itemSeparator: {
    height: 1,
    width: "100%",
    backgroundColor: "#CED0CE",
  },
  itemContainer:{
    flex: 1,
    height: 100,
    backgroundColor: '#ffffff'
  },
  itemTextFrom: {
    height: "20%",
    width: "100%",
    fontSize: 14,
    fontWeight: 'bold',
    marginTop:5,
    paddingLeft:15,
    paddingRight:15,
  },
  itemTextSubject: {
    height: "20%",
    width: "100%",
    fontSize: 13,
    paddingLeft:15,
    paddingRight:15,
  },
  itemTextBodyPreview: {
    height: "50%",
    width: "100%",
    fontSize: 13,
    fontWeight: '100',
    paddingLeft:15,
    paddingRight:15,
  }
})