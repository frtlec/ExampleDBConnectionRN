import React, { Component } from 'react'
import { Text, View } from 'react-native'
import MSSQL from 'react-native-mssql';

export default class App extends Component {

  async componentDidMount(){
    try {
      const config = {
        server: '192.168.70.102', //ip address of the mssql database
        username: 'zaferkrk2', //username to login to the database
        password: '1234', //password to login to the database
        database: 'Northwind', //the name of the database to connect to
        //port: 1433, //OPTIONAL, port of the database on the server
      }

      await MSSQL.connect(config);
      const query = 'SELECT * FROM Customers'
       let rows=await MSSQL.executeQuery(query)
       const x = "insert into Employees (LastName,FirstName) values ('esit','ss')"
       MSSQL.executeQuery(x)
       console.log("Customers",rows);
       for(let item of rows){
          console.log(item.City);
       }
    //console.log(x);
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
