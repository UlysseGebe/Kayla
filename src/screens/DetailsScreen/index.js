import React, { useState, useEffect } from "react";
import { Button, Text, View } from "react-native";
import Styles from "./style";
import axios from "axios";

export default function DetailsScreen({ route, navigation }) {
  const { itemId } = route.params;
  // AXIOS TUTO URL https://blog.logrocket.com/using-axios-react-native-manage-api-requests/
  // INIT VAR
  const [advice, setAdvice] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setErrorFlag] = useState(false);

  // START AXIOS GET
  useEffect(() => {
    const source = axios.CancelToken.source();
    const url = "http://api.adviceslip.com/advice/25";
    const fetchAdvice = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get(url);
        if (response.status === 200) {
          setAdvice(response.data.slip.advice);
          setIsLoading(false);
          return;
        } else {
          throw new Error("Failed to fetch advice");
        }
      } catch (error) {
        if (axios.isCancel(error)) {
          console.log("Data fetching cancelled");
        } else {
          setErrorFlag(true);
          setIsLoading(false);
        }
      }
    };
    fetchAdvice();
    return () => source.cancel("Data fetching cancelled");
  }, [advice]);
  // END AXIOS GET
  return (
    <View style={Styles.container}>
      <Text>Details Screen</Text>
      <Text>itemId: {JSON.stringify(itemId)}</Text>
      <Text>{advice}</Text>
      <Button
        title="Go to Details... again"
        onPress={() =>
          navigation.push("Details", {
            itemId: Math.floor(Math.random() * 100),
          })
        }
      />
      <Button title="Go back" onPress={() => navigation.goBack()} />
      <Button
        title="Go back to first screen in stack"
        onPress={() => navigation.popToTop()}
      />
    </View>
  );
}
