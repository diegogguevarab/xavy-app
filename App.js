import React from "react"
import { View, StyleSheet } from "react-native"
import AppNavigator from "./src/navigation/AppNavigator"
import { ApolloProvider } from "@apollo/react-hooks"
import { ApolloClient } from "apollo-client"
import { createHttpLink } from "apollo-link-http"
import { InMemoryCache } from "apollo-cache-inmemory"

export default function App(props) {
  return (
    <View style={styles.container}>
      <ApolloProvider client={client}>
        <AppNavigator />
      </ApolloProvider>
    </View>
  )
}

export const link = createHttpLink({
  uri: `https://swapi.graph.cool/`
})

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link
})



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  }
})
