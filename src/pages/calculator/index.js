import { Text, View, TouchableOpacity } from "react-native";
import { styles } from "./styles.jsx";

export default function Calculator() {
  return (
    <View style={styles.outerDiv}>
      <View style={styles.display}></View>

      <View style={styles.keyboard}>
        <View style={styles.linha}>
          <TouchableOpacity style={styles.key}>
            <Text>a</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.key}>
            <Text>b</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.key}>
            <Text>c</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.key}>
            <Text>d</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.linha}>
          <TouchableOpacity style={styles.key}>
            <Text>e</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.key}>
            <Text>f</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.key}>
            <Text>g</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.key}>
            <Text>h</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.linha}>
          <TouchableOpacity style={styles.key}>
            <Text>i</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.key}>
            <Text>j</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.key}>
            <Text>k</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.key}>
            <Text>l</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.linha}>
          <TouchableOpacity style={styles.key}>
            <Text>m</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.key}>
            <Text>n</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.key}>
            <Text>o</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.key}>
            <Text>p</Text>
          </TouchableOpacity>
        </View>

         <View style={styles.linha}>
          <TouchableOpacity style={styles.key}>
            <Text>q</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.key}>
            <Text>r</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.key}>
            <Text>s</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.key}>
            <Text>t</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
