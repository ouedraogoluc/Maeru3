import 'react-native-gesture-handler';
import React, { Component } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ListReunions from './src/ListReunions'
import AddReunions from './src/AddReunions'
import EditReunion from './src/EditReunion'
import { Provider} from 'react-redux';
import { createStore, applyMiddleware } from 'redux'
import ReduxThunk from 'redux-thunk';
import reducers from './reducers'


const Stack = createStackNavigator();
export class App extends Component {
  render() {
    const state = createStore(reducers, {}, applyMiddleware(ReduxThunk))
    return (
      <Provider store={state}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="Home"
              component={ListReunions}
              options={{ title: 'Mareu' }}
            />
            <Stack.Screen name="Add" component={AddReunions} />
           {/*  <Stack.Screen name="Edit" component={EditReunion} /> */}
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    )
  }
}
export default App
