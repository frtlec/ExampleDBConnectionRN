import React, { Component } from 'react'
import { Text, View } from 'react-native'
import MSSQL from 'react-native-mssql';

export default class App extends Component {

  componentDidMount(){
    try {
      const config = {
        server: '192.168.1.87', //ip address of the mssql database
        username: 'zaferkrk2', //username to login to the database
        password: '1234', //password to login to the database
        database: 'Northwind', //the name of the database to connect to
        port: 1433, //OPTIONAL, port of the database on the server
      }
      MSSQL.connect(config);
      const query = 'SELECT TOP * FROM Roles'
      MSSQL.executeQuery(query);
  
      MSSQL.close();
    } catch (error) {
      console.log("ss",error);
    }

  }
  render() {
    return (
      <View>
        <Text> textInComponent </Text>
      </View>
    )
  }
}
