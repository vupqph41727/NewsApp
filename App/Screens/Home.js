 import { ActivityIndicator, Dimensions, ScrollView, StyleSheet, Text, View } from 'react-native'
 import CategoryTextSlider from '../Components/Home/CategoryTextSlider'
 import { AntDesign } from '@expo/vector-icons';
 import Color from '../Shared/Color';
 import TopHeadlineSlider from '../Components/Home/TopHeadlineSlider';
 import HeadlineList from '../Components/Home/HeadlineList';
 import { useEffect, useState } from 'react';
 import GlobalApi from '../Services/GlobalApi';

 function Home() {
   const[newsList,setNewsList] = useState([]);
   const[loading,setLoading] = useState(true);
   useEffect(()=>{
       //getTopHeadline();
       getNewsByCategory('latest');
   },[])
   const getTopHeadline=async()=>{
       const result=(await GlobalApi.getByCategory(category)).data;
       setNewsList(result.articles)
   }
   const getNewsByCategory=async(category)=>{
    setLoading(true);
     const result=(await GlobalApi.getByCategory(category)).data;
     setNewsList(result.articles)
     setLoading(false);
 }
  
   return (
     <ScrollView style={{paddingHorizontal:15,backgroundColor:Color.white,}}>
    
         <View style={{display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
         <Text style={styles.appName}>QuangVu News</Text>
         <AntDesign name="bells" size={25} color="black" />
         </View>   

         <CategoryTextSlider selectCategory={(category)=>getNewsByCategory(category)}/>
         {loading?<ActivityIndicator style={{marginTop:Dimensions.get('screen').height*0.40}} size={'large'} color={Color.primary}/>:
      <View>
          <TopHeadlineSlider  newsList={newsList}/> 
         <HeadlineList newsList={newsList}/>
         </View>
       }
     </ScrollView>
   )
 }




const styles = StyleSheet.create({
    appName:{
        fontSize:25,
        fontWeight:'bold',
        color:Color.primary,
    }
});

export default Home