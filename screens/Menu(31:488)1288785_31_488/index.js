import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet,
  ScrollView
} from "react-native"
import Icon from "react-native-vector-icons/FontAwesome"
import { CheckBox } from "react-native-elements"
import { connect } from "react-redux"
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen"
import { getNavigationScreen } from "@screens"
export class Blank extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }
  render = () => (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      style={styles.ScrollView_1}
    >
      <View style={styles.View_2} />
      <View style={styles.View_31_489}>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/6c3f3346-5865-4449-822e-1dae2a541203"
          }}
          style={styles.ImageBackground_31_490}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b74c2d6d-d0aa-4a01-b273-b229b3c66372"
          }}
          style={styles.ImageBackground_31_491}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/7e0bbfb0-e244-494a-bf36-1d62c4776a06"
          }}
          style={styles.ImageBackground_31_492}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/dd6b2846-1599-4d14-a443-b0d9719bbd89"
          }}
          style={styles.ImageBackground_31_493}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/cb8df617-7289-4f9c-9ac6-02872a4e991b"
          }}
          style={styles.ImageBackground_31_498}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/5617ea48-09ef-496a-902f-a10c08424911"
          }}
          style={styles.ImageBackground_31_503}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/83f3aa0a-e3a2-4cb6-8ff5-7ba06372399c"
          }}
          style={styles.ImageBackground_31_508}
        />
      </View>
      <View style={styles.View_31_513}>
        <View style={styles.View_31_514}>
          <View style={styles.View_31_515}>
            <Text style={styles.Text_31_515}>Day Planning</Text>
          </View>
          <View style={styles.View_31_516}>
            <Text style={styles.Text_31_516}>Prep Time </Text>
          </View>
          <View style={styles.View_31_517}>
            <Text style={styles.Text_31_517}>Check in</Text>
          </View>
          <View style={styles.View_31_518}>
            <Text style={styles.Text_31_518}>Cooking</Text>
          </View>
          <View style={styles.View_31_519}>
            <Text style={styles.Text_31_519}>Self Dev</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(0, 0, 0, 0)" },
  View_2: { height: hp("128%") },
  View_31_489: {
    width: wp("100%"),
    height: hp("128%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_31_490: {
    width: wp("100%"),
    height: hp("128%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_31_491: {
    width: wp("93%"),
    height: hp("8%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  ImageBackground_31_492: {
    width: wp("92%"),
    height: hp("6%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  ImageBackground_31_493: {
    width: wp("93%"),
    height: hp("30%"),
    top: hp("95%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  ImageBackground_31_498: {
    width: wp("93%"),
    height: hp("28%"),
    top: hp("65%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  ImageBackground_31_503: {
    width: wp("93%"),
    height: hp("21%"),
    top: hp("42%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  ImageBackground_31_508: {
    width: wp("93%"),
    height: hp("28%"),
    top: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  View_31_513: {
    width: wp("59%"),
    minWidth: wp("59%"),
    height: hp("101%"),
    minHeight: hp("101%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_31_514: {
    width: wp("59%"),
    height: hp("101%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_31_515: {
    width: wp("59%"),
    top: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_31_515: {
    color: "rgba(99, 76, 34, 1)",
    fontSize: 31.75,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_31_516: {
    width: wp("47%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    justifyContent: "flex-start"
  },
  Text_31_516: {
    color: "rgba(99, 76, 34, 1)",
    fontSize: 31.75,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_31_517: {
    width: wp("34%"),
    top: hp("40%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    justifyContent: "flex-start"
  },
  Text_31_517: {
    color: "rgba(99, 76, 34, 1)",
    fontSize: 31.75,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_31_518: {
    width: wp("33%"),
    top: hp("93%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    justifyContent: "flex-start"
  },
  Text_31_518: {
    color: "rgba(99, 76, 34, 1)",
    fontSize: 31.75,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_31_519: {
    width: wp("34%"),
    top: hp("63%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    justifyContent: "flex-start"
  },
  Text_31_519: {
    color: "rgba(99, 76, 34, 1)",
    fontSize: 31.75,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
