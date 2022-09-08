import Greetings from "../Components/Greetings.jsx";
import {
  Wrap,
  Box,
  Divider,
  HStack,
  VStack,
  TextInput,
} from "@react-native-material/core";
import HomeBtn from "../Components/HomeBtn.jsx";
import { backColor } from "../Style/Colors.js";
// import { getSamplesFromDB } from "../Modules/GlobalModule.js";

export default function Home({ navigation }) {
  // getSamplesFromDB()
  return (
    <VStack fill center spacing={1} style={{ backgroundColor: backColor}}>
      <HStack fill center spacing={1}>
        <Greetings />
      </HStack>
      <HStack fill center spacing={1}>
        <Box>
          <HomeBtn
            title="Remote Activation"
            onPress={() => navigation.navigate("Remote Activation")}
          />
        </Box>
        {/*Light ICON AND SWITCH STACK */}
        <Box>
          <HomeBtn
            title="Analythics"
            onPress={() => navigation.navigate("Analythics")}
          />
        </Box>
      </HStack>
      <HStack fill center spacing={1}>
        <Box>
          <HomeBtn
            title="Schedule Activation"
            onPress={() => navigation.navigate("Schedule Activation")}
          />
        </Box>
        {/* Light ICON AND SWITCH STACK */}
        <Box>
          <HomeBtn
            title="Activation History"
            onPress={() => navigation.navigate("Activation History")}
          />
        </Box>
      </HStack>
      <HStack fill />
    </VStack>
  );
}

{
  /* <HStack fill center spacing={20}>
      <Button
        style={{
          justifyContent: "center",
          maxWidth: "40%",
          maxHeight: "100%",
          minWidth: "40%",
          minHeight: "80%",
        }}
        color="aquamarine"
        witch
        title="Schedule Activtion"
        leading={(props) => <Icon name="calendar-month" {...props} />}
      />
      <Button
        style={{
          justifyContent: "center",
          maxWidth: "40%",
          maxHeight: "100%",
          minWidth: "40%",
          minHeight: "80%",
        }}
        color="aquamarine"
        title="Activtion History"
        leading={(props) => <Icon name="history" {...props} />}
      />
    </HStack>
    <HStack fill center spacing={20}>
      <Button
        style={{
          justifyContent: "center",
          maxWidth: "40%",
          maxHeight: "100%",
          minWidth: "40%",
          minHeight: "80%",
        }}
        color="aquamarine"
        witch
        title="Analytics"
        leading={(props) => <Icon name="graph" {...props} />}
      />
      <Button
      titleStyle={{height:'100%'}}
        style={{
          justifyContent: "center",
          maxWidth: "40%",
          maxHeight: "100%",
          minWidth: "40%",
          minHeight: "80%"
        }}
        color="aquamarine"
        title="Remote Activtion"
        leading={(props) => <Icon name="remote-tv" {...props} />}
      />
    </HStack>

    <HStack fill spacing={20}></HStack>
    <HStack fill spacing={20}></HStack> */
}
