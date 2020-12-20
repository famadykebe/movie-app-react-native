import React, { Component } from 'react';
import { View, Text,StyleSheet,FlatList } from 'react-native';
import Search from '../components/search';
import {connect} from 'react-redux';
import MovieItem from '../components/MovieItem';
import {recupeAllmovieData_search_after} from '../actions/index'

class search extends Component {
  constructor(props) {
    super(props);
    this.state = {
        textInput: ''
    };

    this.pageMovieSearch = 1;

  }

  champTextSearch_clbk(string){

      this.setState({textInput:string})
  }

  
  searchHundele(){

    this.pageMovieSearch++;

    this.props.recupeAllmovieData_search_after(this.textInput,this.pageMovieSearch);

   }

  renderMovieSearch(){

    
    if(this.props.allMovieSearch.length ===  0){
        return <Text style={styles.searhFind}>Aucun resultat</Text>
    }

        return (
            <View>
                
                <FlatList data={this.props.allMovieSearch} extraData={this.props.allMovieSearch}  keyExtractor={(item) => item.id.toString()} renderItem={({item}) => {
                    return  <MovieItem  navigation={this.props.navigation} dataMovie={item} />}} onEndReachedThreshold={0.5} onEndReached={() => {
                        this.searchHundele()
                       
                    }}  />
            </View>
        )
   }


  render() {
   
    return (
      <View>
        <Search champTextSearch_clbk={this.champTextSearch_clbk.bind(this)}/>

        <View>

            {this.renderMovieSearch()}

        </View>
        
      </View>
    );
  }
}

const mapStateToProps = (state) => {
    return {
        allMovieSearch:state.allMovieSearch
    }
}

const mapDispatchToProps = {
    recupeAllmovieData_search_after:recupeAllmovieData_search_after
}

const styles = StyleSheet.create({
    searhFind:{
        fontSize:17,
        fontWeight:'bold',
        textAlign:'center',
        marginTop:'20%'
     },
})

export default connect(mapStateToProps,mapDispatchToProps)(search);
