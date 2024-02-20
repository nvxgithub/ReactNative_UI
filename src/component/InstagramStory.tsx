import { FlatList, Image, StyleSheet, Text, View } from "react-native";

const stories = [
    { id: '1', title: 'Your Story', imageUrl: 'https://cdn.vox-cdn.com/thumbor/q00D9hDukaGhKXc9ZhSEqQ5upys=/0x126:563x443/1600x900/cdn.vox-cdn.com/uploads/chorus_image/image/44281920/Screen_Shot_2014-12-01_at_12.35.05_PM.0.0.png' },
    { id: '2', title: 'Hari Lee', imageUrl: 'https://png.pngtree.com/png-vector/20221103/ourlarge/pngtree-man-businessman-retro-style-profile-comic-book-white-vector-png-image_20386644.jpg' },
    { id: '3', title: 'Joey', imageUrl: 'https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/S/amzn-author-media-prod/t2d5l07m4io8oc22mfsm86bves._SY450_CR0%2C0%2C450%2C450_.jpg' },
    { id: '6', title: 'Changler Bing', imageUrl: 'https://cdn.vox-cdn.com/thumbor/q00D9hDukaGhKXc9ZhSEqQ5upys=/0x126:563x443/1600x900/cdn.vox-cdn.com/uploads/chorus_image/image/44281920/Screen_Shot_2014-12-01_at_12.35.05_PM.0.0.png' },
    { id: '4', title: 'Monica Geller', imageUrl: 'https://png.pngtree.com/png-vector/20221103/ourlarge/pngtree-man-businessman-retro-style-profile-comic-book-white-vector-png-image_20386644.jpg' },
    { id: '5', title: 'Ross', imageUrl: 'https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/S/amzn-author-media-prod/t2d5l07m4io8oc22mfsm86bves._SY450_CR0%2C0%2C450%2C450_.jpg' },
    { id: '7', title: 'Rach', imageUrl: 'https://png.pngtree.com/png-vector/20221103/ourlarge/pngtree-man-businessman-retro-style-profile-comic-book-white-vector-png-image_20386644.jpg' },

    // Add more stories here
  ];


  type ItemProps = {title: string,imageUrl:string};

  const StoryItem=({title,imageUrl}:ItemProps)=>{
    return( <View>
        <Image
        style={styles.storypic}
        source={{uri:imageUrl}}
      />
      <Text style={styles.text}>{title}</Text>

    </View>)
   
  }


  const InstagramStory=()=>{
    return( 
    <View style={styles.container}>
        <Text>Stories</Text>
        <FlatList
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        data={stories}
        renderItem={({item}) => <StoryItem title={item.title} imageUrl={item.imageUrl} />}
        keyExtractor={item => item.id}
      />
    </View>
    )
   
  }

  const styles = StyleSheet.create({
    storypic: {
        width: 60,
        height: 60,
        margin:10,
        borderRadius: 150 / 2,
        overflow: "hidden",
        borderWidth: 3,
        borderColor: "#ff0066"

      },
      text:{
        textAlign:'center',
      },
      container:{
        backgroundColor:'#e3e3e3',
        overflow: "hidden",
      }
    }
  )


  export default InstagramStory;
