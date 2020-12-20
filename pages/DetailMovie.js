import React,{Component} from 'react';
import {View,Text,ScrollView,ActivityIndicator,StyleSheet,Image,TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';
import { Icon } from 'react-native-elements';
import {actionMovieFavories} from '../actions/index';

 class DetailMovie extends React.Component{

    constructor(props){

        super(props);

        this.state = {
            detailMovie: [],
            isLoading:true
        }

    }

    componentWillMount(){

       this.setState({detailMovie:this.props.navigation.state.params},function(){

            this.setState({isLoading:false})

       });

    }

    componentDidMount(){
        
    }

    componentWillReceiveProps(nextProps){
        console.log('new filter',nextProps.MovieFavories);
    }

    showFavorie(){
       
        if(this.props.MovieFavories){
            let showFavorie = this.props.MovieFavories.findIndex(elm => elm.id === this.props.navigation.state.params.id);

        if(showFavorie !== -1){
            return(
            <>
                <Icon  size={19} name='md-heart' type='ionicon' color='#EC1561'/>
                <Text style={{paddingLeft:9}}>Rétirer des favorie</Text>
            </> 
            )
        }else{
            return(
            
                <>
                    <Icon  size={19} name='md-heart-empty' type='ionicon' color='#333'/>
                    <Text style={{paddingLeft:9}}>Ajouter aux favorie</Text>
                </>
            )

        }
        }

    }

    hundleMovie(){

        this.props.actionMovieFavories(this.state.detailMovie)

    }

    getShowDetailMovie(){

        const {title,poster_path,overview,release_date,vote_average,vote_count} = this.state.detailMovie;
        let dateFInale = release_date.split('-').reverse().join('/');

        return   <ScrollView stlye={styles.scrollView}>

        <View stlye={StyleSheet.containImg}>
            <Image style={styles.img} source={{url:`https://image.tmdb.org/t/p/w500${poster_path}`}}/>
        </View>

    
        <View style={styles.containTextView}>

            <Text style={styles.Text}>{title}</Text>    
            
        </View>

        <TouchableOpacity onPress={() => {this.hundleMovie()}} style={{marginBottom:10,marginTop:10,justifyContent:'center',display:'flex',flexDirection:'row'}}>
            {this.showFavorie()}
        </TouchableOpacity>

        <View style={styles.containDest}>

            <Text style={styles.Dest}>{overview}</Text>

        </View>

        <View>
            <Text style={styles.infoText}>Sortie Le: {dateFInale}</Text>
            <Text style={styles.infoText}>Note: {vote_average} / 10</Text>
            <Text style={styles.infoText}>Nombre de Vote: {vote_count}</Text>
            <Text style={styles.infoText}>Budge: 1221518 euro</Text>
            <Text style={styles.infoText}>Genre: ation / drama / comedie</Text>
            <Text style={styles.infoText}>Compagnie : Action,Activity</Text>
        </View>      

    </ScrollView>

    }

    render(){

      
        return(



           <View>

                {this.state.isLoading ?  <View style={styles.containtLoading}><ActivityIndicator style={styles.loading} size="large"/></View> : this.getShowDetailMovie()}

           </View>

          
        )

    }

}

const mapStateToProps  = (state) => {

   return {
    MovieFavories:state.MovieFavories
   }

    
}

const mapDispatchToProps = {
    actionMovieFavories:actionMovieFavories
}

export default connect(mapStateToProps,mapDispatchToProps)(DetailMovie)

const styles = StyleSheet.create({
    scrollView:{
        display:'flex',
        flexDirection:"column",
        paddingTop:20,
        paddingRight:5,
        paddingRight:5,
        marginTop:10
    },

    containImg:{
        flex:1,
       
    },
    img:{
        height:160
    },
    containTextView:{
        flex:1,
        justifyContent:'center',
       paddingTop:15,
       paddingBottom:15
    },
    Text:{
        fontSize:24,
        fontWeight:'bold',
        alignSelf:'center'
    },
    containDest:{
        flex:1,
        paddingBottom:10,
        paddingLeft:5,
        paddingRight:5,
    },
    Dest:{
        fontSize:13,
        fontStyle:'italic'
    },
    infoText:{
        fontWeight:'bold',
        paddingLeft:5,
        paddingBottom:5
    },
    containtLoading: {
        flex:1,
        display:'flex',
        marginTop:300
    },
    loading:{
     

    }

})