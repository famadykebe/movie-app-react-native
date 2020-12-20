import React, { Component } from 'react';
import { View, Text,StyleSheet,FlatList} from 'react-native';
import MovieItem from '../components/MovieItem';
import {connect} from 'react-redux';

class favorieMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  renerView(){

    if(this.props.MovieFavories.length == 0){
      return <View style={styles.content}><Text style={{fontWeight:"bold",
      fontSize:25}}>Aucun Film en favories </Text></View>
    }

    // <FlatList data={this.props.allMovieRecomande}  keyExtractor={item => item.id.toString()} render={(item)} renderItem={({item}) => {
    //   return  <MovieItem  navigation={this.props.navigation} dataMovie={item} />}} onEndReachedThreshold={0.5} onEndReached={() => {
    //       this.hundelePagination();
    //   }} />


    return <View>

      <FlatList data={this.props.MovieFavories} keyExtractor={item => item.id.toString()} extraData={this.props.MovieFavories}  renderItem={({item}) => {

        return <MovieItem dataMovie={item} navigation={this.props.navigation}/>

      }}/>

    </View>

  }

  render() {
    return (
      <View style={{flex:1,marginTop:60}}>
        {this.renerView()}
      </View>
    );
  }
}

const styles = StyleSheet.create({

  content:{
    flex:1,
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
  }

})

const mapStateToProps = (state) => {
  return {
    MovieFavories:state.MovieFavories
  }
}

export default connect(mapStateToProps)(favorieMovie);
