import React,{Component} from 'react';
import {View,Text,Image,StyleSheet,TouchableOpacity} from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome' ;
import { Icon} from 'react-native-elements';
import {connect} from 'react-redux';
class MovieItem extends Component {


    iconShwoFavorie(){

    if(this.props.MovieFavories){
        const {id} = this.props.dataMovie;

        let result = this.props.MovieFavories.findIndex(elm => elm.id === id);

        if(result !== -1 && this.props.navigation.state.routeName !== 'Favorie'){
           return <Icon name='md-heart' type='ionicon' color='#EC1561' size={24} />
        }else{
            return null
        }
    }

        
    }

   
    render(){ 

        
        const {title,vote_average,overview,release_date,poster_path} = this.props.dataMovie;
        return ( 
           
            <TouchableOpacity  onPress={() => {this.props.navigation.navigate('DetailMovie',this.props.dataMovie)}} style={styles.block_movie}>
    
                <View style={styles.img}>
    
                    <Image style={styles.image} source={{url:`https://image.tmdb.org/t/p/w500${poster_path}`}} />
    
                </View>
                <View style={styles.contentInfo}>
    
                    <View style={styles.content_title_and_vote}>

                    {this.iconShwoFavorie()}
    
                    <Text style={styles.title}>{title}</Text>
                    <Text style={styles.vote}>{vote_average}</Text>
    
                    </View>
                    
                    <Text>
                        {overview.substr(0,100)+'...'}
                    </Text>
    
                    <View style={styles.date}>
                    <Text>
                        {release_date}
                    </Text>
                    <FontAwesomeIcon style={styles.icon} icon={'arrow-right'} />
                    </View>
    
    
                </View>
                
            </TouchableOpacity>        
    
         );
    }
}

const mapStateToProps = (state) => {
    return {
        MovieFavories:state.MovieFavories 
    }
}

const styles = StyleSheet.create({

    block_movie:{
        backgroundColor:'#fff',
        flex:1,
        marginTop:10,
        padding:9,
        flexDirection:'row'
    },
    img:{
        flex:1,
        backgroundColor:'#ddd',
        marginRight:6,
        height:160
    },
    image:{
        flex:1,
    },
    contentInfo:{
        flex:2,
        display:'flex',
    },
    title:{
        fontSize:15,
        fontWeight:'bold',
        flexWrap:'wrap',
        width:180
    },

    date:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        marginTop:30,
    },
    vote:{
        fontSize:17,
        fontWeight:'bold',
        color:'#333',
        borderRadius:100,
        marginTop:4
    },
    content_title_and_vote:{
        marginBottom:5,
        flexDirection:'row',
        justifyContent:'space-between'
    },
    icon:{
        color:'#333',
        fontSize:24,
        alignSelf:'flex-end',
    }

})
 
export default connect(mapStateToProps)(MovieItem);