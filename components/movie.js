import React, {Component} from 'react';
import {View,Text,StyleSheet,FlatList,ActivityIndicator} from 'react-native';
import MovieItem from './MovieItem';
import {connect} from 'react-redux';
import {recupe_Allmovie,recupe_Allmovie_following,} from '../actions/index'
class Movie extends Component {

    constructor(props){

        super(props);
    
        this.state = {
            isLoading:true,
            lengthstatusAllMovieSearch:true
        }

        this.page = 1;
        this.pageMovieSearch = 1;
        this.totalPages = 0;
        
       }
    

    componentWillMount(){

        this.props.recupe_Allmovie();
    }

    componentDidMount(){
        
    }

    // hundleMovieRecommandeBoolean(){
    //      console.log('props',this.props.movieRecommandeBoolean)
    // }

    componentWillReceiveProps(nextProps){

   
        if(nextProps.allMovieSearch.length > 0){

            this.setState({lengthstatusAllMovieSearch:false});
        }

       if(this.state.lengthstatusAllMovieSearch && nextProps.allMovieRecomande.length > 0){
         this.setState({isLoading:false})
       }
       
    }

   showLoading(){

        if(this.state.isLoading){
            return(

                <View style={styles.isLoading}>
        
                    <ActivityIndicator size="large" />
        
                </View>
        
            )
        }
   }

   hundelePagination(){

    this.page++

    this.props.recupe_Allmovie_following(this.page);

   }



   renderMovieRecomande(){

    return (
        <View style={styles.content}>
            <Text style={styles.titleMovie}>Film populaire mdr </Text>

            <FlatList data={this.props.allMovieRecomande}  keyExtractor={item => item.id.toString()} renderItem={({item}) => {
                return  <MovieItem  navigation={this.props.navigation} dataMovie={item} />}} onEndReachedThreshold={0.5} onEndReached={() => {
                    this.hundelePagination();
                }} />

            {this.showLoading()}
        </View>
    )

   }


    render(){

         return this.renderMovieRecomande();
    }
}

const styles = StyleSheet.create({

    content:{
      marginTop:60,
     
    },
    isLoading:{
        marginTop:200,
        
    },
 
    titleMovie:{
        textAlign:'center',
        fontSize:17,
        fontWeight:'bold',
        marginTop:7,
        marginBottom:7
    },
    loadingFooter:{
        paddingVertical:20,
    }

})


const mapStateToProps = (state) => {

   return {
    allMovieRecomande: state.allMovieRecomande,
    allMovieSearch:state.allMovieSearch

   }

}

const mapDispatchToProps = {
    recupe_Allmovie:recupe_Allmovie,
    recupe_Allmovie_following:recupe_Allmovie_following,

}


 
export default connect(mapStateToProps,mapDispatchToProps)(Movie);