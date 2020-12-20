import React, { Component } from 'react';
import { View,StyleSheet,Platform} from 'react-native';
import {Input,Icon,Button,Text} from 'react-native-elements'

class Login extends Component {

    static navigationOptions = {
        header:null,
        title:''
    }

  constructor(props) {
    super(props);
    this.state = {
        boleanShowPassword:false
    };

    
  }

  VerifLogin(){

        this.props.navigation.navigate('mainFlow')

  }

  showPassword(){
    this.setState({boleanShowPassword:!this.state.boleanShowPassword})
      console.log('show password')
  }

  render() {
    return (
        <View style={{flex:1}}>
            
        <Text h3 style={styles.titre}>Connecté vous pour continuer...</Text>

        <View style={{display:'flex',justifyContent:'center',alignItems:'center',flex:1,padding:20}}>

        <Input style={styles.champ}
            placeholder='Username'
            leftIcon={
            <Icon
            name='user'
            size={24}
            
            color='#ddd'
            type='font-awesome'
            />
            
                    }
        />
    <View style={styles.spacing}></View>
        <Input 
            type="password"
            placeholder='Password'
            leftIcon={
            <Icon 
            name='lock'
            size={24}
            color='#ddd'
            type='font-awesome'
            secureTextEntry={true} 
            />
            }

            rightIcon={
                <Icon onPress={() => {this.showPassword()}}
                name={this.state.boleanShowPassword ? 'eye-slash' : 'eye'}
                size={24}
                
                color='#ddd'
                type='font-awesome'
                />
            }
        />

                <Button style={{marginTop:Platform.OS == 'android' ? '15%' : '5%'}}title="Entrée >" type="outline" onPress={() => {this.VerifLogin()}}
                />
            </View>
        </View>
    );
  }
}

const styles = StyleSheet.create({

    champ:{
        marginBottom:20,
        flex:1
    },spacing:{
        marginBottom:10,
        marginTop:10
    },
    titre:{
        display:"flex",
        textAlign:'center',
        marginTop:120,
        ...Platform.select({
            ios:{
                backgroundColor:'red'
            },
            android:{
                backgroundColor:'yellow'
            }
        }),
    }
})

export default Login;
