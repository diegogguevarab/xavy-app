import React from "react"
import gql from "graphql-tag"
import {useQuery} from "@apollo/react-hooks"
import {Text, View, ScrollView, TouchableHighlight} from "react-native"
import {Colors} from "../styles"
import {Card, CardItem} from "native-base"
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
`;

export default function DetailsScreen(props) {
  const {loading, error, data} = useQuery(ALL_FILMS_QUERY);
  if (loading) return <Text>Loading...</Text>;
  if (error) return <Text>Error!!</Text>;
  return (
    <View style={{
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: Colors.yellow100
    }}>
      <Text>
        Bienvenidos a Xavy Wars
      </Text>
    </View>
  )
}