import React from "react"
import gql from "graphql-tag"
import {useQuery} from "@apollo/react-hooks"
import {Text, View, ScrollView, TouchableHighlight} from "react-native"
import {Colors} from "../styles"
import {Card, CardItem} from "native-base"
import moment from "moment"

const ALL_FILMS_QUERY = gql`
  query {
  allFilms(orderBy: releaseDate_ASC) {
    id
    title
    director
    producers
    releaseDate
  }
}
`;

export default function HomeScreen(props) {
  const {loading, error, data} = useQuery(ALL_FILMS_QUERY);
  if (loading) return <Text>Loading...</Text>;
  if (error) return <Text>Error!!</Text>;
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: Colors.black
      }}>
      <ScrollView>
        <Text style={{fontWeight: "bold", color: Colors.yellow100, fontSize: 36, textAlign: "left"}}>
          Bienvenidos a Xavy Wars!
        </Text>
        {data.allFilms.map((film, key) => (
          <Card
            key={key}
            style={{
              backgroundColor: Colors.black,
              borderColor: Colors.yellow100,
              borderStyle: "solid",
              borderBottomColor: Colors.yellow100,
              borderEndColor: Colors.yellow100,
              borderLeftColor: Colors.yellow100,
              borderRightColor: Colors.yellow100,
              minWidth: "95%",
              borderTopWidth: 2.5,
              borderBottomWidth: 2.5,
              borderRightWidth: 2.5,
              borderLeftWidth: 2.5
            }}>
            <CardItem style={{flex: 1, backgroundColor: Colors.black, flexDirection: "row"}}>
              <Text
                style={{
                  flex: 1,
                  color: Colors.yellow100,
                  fontWeight: "bold",
                  fontSize: 25,
                  flexWrap: "wrap"
                }}>
                {film.title}
              </Text>
              <Text style={{color: Colors.yellow100, textAlign: "right", fontSize: 15, flex: 1}}>
                {moment(film.releaseDate).format("YYYY-MM-DD")}
              </Text>
            </CardItem>
            <CardItem style={{backgroundColor: Colors.black}}>
              <Text style={{color: Colors.yellow100, fontSize: 20}}>
                {film.director}
              </Text>
            </CardItem>
            <CardItem
              style={{
                backgroundColor: Colors.black,
                flex: 1,
                justifyContent: "space-between"
              }}>
              <View sytle={{justifyContent: "space-between", flexDirection: "row"}}>
                {film.producers.map((producer, prod_key) => (
                  <Text
                    key={prod_key}
                    style={{color: Colors.yellow100, fontSize: 17}}>
                    {producer}
                  </Text>
                ))}
              </View>
              <View sytle={{backgroundColor: Colors.black, alignContent: "right"}}>
                <TouchableHighlight key={'det_key'}
                                    onPress={() => {
                                      props.navigation.navigate('Details', {id: key})
                                    }}>
                  <Text key={'det_key'}
                        style={{
                          color: Colors.yellow100,
                          fontSize: 20,
                          textShadowColor: Colors.red600,
                          textShadowOffset: {height: 3},
                          textShadowRadius: 5,
                          flex: 1
                        }}>
                    Ver más
                  </Text>
                </TouchableHighlight>
              </View>
            </CardItem>
          </Card>
        ))}
      </ScrollView>
    </View>
  )
}
