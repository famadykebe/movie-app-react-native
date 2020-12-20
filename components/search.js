import React,{Component} from 'react';
import {ActivityIndicator,Text,View,StyleSheet,TextInput,Button} from 'react-native';
import {recupeAllmovieData_search} from '../actions/index';
import {connect} from 'react-redux';


class Search extends React.Component {

       constructor(props){
        super(props);

        this.state = {
            isLoading:false
        }

        this.champ = '';
        this.page = 1;
       }

  
    recup_text_champ(string){
        this.champ = string;
    }

    hunDeleSearch(){

       
        if(this.champ.length > 0){

            this.props.recupeAllmovieData_search(this.champ,this.page);
            this.props.champTextSearch_clbk(this.champ);
        }
        
 
    }
    

   render(){ 
       

    return (  
        <View style={styles.cube}>

            <TextInput onSubmitEditing={() => {this.hunDeleSearch()}} onChangeText={text => this.recup_text_champ(text)} style={styles.searchBar} placeholder="recherche un film..."></TextInput>

            <Button onPress={() => {this.hunDeleSearch()}} title="Recherche"></Button>

        </View>
    );

   }
}

const styles = StyleSheet.create({
    cube:{
        marginTop:60,
        paddingLeft:10,
        paddingRight:10,
    }, 
    searchBar:{
        borderWidth:1,
        height:43,
        borderRadius:5,
        paddingLeft:15,
        marginBottom:10,
        borderColor:'#ddd'
  
    },
    isLoading:{
        position:'absolute',
        top:100,
        justifyContent:'center',
        alignItems:'center'
    }
 
})


const mapDispatchToProps = {

    recupeAllmovieData_search:recupeAllmovieData_search

}


 
export default connect(null,mapDispatchToProps)(Search);