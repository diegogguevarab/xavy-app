import React from "react"
import gql from "graphql-tag"
import { useQuery } from "@apollo/react-hooks"
import { Text, View, ScrollView } from "react-native"

const ALL_FILMS_QUERY = gql`
query{
  allFilms{
    id
    title
    director
    producers
  }
}
`

export default function HomeScreen(props) {
  const { loading, error, data } = useQuery(ALL_FILMS_QUERY)
  if (loading) return <Text>Loading...</Text>
  if (error) return <Text>Error!!</Text>
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <ScrollView>
        {data.allFilms.map((film, key) => (
          <Text key={key}>{film.title} - {film.director}</Text>
        ))}
      </ScrollView>
    </View>
  )
}
