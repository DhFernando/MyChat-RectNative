import React  from 'react'
import { Tab, Tabs, Container} from 'native-base';
 
import ChatList from '../../Components/Home/ChatList';
import FriendList from '../../Components/Home//FriendList';
import Requests from '../../Components/Home//Requests';

export default function Home( {navigation} ) {


    return (
            <Container>
                
                <Tabs  tabBarPosition="top"  onChangeTab={()=>{}} >
                    <Tab activeTabStyle={{ backgroundColor:"white" }} 
                        textStyle={{color:"white", fontFamily:"nunito-bold"}} 
                        activeTextStyle={{color:"green"}} heading="Chat List">
                            <ChatList navigation={navigation} />
                    </Tab>
                    <Tab activeTabStyle={{ backgroundColor:"white" }} 
                        textStyle={{color:"white", fontFamily:"nunito-bold"}}  
                        activeTextStyle={{color:"green"}} heading="Friend List">
                        <FriendList />
                    </Tab>
                    <Tab activeTabStyle={{ backgroundColor:"white" }} 
                        textStyle={{color:"white", fontFamily:"nunito-bold"}} 
                        activeTextStyle={{color:"green"}} heading="Requests">
                        <Requests />
                    </Tab>
                </Tabs>
            </Container>
    )
}

