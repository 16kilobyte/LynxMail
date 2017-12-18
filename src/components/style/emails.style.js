import React, { Component } from 'react'
import { StyleSheet } from 'react-native'
import color from './color.theme';

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  listEmails:{
    flex: 1,
    flexDirection: 'column',
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
    backgroundColor: color.second,
  },
  itemContainer:{
    flex: 1,
    flexDirection: 'row',
    height: 100,
    backgroundColor: color.white,

  },
  itemViewIsRead:{
    width: '1%',
    height: '100%',
    backgroundColor: color.second
  },
  itemViewPreview:{
    width: '98%',
    height: '100%',
    flexDirection: 'column',
    paddingLeft:8,
    paddingRight:8
  },
  itemViewTitle:{
    flex: 1,
    flexDirection: 'row',
    marginTop:3,

  },
  itemTextFrom: {
    textAlign: 'left',
    height: "100%",
    width: "50%",
    fontSize: 13,
    fontWeight: 'bold',
  },
  itemTextReceiveDate:{
    textAlign: 'right',
    height: "100%",
    width: "50%",
    fontSize: 13,
    fontWeight: '100',
  },
  itemTextSubject: {
    height: "20%",
    width: "100%",
    fontSize: 13,
  },
  itemTextBodyPreview: {
    height: "50%",
    width: "100%",
    fontSize: 12,
    fontWeight: '100',
  }
})