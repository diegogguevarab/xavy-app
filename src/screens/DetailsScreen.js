import React from "react"
import gql from "graphql-tag"
import {useQuery} from "@apollo/react-hooks"
import {Text, View, ScrollView} from "react-native"
import {Colors} from "../styles"
import moment from "moment"

const ALL_FILMS_QUERY = gql`
  query {
    allFilms(orderBy: releaseDate_ASC) {
    id
    title
    director
    producers
    releaseDate
    species(orderBy: name_ASC){
      name
      language
      classification
      }
    }
  }
`;

export default function DetailsScreen(props) {
  const {params} = props.navigation.state;
  const {loading, error, data} = useQuery(ALL_FILMS_QUERY);
  if (loading) return <Text>Loading...</Text>;
  if (error) return <Text>Error!!</Text>;
  return (
    <View style={{flex: 1, alignItems: "center", alignContent: "center", justifyContent: "center", backgroundColor: Colors.black}}>
      <ScrollView>
        <Text style={{color: Colors.yellow100, fontWeight: "bold", fontSize: 30, flexWrap: "wrap", textAlign: "center"}}>
          {data.allFilms[params.id].title}
        </Text>
        <Text style={{color: Colors.yellow100, fontSize: 22, flexWrap: "wrap", textAlign: "center"}}>
          Fecha de lanzamiento: {moment(data.allFilms[params.id].releaseDate).format("YYYY-MM-DD")}
        </Text>
        <Text style={{color: Colors.yellow100, fontSize: 22, textAlign: "center"}}>
          Director: {data.allFilms[params.id].director}
        </Text>
        <Text style={{color: Colors.yellow100, fontSize: 22, fontWeight: "bold", textAlign: "center"}}>
          Producción
        </Text>
        {data.allFilms[params.id].producers.map((producer, prod_key) => (
          <Text key={prod_key} style={{color: Colors.yellow100, fontSize: 20, textAlign: "center"}}>
            {producer}
          </Text>
        ))}
        <Text style={{color: Colors.yellow100, fontSize: 25, fontWeight: "bold", textAlign: "center"}}>
          Especies
        </Text>
        <Text style={{color: Colors.yellow100, fontSize: 25, fontStyle: "italic", textAlign: "center"}}>
          Nombre, lenguaje y clasificación
        </Text>
        <View style={{alignContent: "center"}}>
          {data.allFilms[params.id].species.map((specie, spec_key) => (
            <Text
              key={spec_key}
              style={{
                color: Colors.yellow100,
                fontSize: 20,
                flexWrap: "wrap",
                textTransform: "capitalize",
                textAlign: "center"
              }}>
              {specie.name} - {specie.language === "n/a" || specie.language == null ? "Unknown" : specie.language} - {specie.classification == null ? "Unknown" : specie.classification}
            </Text>
          ))}
        </View>
      </ScrollView>
    </View>
  )
}