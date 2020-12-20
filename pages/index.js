import React,{Component} from 'react';
import {View,StyleSheet} from 'react-native';
import Movie from '../components/movie';


export default class Index extends Component {

  constructor(props){
    super(props)
    this.state = {
      champ: '',
      movieRecommandeBoolean:null
    }

  }



  //  champTextSearch = (champText) =>{
    
  //   this.setState({champ:champText})
    
  // }

 

  render(){
    return (
   
      <View style={styles.content}>

        
          <Movie  textInput={this.state.champ} navigation={this.props.navigation}/>

      </View>


  );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:'column',
    marginTop:40,
  },
});
