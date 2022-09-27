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
      <View style={styles.View_31_569} />
      <View style={styles.View_31_570}>
        <View style={styles.View_31_571}>
          <Text style={styles.Text_31_571}>PottleLive Menu</Text>
        </View>
      </View>
      <View style={styles.View_31_572}>
        <View style={styles.View_31_573}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/8f18b0f6-f415-4ed3-b247-a128103f2819"
            }}
            style={styles.ImageBackground_31_574}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b443fd10-b9ab-43e7-9a1e-9a17e617a2fa"
            }}
            style={styles.ImageBackground_31_575}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a0357c72-8dbd-4ae8-b949-2d7e564cac57"
            }}
            style={styles.ImageBackground_31_576}
          />
          <View style={styles.View_31_577}>
            <Text style={styles.Text_31_577}>Menu</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_31_579}>
        <View style={styles.View_31_580}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/5f801ca3-ad2e-4934-bde4-e465f27a8329"
            }}
            style={styles.ImageBackground_31_581}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/7993a380-22f0-41bf-ac77-e64e60ffb78b"
            }}
            style={styles.ImageBackground_31_582}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/01358e40-43d2-4324-9e98-567302c2482b"
            }}
            style={styles.ImageBackground_31_583}
          />
          <View style={styles.View_31_584}>
            <Text style={styles.Text_31_584}>Base</Text>
          </View>
        </View>
      </View>
      <TouchableOpacity
        style={styles.TouchableOpacity_39_106}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("31_189"))
        }
      >
        <View style={styles.View_I39_106_31_595}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c1360a29-9826-4c47-b288-2cb4f26c5501"
            }}
            style={styles.ImageBackground_I39_106_31_596}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d71a4ed7-bf95-46a4-a590-b37d677be1e2"
            }}
            style={styles.ImageBackground_I39_106_31_597}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/4da0f8f8-620e-4378-8ca7-b646e689b449"
            }}
            style={styles.ImageBackground_I39_106_31_598}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c3c7eff0-b571-40d5-9cc7-8dae17dc44b8"
            }}
            style={styles.ImageBackground_I39_106_31_599}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/5a1bfddc-fdac-48e8-bde2-b09da61e3498"
            }}
            style={styles.ImageBackground_I39_106_31_604}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/fcb29adf-ae94-4516-b1f2-ddbfd143c0b0"
            }}
            style={styles.ImageBackground_I39_106_31_609}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/78fcbdaf-e1bb-4e78-ba09-6cb4bb106128"
            }}
            style={styles.ImageBackground_I39_106_31_614}
          />
        </View>
        <View style={styles.View_I39_106_31_619}>
          <View style={styles.View_I39_106_31_620}>
            <View style={styles.View_I39_106_31_621}>
              <Text style={styles.Text_I39_106_31_621}>Day Planning</Text>
            </View>
            <View style={styles.View_I39_106_31_622}>
              <Text style={styles.Text_I39_106_31_622}>Prep Time </Text>
            </View>
            <View style={styles.View_I39_106_31_623}>
              <Text style={styles.Text_I39_106_31_623}>Check in</Text>
            </View>
            <View style={styles.View_I39_106_31_624}>
              <Text style={styles.Text_I39_106_31_624}>Cooking</Text>
            </View>
            <View style={styles.View_I39_106_31_625}>
              <Text style={styles.Text_I39_106_31_625}>Self Dev</Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("197%") },
  View_31_569: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("197%"),
    minHeight: hp("197%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(48, 48, 48, 1)"
  },
  View_31_570: {
    width: wp("35%"),
    minWidth: wp("35%"),
    height: hp("27%"),
    minHeight: hp("27%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("-4%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_31_571: {
    width: wp("32%"),
    top: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    justifyContent: "flex-start"
  },
  Text_31_571: {
    color: "rgba(248, 242, 219, 1)",
    fontSize: 77,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_31_572: {
    width: wp("19%"),
    minWidth: wp("19%"),
    height: hp("12%"),
    minHeight: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("26%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_31_573: {
    width: wp("19%"),
    height: hp("12%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_31_574: {
    width: wp("19%"),
    height: hp("12%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_31_575: {
    width: wp("17%"),
    height: hp("8%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_31_576: {
    width: wp("17%"),
    height: hp("6%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  View_31_577: {
    width: wp("5%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    justifyContent: "flex-start"
  },
  Text_31_577: {
    color: "rgba(99, 76, 34, 1)",
    fontSize: 31.75,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_31_579: {
    width: wp("19%"),
    minWidth: wp("19%"),
    height: hp("12%"),
    minHeight: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("41%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_31_580: {
    width: wp("19%"),
    height: hp("12%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_31_581: {
    width: wp("19%"),
    height: hp("12%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_31_582: {
    width: wp("17%"),
    height: hp("8%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_31_583: {
    width: wp("17%"),
    height: hp("6%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  View_31_584: {
    width: wp("4%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    justifyContent: "flex-start"
  },
  Text_31_584: {
    color: "rgba(99, 76, 34, 1)",
    fontSize: 31.75,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_39_106: {
    width: wp("27%"),
    minWidth: wp("27%"),
    height: hp("184%"),
    minHeight: hp("184%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("71%"),
    top: hp("7%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I39_106_31_595: {
    flexGrow: 1,
    width: wp("27%"),
    height: hp("184%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I39_106_31_596: {
    width: wp("27%"),
    height: hp("184%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I39_106_31_597: {
    width: wp("25%"),
    height: hp("11%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_I39_106_31_598: {
    width: wp("25%"),
    height: hp("9%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_I39_106_31_599: {
    width: wp("25%"),
    height: hp("44%"),
    top: hp("138%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_I39_106_31_604: {
    width: wp("25%"),
    height: hp("40%"),
    top: hp("94%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_I39_106_31_609: {
    width: wp("25%"),
    height: hp("30%"),
    top: hp("61%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_I39_106_31_614: {
    width: wp("25%"),
    height: hp("40%"),
    top: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  View_I39_106_31_619: {
    flexGrow: 1,
    width: wp("16%"),
    height: hp("145%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("3%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I39_106_31_620: {
    width: wp("16%"),
    height: hp("145%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I39_106_31_621: {
    width: wp("16%"),
    top: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_I39_106_31_621: {
    color: "rgba(99, 76, 34, 1)",
    fontSize: 46.32635498046875,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I39_106_31_622: {
    width: wp("13%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    justifyContent: "flex-start"
  },
  Text_I39_106_31_622: {
    color: "rgba(99, 76, 34, 1)",
    fontSize: 46.32635498046875,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I39_106_31_623: {
    width: wp("9%"),
    top: hp("58%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    justifyContent: "flex-start"
  },
  Text_I39_106_31_623: {
    color: "rgba(99, 76, 34, 1)",
    fontSize: 46.32635498046875,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I39_106_31_624: {
    width: wp("9%"),
    top: hp("134%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    justifyContent: "flex-start"
  },
  Text_I39_106_31_624: {
    color: "rgba(99, 76, 34, 1)",
    fontSize: 46.32635498046875,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I39_106_31_625: {
    width: wp("9%"),
    top: hp("91%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    justifyContent: "flex-start"
  },
  Text_I39_106_31_625: {
    color: "rgba(99, 76, 34, 1)",
    fontSize: 46.32635498046875,
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
