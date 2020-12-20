import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Index from '../pages/index';
import DetailMovie from '../pages/DetailMovie'

const Navigator = createStackNavigator({

    IndexPage:{
        screen:Index,
        navigationOptions:{
            title:'Recherche'
        }
    },
    DetailMovie:{
        screen:DetailMovie,
        title:'Filmm Detail'
    }

},
{
    initialRouteName : 'IndexPage'
})

export default Navigator