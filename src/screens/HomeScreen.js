import React from "react"
import gql from "graphql-tag"
import { useQuery } from "@apollo/react-hooks"
import { Text, View, ScrollView, TouchableHighlight } from "react-native"
import { Colors } from "../styles"
import { Card, CardItem } from "native-base"
import moment from "moment"

const ALL_FILMS_QUERY = gql`
  query {
    allFilms {
      id
      title
      director
      producers
      releaseDate
    }
  }
`

export default function HomeScreen(props) {
  const { loading, error, data } = useQuery(ALL_FILMS_QUERY)
  if (loading) return <Text>Loading...</Text>
  if (error) return <Text>Error!!</Text>
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: Colors.black
      }}>
      <ScrollView>
        {data.allFilms.map((film, key) => (
          <Card
            key={key}
            style={{
              backgroundColor: Colors.black,
              borderColor: Colors.yellow100,
              borderStyle: "solid",
              borderBottomColor: Colors.yellow100,
              minWidth: "95%"
            }}>
            <CardItem
              style={{
                flex: 1,
                backgroundColor: Colors.black,
                flexDirection: "row"
              }}>
              <Text
                style={{
                  flex: 1,
                  color: Colors.yellow100,
                  fontWeight: "bold",
                  fontSize: 25
                }}>
                {film.title}
              </Text>
              <Text
                style={{
                  color: Colors.yellow100,
                  textAlign: "right"
                }}>
                {moment(film.releaseDate).format("YYYY-MM-DD")}
              </Text>
            </CardItem>
            <CardItem style={{ backgroundColor: Colors.black }}>
              <Text style={{ color: Colors.yellow100, fontSize: 18 }}>
                {film.director}
              </Text>
            </CardItem>
            <CardItem
              style={{
                backgroundColor: Colors.black,
                justifyContent: "space-between",
                flex: 1,
                flexDirection: "row"
              }}>
              {film.producers.map((producer, prod_key) => (
                <Text
                  key={prod_key}
                  style={{ color: Colors.yellow100, fontSize: 15, flex: 1 }}>
                  {producer}
                </Text>
              ))}
              <TouchableHighlight
                onPress={() => {
                //  TODO: Go to Details screen
                }}>
                <Text style={{ color: Colors.yellow100, flex: 1 }}>
                  Ver mas
                </Text>
              </TouchableHighlight>
            </CardItem>
          </Card>
        ))}
      </ScrollView>
    </View>
  )
}
