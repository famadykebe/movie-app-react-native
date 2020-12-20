import React,{Component} from 'react';
import {StyleSheet} from 'react-native'
import {Provider} from 'react-redux';
import {createStore,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducer/movieReducer';
import {composeWithDevTools} from 'redux-devtools-extension';
import {createAppContainer,createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import Home from './pages/index';
import DetailMovie from './pages/DetailMovie';
import SearchPage from './pages/search'
const createStoreWitMiddleware = applyMiddleware(thunk)(createStore);

//import awesome react native 
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons';
import {faUser,faArrowRight} from '@fortawesome/free-solid-svg-icons';
import { Icon } from 'react-native-elements'
import favorieMovie from './pages/favorieMovie';
import Login from './pages/Login';


library.add(fab, faUser,faArrowRight)

const IndexFlow =  createStackNavigator({

    Home:{
        screen:Home,
        navigationOptions:{
            header:null 
        }
    },
    DetailMovie:{
        screen:DetailMovie,
        navigationOptions:{
            title:'Film detail',
        }
    }

});


IndexFlow.navigationOptions = {
    tabBarIcon: <Icon size={28}  name='home'
    type='Feather'
    color='#333'/>,
}

const SearchFlow = createStackNavigator({
    Search: {
        screen:SearchPage,
        navigationOptions:{
            title:'',
            header:null
        },
    },
    DetailMovie:{
        screen:DetailMovie,
        navigationOptions:{
            title:'Film detail',
        }
    }
})

SearchFlow.navigationOptions = {
    tabBarIcon:<Icon size={28}  name='search'
        type='MaterialIcons'
        color='#333'/>,
}

const FavorieStack = createStackNavigator({

    Favorie:{
        screen:favorieMovie,
        navigationOptions:{
            title:'',
            header:null,
        
        }
    },
    DetailMovie:{
        screen:DetailMovie,
        navigationOptions:{
            title:'Film detail',
        }
    }

})
        

FavorieStack.navigationOptions = {
    tabBarIcon:<Icon size={28}  name='favorite'
    type='MaterialIcons'
    color='#333'/>,
    
}

const LoginNavigate = createStackNavigator({
    screen:Login,
    
})

const createSwitchNavigatore = createSwitchNavigator({
    login:LoginNavigate,
    mainFlow:createBottomTabNavigator({

        Home:IndexFlow,
        Search:SearchFlow,
        Favorie:FavorieStack,
        
    },{
        tabBarOptions:{
            showLabel:true,
            showIcon:true,
            activeTintColor:'#29487d',
        }
    })

})



const CreateAppContainier = createAppContainer(createSwitchNavigatore)

class App extends Component{

   componentDidMount(){


   }
    render(){
        return(

            <Provider store={createStoreWitMiddleware(reducer,composeWithDevTools())}>
               
                    <CreateAppContainier />
               
            </Provider>

        )
    }

}

export default App; 

