import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    ListView,
    Alert,
   // AppRegistry
} from 'react-native';


/*class Request extends Component {
    render(){
        return( 
            fetch('http://jsonplaceholder.typicode.com/posts/1', {
                method: 'GET',
                headers: {
                  'Accept': 'application/json',
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                  firstParam: 'userid',
                  secondParam: 'id',
                  thirdParam: 'title',
                  fourthParam: 'body',
                })
              })
        );   
    }
           
}
*/
export default class testproj extends Component {
  render() {
    return (     
        <Requester/>
    );
  }
}


  var reqData = [];
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

'use strict';

 /*function ApiRequest() {
    return fetch('http://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((responseJson) => {
        return responseJson;
      })
      .catch((error) => {
        console.error(error);
      });
  }*/

class Requester extends Component {

    constructor(){
        super();
        var dataSource = new ListView.DataSource({rowHasChanged:(r1,r2) => r1.guid != r2.guid})
        this.state={dataSource:dataSource.cloneWithRows(reqData)}; 
    }

    renderSeparator(){
        return(
            <View style={
                {borderBottomColor: '#c3c3c3',
                borderBottomWidth: 1,
                marginTop:10
                }
            }/>                
        )
    }
      componentDidMount() {
           this.getreq();
       }
    userVisible(data){
        Alert.alert(
            'Нажат текст',
            data.body,
            [
              {text: 'OK', onPress: () => console.log('OK Pressed!')}
            ] 
        )              
    }
    renderRow(rowData){
        return(
            <View>
                <View style={{flexDirection:'row',
                 paddingTop:10,
                  paddingBottom:10,
                   alignItems:'center',
                   backgroundColor: 'lightblue',                   
                   }}>        
                    <Text 
                        onPress={()=>{Alert.alert(JSON.stringify('User ID: '+rowData.userId), rowData.body)}}
                        style={{color: 'red', 
                        paddingRight:10,
<<<<<<< HEAD
                        paddingLeft:10,
                        backgroundColor: 'blue',
                        borderRadius:3,
                        }}>
                            {rowData.id}
                    </Text>
                    <Text style={{paddingLeft:5}}>{rowData.title}</Text>
=======
                        paddingLeft:5
                        }}>
                            {rowData.id}
                    </Text>
                    <Text>{rowData.title}</Text>
>>>>>>> 45daccf176a070c418855a12a5f8573c7b906e9a
                </View>
                <Text >{rowData.body}</Text>
            </View>
        )
    }
    ApiRequest() {
           var promise = new Promise(function(resolve, reject) {
               fetch('http://jsonplaceholder.typicode.com/posts', {
                   method: 'GET'
               }).then(function(response) {
                   if (response.status == 200) {
                       resolve(response.json());
                   } else {
                       reject(response.status);
                   }
               });

           });
           return promise;
       }


       getreq() {
           this.ApiRequest()
               .then((reqData) => {
                   console.log('data', reqData);
                   this.setState({
                       dataSource: this.state.dataSource.cloneWithRows(reqData)
                   });
                   console.log('dataSource', reqData);
               })
               .catch(error => {
                   console.log('error', error);
               });
       }

 
    render() {      
       
        return (
              
            <View style={{ flex: 1}}>
              <ListView
                    dataSource={this.state.dataSource}
                    renderRow={this.renderRow}
                    renderSeparator={this.renderSeparator}
                    enableEmptySections={true}
                    />
                    
                </View>
                
        );
    }

}
 